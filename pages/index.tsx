import type { NextPage } from "next";
import CountDown from "./count_down/CountDown";
import styles from "../styles/home.module.scss";
import { Module } from "module";
import MainCountDown from "./main_count_down/MainCountDown";

const Home: NextPage = () => {
  return (
    <div>
      <MainCountDown />
    </div>
  );
};

export default Home;
