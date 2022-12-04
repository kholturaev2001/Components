import React, { useState } from "react";
import Boxes from "./components/Boxes/Boxes";
import "./style.css";
import Slider from "./components/Slider/Slider";
import StatisticsHeader from "./components/StatisticsHeader/StatisticsHeader";
import Statistics from "./components/Statistics/Statistics";
import GenStat from "./components/GenStat/GenStat";
import InputContainer from "./components/Input/InputContainer";
import SubmitBtnContainer from "./components/SubmitBtn/SubmitBtnContainer";
import SelectorContainer from "./components/Selector/SelectorContainer";
import HeadlineContainer from "./components/Headlines/HeadlineContainer";
import TableContainer from "./components/PaginationTwo/Table/TableContainer";
import TablePaginationContainer from "./components/Pagination/TablePaginationContainer";
import Modal from "./components/Modal/Modal";
import InputWithSearchCont from "./components/InputWithSearch/InputWithSearchCont";
import SMSLink from "./components/SMSLink/SMSLink";
import SMSLinkTeacher from "./components/SMSLinkTeacher/SMSLinkTeacher";
import { Link, Outlet, Route, Routes, useParams } from "react-router-dom";
import WebWorker from "./components/WebWorker/WebWorker";
import YandexMap from "./components/YandexMap/YandexMap";
import SaveInLocalStorage from "./components/SaveInLocalStorage/SaveInLocalStorage";
import UseMemo from "./components/Hooks/UseMemo/UseMemo";
import UseCallback from "./components/Hooks/UseCallback/UseCallback";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <UseCallback />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
