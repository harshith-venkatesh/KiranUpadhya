import React from "react";
import './language.module.css'
export default function Languages(){
    return (<>
    <h2 style={{textAlign:"center"}}>Languages proficient in: </h2>
        <div className="language__cards">

      <div className="language__card">Kannada</div>
      <div className="language__card">English</div>
      <div className="language__card">Hindi</div>
      <div className="language__card">Tulu</div>
      <div className="language__card">Marathi</div>
      <div className="language__card">Arabic</div>
      <div className="language__card">Konkani</div>

  </div>
  </>
    )
}