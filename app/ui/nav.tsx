import { geologica } from "../fonts";
import FornaxLogo from "./fornax-logo";
import styles from '@/app/ui/nav.module.css';

export default function Nav({ onShare, onCopy, shared = false, copied = false, enabled = false }: { onShare: () => void; onCopy: () => void; shared?: boolean; copied?: boolean; enabled?: boolean; }) {
  const copyText = copied ? 'Copied!' : 'Copy to Clipboard';
  const shareText = shared ? 'Link Copied!' : 'Share';
  return (
    <nav className="w-full hidden md:flex justify-between p-4 border-b-solid border-b-2 border-gray-200">
      <div className="flex items-center">
        <FornaxLogo />
        <h2 className={`ms-4 inline-block text-xl ${styles.pitchScriptGenerator} ${geologica.className}`}>Pitch Script Generator</h2>
      </div>
      {enabled && <div>
        <button onClick={onShare} className="rounded-md border-2 border-gray-200 py-1 px-2 text-sm me-2">{shareText}</button>
        <button onClick={onCopy} className="rounded-md text-white bg-violet-950 py-1 px-2 text-sm">{copyText}</button>
      </div>}
    </nav>
  );
}