import "./Home.css";
import { Link } from "react-router-dom";

import awsExports from "./aws-exports";
import { API, graphqlOperation } from "aws-amplify";
import { listProjekts } from "./graphql/queries";
import Amplify from "aws-amplify";

import { useState, useEffect } from "react";
import Home11_Proj_Comp from "./Components/Home_Projekte_Box";
import Top_nav_Bar from "./Components/Top_Menue";
import Footer from "./Components/Footer.js";

import TL_Img from "./assets/images/TL_Img.png";
import UR_Img from "./assets/images/UR_Img.png";

import Mobile_menue from "./MobileComponents/Mobile_Top_Nav";
import Mobil_IT from "./assets/images/Mobil_IT.png";
import Mobil_KV from "./assets/images/Mobil_KV.png";
import Mobile_Footer from "./MobileComponents/Mobile_Footer";
import OR_Img from "./assets/images/OR_Img.png";
import Mobile_Home_Projekt_Box from "./MobileComponents/Mobile_Home_Projekte_Box";
Amplify.configure(awsExports);

function Home() {
  return (
    <div>
      <div id="Desktop_Wrapper">
        <Top_nav_Bar />
        <div id="Div_Home_Top_Section">
          <div id="Div_Home_Top_Section_Left">
            <h1 id="CV_h1_dark">Digitale Wertpapiere auf</h1>
            <h1 id="CV_h1_yellow">Chainvest</h1>
            <h3 id="CV_h3_dark">
              BLOCKCAP stellt die Schnittstelle zwischen spannenden
              Investitionsprojekten und einer breiten Investorencommunity dar.
              Über diese Plattform erhalten AnlegerInnen Zugang zu vielfältigen
              Security Token Offerings aus unterschiedlichen Branchen.
            </h3>
          </div>
          <div id="Div_Home_Top_Section_Right">
            <div id="Div_Home_Top_Section_Right_Spalte_left">
              <div id="Div_Home_Top_Section_Right_TL_Wrapper">
                <img src={TL_Img} id="Div_Home_Top_Section_Right_TL_Img" />
              </div>
              <div id="Div_Home_Top_Section_Right_BL_Wrapper">
                <h3 id="Div_Home_Top_Section_Right_BR_Wrapper_h3">
                  Was sind digitale Wertpapiere ?
                </h3>
                <h5 id="Div_Home_Top_Section_Right_BR_Wrapper_h5">
                  BLOCKCAP stellt die Schnittstelle zwischen spannenden
                  Investitionsprojekten und einer breiten Investorencommunity
                  dar. Über diese Plattform erhalten AnlegerInnen Zugang zu
                  vielfältigen Security Token Offerings aus unterschiedlichen
                  Branchen.
                </h5>
              </div>
            </div>

            <div id="Div_Home_Top_Section_Right_Spalte_right">
              <div id="Div_Home_Top_Section_Right_TR_Wrapper">
                <img src={OR_Img} id="Div_Home_Top_Section_Right_OR_Img" />
              </div>
              <div id="Div_Home_Top_Section_Right_BR_Wrapper">
                <img src={UR_Img} id="Div_Home_Top_Section_Right_UR_Img" />
              </div>
            </div>
          </div>{" "}
          <div id="Div_Home_Top_Section_Layer"></div>
          <div id="Div_Home_Top_Section_Layer_Form"></div>
        </div>

        <div id="Div_Home_Projekt_Section">
          <div id="Div_Home_Projekt_Section_Padding">
            <h5 id="Div_Home_CV_Section_LEFT_h5">Digitale Wertpapiere</h5>
            <h2 id="Div_Home_CV_Section_LEFT_h2">Projekte</h2>
            <ul id="home_projekte_ul_id">
              {DreierProjekteArray.map((Projekt) => (
                <li id="home_projekte_li_11">
                  <Link to={Projekt.InternerLink}>
                    <Home11_Proj_Comp
                      title={Projekt.name}
                      KategorieBildLink={Projekt.KategorieBildLink}
                      Finanzierungsvolumen={Projekt.Finanzierungsvolumen}
                      ErwarteteRendite={Projekt.ErwRendite}
                      Typ={Projekt.Typ}
                      Logo={Projekt.LogoLink}
                      titleImg={Projekt.TitleLink}
                      Emittent={Projekt.Emittent}
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="./alleProjekte">
              <div id="Div_Home_Projekt_Section_ALLE_BUTTON">
                <h2 id="Div_Home_Projekt_Section_alle_h2">Alle Projekte</h2>
              </div>
            </Link>
          </div>
          <div id="Div_Home_Projekte_Section_Layer"></div>
          <div id="Div_Home_Projekte_Section_Layer_Form"></div>
          <div id="Div_Home_CV_Section">
            <div id="Div_Home_CV_Section_iNNER">
              <div id="Div_Home_CV_Section_LEFT">
                <h5 id="Div_Home_CV_Section_LEFT_h5">Über uns</h5>
                <h2 id="Div_Home_CV_Section_LEFT_h2">
                  Was ist <br />
                  Chainvest
                  <br /> Capital
                </h2>
              </div>
              <div id="Div_Home_CV_Section_RIGHT">
                <h4 id="Div_Home_CV_Section_RIGHT_h4">
                  Das disruptive Potenzial der Blockchain-Technologie verändert
                  die bestehende Infrastruktur der Kapitalmärkte. GründerInnen
                  und AnlegerInnen werden neue Möglichkeiten der Kapitalaufnahme
                  eröffnet, losgelöst von zentralen Instanzen. <br />
                  <br />
                  Veränderungsprozesse sind aber auch gleichzeitig mit
                  Unsicherheiten und das Lösen von zentralen Instanzen mit
                  Ungewissheiten verbunden. Mit Chainvest Capital schaffen wir
                  transparentere Rahmenbedingungen auf dem Markt für digitale
                  Wertpapiere und so mehr Vertrauen in die Tokenisierung von
                  Finanzinstrumenten.
                  <br />
                  <br /> Als Informationsplattform für digitalisierte
                  Wertpapiere informiert Chainvest Capital rund um die
                  Fragestellungen der Blockchain-Technologie im
                  Finanzdienstleistungssektor. Mit Chainvest Capital  erhalten
                  AnlegerInnen Zugang zu vielfältigen Investitionsprojekten aus
                  unterschiedlichen Branchen.
                </h4>
              </div>{" "}
            </div>

            <div id="Div_Home_CV_Section_Layer"></div>
          </div>{" "}
        </div>
        <Footer />
      </div>
      <div id="Mobile_Wrapper">
        <div id="Mobile_Home_Wrapper">
          <Mobile_menue />

          <div id="Mobile_Home_Layer"></div>
          <div id="Mobile_Home_Wrapper_Content">
            <div id="Mobile_Home_Top_Sec">
              <h2 id="Mobile_Home_Top_Sec_H2">Digitale</h2>
              <h2 id="Mobile_Home_Top_Sec_H2_yellow">Wertpapiere</h2>
              <h5 id="Mobile_Home_Top_Sec_H5">
                Chianvest Capital stellt die Schnittstelle zwischen spannenden
                Investitionsprojekten und einer breiten Investorencommunity dar.
                Über diese Plattform erhalten AnlegerInnen Zugang zu
                vielfältigen Security Token Offerings aus unterschiedlichen
                Branchen.
              </h5>
              <div id="Mobile_Home_Top_Wertpapiere">
                <div id="Mobile_Home_Top_Kachel">
                  <h3 id="Mobile_Home_Top_Kachel_h3">
                    Was sind digitale Wertpapiere?
                  </h3>
                  <h5 id="Mobile_Home_Top_Kachel_h5">
                    Chianvest Capital stellt die Schnittstelle zwischen
                    spannenden Investitionsprojekten und einer breiten
                    Investorencommunity dar. Über diese Plattform erhalten
                    AnlegerInnen Zugang zu vielfältigen Security Token Offerings
                    aus unterschiedlichen Branchen.
                  </h5>
                </div>
                <div id="Mobile_Home_Top_Wertpapiere_Right">
                  <img src={Mobil_KV} id="Mobil_KV" />
                  <img src={Mobil_IT} id="Mobil_IT" />
                </div>
              </div>
            </div>
            <div id="Mobile_Home_Projekt_Sec">
              <h2 id="Mobile_Home_Projekt_h2">Projekte</h2>
              <ul id="Mobile_Home_Projekt_Sec_Grid">
                {ViererProjekteArray.map((Projekt) => (
                  <li id="home_mobil_projekte_li_11">
                    <Link to={Projekt.InternerLink}>
                      <Mobile_Home_Projekt_Box
                        title={Projekt.name}
                        KategorieBildLink={Projekt.KategorieBildLink}
                        Finanzierungsvolumen={Projekt.Finanzierungsvolumen}
                        ErwarteteRendite={Projekt.ErwRendite}
                        Typ={Projekt.Typ}
                        Logo={Projekt.LogoLink}
                        titleImg={Projekt.TitleLink}
                        Mindestinvestition={Projekt.Mindestinvestition}
                        Emittent={Projekt.Emittent}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link to="../Alle_Projekte">
                <div id="Mobile_Home_Projekt_Alle">
                  <h3 id="Mobile_Home_Projekt_Alle_H3">
                    Alle Projekte ansehen
                  </h3>
                </div>
              </Link>
            </div>
            <div id="Mobile_Home_CV_Sec">
              <h2 id="Mobile_Home_CV_Sec_h2">Was ist Chainvest ?</h2>
              <h5 id="Mobile_Home_CV_Sec_H5">
                Das disruptive Potenzial der Blockchain-Technologie verändert
                die bestehende Infrastruktur der Kapitalmärkte. GründerInnen und
                AnlegerInnen werden neue Möglichkeiten der Kapitalaufnahme
                eröffnet, losgelöst von zentralen Instanzen.
                Veränderungsprozesse sind aber auch gleichzeitig mit
                Unsicherheiten und das Lösen von zentralen Instanzen mit
                Ungewissheiten verbunden. Mit Chainvest Capital schaffen wir
                transparentere Rahmenbedingungen auf dem Markt für digitale
                Wertpapiere und so mehr Vertrauen in die Tokenisierung von
                Finanzinstrumenten. Als Informationsplattform für digitalisierte
                Wertpapiere informiert Chainvest Capital rund um die
                Fragestellungen der Blockchain-Technologie im
                Finanzdienstleistungssektor. Mit Chainvest Capital  erhalten
                AnlegerInnen Zugang zu vielfältigen Investitionsprojekten aus
                unterschiedlichen Branchen.
              </h5>
            </div>
          </div>
        </div>
        <Mobile_Footer />
      </div>
    </div>
  );
}

export default Home;
