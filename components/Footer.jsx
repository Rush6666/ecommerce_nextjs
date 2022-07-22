import React from 'react';
import { AiFillInstagram,AiOutlineTwitter,AiFillFacebook,AiFillAmazonCircle } from 'react-icons/ai';



const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 RUSH HeadPhones All Rights Reserved</p>
      <p className="icons">
          <AiFillInstagram />
          <AiOutlineTwitter />
          <AiFillFacebook />
          <AiFillAmazonCircle />
      </p>
    </div>
  )
}

export default Footer