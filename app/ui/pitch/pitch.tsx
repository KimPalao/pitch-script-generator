'use client';

import styles from './pitch.module.css';
import Card from './card';
import { geologica } from '@/app/fonts';
import GeneratingScreen from './generatingScreen';
import { useState } from 'react';
import clsx from 'clsx';

export default function Pitch({ pitch = {}, generating = false, pitchId = null }: { pitch: { [name: string]: { content: string; time: string; }; }; generating: boolean; pitchId: string; }) {
  const cards = ['Introduction', 'Hook', 'Problem Statement', 'Solution', 'Market Opportunity', 'Business Model', 'Traction', 'Go-to-Market Strategy', 'Team', 'Financials and Projections', 'Closing'];
  const [shared, setShared] = useState(false);
  const shareText = shared ? 'Link Copied!' : 'Share';

  const shareLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/${pitchId}`);
    setShared(true);
  };

  return (
    <div className={clsx(
      `${styles.pitchContainer} bg-stone-100 md:flex flex-col relative`,
      {
        'hidden': !Object.keys(pitch).length && !generating,
      }
    )}>
      {generating && <GeneratingScreen />}
      <div className={`p-4 ${styles.innerContainer} flex-grow pb-16`}>
        <h1 className={`text-2xl font-medium mb-4 ${geologica.className}`}>Your Generated Pitch Script</h1>
        {cards.map(card => <Card title={card} key={card} content={pitch[card]?.content} time={pitch[card]?.time} />)}
      </div>
      <div className={`${styles.bottomBar} p-4 flex flex-row gap-4 md:hidden fixed bottom-0 w-full bg-white`}>
        <button onClick={shareLink} className="w-1/2 text-2xl rounded-md border-2 border-gray-200 py-1 px-2">{shareText}</button>
        <button className="w-1/2 text-2xl rounded-md text-white bg-violet-950 py-1 px-2">Copy</button>
      </div>
    </div>
  );
}