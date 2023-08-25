import React from 'react'
import anjali from "../images/anjali.png";
import arpita from "../images/arpita.png";
import raj from "../images/raj.png";
import Style from "./Group.module.css"
import kalpesha from "../images/kalpesha.png"

const Group = () => {
  return (
    <>
    <div className={Style.subheader} >Our Team</div>
    <div className={Style.steps}>
            
            <div className={Style.step}>
                <img className={Style.imgmain} src={arpita.src} alt="Arpita" />
                <div className={Style.detail_box1}>Founder</div>
            </div>
            <div className={Style.step}>
                <img className={Style.imgmain} src={kalpesha.src} alt="Kalpesha" />
                <div className={Style.detail_box1}>Co-Founder</div>
            </div>
            <div className={Style.step}>
                <img className={Style.imgmain} src={anjali.src} alt="Anjali" />
                <div className={Style.detail_box1}>Co-Founder</div>
            </div>
            <div className={Style.step}>
                <img className={Style.imgmain} src={raj.src} alt="Raj" />
                <div className={Style.detail_box1}>Co-Founder</div>
            </div>
            
            <div className={Style.step} id={Style.stepmain}>
                <img className={Style.imgmain} src={raj.src} alt="Atul" />
                <div className={Style.detail_box1}>Co-Founder</div>
            </div>
        </div></>
  )
}

export default Group