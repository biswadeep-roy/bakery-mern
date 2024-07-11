import React from "react";
import {RiCake3Line} from 'react-icons/ri'
import LogoImage from '../images/s-logo.png'

const About = () => {
  return (
    <div className="p-4">
      
      <h1 className="flex text-4xl mt-4 font-bold mb-4 text-pink-700 justify-center items-center">About Us <RiCake3Line/></h1>
      <p className="font-bold py-3 text-3xl text-pink-500">
        Welcome to Heavenly Bites by Biswadeep - Your Sweet Escape! </p>
        <p className="font-bold text-xl text-pink-700 py-2">We are a
        bakery that takes pride in crafting delicious confections and treats to
        satisfy your cravings.</p>
      
      <p className="text-xl mb-4">
        Our bakery is a labor of love, where every pastry and dessert is created
        with the utmost precision and the finest ingredients. Whether you're a
        fan of classic pastries, crave the latest dessert trends, or prefer
        gluten-free and vegan options, we have something to delight every
        palate.
      </p>
      <p className="text-xl mb-4">
        At Heavenly Bites by Biswadeep, we offer a wide variety of delectable
        treats, including cupcakes, macarons, mouthwatering cakes, and more. Our
        rotating seasonal specials ensure there's always something new and
        exciting to try.
      </p>
      <p className="text-xl mb-4">
        We believe in the power of sweet moments and making memories through
        indulgence. Our goal is to create desserts that not only taste
        exceptional but also bring joy to your life.
      </p>
      <p className="text-xl font-bold text-pink-700">Visit us today and experience the sweetness of life!</p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={LogoImage} style={{ width: '250px', height: '250px' }} alt="Logo" />
      </div>
    </div>
  );
};

export default About;