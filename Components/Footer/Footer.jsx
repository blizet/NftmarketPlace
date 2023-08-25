import React from "react";
import {RiSendPlaneFill} from "react-icons/ri";
import mainLogo from "../images/mainlogo.png"
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
//internal import
import Style from "./Footer.module.css"
import {Logo} from "../index"

const Footer = () => {
  const menuList=["Home","About","Product","Contact","ICO","Membership"];
  
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          <a href="/">
          <img src={mainLogo.src} width="150px" alt="logo" />
          </a>
          <p className={Style.footer_box_social_info}>
            Lorem ipsum, dolor sit amet consectetur adipisicing 
            vel fugit deleniti. Repellendus suscipit dolor animi?
          </p>
          <div className={Style.footer_social}>
            <a href="#">
               <TiSocialFacebook/>
            </a>
            <a href="#">
               <TiSocialInstagram/>
            </a>
            <a href="#">
               <TiSocialLinkedin/>
            </a>
            <a href="#">
               <TiSocialTwitter/>
            </a>
            <a href="#">
               <TiSocialYoutube/>
            </a>
          </div>
        </div>
        <div className={Style.footer_box_help}>
          <h3>Help Center</h3>
          <div className={Style.menu}>
            {menuList.map((el,i)=>(
              <p key={i+1}>{el}</p>
            ))}
          </div>
        </div>
        <div className={Style.subscribe}>
          <h3>Subscribe</h3>

          <div className={Style.subscribe_box}>
            <input type="email" placeholder="Enter your email" />
            <RiSendPlaneFill className={Style.subscibe_box_send}/>
          </div>
          <div className={Style.subscribe_box_info}>
            <p>
              Discover, collect, and sell extraordinary NFts OpenSea is the
              world first and largest NFT marketplace
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
