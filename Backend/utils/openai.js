import "dotenv/config";

const getOpenAIAPIResponse = async (message) => {
  const response = await fetch(
    "https://api.openai.com/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
      }),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    console.error("OpenAI API error:", data);
    throw new Error(data?.error?.message || `OpenAI request failed (${response.status})`);
  }

  const content = data?.choices?.[0]?.message?.content;

  if (!content) {
    console.error("Unexpected OpenAI response:", data);
    throw new Error("OpenAI returned no message content.");
  }

  return content;
};

export default getOpenAIAPIResponse;