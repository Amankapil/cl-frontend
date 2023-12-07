import React from "react";
import c from "./logo-svgs/c.svg";
import o from "./logo-svgs/o.svg";
import d from "./logo-svgs/d.svg";
import e from "./logo-svgs/e.svg";
import l from "./logo-svgs/l.svg";
import i from "./logo-svgs/i.svg";
import n from "./logo-svgs/n.svg";
import a from "./logo-svgs/a.svg";
import r from "./logo-svgs/r.svg";

const LogoAnimate = () => {
  return (
    <div className="flex logo-imgs justify-cnter items-end ">
      {/* <span className="c-img flex"> */}
      <span>
        <img src={c} alt="" />
      </span>
      <span>
        <img src={o} alt="" />
      </span>
      <span>
        <img src={d} alt="" />
      </span>

      <span>
        <img src={e} alt="" />
      </span>

      <span>
        <img src={l} alt="" />
      </span>
      <span className="ai-logo">
        <img src={i} alt="" />
      </span>
      <span>
        <img src={n} alt="" />
      </span>

      <span>
        <img src={e} alt="" />
      </span>

      <span className="ai-logo-a">
        <img src={a} alt="" />
      </span>
      <span>
        <img src={r} alt="" />
      </span>
      {/* </span> */}
    </div>
  );
};

export default LogoAnimate;
