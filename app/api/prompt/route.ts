export const dynamic = 'force-dynamic';
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request: Request) {
  const res = await request.json();
  const { prompt, minutes, instructions } = res;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: 'user',
        content: `
          Create a pitch script for the following prompt:

          "${prompt}"

          ${minutes}

          Additional instructions: ${instructions}

          Organise it into the following sections: Introduction, Hook, Problem Statement, Solution, Market Opportunity, Business Model, Traction, Go-to-Market Strategy, Team, Financials and Projects, and Closing.

          Include estimated time for each section.

          Return this in json.
        `
      }
    ],
    response_format: { type: "json_object" },
  });
  return Response.json(JSON.parse(response.choices[0].message.content));
}