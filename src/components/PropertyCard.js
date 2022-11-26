import React from "react";
import "../App.css";
const PropertyCard = (card) => {
  return (
    <div className="col-sm-12 col-md-4 col-lg-4 mt-4 d-flex justify-content-center">
      <div className="PropertyCard">
        <img
          src={card.data.image}
          alt=""
          height="auto"
          width="100%"
          className="cardimage"
        ></img>
        <div className="cardbody">
          <div className="bodypricediv">
            <div className="bodyprice">
              ${card.data.priceperMonth}
              <div className="commonbody">month</div>
            </div>
            <button className="heartimage">
              <img
                src="/images/heart.png"
                alt=""
                height="24px"
                width="24px"
              ></img>
            </button>
          </div>
          <div className="place">
            {card.data.name}{" "}
            <div className="commonbody">({card.data.type})</div>
          </div>
          <div className="commonbody">
            {card.data.address}{" "}
            <div className="navtitle">{card.data.location}</div>
          </div>
          <div className="commonbody">
            {card.data.moveinDate.getFullYear().toString()}
          </div>
          <br></br>
          <div className="cardfooter">
            <div className="commonbody">
              <img
                src="/images/bed.png"
                alt=""
                height="20px"
                width="20px"
              ></img>
              {card.data.beds} beds
            </div>
            <div className="commonbody">
              <img
                src="/images/bathroom.png"
                alt=""
                height="20px"
                width="20px"
              ></img>
              {card.data.bathroom} bathroom
            </div>
            <div className="commonbody">
              <img
                src="/images/area.png"
                alt=""
                height="20px"
                width="20px"
              ></img>
              {card.data.squarefeet} sqft
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
