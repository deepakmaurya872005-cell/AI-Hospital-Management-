const express = require("express");
const axios = require("axios");

const router = express.Router();

router.post("/check-symptoms", async (req, res) => {
  try {
    const { symptoms } = req.body;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are an experienced AI Doctor. Give only medical suggestions, not a confirmed diagnosis."
          },
          {
            role: "user",
            content: `
Patient Symptoms:
${symptoms}

Reply ONLY in this format:

Possible Disease:
Recommended Doctor:
Advice:
`
          }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    res.json({
      result: response.data.choices[0].message.content,
    });

  } catch (error) {
  console.error("Status:", error.response?.status);
  console.error("Data:", error.response?.data);
  console.error("Message:", error.message);

  res.status(500).json({
    message: "AI Server Error",
  });

}
});

module.exports = router;



