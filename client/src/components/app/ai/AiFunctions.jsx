import Groq from "groq-sdk";

const groq = new Groq({apiKey: import.meta.env.VITE_AI_KEY, dangerouslyAllowBrowser: true});

export const sendAiRequest = (itemsArr) => {
  const systemMessage = `You will be given movies and tv shows by user. 
  You have to recommend total 10 movies and tv shows that user can like.
  If user has provided only movies, respond with only movies.
  If user has provided only tv shows, respond with only tv shows.
  I want your response to be like this:
  ["recommendation1name", "recommendation2name", "recommendation3name"]
  Please do not do any comments. Return just an array and nothing else.`

  return new Promise( async (resolve, reject) => {

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

    if(chat_completion.choices){
      resolve(JSON.parse(chat_completion.choices[0].message.content))
    }else{
      reject('error occured')
    }

  })
    
}
