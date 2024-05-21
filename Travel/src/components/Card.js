import { useState } from "react";

function Card({id,name,info,image,price,removeTour,keepTour,tours,button}){

    const[readMore,setReadMore]=useState(false);

    const description= readMore?info:`${info.substring(0,200)}....`;

    function readmoreHandler(){
        setReadMore(!readMore);
    }

    


    if(tours.length!==1 || !button ){
        console.log(button);
        return(
            <div className="card">
                <img src={image} className="image"></img>
                <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readMore ? `Show Less`:`Read More`}
                    </span>
    
                </div>
                </div>
                
             <button className="btn-red" onClick={ () => removeTour(id)}>
                Not Interested
             </button>
    
             <button className="btn-red" onClick={ () => keepTour(id)}>
                 Interested
             </button>
            </div>
        );
    }
    else if(tours.length===1 && button){
        return(
            <div className="card">
                <img src={image} className="image"></img>
                <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readMore ? `Show Less`:`Read More`}
                    </span>
    
                </div>
                </div>
                

            </div>
        );
    }
}

export default Card;