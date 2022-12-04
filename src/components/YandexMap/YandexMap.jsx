import React from "react";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import ymaps$1 from "ymaps";

const YandexMap = () => {
  // var myMap = new ymaps$1.Map(
  //   "map",
  //   {
  //     center: [55.76, 37.64],
  //     zoom: 10,
  //   },
  //   {
  //     searchControlProvider: "yandex#search",
  //   }
  // );
  return (
    <div>
      {" "}
      <YMaps>
        <div>
          My awesome application with maps!
          <Map defaultState={{ center: [38.575503, 68.793562], zoom: 9 }}>
            <Placemark geometry={[38.575503, 68.793562]} />
            <Placemark geometry={[38.579021, 68.783206]} />
            <Placemark
              geometry={[38.538456, 68.77911]}
              properties={{
                iconCaption: "МТМУ 23",
              }}
            />
            {/* <Placemark
              geometry={[38.538456, 68.77911]}
              options={{
                iconLayout: "template",
              }}
            /> */}
          </Map>
        </div>
      </YMaps>
    </div>
  );
};

export default YandexMap;
