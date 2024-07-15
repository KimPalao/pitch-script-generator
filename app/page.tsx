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
  const [pitchId, setPitchId] = useState('');

  const prompt = async (pitch: { pitch: string; minutes: string; instructions: string; file: File; }) => {
    setGenerating(true);
    const formData = new FormData();
    formData.append('pitch', pitch.pitch);
    formData.append('minutes', pitch.minutes);
    formData.append('instructions', pitch.instructions);
    formData.append('file', pitch.file);

    const response = await fetch('/api/prompt', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    setGeneratedPitch(data.response);
    setPitchId(data.id);
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
