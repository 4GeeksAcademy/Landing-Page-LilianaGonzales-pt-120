import react from "react";
const Portada = ()=>{
    return(
        <div className="mx-5 my-5 px-3 py-3" style={{background:"#dee2e6"}}>
            {/* <div class="row"> */}
            <h1 className="pt-5 titulo">A Warm Welcome!</h1>
            <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
            </p>
            <div className="pb-4">
            <button class="btn btn-primary" type="button">Button</button>
            </div>
            {/* </div> */}
        </div>
    )
}
export default Portada;