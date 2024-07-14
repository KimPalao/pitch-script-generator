import { geologica } from '@/app/fonts';
import styles from './generatingScreen.module.css';

export default function GeneratingScreen() {
  return (
    <div className={`${styles.generatingScreen} flex flex-col`}>
      <p className={`${geologica.className} font-medium text-2xl mb-4`}>
        Generating your pitch script... <br />
        This may take a few seconds.
      </p>
      <div className={`${styles.loadingBar} rounded-full`}>
        <div className={`${styles.loadingBarProgress} rounded-full`}></div>
      </div>
    </div>
  );
}