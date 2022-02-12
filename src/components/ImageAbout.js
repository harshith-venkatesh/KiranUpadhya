import React from "react";
import './language.module.css'
import carAccident from '../img/carAccident.png';
import odometer from "../img/odometerTampering.png";
export default function ImageAbout(){
    return (<>

                  <img
                    src={carAccident}
                    alt="CarAccident"
                    style={{ width: "25em", height: "20em", backgroundColor:'white',  margin:"0.5em" }}
                  />
                  <img
                    src={odometer}
                    alt="CarAccident"
                    style={{ width: "25em", height: "20em", backgroundColor:'white',  margin:"0.5em" }}
                  />
  </>
    )
}