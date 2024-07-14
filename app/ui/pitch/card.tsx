import './pitch.css';

export default function Card({
  title,
  content
}: {
  title: string;
  content?: string;
}) {
  return (
    <section className='p-4 pt-2 border-solid border-2 border-gray-200 rounded-lg text'>
      <div className="flex flex-row justify-between">
        <div>
          <h2 className="inline-block">{title}</h2><span className='ms-4'>15 seconds</span>
        </div>
        <div>
          <span>Copy</span>
          <span>Refresh</span>
        </div>
      </div>
      <p className="text-gray-500">
        Good morning, everyone. My name is [Your Name], and I am the founder of EcoFresh,
        an innovative startup focused on providing eco-friendly packaging solutions.
      </p>
    </section>
  );
}