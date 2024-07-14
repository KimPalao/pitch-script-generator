import { geologica } from "../fonts";
import FornaxLogo from "./fornax-logo";
import styles from '@/app/ui/nav.module.css';

export default function Nav() {
  return (
    <nav className="w-full hidden md:flex justify-between p-4 border-b-solid border-b-2 border-gray-200">
      <div className="flex items-center">
        <FornaxLogo />
        <h2 className={`ms-4 inline-block text-xl ${styles.pitchScriptGenerator} ${geologica.className}`}>Pitch Script Generator</h2>
      </div>
      <div>
        <button className="rounded-md border-2 border-gray-200 py-1 px-2 text-sm me-2">Share</button>
        <button className="rounded-md text-white bg-violet-950 py-1 px-2 text-sm">Copy to Clipboard</button>
      </div>
    </nav>
  );
}