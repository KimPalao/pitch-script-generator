import styles from '@/app/ui/toast.module.css';
import clsx from 'clsx';

export default function Toast({ message, visible = false, onDismiss }: { message: string; visible: boolean; onDismiss: () => void; }) {
  return (
    <div className={clsx(
      `${styles.toast} bg-white p-4 rounded-lg shadow-lg transition-all fixed`,
      {
        [styles.visible]: visible,
      }
    )}>
      <span className={`${styles.check} rounded-full inline-block me-2`}>&#x2713;</span>
      <span>
        {message}
      </span>
      <button className='text-2xl ms-2' onClick={onDismiss}>&times;</button>
    </div>
  );
}