'use client';

import styles from './pitch.module.css';
import Card from './card';
import { geologica } from '@/app/fonts';
import GeneratingScreen from './generatingScreen';
import { useState } from 'react';
import clsx from 'clsx';

export default function Pitch({ pitch = {}, generating = false, pitchId = null, cards = [], isSection = false }: { pitch: { [name: string]: { content: string; time: string; }; }; generating?: boolean; pitchId?: string | null; cards?: string[]; isSection?: boolean; }) {
  const [shared, setShared] = useState(false);
  const shareText = shared ? 'Link Copied!' : 'Share';

  const shareLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/${pitchId}`);
    setShared(true);
  };

  const [copied, setCopied] = useState(false);
  const copyText = copied ? 'Copied!' : 'Copy';
  const copyPitch = () => {
    let text = ``;
    for (const card of cards) {
      text += `# ${card}\n\n`;
      text += `**${pitch[card]?.time}**\n\n`;
      text += `${pitch[card]?.content}\n\n`;
    }
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div className={clsx(
      `${styles.pitchContainer} bg-stone-100 md:flex flex-col relative`,
      {
        'hidden': !Object.keys(pitch).length && !generating,
        [styles.pitchContainerSection]: isSection
      }
    )}>
      {generating && <GeneratingScreen />}
      <div className={`p-4 ${styles.innerContainer} flex-grow pb-16 md:pb-4`}>
        <h1 className={`text-2xl font-medium mb-4 ${geologica.className}`}>Your Generated Pitch Script</h1>
        {cards.map(card => <Card title={card} key={card} content={pitch[card]?.content} time={pitch[card]?.time} />)}
      </div>
      {!generating && <div className={`${styles.bottomBar} p-4 flex flex-row gap-4 md:hidden fixed bottom-0 w-full bg-white`}>
        <button onClick={shareLink} className="w-1/2 text-2xl rounded-md border-2 border-gray-200 py-1 px-2">{shareText}</button>
        <button onClick={copyPitch} className="w-1/2 text-2xl rounded-md text-white bg-violet-950 py-1 px-2">{copyText}</button>
      </div>}
    </div>
  );
}