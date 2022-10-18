import { useEffect, useState } from "react";
import Image from "next/image";
import type { NextPage } from "next";
import Spline from "@splinetool/react-spline";

const Home: NextPage = () => {


  const [darkMode, setDarkMode] = useState(false);
  const copyrightYear = eval(/\d{4}/.exec(Date())![0]);

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  });

  const toggleTheme = () => {
    if (darkMode) {
      localStorage.theme = "light";
      setDarkMode(false);
    } else {
      localStorage.theme = "dark";
      setDarkMode(true);
    }
  };

  return (
    <>
      <header
        className="sticky top-12 py-1 px-1 grid grid-flow-col auto-cols-max bg-neutral-100 rounded-xl shadow-xl backdrop-blur-md bg-white/30 dark:bg-white/10 nav-border grid justify-items-stretch grid-cols-2 gap-4"
        style={{ borderRadius: 16 + "px", zIndex: 999 }}
      >
        <div className="justify-self-start h-24 pt-4">
          <a href="">
            <Image
              src={"/logo" + `${darkMode ? "-dark" : ""}` + ".svg"}
              alt="DeOracle.xyz Logo"
              width={342}
              height={80}
              style={{ textAlign: "left" }}
            />
          </a>
        </div>
          <div className="mr-5 grid align-middle justify-self-end content-center">
            <div>
              <a
                className="align-middle px-6 py-3 py-1 text-xl text-purple-600 font-semibold rounded-full border-2 border-purple-400 bg-gradient-to-r from-purple-100 from-purple-300 hover:bg-gradient-to-l hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 dark:text-black/80"
                href="https://app.deoracle.xyz"
              >
                Try Demo
              </a>
            </div>
          </div>

      </header>
      <main
        className="grid grid-cols-2 gap-4 mt-20"
        style={{ borderRadius: 16 + "px"}}
      >
        <div className="w-full h-96">
          <Spline
            scene="https://prod.spline.design/LBWVwdzF5oRbGik2/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="flex items-stretch">
          <h1 className="text-3xl text-slate-100 self-center ">Decentralised Oracle Network for Subjective Data Feeds</h1>
        </div>
            
      </main>

      <footer className="container text-center py-10 px-10 mt-10">
        <button
          type="button"
          onClick={toggleTheme}
          className={
            "fixed right-5 bottom-5 rounded-full drop-shadow-md w-18 h-18 px-5 py-5 hover:right-7 hover:bottom-7 border-4 bg-origin-border hover:border-8 border-white/60 dark:border-white/30 opacity-75 hover:opacity-100 transition-all ease-in-out duration-500 bg-gradient-to-b " +
            `${
              darkMode
                ? "from-blue-900 to-purple-900"
                : "from-blue-600 to-sky-400"
            }`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={
              `${darkMode ? "hidden" : ""}` +
              " transition-all stroke-yellow-300 w-6 h-6 inline-block"
            }
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={
              `${darkMode ? "" : "hidden"}` +
              " transition-all stroke-yellow-300 w-6 h-6 inline-block"
            }
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </button>

        <br />
        <br />
        <hr />
        <br />
        <br />

        <p className="mb-1 pt-2 text-slate-400">
          &copy; {copyrightYear} DeOracle.xyz.{" "}
          <i>
            Made by{" "}
            <a
              href="https://twitter.com/0xMarkeljan"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 underline hover:no-underline hover:text-slate-500"
            >
              @Mark
            </a>{" "}
            and{" "}
            <a
              href="https://twitter.com/alex_biet"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 underline hover:no-underline hover:text-slate-500"
            >
              @Alex
            </a>
          </i>
        </p>
        <br />
        <br />

        <p className="text-slate-600">
          <a
            className="text-slate-600 underline hover:cursor-pointer hover:no-underline hover:text-slate-500"
            href="http://github.com/deOracleXYZ"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          &nbsp;.&nbsp;
          <a
            href="https://docs.deoracle.xyz"
            className="text-slate-600 underline hover:no-underline hover:text-slate-500"
            target="_blank"
            rel="noreferrer"
          >
            Docs
          </a>
          &nbsp;.&nbsp;
          <a
            className="text-slate-600 underline hover:cursor-pointer hover:no-underline hover:text-slate-500"
            href="https://twitter.com/DeOracleXYZ"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>{" "}
          &nbsp;.&nbsp;
          <a
            className="text-slate-600 underline hover:cursor-pointer hover:no-underline hover:text-slate-500"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Telegram (TBD)
          </a>{" "}
          &nbsp;.&nbsp;
          <a
            href="https://deoracle.xyz"
            className="text-slate-600 underline hover:no-underline hover:text-slate-500"
          >
            Website
          </a>
        </p>
        <br />
      </footer>
    </>
  );
};

export default Home;
