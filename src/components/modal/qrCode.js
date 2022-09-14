import React,{ useRef } from 'react';
import {QRCodeCanvas}from 'qrcode.react';
import jsPDF from 'jspdf';


export default function QrCode( props) {
  const {valueString, documentId} =props;
  const qrRef = useRef();

  const generatePdf = () => {
    let doc = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: [84, 40]
    });
    
    doc.setFontSize(15);
    doc.text('Bolarinwa1', 43, 20);

    doc.setFontSize(10);
    doc.text('Go Global', 43, 28);
    let canvas = qrRef.current.querySelector("canvas");
    doc.addImage(canvas, 'png', 0, 0, 40, 40);
    
    doc.save('ticket.pdf')
  } 

  const qrcode = (
    <QRCodeCanvas
        value={valueString}
        id = {documentId}
        size ={128}
        bgColor={'white'}
        fgColor={'black'}
        level ={'H'}
        includeMargin={true}
        style={{ margin: "10px auto "}}
      />
  );


  return (
    <div >   
      <div ref={qrRef}>{qrcode}</div>
      <div className='flex justify-center items-center'>
        <button className='submitBtn' onClick={generatePdf} >Download Ticket</button>
      </div>
    </div>
  )
}
