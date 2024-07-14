'use client';

import styles from './pitch.module.css';
import Card from './card';
import { geologica } from '@/app/fonts';
import GeneratingScreen from './generatingScreen';
import { useState } from 'react';

export default function Pitch() {
  const [generating, setGenerating] = useState(true);

  return (
    <div className={`${styles.pitchContainer} bg-stone-100`}>
      <GeneratingScreen />
      <div className={`p-4 ${styles.innerContainer}`}>
        <h1 className={`text-2xl font-medium mb-4 ${geologica.className}`}>Your Generated Pitch Script</h1>
        <Card title='Introduction' content='Good morning, everyone. My name is [Your Name], and I am the founder of EcoFresh,
          an innovative startup focused on providing eco-friendly packaging solutions.'/>
        <Card title="Hook" content='Imagine a world where the packaging that protects our food and products also protects our planet. At EcoFresh, we are making that world a reality.' />
        <Card title="Problem Statement" content='The environmental impact of traditional plastic packaging is devastating. Each year, millions of tons of plastic waste pollute our oceans and landfills, causing significant harm to wilflife and ecosystems. Consumers are increasingly demanding sustainable solutions, and businessess are under regulatory pressure to reduce their plastic footproint.' />
        <Card title="Solution" content='EcoFresh offers a biodegradable packaging solution maed from a proprietary material blend that decomposes faster than traditional options. Our packaging is cost-effective, durable, and meets industry safety standards. It significantly reduces waste and environmental impact, aligning with the sustainability goals of both consumer and businesses.' />
        <Card title="Market Opportunity" content='The global packaging market is vast and rapidly growing, with the eco-friendly' />
        <Card title="Business Model" />
        <Card title="Traction" />
        <Card title="Go-to-Market Strategy" />
        <Card title="Team" />
        <Card title="Financials and Projections" />
        <Card title="Closing" />
      </div>
    </div>
  );
}