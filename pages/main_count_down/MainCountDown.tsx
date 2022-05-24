import type { NextPage } from "next";
import { useState } from "react";
import CountDown from "../count_down/CountDown";
import Model from "../model/Model";

const MainCountDown: NextPage = () => {
  const [date, setDate] = useState(new Date("26 may 2022"));
  const [isOpen, setOpen] = useState(false);
  const [links, setLinks] = useState({
    facebookLink: "https://moonparty.xn--com-9o0a ",
    twitterLink: "https://moonparty.xn--com-9o0a ",
    setOpen: setOpen,
    urlData: "https://moonparty.xn--com-9o0a ",
  });

  return (
    <div>
      <CountDown data={date} setOpen={setOpen} />
      {isOpen && <Model links={links} />}
    </div>
  );
};

export default MainCountDown;
