import { geologica } from '@/app/fonts';
import styles from './generatingScreen.module.css';
import { useEffect, useRef, useState } from 'react';

export default function GeneratingScreen() {
  const [loadingBarProgress, setLoadingBarProgress] = useState(0);
  const startingTime = useRef(Date.now());

  const updateLoadingBar = () => {
    const currentTime = Date.now();
    const timeElapsed = currentTime - startingTime.current;
    let progress = Math.log(timeElapsed) * 10;
    if (progress >= 100) {
      progress = 99;
    }
    setLoadingBarProgress(progress);
  };

  useEffect(() => {
    setInterval(updateLoadingBar, 100);
  },);

  return (
    <div className={`${styles.generatingScreen} flex flex-col`}>
      <p className={`${geologica.className} font-medium text-2xl mb-4`}>
        Generating your pitch script... <br />
        This may take a few seconds.
      </p>
      <div className={`${styles.loadingBar} ${geologica.className} rounded-full relative`}>
        <div className={`${styles.loadingBarNumber}`}>{loadingBarProgress | 0}%</div>
        <div className={`${styles.loadingBarProgress} rounded-full`} style={{ width: `${loadingBarProgress}%` }}></div>
      </div>
    </div>
  );
}