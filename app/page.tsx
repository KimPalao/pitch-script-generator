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

  const prompt = async (pitch: { pitch: string; minutes: string; instructions: string; file?: File | null; }) => {
    setGenerating(true);
    const formData = new FormData();
    formData.append('pitch', pitch.pitch);
    formData.append('minutes', pitch.minutes);
    formData.append('instructions', pitch.instructions);
    if (pitch.file) {
      formData.append('file', pitch.file);
    }

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


  const [shared, setShared] = useState(false);

  const shareLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/${pitchId}`);
    setShared(true);
  };

  const headers = ['Introduction', 'Hook', 'Problem Statement', 'Solution', 'Market Opportunity', 'Business Model', 'Traction', 'Go-to-Market Strategy', 'Team', 'Financials and Projections', 'Closing'];

  const [copied, setCopied] = useState(false);
  const copyPitch = () => {
    let text = ``;
    for (const header of headers) {
      text += `# ${header}\n\n`;
      text += `**${generatedPitch[header]?.time}**\n\n`;
      text += `${generatedPitch[header]?.content}\n\n`;
    }
    navigator.clipboard.writeText(text);
    setCopied(true);
  };


  return (
    <main>
      <Nav onShare={shareLink} onCopy={copyPitch} shared={shared} copied={copied} enabled={pitchId.length > 0} />
      <div className="md:grid grid-cols-2 flex-grow w-full">
        <Pitch pitch={generatedPitch} generating={generating} pitchId={pitchId} cards={headers} isSection />
        <Prompt onSubmit={prompt} />
        {!Object.keys(generatedPitch).length && !generating &&
          <PromptMobile onSubmit={prompt} />
        }
      </div>
      <Toast message="Pitch script updated" visible={showToast} onDismiss={() => setShowToast(false)} />
    </main>
  );
}
