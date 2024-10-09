// src/server/api/routers/utils/generatePdf.ts
/*import PDFDocument from 'pdfkit'

export const generatePdf = async (blobStream, iframe, patientRecord: { name: string, b_date: string, r_date: string, dx: string }) => {
    // This code will only run on the server-side
    const doc = new PDFDocument();
    const stream = doc.pipe(blobStream())
    doc.fontSize(25).text("Patient Information", 100, 100);
    doc.fontSize(18).text(`Name: ${patientRecord.name}`, 100, 150);
    doc.fontSize(18).text(`Date of birth: ${patientRecord.b_date}`, 100, 180);
    doc.fontSize(18).text(`Registration Date: ${patientRecord.r_date}`, 100, 210);
    doc.fontSize(18).text(`Diagnosis: ${patientRecord.dx}`, 100, 240);
    doc.end();
    stream.on('finish', function() {
        iframe.src = stream.toBlobURL('application/pdf');
    })
    return doc;
};
*/
