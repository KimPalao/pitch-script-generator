import FornaxLogo from "./fornax-logo";
import styles from '@/app/ui/nav.module.css';

export default function Nav() {
  return (
    <nav className="w-full flex items-center p-4 border-b-solid border-b-2 border-gray-200">
      <FornaxLogo />
      <h2 className={`ms-4 inline-block text-xl ${styles.pitchScriptGenerator}`}>Pitch Script Generator</h2>
    </nav>
  );
}