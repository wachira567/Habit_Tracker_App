// Component for viewing shared habit progress from users, with chat and upvoting features
import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useParams } from "react-router-dom";
import {
  fetchShares,
  addUpvote,
  getUpvotesForShare,
  deleteShare,
} from "../api";
import Chat from "./Chat"; // We'll create this next

const SharedProgress = () => {
  // Get current user from Clerk
  const { user } = useUser();
  // Get the habit ID from URL params
  const { id } = useParams();
  // State for storing shared progress items
  const [shares, setShares] = useState([]);
  // State for storing upvote counts per share
  const [upvotes, setUpvotes] = useState({});
  // State for the habit name being displayed
  const [habitName, setHabitName] = useState("");

  // Fetch shares based on the ID (specific habit or all)
  useEffect(() => {
    fetchShares().then((response) => {
      if (id === "all") {
        setShares(response.data);
        setHabitName("All Habits");
      } else {
        // Filter shares for the specific habit
        const filteredShares = response.data.filter(
          (share) => share.habitId === id
        );
        setShares(filteredShares);
        if (filteredShares.length > 0) {
          setHabitName(filteredShares[0].habitName);
        }
      }
    });
  }, [id]);

  // Fetch upvote counts for each share
  useEffect(() => {
    shares.forEach((share) => {
      getUpvotesForShare(share.id).then((response) => {
        setUpvotes((prev) => ({ ...prev, [share.id]: response.data.length }));
      });
    });
  }, [shares]);

  // Initialize upvotes state to avoid showing 3
  useEffect(() => {
    const initialUpvotes = {};
    shares.forEach((share) => {
      initialUpvotes[share.id] = 0;
    });
    setUpvotes(initialUpvotes);
  }, []);

  const handleUpvote = (shareId) => {
    if (!user) return;
    const upvoteData = { id: Date.now().toString(), shareId, userId: user.id };
    addUpvote(upvoteData).then(() => {
      // Refresh upvotes for this share
      getUpvotesForShare(shareId).then((response) => {
        setUpvotes((prev) => ({ ...prev, [shareId]: response.data.length }));
      });
    });
  };

  const handleDeleteShare = (shareId) => {
    if (window.confirm("Are you sure you want to delete this share?")) {
      deleteShare(shareId).then(() => {
        setShares(shares.filter((share) => share.id !== shareId));
      });
    }
  };

  return (
    <div className="sharedProgressContainer">
      <h2>Shared Progress for {habitName}</h2>
      {shares.map((share) => (
        <div key={share.id} className="shareItem">
          <h5>
            {share.userName}'s Progress on {share.habitName}
          </h5>
          <p>Completion: {share.completion}%</p>
          <p>Comment: {share.comment}</p>
          <p>
            Upvotes: {upvotes[share.id] || 0}{" "}
            <button
              className="upvoteBtn"
              onClick={() => handleUpvote(share.id)}
            >
              👍
            </button>
            {share.userId === user?.id && (
              <button
                className="deleteShareBtn"
                onClick={() => handleDeleteShare(share.id)}
              >
                Delete Share
              </button>
            )}
          </p>
          <Chat shareId={share.id} />
        </div>
      ))}
    </div>
  );
};

export default SharedProgress;
