import React from 'react';
import QRCode from 'qrcode.react';

export default function qrCode( props) {
  const {valueString, documentId} =props;


  return (
    <div>
      <QRCode
        value={valueString}
        id = {documentId}
        size ={128}
        bgColor={'white'}
        fgColor={'black'}
        level ={'H'}
        includeMargin={true}
        style={{ margin: "10px auto "}}
      />
    </div>
  )
}
