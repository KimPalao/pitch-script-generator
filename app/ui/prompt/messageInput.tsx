import styles from './messageInput.module.css';
import { useState } from 'react';

export default function MessageInput({ onSubmit, disabled }) {
  const [message, setMessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className={`${styles.messageInputContainer} flex flex-row border-solid border-2 border-gray-100`}>
      <button type='button'>Upload</button>
      <input type="text" className="flex-grow outline-none" placeholder="Message Fornax pitch script generator assistant" onChange={e => setMessage(e.target.value)} value={message} />
      <button type='submit'>Send</button>
    </form>
  );
}