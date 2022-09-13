import React from 'react'
import jsPDF from 'jspdf'

export default function PdfGenerator() {
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber] = useState(1);


  //  const onDocumentLoadSuccess =({ numPages }) =>{
  //       setNumPages(numPages);
  //   }

  const generatePDF = () => {
      let doc = new jsPDF('p', 'pt');
      
      doc.text(20, 20, 'This is the first title.')
      doc.addFont('helvetica', 'normal')
      doc.text(20, 60, 'This is the second title.')
      doc.text(20, 100, 'This is the thrid title.')      
      
      doc.save('demo.pdf')
    }   
    
  return (
    <div>
      <div>
            <button onClick={generatePDF} type="primary">Download PDF</button> 
         </div>
    </div>
  )
}
