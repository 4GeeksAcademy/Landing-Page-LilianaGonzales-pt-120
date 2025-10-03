import react from "react";
const Card = ()=>{
    return(
        <div>
            <div className="card" style={{width:"21rem"}}>
                <img src="https://i.pinimg.com/736x/ba/c7/ac/bac7ac79a02af1fa4da8c28f0b41b797.jpg" className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <hr/>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}
export default Card;