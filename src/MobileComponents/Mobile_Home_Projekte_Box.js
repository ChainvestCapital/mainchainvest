import React from "react";
import "./Mobile_Home_Projekte_Box.css";

function Mobile_Home_Projekt_Box(props) {
  return (
    <div>
      <div id="Mobile_Home_Projekt_Box_Wrapper">
        <div id="Mobile_Home_Projekt_Box_top">
          <img
            src={props.titleImg}
            id="Mobile_Home_Projekt_Box_Wrapper_BGImg"
          />
          <img src={props.Logo} id="Mobile_Home_Projekt_Box_Wrapper_LogoImg" />
        </div>
        <div id="Mobile_Home_Projekt_Box_MID">
          <h3 id="Mobile_Home_Projekt_Box_MID_h3">{props.title}</h3>
          <div id="Mobile_Home_Projekt_Box_MID_Kategorie_Wrapper">
            <img
              src={props.KategorieBildLink}
              id="Mobile_Home_Projekt_Box_MID_img"
            />
          </div>
        </div>
        <div id="Mobile_Home_Projekt_Box_BOTTOM">
          <div id="Mobile_Home_Projekt_Box_BOTTOM_Item">
            <h3 id="Mobile_Home_Projekt_Box_BOTTOM_Item_H3">
              {props.ErwarteteRendite}
            </h3>
            <h5 id="Mobile_Home_Projekt_Box_BOTTOM_Item_H5">
              Erwartete Rendite
            </h5>
          </div>
          <div id="Mobile_Home_Projekt_Box_BOTTOM_Item">
            <h3 id="Mobile_Home_Projekt_Box_BOTTOM_Item_H3">
              {props.Mindestinvestition}
            </h3>
            <h5 id="Mobile_Home_Projekt_Box_BOTTOM_Item_H5">
              Mindestinvestition
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobile_Home_Projekt_Box;
