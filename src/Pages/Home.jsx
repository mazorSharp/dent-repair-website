import React from "react";
import before1 from "../Assets/pro_dent_master5.JPG";
import after1 from "../Assets/pro_dent_master9.JPG";
import before2 from "../Assets/pro_dent_master8.JPG";
import after2 from "../Assets/pro_dent_master7.JPG";
import before3 from "../Assets/pro_dent_master12.JPG";
import after3 from "../Assets/pro_dent_master6.JPG";
import before4 from "../Assets/pro_dent_master2.JPG";
import after4 from "../Assets/pro_dent_master4.JPG";
import before5 from "../Assets/pro_dent_master16.JPG";
import after5 from "../Assets/pro_dent_master18.JPG";

export const Home = () => {
  return (
    <div>
      <div className="pageTitle" id="home">
        <section>
          <h1 className="header-title">Paintless Dent Repair</h1>
          <h4 className="header-text">
            Paintless Dent Repair is the technique of repairing dents, minor
            dings and creases from a vehicle, while maintaining the solidity of
            the custom or factory paint finish. It provides undetectable repairs
            to non-collision minor damages vehicles experience daily, in a
            fraction of the time and at approximately a third of the cost of
            traditional body repair shops. Pro Dent Master specializes in
            paintless dent repair and can help you restore your vehicle’s allure
            at a great price.
          </h4>
        </section>
      </div>

      <div className="pageTitle" id="gallery">
        <h2 className="header-title">Gallery</h2>

        <section className="beforeAfter">
          <div id="beforeHome">
            <img
              src={before1}
              alt="before hail damage"
              className="homeImg"
            ></img>
            <h6>Before</h6>
          </div>
          <div id="afterHome">
            <img src={after1} alt="after hail damage" className="homeImg"></img>
            <h6>After</h6>
          </div>
        </section>

        <section className="beforeAfter">
          <div id="beforeHome">
            <img
              src={before2}
              alt="before hail damage"
              className="homeImg"
            ></img>
            <h6>Before</h6>
          </div>
          <div id="afterHome">
            <img src={after2} alt="after hail damage" className="homeImg"></img>
            <h6>After</h6>
          </div>
        </section>

        <section className="beforeAfter">
          <div id="beforeHome">
            <img
              src={before4}
              alt="before hail damage"
              className="homeImg"
            ></img>
            <h6>Before</h6>
          </div>
          <div id="afterHome">
            <img src={after4} alt="after hail damage" className="homeImg"></img>
            <h6>After</h6>
          </div>
        </section>

        <section className="beforeAfter">
          <div id="beforeHome">
            <img
              src={before5}
              alt="before hail damage"
              className="homeImg"
            ></img>
            <h6>Before</h6>
          </div>
          <div id="afterHome">
            <img src={after5} alt="after hail damage" className="homeImg"></img>
            <h6>After</h6>
          </div>
        </section>
        {/* 
      <section className="beforeAfter">
        <div id="beforeHome">
          <img src={before3} alt="before hail damage" className="homeImg"></img>
          <h6>Before</h6>
        </div>
        <div id="afterHome">
          <img src={after3} alt="after hail damage" className="homeImg"></img>
          <h6>After</h6>
        </div>
      </section> */}
      </div>

      <div className="pageTitle" id="about">
        <h2 className="header-title">About</h2>
        <h4 className="about-text">
          Pro Dent Master was created by Youry Mazor. With over 30 years of
          working as an auto repair technician, Youry has mastered the art of
          paintless dent repair. Whether the dent came from hail, door dings,
          car accident, or any other form of damage, your vehicle is in safe
          hands.
        </h4>
        <h4 className="about-text">
          Pro Dent Master will provide the best quality of service to you. We
          offer tremendous value to customers, at a reasonable and haggle-free
          price, and typically in far less time than conventional body shop
          repair, where panels need to be replaced and re-painted.
        </h4>
      </div>
    </div>
  );
};
