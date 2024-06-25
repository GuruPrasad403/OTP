import { useNavigate } from "react-router-dom";
export default function InputNumber(){
    const Navigater = useNavigate();
    return(
        <div>
            <div className="w-screen flex justify-center items-center">
                <input type="number" 
                placeholder="Enter Your Number"
                onChange={(e)=>{
                    let a = [...e.target.value]
                    console.log(a)
                    a.length>=10?e.target.blur() :e.target.focus();
                    
                }}
                className="sm:w4/5 w-5/12  h-10 p-5 placeholder:text-zinc-950 rounded-l " max={10}
                />
                 <button className=" bg-slate-300 ml-0.5 p-2"
                 onClick={()=>{
                        Navigater("/OTP")
                 }}>
                    Get OTP
                 </button>
            </div>
        </div>
    )
}