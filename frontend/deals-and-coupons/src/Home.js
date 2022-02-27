import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://i.pinimg.com/564x/41/57/0a/41570ac00b99316698898e721e959ff4.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            couponcode="h673vhj"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={1}
            rating={4}
            discount={25}
            
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            couponcode="sjh6738hd"
            price={2}
            rating={5}
            discount={25}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
           <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={5}
            rating={5}
            discount={25}
            couponcode="sk62hs78s"
            image="https://cdn.grabon.in/gograbon/images/deal/1639634659192/big-flex-menchy-mens-regular-fit-sweatshirts.JPG"
          />
           
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={3}
            rating={3}
            discount={25}
            couponcode="lw86js8aj"
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={9}
            rating={4}
            discount={25}
            couponcode="lpqo8327xh"
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={5}
            rating={3}
            discount={25}
            couponcode="h673vhj"
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
           <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={6}
            rating={5}
            discount={25}
            couponcode="h6hyao"
            image="https://cdn.grabon.in/gograbon/images/deal/1639634659192/big-flex-menchy-mens-regular-fit-sweatshirts.JPG"
          />
         
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={10}
            rating={4}
            discount={25}
            couponcode="hLKkzZ21"
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;