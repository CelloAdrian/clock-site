"use client";

import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [hydrated, setHydrated] = useState<boolean>(false);
  const [hour, setHour] = useState<string>("24");
  const [minute, setMinute] = useState<string>("59");
  const [second, setSecond] = useState<string>("59");
  const [date, setDate] = useState<string>("Monday, January 1 2000");

  useEffect(() => {
    setHydrated(true);

    const interval = setInterval(() => {
      const date = new Date();

      let dayOfWeek = date.toLocaleString("en-US", { weekday: "long" });
      let month = date.toLocaleString("en-US", {month: "long"});
      let dayOfMonth = date.getDate();
      let year = date.getFullYear();

      let currentDate = `${dayOfWeek}, ${month} ${dayOfMonth} ${year}`;

      let hour = date.getHours().toString().padStart(2, "0");
      let minute = date.getMinutes().toString().padStart(2, "0");
      let second = date.getSeconds().toString().padStart(2, "0");

      setDate(currentDate);
      setHour(hour);
      setMinute(minute);
      setSecond(second);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className={styles.main}>
        {hydrated && (
          <>
            <div className={styles.digitalClock}>
              <span className={styles.title}>{hour}</span>
              <span className={styles.separator}>:</span>
              <span className={styles.title}>{minute}</span>
              <span className={styles.separator}>:</span>
              <span className={styles.title}>{second}</span>
            </div>
            <div>
              <span>{date}</span>
            </div>
          </>
        )}
      </main>
    </>
  );
}
