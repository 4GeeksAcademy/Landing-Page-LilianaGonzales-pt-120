import react from "react";
 
import Portada from "./Portada";
import Card from "./Card";
const Body = ()=>{
    return(
        <div>
            <Portada/>
            <div className="row d-flex mx-5">
                
                <div className="col-lg-3"><Card/></div>
                <div className="col-lg-3"><Card/></div>
                <div className="col-lg-3"><Card/></div>
                <div className="col-lg-3"><Card/></div>
                
            </div>
            
        </div>
        
    )
}
export default Body;