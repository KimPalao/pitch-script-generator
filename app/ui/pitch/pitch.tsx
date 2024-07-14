import './pitch.css';
import Card from './card';

export default function Pitch() {
  return (
    <div className="p-4 bg-stone-100 ">
      <h1 className="text-2xl font-medium mb-4">Your Generated Pitch Script</h1>
      <Card title='Introduction' content='Good morning, everyone. My name is [Your Name], and I am the founder of EcoFresh,
          an innovative startup focused on providing eco-friendly packaging solutions.'/>
    </div>
  );
}