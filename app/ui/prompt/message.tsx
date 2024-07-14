import styles from './message.module.css';
import clsx from 'clsx';

export default function Message({
  message,
  fromApp = false
}: {
  message: string;
  fromApp?: boolean;
}) {



  return (
    <>
      <div className={`${styles.messageGrid}`}>
        <div className='app-message-cell'>
          {fromApp &&
            <div className={`${styles.messageAppIcon}`}></div>
          }
        </div>
        <div className="message-cell flex flex-col">
          <div className={clsx(
            `${styles.message} w-5/6`,
            {
              [styles.messageFromApp]: fromApp,
              [styles.messageFromUser]: !fromApp,
            }
          )}>
            {message}
          </div>
        </div>
        <div className="user-message-cell flex flex-col justify-end">
          {!fromApp &&
            <div className={`${styles.messageUserIcon}`}></div>
          }
        </div>
      </div>
    </>
  );
}