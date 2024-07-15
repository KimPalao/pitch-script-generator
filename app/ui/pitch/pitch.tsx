'use client';

import styles from './pitch.module.css';
import Card from './card';
import { geologica } from '@/app/fonts';
import GeneratingScreen from './generatingScreen';
import { useState } from 'react';
import clsx from 'clsx';

export default function Pitch({ pitch = {}, generating = false }: { pitch: Object; generating: boolean; }) {
  const cards = ['Introduction', 'Hook', 'Problem Statement', 'Solution', 'Market Opportunity', 'Business Model', 'Traction', 'Go-to-Market Strategy', 'Team', 'Financials and Projections', 'Closing'];

  return (
    <div className={clsx(
      `${styles.pitchContainer} bg-stone-100 md:block`,
      {
        'hidden': !Object.keys(pitch).length && !generating,
      }
    )}>
      {generating && <GeneratingScreen />}
      <div className={`p-4 ${styles.innerContainer}`}>
        <h1 className={`text-2xl font-medium mb-4 ${geologica.className}`}>Your Generated Pitch Script</h1>
        {cards.map(card => <Card title={card} key={card} content={pitch[card]?.content ?? ''} time={pitch[card]?.time ?? ''} />)}
      </div>
    </div>
  );
}