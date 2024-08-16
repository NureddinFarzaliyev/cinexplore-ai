import Groq from "groq-sdk";

const groq = new Groq({apiKey: import.meta.env.VITE_AI_KEY, dangerouslyAllowBrowser: true});
console.log(import.meta.env.VITE_AI_API_KEY)

const systemMessage = `You will be given movies by user. You have to recommend 10 movies that user can like.
I want your response to be like this:
  ["recommendation1name", "recommendation2name", "recommendation3name", "recommendation4name", "recommendation5name"]
Please do not do any comments. Return just an array and nothing else.`


export const sendAiRequest = async (systemMessage, itemsArr) => {
  const chat_completion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: systemMessage,
      },
      {
        role: "user",
        content: String(itemsArr),
      },
    ],
    model: "llama-3.1-70b-versatile",
    temperature: 0,
    stream: false,
  });

  console.log(JSON.parse(chat_completion.choices[0].message.content))

  // console.log(systemMesage, String(itemsArr))
    
}


export const getRecommendation = (type, itemsArr) => {
    const systemMessage = `You will be given ${type}s by user. You have to recommend 10 ${type}s user can like.
  I want your response to be like this:
    ["recommendation1name", "recommendation2name", "recommendation3name", "recommendation4name", "recommendation5name"]
  Please do not do any comments. Return just an array and nothing else.`

  sendAiRequest(systemMessage, itemsArr)
} 