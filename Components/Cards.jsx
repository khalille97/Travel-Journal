import React from "react"

function Cards(props){
    return(
        <div className="card">
            <img  
                src={props.imageUrl}
            />
            
            <h1 className="card-title">
                {props.title}
            </h1>

            <a href={`${props.googleMapsUrl}` } className="gglmap">view on Google maps</a> 
            
            <h3 className="card-location">{props.location}</h3>
            
            <h3 className="dates">{props.startDate} - {props.endDate}</h3>
            
            <p className="description">{props.description}</p>

            {/* <hr/> */}
            
        </div>
    )
}
export default Cards

