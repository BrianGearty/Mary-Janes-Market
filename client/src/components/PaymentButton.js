// import React from "react";
// import ReactDOM from "react-dom";
// import { loadStripe } from "@stripe/stripe-js";
// // Make sure to call `loadStripe` outside of a component’s render to avoid
// // recreating the `Stripe` object on every render.
// const stripePromise = loadStripe(
//   "pk_test_51Hofl5LuJjLT1hU9eddiYJV7IDV6xKRCM1dWp1LgQALzX9Habzq26fjWx3gBS89qvMAvD7MVdiu3UD8rv2gURsJA00OIkacNMt"
// );

// function PaymentButton() {
//   const handleClick = async (event) => {
//     // Get Stripe.js instance
//     const stripe = await stripePromise;

//     // Call your backend to create the Checkout Session
//     const response = await fetch("/create-checkout-session", {
//       method: "POST",
//     });

//     const session = await response.json();

//     // When the customer clicks on the button, redirect them to Checkout.
//     const result = await stripe.redirectToCheckout({
//       sessionId: session.id,
//     });

//     if (result.error) {
//       // If `redirectToCheckout` fails due to a browser or network
//       // error, display the localized error message to your customer
//       // using `result.error.message`.
//     }
//   };

//   return (
//     <button role="link" onClick={handleClick}>
//       Checkout
//     </button>
//   );
// }

// export default PaymentButton;