import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.scss";
interface Props {
  data: Date;
  setOpen: any;
}

const CountDown: React.FC<Props> = (props: Props) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [target, setTarget] = useState<Date>(props.data);
  const year = ("0" + target.getFullYear()).slice(-2);
  const getMonth = target.getUTCMonth() + 1;
  const month = getMonth < 10 ? "0" + getMonth : "" + getMonth;
  const getDay = target.getUTCDate() + 1;
  const day = getDay < 10 ? "0" + getDay : "" + getDay;

  const openModel = () => {
    props.setOpen(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
      if (difference <= 0) {
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [target]);
  return (
    <div className={styles.container}>
      <>
        <div className={styles.countWrapper}>
          <h3>Moon Landing Party</h3>
          <h1>{`${day}.${month}.${year}`}</h1>
          <h4>Anniversary Starts in:</h4>
          <div className={styles.main}>
            <div className={styles.countItem}>
              <div className={styles.countValue}>{days}</div>
              <div className={styles.countUnit}>Days</div>
            </div>
            <span className={styles.seprator}>:</span>
            <div className={styles.countItem}>
              <div className={styles.countValue}>{hours}</div>
              <div className={styles.countUnit}>Hours</div>
            </div>
            <span className={styles.seprator}>:</span>
            <div className={styles.countItem}>
              <div className={styles.countValue}>{minutes}</div>
              <div className={styles.countUnit}>Minutes</div>
            </div>
            <span className={styles.seprator}>:</span>
            <div className={styles.countItem}>
              <div className={styles.countValue}>{seconds}</div>
              <div className={styles.countUnit}>Seconds</div>
            </div>
          </div>
          <div>
            <button className={styles.shareBtn} onClick={openModel}>
              Share Event
            </button>
          </div>
        </div>
      </>
    </div>
  );
};

export default CountDown;
