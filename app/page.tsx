'use client';

import Image from "next/image";
import Nav from "./ui/nav";
import Pitch from "./ui/pitch/pitch";
import Prompt from "./ui/prompt/prompt";
import PromptMobile from "./ui/promptMobile/promptMobile";
import { useState } from "react";

export default function Home() {
  const [generatedPitch, setGeneratedPitch] = useState({});
  const [generating, setGenerating] = useState(false);

  const prompt = async (pitch) => {
    console.log(pitch);
    setGenerating(true);
    const response = await fetch('/api/prompt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pitch)
    });

    const data = await response.json();
    setGeneratedPitch(data.pitch_script);
    setGenerating(false);
  };

  return (
    <main>
      <Nav />
      <div className="md:grid grid-cols-2 flex-grow w-full">
        <Pitch pitch={generatedPitch} generating={generating} />
        <Prompt />
        {!Object.keys(generatedPitch).length && !generating &&
          <PromptMobile onSubmit={prompt} />
        }
      </div>
    </main>
  );
}
