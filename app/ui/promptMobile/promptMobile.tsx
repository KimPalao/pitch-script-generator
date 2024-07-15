'use client';

import FornaxLogo from "../fornax-logo";
import { geologica } from "@/app/fonts";
import styles from '@/app/ui/promptMobile/promptMobile.module.css';
import { FormEvent, useState } from "react";

export default function PromptMobile({ onSubmit }: { onSubmit: (pitch: { pitch: string; minutes: string; instructions: string; }) => void; }) {

  const [pitch, setPitch] = useState({
    pitch: '',
    minutes: 3,
    instructions: '',
    file: null,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ ...pitch, minutes: `Make it ${pitch.minutes} minutes long` });
  };

  const [filename, setFilename] = useState('');

  const chooseFile = (e: any) => {
    setFilename(e.target.files[0].name);
    setPitch(currentPitch => ({ ...currentPitch, file: e.target.files[0] }));
  };

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col items-center md:hidden ${styles.promptMobileContainer} pt-16 px-8`}>
      <FornaxLogo />
      <h2 className={`ms-4 inline-block text-xl ${geologica.className} mb-16`}>Pitch Script Generator</h2>

      <label htmlFor="prompt" className="w-full">What would you like to pitch about?</label>
      <textarea name="prompt" id="prompt" className="w-full rounded-md p-4" placeholder="Ask Fornax AI to generate a pitch script based on your prompt" onChange={e => setPitch(currentPitch => ({ ...currentPitch, pitch: e.target.value }))}></textarea>

      <label htmlFor="prompt" className="w-full mt-8">Or upload a pitch deck (Accepts PDF files up to 10MB)</label>
      <div className="flex flex-row w-full">
        <input type="file" readOnly id="pitchDeckFileInput" hidden onChange={chooseFile} />
        <input type="text" readOnly className="w-4/6 px-4 py-2 rounded-md" placeholder="Fornax Pitch V1.pdf" value={filename} />
        <label htmlFor="pitchDeckFileInput" className="block w-2/6 bg-violet-950 rounded-md ms-4 text-white text-center leading-10">Upload File</label>
      </div>
      <div className="flex flex-row w-full mt-8">
        <span className="w-4/6 rounded-md text-base/[20px]">Pitch length in minutes (Recommended: 3-5)</span>
        <div className="w-2/6 grid grid-cols-3 gap-1">
          <button className="bg-white rounded-md" onClick={() => setPitch(currentPitch => ({ ...currentPitch, minutes: currentPitch.minutes - 1 }))} type="button">&minus;</button>
          <input type="text" readOnly placeholder="3" className="rounded-md text-center" value={pitch.minutes} />
          <button className="bg-white rounded-md" onClick={() => setPitch(currentPitch => ({ ...currentPitch, minutes: currentPitch.minutes + 1 }))} type="button">+</button>
        </div>
      </div>

      <label htmlFor="instructions" className="w-full mt-8">Additional instructions or specifications</label>
      <textarea name="instructions" id="instructions" className="w-full rounded-md p-4" placeholder="Enter your preferences on tone or structure" onChange={e => setPitch(currentPitch => ({ ...currentPitch, instructions: e.target.value }))}></textarea>

      <button type="submit" className="w-full bg-violet-950 text-white mt-8 text-xl p-4 rounded-lg">Generate Pitch Script</button>
    </form >
  );
}