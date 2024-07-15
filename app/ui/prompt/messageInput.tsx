import styles from './messageInput.module.css';
import { FormEvent, useRef } from 'react';

export default function MessageInput({ onSubmit, disabled }: { onSubmit: (message: string) => void; disabled?: boolean; }) {
  const textarea = useRef<any>();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!textarea.current) return;
    onSubmit(textarea.current.innerText);
    textarea.current.innerText = '';
  };

  return (
    <form onSubmit={handleSubmit} className={`${styles.messageInputContainer} flex flex-row border-solid border-2 border-gray-100`}>
      <button type='button'>Upload</button>
      <span contentEditable className={`${styles.textbox} flex-grow outline-none px-2`} ref={textarea}></span>
      <button type='submit'>Send</button>
    </form>
  );
}