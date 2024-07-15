export const dynamic = 'force-dynamic';
import { put } from "@vercel/blob";
import OpenAI from "openai";
import { sql } from "@vercel/postgres";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request: Request) {
  const formData = await request.formData();

  const pitch = formData.get('pitch');
  const minutes = formData.get('minutes');
  const instructions = formData.get('instructions');
  const file = formData.get('file');
  const filename = `${Date.now()}.pdf`;

  if (file) {
    const blob = await put(filename, file, {
      access: 'public'
    });
  }

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

  try {
    if (file) {
      const res = await sql`
        INSERT INTO pitches (pitch, minutes, instructions, file, response) 
        VALUES (${pitch}, ${minutes}, ${instructions}, ${blob.url}, ${response.choices[0].message.content ?? ''})
        RETURNING id
      `;
    } else {
      const res = await sql`
        INSERT INTO pitches (pitch, minutes, instructions, response) 
        VALUES (${pitch}, ${minutes}, ${instructions}, ${response.choices[0].message.content ?? ''})
        RETURNING id
      `;
    }
    return Response.json({ response: JSON.parse(response.choices[0].message.content ?? ''), id: res.rows[0].id });
  } catch (error) {
    console.error(error);
    return Response.json({
      message: "Database Error: Failed to save pitch."
    });

  }

}