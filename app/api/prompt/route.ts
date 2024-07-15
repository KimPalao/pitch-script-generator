export const dynamic = 'force-dynamic';
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request: Request) {
  const res = await request.json();
  const { prompt, minutes, instructions } = res;
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return Response.json({
    "pitch_script": {
      "Introduction": {
        "time": "10 seconds",
        "content": "Hello and welcome! Are you tired of feeling lost and confused?"
      },
      "Hook": {
        "time": "15 seconds",
        "content": "Imagine having clarity and direction in your life. That's where we come in."
      },
      "Problem Statement": {
        "time": "20 seconds",
        "content": "The problem many people face is feeling undefined or uncertain about their future goals and aspirations."
      },
      "Solution": {
        "time": "20 seconds",
        "content": "Our solution is to provide personalized guidance and support to help individuals define and achieve their goals."
      },
      "Market Opportunity": {
        "time": "15 seconds",
        "content": "The market opportunity is huge, with millions of individuals looking for clarity and purpose in their lives."
      },
      "Business Model": {
        "time": "15 seconds",
        "content": "Our business model is based on offering coaching services, workshops, and online courses to cater to a wide range of clients."
      },
      "Traction": {
        "time": "10 seconds",
        "content": "We have already helped numerous clients define their goals and take actionable steps towards achieving them."
      },
      "Go-to-Market Strategy": {
        "time": "15 seconds",
        "content": "Our go-to-market strategy involves partnering with schools, universities, and corporate organizations to reach a larger audience."
      },
      "Team": {
        "time": "10 seconds",
        "content": "Our team consists of experienced coaches and mentors who are dedicated to helping individuals unlock their full potential."
      },
      "Financials and Projections": {
        "time": "20 seconds",
        "content": "With a steady growth in clients and revenue, we aim to expand our services and reach new markets in the coming years."
      },
      "Closing": {
        "time": "10 seconds",
        "content": "Thank you for considering our solution to help you define your goals and live a more fulfilling life. Let's start this journey together!"
      }
    }
  });

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