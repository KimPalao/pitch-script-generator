import FornaxLogo from "../fornax-logo";
import { geologica } from "@/app/fonts";
import styles from '@/app/ui/promptMobile/promptMobile.module.css';

export default function PromptMobile() {
  return (
    <form className={`flex flex-col items-center md:hidden ${styles.promptMobileContainer} pt-16 px-8`}>
      <FornaxLogo />
      <h2 className={`ms-4 inline-block text-xl ${geologica.className} mb-16`}>Pitch Script Generator</h2>

      <label htmlFor="prompt" className="w-full">What would you like to pitch about?</label>
      <textarea name="prompt" id="prompt" className="w-full rounded-md p-4" placeholder="Ask Fornax AI to generate a pitch script based on your prompt"></textarea>

      <label htmlFor="prompt" className="w-full mt-8">What would you like to pitch about?</label>
      <div className="flex flex-row w-full">
        <input type="text" readOnly className="w-4/6 px-4 py-2 rounded-md" placeholder="Fornax Pitch V1.pdf" />
        <button className="w-2/6 bg-violet-950 rounded-md ms-4 text-white">Upload File</button>
      </div>
      <div className="flex flex-row w-full mt-8">
        <span className="w-4/6 rounded-md text-base/[20px]">Pitch length in minutes (Recommended: 3-5)</span>
        <div className="w-2/6 grid grid-cols-3 gap-1">
          <button className="bg-white rounded-md">&minus;</button>
          <input type="text" readOnly placeholder="3" className="rounded-md text-center" />
          <button className="bg-white rounded-md">+</button>
        </div>
      </div>

      <label htmlFor="instructions" className="w-full mt-8">Additional instructions or specifications</label>
      <textarea name="instructions" id="instructions" className="w-full rounded-md p-4" placeholder="Enter your preferences on tone or structure"></textarea>

      <button type="submit" className="w-full bg-violet-950 text-white mt-8 text-xl p-4 rounded-lg">Generate Pitch Script</button>
    </form>
  );
}