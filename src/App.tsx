import "./App.css";
import { useState } from "react";
import FacebookLogo from "./CustomLogos/FacebookLogo";
import InstagramLogo from "./CustomLogos/InstagramLogo";
import PinterestLogo from "./CustomLogos/PinterestLogo";

function App() {
  let [distance, setDistance] = useState<number>(0);
  let [days, setDays] = useState<number>(0);
  let [hours, setHours] = useState<number>(0);
  let [minutes, setMinutes] = useState<number>(0);
  let [seconds, setSeconds] = useState<number>(0);

  let future: number = new Date("Oct 30, 2023 00:00:00").getTime();
  let today: number = new Date().getTime();

  let myInterval: number = setInterval(function () {
    setDistance(future - today);
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
  }, 1000);

  if (distance < 0) {
    clearInterval(myInterval);
  }

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
                {days < 0 ? "expired" : days > 9 ? days : "0" + days}
              </span>
              <div className="absolute inset-0 flex items-center">
                <div className="h-px w-full bg-black"></div>
              </div>
            </div>
            <div className="words">{days > 1 ? "DAYS" : "DAY"}</div>
          </div>

          <div className="timeItem">
            <div className="numbers">
              <div className="absolute inset-0  grid grid-rows-2 ">
                <div className="bg-[#2d2f49] rounded-xl"></div>
                <div className="bg-[#3a3c60] rounded-xl"></div>
              </div>
              <span className="relative">
                {hours > 9 ? hours : "0" + hours}
              </span>
              <div className="absolute inset-0 flex items-center">
                <div className="h-px w-full bg-black"></div>
              </div>
            </div>
            <div className="words">{hours > 1 ? "HOURS" : "HOUR"}</div>
          </div>

          <div className="timeItem">
            <div className="numbers">
              <div className="absolute inset-0  grid grid-rows-2 ">
                <div className="bg-[#2d2f49] rounded-xl"></div>
                <div className="bg-[#3a3c60] rounded-xl"></div>
              </div>
              <span className="relative">
                {minutes > 9 ? minutes : "0" + minutes}
              </span>
              <div className="absolute inset-0 flex items-center">
                <div className="h-px w-full bg-black"></div>
              </div>
            </div>
            <div className="words">{minutes > 1 ? "MINUTES" : "MINUTE"}</div>
          </div>

          <div className="timeItem">
            <div className="numbers">
              <div className="absolute inset-0  grid grid-rows-2 ">
                <div className="bg-[#2d2f49] rounded-xl"></div>
                <div className="bg-[#3a3c60] rounded-xl"></div>
              </div>
              <span className="relative">
                {seconds > 9 ? seconds : "0" + seconds}
              </span>
              <div className="absolute inset-0 flex items-center">
                <div className="h-px w-full bg-black"></div>
              </div>
            </div>
            <div className="words">{seconds > 1 ? "SECONDS" : "SECOND"}</div>
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
