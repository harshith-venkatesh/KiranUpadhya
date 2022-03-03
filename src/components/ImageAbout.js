import React from "react";
import './language.module.css'
import carAccident from '../img/carAccident.png';
import odometer from "../img/odometerTampering.png";
export default function ImageAbout(){
    return (<>

<ul>
                
                <li>
                    <p style={{fontSize:"20px"}}>✅ “I don’t know anything about the car, whether it has gone through an accident or not ?”</p>
                <img
                    src={carAccident}
                    alt="CarAccident"
                    style={{ width: "25em", height: "20em", backgroundColor:'white',  margin:"0.5em" }}
                  />
                
                </li>
                <li>
                ✅ “I don’t know anything about the previous owner and how he used the car.”
                </li>
                <li>
                <p>✅ “How do I know that the car I buy will be well-maintained?”</p>
                </li>
                <li>
                ✅  “What kind of assurance will I get with regards to the quality of a used car?”
                </li>
                </ul>
                  
                  <img
                    src={odometer}
                    alt="CarAccident"
                    style={{ width: "25em", height: "20em", backgroundColor:'white',  margin:"0.5em" }}
                  />
  </>
    )
}