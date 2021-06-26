import React from "react";

//CSS
import "./Checkout.css";

//Component Imports
import Subtotal from "../subtotal/Subtotal";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";

//Context
import { useStateValue } from "../StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout-title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
