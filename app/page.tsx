import Image from "next/image";
import Nav from "./ui/nav";
import Pitch from "./ui/pitch/pitch";
import Prompt from "./ui/prompt";
import { Geologica } from "next/font/google";

const geologica = Geologica({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={geologica.className}>
      <Nav />
      <div className="grid grid-cols-2 flex-grow w-full">
        <Pitch />
        <Prompt />
      </div>
    </main>
  );
}
