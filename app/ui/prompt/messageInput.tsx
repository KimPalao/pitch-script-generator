import styles from './messageInput.module.css';

export default function MessageInput() {
  return (
    <div className={`${styles.messageInputContainer} flex flex-row border-solid border-2 border-gray-100`}>
      <button>Upload</button>
      <input type="text" className="flex-grow outline-none" placeholder="Message Fornax pitch script generator assistant" />
      <button>Send</button>
    </div>
  );
}