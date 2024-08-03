// src/app/blogs/[id]/page.js
"use client";
import { useState } from "react";
import { auth, db } from "@/../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [user] = useAuthState(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      try {
        await addDoc(collection(db, "posts"), {
          title,
          content,
          createdAt: new Date(),
          author: user.uid,
        });
        alert("Post added successfully!");
      } catch (error) {
        console.error("Error adding post:", error);
        alert(error.message);
      }
    } else {
      alert("You must be logged in to add a post.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">Add Post</button>
    </form>
  );
}
