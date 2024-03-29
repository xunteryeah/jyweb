import React, { useEffect, useState } from "react";
import linkRight from "../../assets/images/link-right.jpg";
import dianhua from "../../assets/images/dianhua.svg";
import lianxiwomen from "../../assets/images/lianxiwomen.svg";
import "./index.scss";

function Contact(props) {
  const [anm, setAnm] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition, "scrollPosition");
      if (scrollPosition > 200) {
        setAnm(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div className="contact-page">
      <div className="contact-page-top">
        <div className="content">
          <div className="name">J.Y. Investment</div>
          <div className="tell">
            <img src={dianhua} alt="" />
            +86 18800001111
          </div>
          <div className="mail">
            <img src={lianxiwomen} alt="" />
            11@gmail.com
          </div>
        </div>
      </div>
      <div className="contact-page-middle">
        <div className="middle-content">
          <div className="middle-content-left">
            <div className="title">免费*快速为您注册公司</div>
            <input
              placeholder="公司名称"
              className={`comput-name ${anm ? "anm-comput" : ""}`}
            ></input>
            <input
              placeholder="预留电话"
              className={`tell-number ${anm ? "anm-tell" : ""}`}
            ></input>
            <div className={`link-people ${anm ? "anm-link" : ""}`}>
              快速为您匹配职业经理人
            </div>
          </div>
          <div className="middle-content-right">
            <img src={linkRight} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
