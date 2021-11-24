import "./Home_Projekte_Box.css";

import arrow from "../assets/images/Arrow_white.png";
function Home11_Proj_Comp(props) {
  return (
    <div>
      <div id="Home11_Proj_Comp_Wrapper">
        <div id="Home11_Proj_Comp_top">
          <img src={props.titleImg} id="Home11_Proj_Comp_BG_Img" alt="" />
          <img src={props.Logo} id="Home11_Proj_Comp_Logo_Img" alt="" />
        </div>
        <div id="Home11_Proj_Comp_Mid">
          <div id="Home11_Proj_Comp_Mid_Left">
            <h2 id="Home11_Proj_Comp_Mid_title_h2">{props.title} </h2>
            <h4 id="Home11_Proj_Comp_Bottom_Button_h4">{props.Emittent}</h4>
          </div>
          <div id="Home11_Proj_Comp_Mid_Kategorie">
            <img
              src={props.KategorieBildLink}
              id="Home11_Proj_Comp_Mid_Kat_img"
              alt=""
            />
          </div>
        </div>
        <div id="Home11_Proj_Comp_Bottom">
          <div id="Home11_Proj_Comp_Bottom_Button_Wrapper">
            <h2 id="Home11_Proj_Comp_Bottom_Button_h2">
              {props.ErwarteteRendite}
            </h2>
            <h4 id="Home11_Proj_Comp_Bottom_Button_h4">Erwartete Rendite</h4>
          </div>
          <div id="Home11_Proj_Comp_Bottom_Button_Wrapper">
            <h2 id="Home11_Proj_Comp_Bottom_Button_h2">
              {props.Finanzierungsvolumen}{" "}
            </h2>
            <h4 id="Home11_Proj_Comp_Bottom_Button_h4">Finanzierungsvolumen</h4>
          </div>
        </div>
        <div id="Home11_Proj_Comp_Go_To">
          <div id="Top_Menue_Bar_Button_yellow">
            <h3 id="Top_Menue_Bar_h3_white">Zum Projekt</h3>
            <img src={arrow} id="Top_Menue_Bar_Button_yellow_IMG" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home11_Proj_Comp;
