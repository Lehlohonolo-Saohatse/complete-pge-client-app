import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { FaPaypal } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useTheme } from "../../hooks/ThemeContext";

const CheckoutForm = ({ price, cart }) => {
  const { isDarkMode } = useTheme();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setcardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof price !== "number" || price < 1) {
      console.error(
        "Invalid price value. Must be a number greater than or equal to 1."
      );
      return;
    }

    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setcardError(error.message);
    } else {
      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card,
            billing_details: {
              name: user?.displayName || "anonymous",
              email: user?.email || "unknown",
            },
          },
        });

      if (confirmError) {
        console.log(confirmError);
      }

      if (paymentIntent.status === "succeeded") {
        const paymentInfo = {
          email: user.email,
          transitionId: paymentIntent.id,
          price,
          quantity: cart.length,
          status: "order pending",
          itemsName: cart.map((item) => item.name),
          cartItems: cart.map((item) => item._id),
          menuItems: cart.map((item) => item.menuItemId),
        };

        axiosSecure.post("/payments", paymentInfo).then((res) => {
          if (res.data) {
            alert("Payment info sent successfully!");
            navigate("/order");
          }
        });
      }
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-start items-start gap-8">
      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
          maxWidth: "600px",
          margin: "20px auto",
        }}
      >
        <h3
          style={{ color: "#d9534f", fontSize: "18px", marginBottom: "15px" }}
        >
          Note: Use the following as your Card Number -{" "}
          <span>
            <a
              href="#"
              style={{
                color: "#000",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              4242 4242 4242 4242
            </a>
            <h6 className="text-rose-900">We can track everyone purchasing</h6>
          </span>
        </h3>
        <div style={{ fontSize: "16px", lineHeight: "1.6" }}>
          <p>The payment methods are:</p>
          <ol style={{ marginLeft: "20px", paddingLeft: "0" }}>
            <li style={{ marginBottom: "10px" }}>
              <strong>1. Transfer and send proof to WhatsApp:</strong>
              <br />
              <span style={{ color: "#555" }}>
                <p>
                  Standard Bank Account Number:{" "}
                  <strong className="text-rose-700">
                    10090396993 (Mr. B Saohatse)
                  </strong>
                </p>
              </span>
              <span style={{ color: "#555" }}>
                <p>
                  WhatsApp Number:{" "}
                  <strong className="text-rose-700">082-360-6426</strong>
                </p>
              </span>
            </li>
            <li>
              <strong>2. Pay on collection</strong>{" "}
              <span style={{ color: "#777" }}>
                (Exclusive to Everyday Clients)
              </span>
            </li>
            <hr></hr>
            <p className="text-rose-700">
              <h2>Warning: Do not use your card details (We still in trial mode)!!!!!</h2>
            </p>
          </ol>
        </div>
      </div>

      <div className="md:w-1/2 space-y-3">
        <h4 className="text-lg font-semibold">Order Summary</h4>
        <p>Total Price: R{price}</p>
        <p>Number of Items: {cart.length}</p>
      </div>
      <div
        className={`md:w-1/3 w-full border space-y-5 card shrink-0 max-w-sm shadow-2xl bg-base-100 px-4 py-8 ${
          isDarkMode ? "dark" : ""
        }`}
      >
        <h4 className="text-lg font-semibold">Process your Payment!</h4>
        <h5 className="font-medium">Credit/Debit Card</h5>
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            type="submit"
            disabled={!stripe || !clientSecret}
            className="btn btn-primary btn-sm mt-5 w-full"
          >
            Pay
          </button>
        </form>
        {cardError && <p className="text-red text-xs italic">{cardError}</p>}
        <div className="mt-5 text-center">
          <hr />
          <button
            type="submit"
            className="btn btn-sm mt-5 bg-orange-500 text-white"
          >
            <FaPaypal /> Pay with Paypal
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
