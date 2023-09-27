import "./App.css";
import { useState, useRef, useEffect } from "react";
import FacebookLogo from "./CustomLogos/FacebookLogo";
import InstagramLogo from "./CustomLogos/InstagramLogo";
import PinterestLogo from "./CustomLogos/PinterestLogo";

function App() {
  let [timerDays, setTimerDays] = useState<number>(0);
  let [timerHours, setTimerHours] = useState<number>(0);
  let [timerMinutes, setTimerMinutes] = useState<number>(0);
  let [timerSeconds, setTimerSeconds] = useState<number>(0);

  let interval: any = useRef();

  let startTimer = () => {
    const future: number = new Date("Oct 30, 2023 00:00:00").getTime();

    interval = setInterval(() => {
      const today: number = new Date().getTime();
      const distance = future - today;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop timer
        clearInterval(interval.current);
      } else {
        // update the timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    clearInterval(interval.current);
  });

  return (
    <div className="App ">
      <div className="pt-[8rem] bg-[#191A24] h-screen bg-[url('./assets/bg-stars.svg')] bg-no-repeat bg-cover		relative lg:pt-[5rem] 2xl:pt-[8rem]">
        <div>
          <h1 className="text-center mb-10 text-white font-[Barriecito] text-2xl font-[RedHatText] font-sans 2xl:text-4xl lg:text-3xl">
            WE'RE LAUNCHING SOON
          </h1>
        </div>
        <div className="flex  flex-row justify-center items-center py-0 px-2 gap-3 w-[100%]">
          <div className="timeItem">
            <div className="numbers">
              <div className="absolute inset-0  grid grid-rows-2 ">
                <div className="bg-[#2d2f49] rounded-xl"></div>
                <div className="bg-[#3a3c60] rounded-xl"></div>
              </div>
              <span className="relative">
                {timerDays < 0
                  ? "expired"
                  : timerDays > 9
                  ? timerDays
                  : "0" + timerDays}
              </span>
              <div className="absolute inset-0 flex items-center">
                <div className="h-px w-full bg-black"></div>
              </div>
            </div>
            <div className="words">{timerDays > 1 ? "DAYS" : "DAY"}</div>
          </div>

          <div className="timeItem">
            <div className="numbers">
              <div className="absolute inset-0  grid grid-rows-2 ">
                <div className="bg-[#2d2f49] rounded-xl"></div>
                <div className="bg-[#3a3c60] rounded-xl"></div>
              </div>
              <span className="relative">
                {timerHours > 9 ? timerHours : "0" + timerHours}
              </span>
              <div className="absolute inset-0 flex items-center">
                <div className="h-px w-full bg-black"></div>
              </div>
            </div>
            <div className="words">{timerHours > 1 ? "HOURS" : "HOUR"}</div>
          </div>

          <div className="timeItem">
            <div className="numbers">
              <div className="absolute inset-0  grid grid-rows-2 ">
                <div className="bg-[#2d2f49] rounded-xl"></div>
                <div className="bg-[#3a3c60] rounded-xl"></div>
              </div>
              <span className="relative">
                {timerMinutes > 9 ? timerMinutes : "0" + timerMinutes}
              </span>
              <div className="absolute inset-0 flex items-center">
                <div className="h-px w-full bg-black"></div>
              </div>
            </div>
            <div className="words">
              {timerMinutes > 1 ? "MINUTES" : "MINUTE"}
            </div>
          </div>

          <div className="timeItem">
            <div className="numbers">
              <div className="absolute inset-0  grid grid-rows-2 ">
                <div className="bg-[#2d2f49] rounded-xl"></div>
                <div className="bg-[#3a3c60] rounded-xl"></div>
              </div>
              <span className="relative">
                {timerSeconds > 9 ? timerSeconds : "0" + timerSeconds}
              </span>
              <div className="absolute inset-0 flex items-center">
                <div className="h-px w-full bg-black"></div>
              </div>
            </div>
            <div className="words">
              {timerSeconds > 1 ? "SECONDS" : "SECOND"}
            </div>
          </div>
        </div>
        <div className="flex gap-6 justify-center absolute bottom-0 w-[100%] py-[3rem] lg:py-[4rem] xl:py-[5rem] 2xl:py-[6rem] bg-[url('./assets/pattern-hills.svg')] bg-cover  bg-center">
          <div className="mydiv">
            <a href="#">
              <FacebookLogo />
            </a>
          </div>
          <div className="mydiv">
            <a href="#">
              <InstagramLogo />
            </a>
          </div>
          <div className="mydiv">
            <a href="#">
              <PinterestLogo />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
