import { useEffect, useState } from "react";
import Image from "next/image";
import type { NextPage } from "next";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import Head from "next/head";

const Home: NextPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const copyrightYear = eval(/\d{4}/.exec(Date())![0]);

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, [darkMode]);

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
      <Head>
        <title>DeOracle.xyz</title>
      </Head>
      <header
        className="sticky top-6 py-1 px-1 grid grid-flow-col bg-neutral-100 rounded-xl shadow-xl backdrop-blur-md bg-white/30 dark:bg-white/10 nav-border grid-cols-3 gap-4"
        style={{ borderRadius: 16 + "px", zIndex: 999 }}
      >
        <div className="justify-self-start h-24 pt-5">
          <Link href="/" passHref>
            <a>
              <Image
                src={"/logo" + `${darkMode ? "-dark" : ""}` + ".svg"}
                alt="DeOracle.xyz Logo"
                width={342}
                height={80}
                style={{ textAlign: "left" }}
              />
            </a>
          </Link>
        </div>
        <div className="mr-5 grid align-middle col-span-2 justify-self-end content-center">
          <div>
            <ul className="nav-menu text-lg align-middle px-6 py-3 inline-block">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#community">Community</a>
              </li>
              <li>
                <a href="https://docs.deoracle.xyz" target="_blank" rel="noreferrer">
                  Docs{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="inline w-3 h-3 mb-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </a>
              </li>
            </ul>
            <a
              className="align-middle inline-block px-5 py-3 py-1 text-lg text-purple-600 font-semibold rounded-full border-2 border-purple-400 bg-gradient-to-r from-purple-100 from-purple-300 hover:bg-gradient-to-l hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 dark:text-black/80"
              href="https://app.deoracle.xyz"
            >
              Testnet App
            </a>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-2 gap-4">
        <div className="w-full h-96">
          <Spline
            scene="https://prod.spline.design/LBWVwdzF5oRbGik2/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="flex items-stretch">
          <h1 className="text-4xl dark:text-slate-400 self-center leading-normal font-bold">
            Decentralised Oracle Network for Subjective Data Feeds
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-8 mb-20 content-center">
        <div className="col-span-5 text-center ">
          <h1 className="text-5xl font-bold dark:text-slate-400 pt-44 " id="features">
            What is a Subjective Oracle?
          </h1>
        </div>

        <div className="col-1 text-center"></div>

        <div className="col-span-3 text-center">
          <p className="text-2xl dark:text-slate-400 mt-5 mb-20">
            A subjective oracle allows access to dynamic, permissionless and reliable data on-chain.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 text-center">
        <div className="col-1">
          <h2 className="text-3xl dark:text-slate-400 font-bold mb-3">Access Data Feeds</h2>
          <p className="text-lg dark:text-slate-400 px-10">
            View on DeOracle.xyz or subscribe using the DeOracle Solidity API.
          </p>
        </div>

        <div className="col-1">
          <h2 className="text-3xl dark:text-slate-400 font-bold mb-3">Earn as an Oracle</h2>
          <p className="text-lg dark:text-slate-400 px-10">
            Oracles update and verify the data feed for subscription revenue share.
          </p>
        </div>

        <div className="col-1">
          <h2 className="text-3xl dark:text-slate-400 font-bold mb-3">Request New Data</h2>
          <p className="text-lg dark:text-slate-400 px-10">
            Create a new data request or feed request on DeOracle.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 text-center">
        <div className="col-span-3 text-center mb-20">
          <h1 className="text-5xl font-bold dark:text-slate-400 pt-44" id="why-deoracle">
            Why DeOracle?
          </h1>
        </div>

        <div className="col-1">
          <h2 className="text-3xl dark:text-slate-400 font-bold mb-3">Wide Scope Data</h2>
          <p className="text-lg dark:text-slate-400 px-2">
            Access wide scope data on-chain that is not available on traditional oracles.
          </p>
        </div>

        <div className="col-1">
          <h2 className="text-3xl dark:text-slate-400 font-bold mb-3">Subjective Queries</h2>
          <p className="text-lg dark:text-slate-400 px-2">
            Flexible on-chain queries allow for open ended and nondeterministic data feeds.
          </p>
        </div>

        <div className="col-1">
          <h2 className="text-3xl dark:text-slate-400 font-bold mb-3">DAO-Owned Data Feeds</h2>
          <p className="text-lg dark:text-slate-400 px-2">
            Data feeds are owned and managed by DeOracle DAO.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 text-center">
        <div className="col-span-2 text-center mb-20">
          <h1 className="text-5xl font-bold dark:text-slate-400 pt-44" id="reputation">
            Reputation System
          </h1>
        </div>

        <div className="col-1 px-10 py-10">
          <Image src="/verify.png" alt="Verify" width={631} height={434} />
        </div>

        <div className="col-1 flex items-center justify-center">
          <div>
            <h2 className="text-3xl dark:text-slate-400 font-bold mb-3">Get Verified</h2>
            <p className="text-lg dark:text-slate-400 px-10">
              Access wide scope data on-chain that is not available on traditional oracles.
            </p>
          </div>
        </div>

        <div className="col-1 flex items-center justify-center">
          <div>
            <h2 className="text-3xl dark:text-slate-400 font-bold mb-3">
              Earn Reputation & Bounties
            </h2>
            <p className="text-lg dark:text-slate-400 px-10">
              Access wide scope data on-chain that is not available on traditional oracles.
            </p>
          </div>
        </div>

        <div className="col-1 px-10 py-10">
          <Image src="/earn.png" alt="Earn" width={631} height={434} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 text-center">
        <div className="col-span-1 text-center mb-20">
          <h1 className="text-5xl font-bold dark:text-slate-400 pt-44" id="user-flow">
            User Flow
          </h1>
        </div>

        <div className="col-1 relative">
          <Image
            src="/deoracle-user-flow.png"
            alt="DeOracle User Flow"
            width="1280"
            height="606"
            style={{}}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 text-center">
        <div className="col-span-2 text-center mb-10">
          <h1 className="text-5xl font-bold dark:text-slate-400 pt-44" id="team">
            Team
          </h1>
        </div>

        <div className="col-1 ">
          <Image src="/team/pixel-mark.png" alt="Mark" width={256} height={256} style={{}} />
          <h2 className="text-3xl dark:text-slate-400 font-bold my-3">Mark</h2>
          <p className="text-lg dark:text-slate-400 px-2 pb-3">Co-Founder & CTO</p>
          <p>
            <a
              className="text-slate-600 underline hover:cursor-pointer hover:no-underline hover:text-slate-500"
              href="https://linkedin.com/in/markeljan"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="inline"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
            &nbsp; &nbsp;
            <a
              className="text-slate-600 underline hover:cursor-pointer hover:no-underline hover:text-slate-500"
              href="https://twitter.com/0xMarkeljan"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="inline"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>
          </p>
        </div>

        <div className="col-1 mb-20">
          <Image src="/team/pixel-alex.png" alt="Alex" width={256} height={256} style={{}} />
          <h2 className="text-3xl dark:text-slate-400 font-bold my-3">Alex</h2>
          <p className="text-lg dark:text-slate-400 px-2 pb-3">Co-Founder & CEO</p>
          <p>
            <a
              className="text-slate-600 underline hover:cursor-pointer hover:no-underline hover:text-slate-500"
              href="https://linkedin.com/in/alexandrubiet"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="inline"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
            &nbsp; &nbsp;
            <a
              className="text-slate-600 underline hover:cursor-pointer hover:no-underline hover:text-slate-500"
              href="https://twitter.com/alex_biet"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="inline"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8 ">
        <div className="col-span-4 text-center">
          <h1 className="text-5xl font-bold dark:text-slate-400 pt-44" id="community">
            Join DeOracle Community
          </h1>
        </div>

        <div className="col-1"></div>
        <div className="col-span-2 text-center">
          <p className="text-2xl dark:text-slate-400 mt-5 mb-5">
            Join our community of new oracles, developers, early users, investors and community
            supporters.
          </p>
        </div>

        <div className="col-span-4 text-center">
          <a
            href="https://t.me/DeOracleXYZ"
            className="align-middle inline-block px-5 py-3 py-1 text-lg text-purple-600 font-semibold rounded-full border-2 border-purple-400 bg-gradient-to-r from-purple-100 from-purple-300 hover:bg-gradient-to-l hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 dark:text-black/80"
            target="_blank"
            rel="noreferrer"
          >
            Join Telegram Group
          </a>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-8 ">
        <div className="col-span-5 text-center">
          <h1 className="text-5xl font-bold dark:text-slate-400 pt-44 mb-20" id="supporters">
            Supporters
          </h1>
        </div>

        <div className="col-1 bg-white rounded-xl px-6 py-3 flex items-center">
          <Image src="/sovereign-labs.svg" alt="SovereignLabs.com" width={256} height={100} />
        </div>

        <div className="col-1 bg-white rounded-xl px-6 py-3 flex items-center justify-center">
          <Image src="/encode.png" alt="Encode.club" className="mx-auto" width={140} height={67} />
        </div>

        <div className="col-1 bg-white rounded-xl px-6 py-3 flex items-center">
          <Image src="/ethonline.svg" alt="ETHGlobal.com" width={256} height={100} />
        </div>

        <div className="col-1 bg-white rounded-xl px-6 py-3 flex items-center">
          <Image src="/hyperlane.svg" alt="Hyperlane.xyz" width={256} height={100} />
        </div>

        <div className="col-1 bg-white rounded-xl px-6 py-2 flex items-center">
          <Image src="/worldcoin.svg" alt="Worldcoin.org" width={256} height={100} />
        </div>
      </div>

      <footer className="container text-center py-10 px-10 mt-10">
        <button
          type="button"
          onClick={toggleTheme}
          className={
            "fixed right-5 bottom-5 rounded-full drop-shadow-md w-18 h-18 px-5 py-5 hover:right-7 hover:bottom-7 border-4 bg-origin-border hover:border-8 border-white/60 dark:border-white/30 opacity-75 hover:opacity-100 transition-all ease-in-out duration-500 bg-gradient-to-b " +
            `${darkMode ? "from-blue-900 to-purple-900" : "from-blue-600 to-sky-400"}`
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
          &copy; {copyrightYear} DeOracle.xyz &nbsp;.&nbsp;&nbsp;
          <a
            href="https://docs.deoracle.xyz"
            className="text-slate-400 underline hover:no-underline hover:text-slate-500"
            target="_blank"
            rel="noreferrer"
          >
            Docs
          </a>
          &nbsp;.&nbsp;&nbsp;
          <a
            href="https://app.deoracle.xyz"
            className="text-slate-400 underline hover:no-underline hover:text-slate-500"
            target="_blank"
            rel="noreferrer"
          >
            Testnet App
          </a>
        </p>
        <br />
        <br />

        <p className="text-slate-600">
          <a
            className="text-slate-600 underline hover:cursor-pointer hover:no-underline hover:text-slate-500"
            href="http://github.com/DeOracleXYZ"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="inline"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            className="text-slate-600 underline hover:cursor-pointer hover:no-underline hover:text-slate-500"
            href="https://twitter.com/DeOracleXYZ"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="inline"
              viewBox="0 0 16 16"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            className="text-slate-600 underline hover:cursor-pointer hover:no-underline hover:text-slate-500"
            href="https://t.me/DeOracleXYZ"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="inline"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
            </svg>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            className="text-slate-600 underline hover:cursor-pointer hover:no-underline hover:text-slate-500"
            href="mailto:contact@deoracle.xyz"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="inline"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg>
          </a>
        </p>
        <br />
      </footer>
    </>
  );
};

export default Home;
