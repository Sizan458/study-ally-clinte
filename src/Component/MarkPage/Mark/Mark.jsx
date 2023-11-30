import { useLoaderData } from "react-router-dom";
import ShowPdf from "../ShowPdf/ShowPdf";


const Mark = () => {
    const data =useLoaderData()
    console.log(data)
    return (
        <div>
           <div>
            <ShowPdf key={data._id} data={data}/>
           </div>
        </div>
    );
};

export default Mark;