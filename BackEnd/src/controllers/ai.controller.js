const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
  const code = req.body.code;

  if (!code) {
    return res.status(400).json({ message: "Code is required" });
  }

  try {
    const response = await aiService(code);
    res.status(200).json({ review: response });  // ✅ Send as JSON object
  } catch (err) {
    console.error("AI error:", err.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};
