import Image from "next/image";
import Nav from "./ui/nav";
import Pitch from "./ui/pitch/pitch";
import Prompt from "./ui/prompt/prompt";
import PromptMobile from "./ui/promptMobile/promptMobile";

export default function Home() {
  return (
    <main>
      <Nav />
      <div className="md:grid grid-cols-2 flex-grow w-full">
        <Pitch />
        <Prompt />
        <PromptMobile />
      </div>
    </main>
  );
}
