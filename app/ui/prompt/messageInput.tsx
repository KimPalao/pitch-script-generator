import styles from './messageInput.module.css';
import { FormEvent, useRef } from 'react';

export default function MessageInput({ onSubmit, onFile, disabled }: { onSubmit: (message: string) => void; onFile: (file: File, name: string) => void; disabled?: boolean; }) {
  const textarea = useRef<any>();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!textarea.current) return;
    onSubmit(textarea.current.innerText);
    textarea.current.innerText = '';
  };

  const chooseFile = (e: any) => {
    onFile(e.target.files[0], e.target.files[0].name);
  };

  return (
    <form onSubmit={handleSubmit} className={`${styles.messageInputContainer} flex flex-row border-solid border-2 border-gray-100`}>
      <input type="file" id="fileUpload" hidden onChange={chooseFile} />
      <label htmlFor='fileUpload' type='button'>Upload</label>
      <span contentEditable className={`${styles.textbox} flex-grow outline-none px-2`} ref={textarea}></span>
      <button type='submit'>Send</button>
    </form>
  );
}