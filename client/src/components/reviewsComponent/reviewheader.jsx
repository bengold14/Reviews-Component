import React from "react"

var ReviewHeader = function (props) {
  const {Username, Date, User_Contributions, Helpful_Votes,Image_Location, Location} = props.reviewHeader; 
  return (
    <div className="review-header">
      <div className="review-header-content">
        <div className="image-cropper">
          <img className="header-image" src={"./avatars/0"+ (Image_Location.length < 2 ? ("0" + Image_Location) : Image_Location) + ".jpeg" }></img> 
        </div>
        <div className="header-text">
          <div className="user">
          <b id="black" className="on-click">{Username}</b> <span> wrote a review on {Date}</span>
          </div>
          <div className="location">
            <img className="location-icon" src="./icons/Location.png"></img>
            <span>{Location} </span>
            <img className="location-spacer" src="./icons/Spacer.png"></img>
            <span> <b>{User_Contributions}</b> contributions </span>
            <img className="location-spacer" src="./icons/Spacer.png"></img>
            <span> <b>{Helpful_Votes}</b> helpful votes </span>
          </div>
        </div>
        <img className="follow" src="./icons/Follow.png"></img>
      </div>
    </div>
  )
}

export default ReviewHeader