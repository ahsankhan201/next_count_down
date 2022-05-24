import type { NextPage } from "next";
import { useState } from "react";
import CountDown from "../count_down/CountDown";
import Model from "../model/Model";

const MainCountDown: NextPage = () => {
  const [date, setDate] = useState(new Date("26 may 2022"));
  const [isOpen, setOpen] = useState(false);
  const [links, setLinks] = useState({
    facebookLink: "https://moonparty.com",
    twitterLink: "https://moonparty.com",
    setOpen: setOpen,
    urlData: "https://moonparty.com",
  });

  return (
    <div>
      <CountDown data={date} setOpen={setOpen} />
      {isOpen && <Model links={links} />}
    </div>
  );
};

export default MainCountDown;
