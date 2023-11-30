import { useLoaderData } from "react-router-dom";
import ShowPdf from "../ShowPdf/ShowPdf";


const Mark = () => {
    const data =useLoaderData()
    
    return (
        <div>
           <div>
            <ShowPdf key={data._id} data={data}/>
           </div>
        </div>
    );
};

export default Mark;