import { useState } from "react";

export default function Card({
  title,
  content,
  time,
}: {
  title: string;
  content?: string;
  time?: string;
}) {
  const [copied, setCopied] = useState(false);
  const copyPitch = () => {
    let text = ``;
    text += `# ${title}\n\n`;
    text += `**${time}**\n\n`;
    text += `${content}\n\n`;
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <section className='px-4 py-2 border-solid border-2 border-gray-200 rounded-lg text mb-4 bg-white'>
      <div className="flex flex-row justify-between">
        <div>
          <h2 className="inline-block font-medium">{title}</h2>
          {content &&
            <span className='ms-2 text-sm'>{time}</span>
          }
        </div>
        {content && <div className="text-xl">
          {copied ? <button onClick={copyPitch} className="inline-block">&#x2713;</button>
            : <button onClick={copyPitch} className="inline-block">&#128203;</button>}
          <span>&#8634;</span>
        </div>}
      </div>
      {content?.length && <p className="text-gray-500">
        {content}
      </p>}
    </section>
  );
}