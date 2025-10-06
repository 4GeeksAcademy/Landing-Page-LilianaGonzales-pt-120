import react from "react";
 
import Portada from "./Portada";
import Card from "./Card";

import { listData } from "../data";

const Body = ()=>{

    return(
        <div>
            <Portada/>
            <div className="row d-flex mx-5">
            {/* <div class="row row-cols-1 row-cols-md-2 row-cols-l-3 g-3"> */}
                
                {/* <div className="col-lg-3"><Card/></div>
                <div className="col-lg-3"><Card/></div>
                <div className="col-lg-3"><Card/></div>
                <div className="col-lg-3"><Card/></div> */}


                {/* {
                  listData.map((element,index)=>{
                    console.log(element.imagen);
                   return <div className="col-lg-3" key={index}> <Card imagen= {element.imagen}/></div>
                  })
                } */}

                {
                  listData.map((element,index)=>(
                    <div className="col-lg-3" key={index}> <Card imagen= {element.imagen}/></div> 
                  ))
                }

                
            </div>
            
        </div>
        
    )
}
export default Body;