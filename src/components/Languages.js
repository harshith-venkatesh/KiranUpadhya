import React from "react";
import './language.module.css'
export default function Languages(){
    return (<>
    <h2 style={{textAlign:"center"}}>Languages proficient in: </h2>
        <div className="language__cards">
    <div className="language__card language__card-1">
      <h2 className="language__card__title">Kannada</h2>
      
    </div>
    <div className="language__card language__card-2">
      <h2 className="language__card__title">English</h2>
      
    </div>
    <div className="language__card language__card-3">
      <h2 className="language__card__title">Hindi</h2>
      
    </div>
    <div className="language__card language__card-4">
      <h2 className="language__card__title">Marathi</h2>
      
    </div>
    <div className="language__card language__card-5">
      <h2 className="language__card__title">Tulu</h2>
     
    </div>
    <div className="language__card language__card-1">
      <h2 className="language__card__title">Arabic</h2>
      
    </div>
    <div className="language__card language__card-2">
      <h2 className="language__card__title">Konkani</h2>
      
    </div>
  </div>
  </>
    )
}