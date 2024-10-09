/*import { useCallback } from "react";
import { generatePdf } from "../../../server/api/routers/utils/generatePdf";
import { api } from "~/trpc/react"; 
import blobStream from 'blob-stream'

const GeneratePdfButton = () => {
  const handleButtonClick = useCallback(async () => {
    let patientRecords;
    try {
        patientRecords = await api.patientRecord.getPatientRecords.query();
    }
    catch (e) {console.log(e)}*/

/*const iframe = document.querySelector('.myIframe')
    const pdf = generatePdf(blobStream, iframe, {
        name: 'Paciente de prueba',
        b_date: '10/10/02',
        r_date: '08/10/24',
        dx: 'saludable'
    });
  }, []);

  return (
    <div className="h-full w-32 items-center rounded-full bg-third py-2 text-center text-slate-100 drop-shadow-md hover:bg-[rgb(255,40,40)] sm:ml-[42%] sm:mt-3 md:ml-[48%] lg:ml-[45%] lg:mt-[5%] xl:ml-[138%] xl:mt-20">
    <button onClick={handleButtonClick}>Generate PDF</button>
    </div>
  );
};

export default GeneratePdfButton;*/
