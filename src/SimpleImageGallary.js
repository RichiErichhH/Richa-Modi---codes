import img1 from "./image/img1.jpg";
import img2 from "./image/img2.jpg";
import img3 from "./image/img3.jpg";

function SimpleImageGallery() {
    const images = [
        {
            id: 1,
            pic : img1
        },
        {
            id: 2,
            pic : img2
        },
        {
            id : 3,
            pic : img3
        },
    ]
    return(
        <div>
            {images.map((value)=>(
                
                    <>
                        <img src={value.pic} height="200px" width="200px" alt="logo"/>
                        <h3>{value.id}</h3>
                    </>   
            ))}
        </div>


    )

}
export default SimpleImageGallery;