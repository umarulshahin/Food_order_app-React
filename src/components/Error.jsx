import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err =useRouteError();
    return (
        
        <div>
            <h1>Ooops...</h1>
            <h2>Somting is Wrong....</h2>
            <h1>{err.status}:{err.statusText}</h1>
        </div>
    )
};

export default Error;