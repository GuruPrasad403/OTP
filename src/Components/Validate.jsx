import { useNavigate } from "react-router-dom"


export default function Validate(){
    const Navigate = useNavigate();
    return(
        <div className="flex flex-col justify-center items-center gap-14"> 
            <div className="flex flex-row justify-center items-center gap-8">
                <div><input className=" w-16 h-14 shadow-sm" type="number" /></div>
                <div><input className=" w-16 h-14 shadow-sm" type="number" /></div>
                <div><input className=" w-16 h-14 shadow-sm"  type="number"/></div>
                <div><input className=" w-16 h-14 shadow-sm" type="number" /></div>
            </div> 
            <div className="flex flex-row items-center  justify-center gap-20">
            <button className="bg-white w-20 p-2 rounded"> 
                Submit
            </button>
            <button className="bg-white w-20 p-2 rounded"
            onClick={()=>{
                Navigate("/")
            }}> 
              Back
            </button>
            </div>
        </div>
    )
}