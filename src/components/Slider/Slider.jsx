import React, { useEffect, useRef, useState } from "react";
import "./Slider.css";
import {sliderData} from './sliderData'

const Slider = () => {
  let [counter, setCounter] = useState(1);

  useEffect(() => {
    let id = setInterval(function() {
      counter > sliderData.length ? setCounter(1) : setCounter(counter++);
    }, 3000);

    return () => {
      clearInterval(id);
    };
  });

  return (
    <div className="slider">
      <div className="slides">
        {sliderData.map((e, id) => (
          <input
            key={id}
            type="radio"
            name="radio-btn"
            id={`radio${e.id}`}
            checked={e.id === counter ? true : false}
            onChange={() => setCounter(e.id)}
          />
        ))}
        {sliderData && (
          <div className="slide first">
            {(sliderData[0].name || sliderData[0].desc) && (
              <div className="paragContainer">
                {sliderData[0].name && (
                  <p className="name">{sliderData[0].name}</p>
                )}
                {sliderData[0].desc && (
                  <p className="description">{sliderData[0].desc}</p>
                )}
              </div>
            )}
            <img
              src={sliderData[0].img.url}
              alt="not found"
              style={
                sliderData[0].img.width || sliderData[0].img.height
                  ? {
                      width: `${sliderData[0].img.width}px`,
                      height: `${sliderData[0].img.height}px`,
                      objectFit: "cover"
                    }
                  : {}
              }
            />
          </div>
        )}
        {sliderData.slice(1).map((e, id) => (
          <div key={id} className="slide">
            <div className="sliderContainer">
              {(e.name || e.desc) && (
                <div className="paragContainer">
                  {e.name && <p className="name">{e.name}</p>}
                  {e.desc && <p className="description">{e.desc}</p>}
                </div>
              )}
              <img
                style={
                  id === 0 && e.img.width
                    ? {
                        margin: `0 ${(1020 - e.img.width) / 2}px`,
                        width: `${e.img.width}px`,
                        height: `${e.img.height}px`,
                        objectFit: "cover"
                      }
                    : e.img.width || e.img.height
                    ? {
                        width: `${e.img.width}px`,
                        height: `${e.img.height}px`,
                        objectFit: "cover"
                      }
                    : {}
                }
                src={e.img.url}
                alt={e.img.alt ? e.img.alt : "Not found"}
              />
            </div>
          </div>
        ))}
        <div className="navigation-auto">
          {sliderData &&
            sliderData.map((e, id) => (
              <div key={id} className={`auto-btn${e.id}`}></div>
            ))}
        </div>
      </div>
      <div className="navigation-manual">
        {sliderData.map((e, id) => (
          <label
            key={id}
            htmlFor={`radio${e.id}`}
            className="manual-btn"
            onClick={() => setCounter(e.id)}
          ></label>
        ))}
      </div>
    </div>
  );
};

export default Slider;
