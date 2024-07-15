'use client';

import Image from "next/image";
import Nav from "./ui/nav";
import Pitch from "./ui/pitch/pitch";
import Prompt from "./ui/prompt/prompt";
import PromptMobile from "./ui/promptMobile/promptMobile";
import { useState } from "react";
import Toast from "./ui/toast";

export default function Home() {
  const [generatedPitch, setGeneratedPitch] = useState({});
  const [generating, setGenerating] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const prompt = async (pitch: { pitch: string; minutes: string; instructions: string; }) => {
    setGenerating(true);
    const response = await fetch('/api/prompt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pitch)
    });

    const data = await response.json();
    setGeneratedPitch(data);
    setGenerating(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <main>
      <Nav />
      <div className="md:grid grid-cols-2 flex-grow w-full">
        <Pitch pitch={generatedPitch} generating={generating} />
        <Prompt onSubmit={prompt} />
        {!Object.keys(generatedPitch).length && !generating &&
          <PromptMobile onSubmit={prompt} />
        }
      </div>
      <Toast message="Pitch script updated" visible={showToast} onDismiss={() => setShowToast(false)} />
    </main>
  );
}
