import React, { useEffect, useState } from "react";
const today = new Date();
export default function CountdownTimer(props: any) {
  const { hoursLeft, handleSubmit } = props;
  let totalhoursleft = hoursLeft;
  let morethanADay = false;
  let daysBeyondTheMonth = false;
  let additionalHours;
  let totalDays = 0;
  let finalDays = 0;
  let increaseDay = 0;
  let finalHours = 0;
  let finalMonth = 0;
  let months: any = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
  };

  totalDays = Math.floor(+totalhoursleft / 24);
  if (totalDays + today.getDate() > months[today.getMonth() + 1]) {
    daysBeyondTheMonth = true;
    let temp = totalDays + today.getDate();
    finalMonth = today.getMonth() + 1;
    while (temp > 0) {
      temp = temp - months[finalMonth];
      if (temp <= 0) {
        finalDays = months[finalMonth] + temp;
      } else {
        finalMonth = finalMonth + 1;
      }
      if (finalMonth > 12) {
        finalMonth = 1;
      }
    }
  }

  if (parseInt(totalhoursleft, 10) > 24) {
    additionalHours = parseInt(totalhoursleft, 10) - 24;
    morethanADay = true;
    additionalHours = additionalHours - 24 * Math.floor(additionalHours / 24);
    if (today.getHours() + additionalHours >= 24) {
      increaseDay = increaseDay + 1;
      finalHours = Math.abs(additionalHours - (24 - today.getHours()));
    } else {
      finalHours = today.getHours() + additionalHours;
    }
  } else {
    if (today.getHours() + parseInt(totalhoursleft, 10) >= 24) {
      totalDays = 1;
      morethanADay = true;
      finalHours = parseInt(totalhoursleft, 10) - (24 - today.getHours());
    } else {
      finalHours = today.getHours() + parseInt(totalhoursleft, 10);
    }
  }

  //calculating the time left
  const calculateTimeLeft = () => {
    let date =
      today.getFullYear() +
      "-" +
      (finalMonth === 0 ? today.getMonth() + 1 : finalMonth) +
      "-" +
      (!daysBeyondTheMonth
        ? today.getDate() +
          (morethanADay === false
            ? 0
            : finalDays === 0
            ? totalDays + increaseDay
            : finalDays)
        : finalDays + increaseDay);

    let time = finalHours + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + " " + time;
    let difference = +new Date(dateTime) - +new Date();
    let timeLeft: any = {};

    if (difference > 0) {
      timeLeft = {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60)
      };
      setTimeLeft(timeLeft);
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout();
  });

  const timerComponents: any = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return <div>{timerComponents.length ? timerComponents : handleSubmit}</div>;
}
