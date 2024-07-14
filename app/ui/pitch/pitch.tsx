import './pitch.css';
import Card from './card';
import { geologica } from '@/app/fonts';

export default function Pitch() {
  return (
    <div className="p-4 bg-stone-100 ">
      <h1 className={`text-2xl font-medium mb-4 ${geologica.className}`}>Your Generated Pitch Script</h1>
      <Card title='Introduction' content='Good morning, everyone. My name is [Your Name], and I am the founder of EcoFresh,
          an innovative startup focused on providing eco-friendly packaging solutions.'/>
      <Card title="Hook" />
      <Card title="Problem Statement" />
      <Card title="Solution" />
      <Card title="Market Opportunity" />
      <Card title="Business Model" />
      <Card title="Traction" />
      <Card title="Go-to-Market Strategy" />
      <Card title="Team" />
      <Card title="Financials and Projections" />
      <Card title="Closing" />
    </div>
  );
}