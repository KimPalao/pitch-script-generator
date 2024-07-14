import Image from "next/image";
import Nav from "./ui/nav";
import Pitch from "./ui/pitch/pitch";
import Prompt from "./ui/prompt/prompt";

export default function Home() {
  return (
    <main>
      <Nav />
      <div className="grid grid-cols-2 flex-grow w-full">
        <Pitch />
        <Prompt />
      </div>
    </main>
  );
}
