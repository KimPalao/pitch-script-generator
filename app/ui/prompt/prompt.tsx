import Image from "next/image";
import styles from '@/app/ui/prompt/prompt.module.css';
import Message from "./message";
import MessageInput from "./messageInput";
import { geologica } from "@/app/fonts";
import { useEffect, useState } from "react";

export default function Prompt({ onSubmit }: { onSubmit: (pitch: { pitch: string; minutes: string; instructions: string; file?: File | null; }) => Promise<void>; }) {
  const [messages, setMessages] = useState<{ message: string; fromApp: boolean; }[]>([]);
  const [filename, setFilename] = useState('');

  useEffect(() => {
    setMessages([{
      message: "What would you like to pitch about?",
      fromApp: true,
    }]);
  }, []);

  const [pitch, setPitch] = useState<{ pitch: string; minutes: string; instructions: string; file?: File | null; }>({
    pitch: '',
    minutes: '',
    instructions: '',
    file: null,
  });

  const setFile = (file: File, name: string) => {
    setFilename(name);
    setPitch(currentPitch => ({ ...currentPitch, file }));
    setMessages(currentMessages => [...currentMessages, { message: name, fromApp: false }]);
    setMessages(currentMessages => [...currentMessages, { message: "We've received your pitch deck! Can you also give us a short description of your pitch?", fromApp: true }]);
  };

  const addMessageAndRespond = (message: string) => {
    setMessages(currentMessages => [...currentMessages, { message, fromApp: false }]);
    if (!pitch.pitch) {
      setPitch({ ...pitch, pitch: message });
      setMessages((currentMessages) =>
        [
          ...currentMessages,
          { message: "Great, what would you like your pitch length to be in minutes? The recommended length for a pitch is 3-5 minutes.", fromApp: true }
        ]);
      return;
    }
    if (!pitch.minutes) {
      setPitch({ ...pitch, minutes: message });
      setMessages((currentMessages) =>
        [
          ...currentMessages,
          { message: "Wonderful! Do you have any additional instructions or specifications on tone or structure?", fromApp: true }
        ]);
      return;
    }
    if (!pitch.instructions) {
      setMessages((currentMessages) =>
        [
          ...currentMessages,
          { message: "Thank you for your responses! Allow me to generate your script now.", fromApp: true }
        ]);
      setPitch({ ...pitch, instructions: message });
      onSubmit({ ...pitch, instructions: message });
      return;
    }
    if (message.trim().toLowerCase() === 'refresh') {
      onSubmit(pitch);
    }
  };

  return (
    <div className={`${styles.promptContainer} p-4 hidden md:flex`}>
      <header className="flex flex-row mb-4">
        <div className={`bg-slate-100 inline-block rounded-full ${styles.fornaxLogoContainer} flex justify-center`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 64" fill="none" className="w-8"><g clipPath="url(#a)"><path fill="#2D1B47" stroke="#2D1B47" strokeMiterlimit="10" strokeWidth="2.65" d="M30.013 1.66h5.428c15.438 0 27.974 12.533 27.974 27.974v25.973a2.649 2.649 0 0 1-2.65 2.65H4.689a2.649 2.649 0 0 1-2.65-2.65V29.634c0-15.44 12.533-27.973 27.974-27.973Z"></path><path fill="#fff" stroke="#2D1B47" strokeMiterlimit="10" strokeWidth="2.65" d="M37.916 1.66c14.073 0 25.5 11.427 25.5 25.5v28.45a2.649 2.649 0 0 1-2.65 2.65H15.069a2.649 2.649 0 0 1-2.65-2.65V27.16c0-14.073 11.424-25.5 25.497-25.5Z"></path><path fill="#2D1B47" d="M37.608 11.062h.613c9.005 0 16.318 7.313 16.318 16.318v30.891H21.293v-30.89c0-9.006 7.313-16.32 16.318-16.32h-.003Z"></path><path fill="#fff" d="M30.032 24.815a5.725 5.725 0 0 1 5.723 5.723v1.759a3.69 3.69 0 0 1-3.686 3.686h-4.074a3.69 3.69 0 0 1-3.686-3.686v-1.759a5.725 5.725 0 0 1 5.723-5.723Z"></path><path fill="#2D1B47" d="M34.692 29.985a3.503 3.503 0 1 0-7.005 0v1.62a3.503 3.503 0 1 0 7.005 0v-1.62Z"></path><path fill="#fff" d="M32.662 27.73h-.004c-.697 0-1.262.564-1.262 1.261v.507c0 .697.565 1.262 1.262 1.262h.004c.697 0 1.262-.565 1.262-1.262v-.507c0-.697-.565-1.261-1.262-1.261ZM46.624 24.815a5.725 5.725 0 0 1 5.724 5.723v1.759a3.69 3.69 0 0 1-3.687 3.686h-4.073a3.69 3.69 0 0 1-3.687-3.686v-1.759a5.725 5.725 0 0 1 5.723-5.723Z"></path><path fill="#2D1B47" d="M51.284 29.985a3.503 3.503 0 1 0-7.005 0v1.62a3.503 3.503 0 1 0 7.005 0v-1.62Z"></path><path fill="#fff" d="M49.254 27.73h-.003c-.697 0-1.262.564-1.262 1.261v.507c0 .697.565 1.262 1.262 1.262h.003c.697 0 1.262-.565 1.262-1.262v-.507c0-.697-.565-1.261-1.262-1.261Z"></path><path stroke="#fff" strokeLinecap="round" strokeWidth="1.58" d="M27.47 22.222c1.184-1.185 4.345-1.185 5.53 0M43.272 22.222c1.185-1.185 4.345-1.185 5.53 0"></path><rect width="4.741" height="3.951" x="23.519" y="37.136" fill="#EE7299" rx="1.975"></rect><rect width="4.741" height="3.951" x="48.012" y="37.136" fill="#EE7299" rx="1.975"></rect><path stroke="#fff" strokeLinecap="round" strokeWidth="1.58" d="M35.37 37.926c.198.564 1.028 1.693 2.766 1.693M40.901 37.926c-.197.564-1.027 1.693-2.765 1.693"></path><path fill="#EE7299" d="m46.425 56.247-.034-2.15a.533.533 0 0 0-.048-.224l-.017-.28c0-.015-.006-.026-.008-.041l.004-.004a5.699 5.699 0 0 0-.069-.46c-.327-1.69-1.387-3.139-2.83-4.057-.346-.221-.864.065-.84.48.079 1.352-1.433 2.133-2.547 1.435-1.22-.765-1.328-2.324-.657-3.49.199-.345-.048-.868-.482-.837-1.64.12-3.09 1.289-3.368 2.946-.164.975.32 2.231-.828 2.77-1.028.482-2.094-.782-1.268-1.632.359-.37.002-1.147-.543-.93a4.517 4.517 0 0 0-2.807 3.45 7.168 7.168 0 0 0-.218 2.475c-.01.163-.02.326-.026.492 0 .037.002.07.008.104-.02.29.154.595.532.595h15.517c.398 0 .573-.34.529-.642Z"></path></g><defs><clipPath id="a"><path fill="#fff" d="M.605 0h64.79v64H.605z"></path></clipPath></defs></svg>
        </div>
        <div className="ms-4">
          <h3 className={geologica.className}>Fornax</h3>
          <p>Pitch Deck Creator</p>
        </div>
      </header>
      <hr className="mb-4" />
      <div className={`${styles.messageContainer} flex-grow`}>
        {messages.map((message, index) => <Message key={index} message={message.message} fromApp={message.fromApp} />)}
      </div>
      <MessageInput onSubmit={addMessageAndRespond} onFile={setFile} />
    </div>
  );
}