import "./Top_Menue.css";
import logo from "../assets/images/Logo_Trans.png";
import arrow from "../assets/images/Arrow_white.png";
import { Link } from "react-router-dom";

function Top_Menue_Bar(props) {
  return (
    <div>
      <div id="Top_Navigation_Bar">
        <Link to="../home">
          <img src={logo} id="Top_Menue_Bar_logo_imgx" />
        </Link>
        <div id="Top_Navigation_Bar_RightWrapper_INNer">
          <div id="Top_Navigation_Bar_Spalte1">
            {" "}
            <h3 id="Top_Menue_Bar_h3">Digitale Wertpapiere</h3>
            <div id="Top_Navigation_Bar_Spalte1_Item1">
              <h3 id="Top_Menue_Bar_h3">Was ist das?</h3>
            </div>{" "}
            <Link to="../alleProjekte">
              <div id="Top_Navigation_Bar_Spalte1_Item1">
                <h3 id="Top_Menue_Bar_h3">Alle Projekte</h3>
              </div>
            </Link>
            <Link to="../Sekundärmärkte">
              <div id="Top_Navigation_Bar_Spalte1_Item1">
                <h3 id="Top_Menue_Bar_h3">Sekundärmärkte</h3>
              </div>
            </Link>
          </div>{" "}
          <div id="Top_Navigation_Bar_RightWrapper_INNerx">
            <Link to="../Für_Unternehmen">
              <div id="Top_Navigation_Bar_Spalte2">
                {" "}
                <h3 id="Top_Menue_Bar_h3">Für unternehmen</h3>
              </div>{" "}
            </Link>
            <Link to="../Über-Uns">
              {" "}
              <div id="Top_Navigation_Bar_Spalte3">
                {" "}
                <h3 id="Top_Menue_Bar_h3">Über Uns</h3>
              </div>{" "}
            </Link>
            <Link to="../alleProjekte">
              {" "}
              <div id="Top_Menue_Bar_Button_yellow">
                <h3 id="Top_Menue_Bar_h3_white">Alle Projekte</h3>
                <img src={arrow} id="Top_Menue_Bar_Button_yellow_IMG" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top_Menue_Bar;
