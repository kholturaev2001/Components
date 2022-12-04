import React, { useEffect, useState } from "react";
import EDonish from "./images/EDonish";
import styles from "./SMSLinkTeacher.module.scss";
import RUFlag from "./images/RU.svg";
import TJFlag from "./images/TJ.svg";
import ENFlag from "./images/EN.svg";
import Arrow from "./images/Arrow";
import PassIcon from "./images/PassIcon.svg";
import UserIcon from "./images/UserIcon.svg";
import EyeIcon from "./images/EyeIcon.svg";
import ClosedEye from "./images/ClosedEye.svg";
import tj from "./locales/langs/tj/global.json";
import ru from "./locales/langs/ru/global.json";
import en from "./locales/langs/en/global.json";
import copy from "copy-to-clipboard";
import { user } from "./locales/mockApiData";
import globe from "./images/Globe.svg";

const SMSLinkTeacher = () => {
  const oneUser = user[2];
  const [data, setData] = useState({});
  const [loginCopied, setLoginCopied] = useState(false);
  const [passCopied, setPassCopied] = useState(false);
  const [currentLang, setCurrentLang] = useState({
    id: 1,
    name: "ТҶ",
    locales: "tg",
    img: TJFlag,
  });

  const language = [
    {
      id: 1,
      name: "ТҶ",
      locales: "tg",
      img: TJFlag,
    },
    {
      id: 2,
      name: "РУ",
      locales: "ru",
      img: RUFlag,
    },
    {
      id: 3,
      name: "EN",
      locales: "en",
      img: ENFlag,
    },
  ];

  useEffect(() => {
    if (currentLang.id === 1) {
      setData(tj);
    } else if (currentLang.id === 2) {
      setData(ru);
    } else {
      setData(en);
    }
  }, [currentLang.id]);

  const [arrow, setArrow] = useState(false);
  const [eye, setEye] = useState(true);

  const toggle = () => {
    setEye((e) => !e);
  };

  const arrowToggle = () => {
    setArrow((e) => !e);
  };

  const copyToClipboardPass = () => {
    copy(oneUser.password);
    setPassCopied(true);
    setLoginCopied(false);
  };

  const copyToClipboardLogin = () => {
    copy(oneUser.login);
    setLoginCopied(true);
    setPassCopied(false);
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <EDonish />
          <section>
            <button onClick={arrowToggle}>
              <img src={currentLang.img} alt="flag" />
              <p>{currentLang.name}</p>
              <Arrow className={arrow ? styles.down : styles.up} />
            </button>
            {arrow && (
              <div className={styles.lngs_container}>
                {language.map(
                  (el) =>
                    el.id != currentLang.id && (
                      <button
                        className={styles.lng_btns}
                        onClick={() => {
                          setCurrentLang(el);
                          setArrow((e) => !e);
                        }}
                      >
                        <img src={el.img} alt="not found" />{" "}
                        <span>{el.name}</span>
                      </button>
                    )
                )}
              </div>
            )}
          </section>
        </div>
        <div className={styles.descriptionTxt}>
          <p>
            {}{" "}
            {`${data?.greetingOne} ${oneUser.last_name} ${oneUser.first_name}! ${data?.greetingTwo} `}
          </p>
          <p>{data?.yourLogin}</p>
        </div>
        <div className={styles.login}>
          <div>
            <div className={styles.Btn} onClick={copyToClipboardLogin}>
              {loginCopied && (
                <div className={styles.titleCopy}>
                  <div className={styles.square}>
                    <p>{loginCopied ? "Скопировано" : "Скопировать"}</p>
                  </div>
                </div>
              )}
              <div>
                <img src={UserIcon} alt="login" />
              </div>
              <p>{oneUser.login}</p>
            </div>
            <div className={styles.Btn}>
              {passCopied && (
                <div className={styles.titleCopy}>
                  <div className={styles.square}>
                    <p>{passCopied ? "Скопировано" : "Скопировать"}</p>
                  </div>
                </div>
              )}
              <div>
                <img src={PassIcon} alt="login" />
              </div>
              <p onClick={copyToClipboardPass}>
                {eye
                  ? Array(oneUser.password.length + 1).join("•")
                  : oneUser.password}
              </p>
              <div
                onClick={toggle}
                title={eye ? data?.showPassword : data?.hidePassword}
              >
                <img src={eye ? EyeIcon : ClosedEye} alt="login" />
              </div>
            </div>
          </div>
        </div>
        <p className={styles.appCont}>{data?.appDownload}</p>
        <div className={styles.downAppLogo}>
          <div>
            <a href="https://edonish.tj/">
              {" "}
              <img src={globe} alt="globe" />
              <p>www.edonish.tj</p>
            </a>
          </div>
        </div>
      </div>
      <a href="tel:0021">
        <p>{data?.callCenter}</p>
      </a>
    </div>
  );
};

export default SMSLinkTeacher;
