export const dynamic = 'force-dynamic';
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request: Request) {
  const res = await request.json();
  const { pitch, minutes, instructions } = res;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: 'system',
        content: `
          Create a pitch script for the following prompt:

          "${pitch}"

          ${minutes}

          Make sure the total time of the pitch is close to the requested number of minutes.
          
          Additional instructions: ${instructions}
          
          Organise it into the following sections: Introduction, Hook, Problem Statement, Solution, Market Opportunity, Business Model, Traction, Go-to-Market Strategy, Team, Financials and Projects, and Closing.
          
          Include estimated time for each section. Format the time as "<seconds> seconds"

          Return this in a json object where the root object's keys are the individual sections. Each key should correspond to an object with the attributes "content" and "time"
        `
      }
    ],
    response_format: { type: "json_object" },
  });
  return Response.json(JSON.parse(response.choices[0].message.content ?? ''));
}