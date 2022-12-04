import React from "react";
import boxes from "./boxesData";
import BoxOn from "./BoxOn";
import "./Boxes.css";
import { useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

function Boxes() {
  const [squares, setSquares] = React.useState(boxes);

  const inputRef = useRef(null);

  /* It works well, but with a bug: only the 1st page is loaded */
  // const handleDownloadPdf = async () => {
  //   const element = inputRef.current;
  //   const canvas = await html2canvas(element);
  //   const data = canvas.toDataURL("image/png");

  //   const pdf = new jsPDF();
  //   const imgProperties = pdf.getImageProperties(data);
  //   const pdfWidth = pdf.internal.pageSize.getWidth();
  //   const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
  //   pdf.addImage(data, "PNG", 1, 0, pdfWidth, pdfHeight);
  //   pdf.save("print.pdf");
  // };

  const handleDownloadPdf = async () => {
    const element = inputRef.current;
    const canvas = await html2canvas(element);
    var imgData = canvas.toDataURL("image/png");
    var imgWidth = 210;
    var pageHeight = 295;
    var imgHeight = (canvas.height * imgWidth) / canvas.width;
    var heightLeft = imgHeight;
    var doc = new jsPDF("p", "mm");
    var position = 10; // give some top padding to first page

    doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position += heightLeft - imgHeight; // top padding for other pages
      doc.addPage();
      doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    doc.save("file.pdf");
  };




  /* One of the ways/variants for toggle */
  // const toggle = id => {
  //   setSquares(prevSquares => {
  //     const newSquares = [];
  //     for (let i = 0; i < prevSquares.length; i++) {
  //       const currentSquare = prevSquares[i];
  //       if (currentSquare.id === id) {
  //         const updatedSquare = {
  //           ...currentSquare,
  //           on: !currentSquare.on
  //         };
  //         newSquares.push(updatedSquare);
  //       } else {
  //         newSquares.push(currentSquare);
  //       }
  //     }
  //     return newSquares;
  //   });
  // };

  const toggle = (id) => {
    setSquares((prevSquares) => {
      return prevSquares.map((item) => {
        return item.id === id ? { ...item, on: !item.on } : item;
      });
    });
  };

  const squareElements = squares.map((item) => {
    return <BoxOn toggle={() => toggle(item.id)} key={item.id} on={item.on} />;
  });

  return (
    <>
      <div ref={inputRef} className="main">
        <h2>Boxes are going to appear here</h2>
        <div className="boxes">{squareElements}</div>
        <button className="button" onClick={handleDownloadPdf}>PDF Convert</button>
      </div>
    </>
  );
}

export default Boxes;
