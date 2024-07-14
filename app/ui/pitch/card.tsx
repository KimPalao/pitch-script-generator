export default function Card({
  title,
  content
}: {
  title: string;
  content?: string;
}) {
  return (
    <section className='px-4 py-2 border-solid border-2 border-gray-200 rounded-lg text mb-4 bg-white'>
      <div className="flex flex-row justify-between">
        <div>
          <h2 className="inline-block">{title}</h2>
          {content &&
            <span className='ms-4'>15 seconds</span>
          }
        </div>
        {content && <div>
          <span>Copy</span>
          <span>Refresh</span>
        </div>}
      </div>
      {content?.length && <p className="text-gray-500">
        {content}
      </p>}
    </section>
  );
}