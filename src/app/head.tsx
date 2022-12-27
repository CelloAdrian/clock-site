"use client";

import { useState, useEffect } from "react";

export default function Head() {
  const [hydrated, setHydrated] = useState<boolean>(false);
  const [hour, setHour] = useState<string>("24");
  const [minute, setMinute] = useState<string>("59");
  const [second, setSecond] = useState<string>("59");

  const message = `${hour}:${minute}:${second}`;

  useEffect(() => {
    setHydrated(true);

    const interval = setInterval(() => {
      const date = new Date();

      let hour = date.getHours().toString().padStart(2, "0");
      let minute = date.getMinutes().toString().padStart(2, "0");
      let second = date.getSeconds().toString().padStart(2, "0");

      setHour(hour);
      setMinute(minute);
      setSecond(second);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return <>{hydrated && <title>{message}</title>}</>;
}
