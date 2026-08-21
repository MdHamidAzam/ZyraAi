import express from "express";
import Thread from "../models/Thread.js";
import getOpenAIAPIResponse from "../utils/openai.js";

const router = express.Router();

// Test database connection
router.post("/test", async (req, res) => {
  try {
    const thread = new Thread({
      threadId: "abc",
      title: "Testing New Thread2",
    });

    const response = await thread.save();
    return res.json(response);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to save in DB" });
  }
});

// Get all threads
router.get("/thread", async (req, res) => {
  try {
    const threads = await Thread.find({}).sort({ updatedAt: -1 });
    return res.json(threads);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to fetch threads" });
  }
});

// Get messages of one thread
router.get("/thread/:threadId", async (req, res) => {
  const { threadId } = req.params;

  try {
    const thread = await Thread.findOne({ threadId });

    if (!thread) {
      return res.status(404).json({ error: "Thread not found" });
    }

    return res.json(thread.messages);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to fetch chat" });
  }
});

// Delete a thread
router.delete("/thread/:threadId", async (req, res) => {
  const { threadId } = req.params;

  try {
    const deletedThread = await Thread.findOneAndDelete({ threadId });

    if (!deletedThread) {
      return res.status(404).json({ error: "Thread not found" });
    }

    return res.json({ message: "Thread deleted successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to delete thread" });
  }
});

// Send a message / create or continue a chat
router.post("/chat", async (req, res) => {
  const { threadId, message } = req.body;

  if (!threadId || !message?.trim()) {
    return res.status(400).json({
      error: "threadId and message are required",
    });
  }

  try {
    let thread = await Thread.findOne({ threadId });

    // Create a new thread if it does not exist
    if (!thread) {
      thread = new Thread({
        threadId,
        title: message.trim().slice(0, 30),
        messages: [],
      });
    }

    // Save the user's message first
    thread.messages.push({
      role: "user",
      content: message.trim(),
    });

    // If your OpenAI call fails, this throws and nothing is saved as assistant content.
    const reply = await getOpenAIAPIResponse(message.trim());

    thread.messages.push({
      role: "assistant",
      content: reply,
    });

    await thread.save();

    return res.status(200).json({
      reply,
      thread,
    });
  } catch (err) {
    console.error("Chat error:", err);

    return res.status(502).json({
      error: err.message || "Failed to get AI response",
    });
  }
});

export default router;