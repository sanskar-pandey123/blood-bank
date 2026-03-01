const express = require("express");
const router = express.Router();
const BloodRequest = require("../models/BloodRequest");

/* CREATE REQUEST */
router.post("/", async (req, res) => {
  try {
    const request = new BloodRequest(req.body);
    await request.save();
    res.status(201).json({ message: "Blood request created" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

/* GET REQUESTS */
router.get("/", async (req, res) => {
  try {
    const requests = await BloodRequest.find()
      .sort({ createdAt: -1 })
      .limit(6);

    res.json(requests);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

/* 🔴 MUST */
module.exports = router;
