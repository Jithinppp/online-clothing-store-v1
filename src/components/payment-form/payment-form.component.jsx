import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/user.selector";
import { PaymentContainer, PaymentFormContainer } from "./payment-form.style";
import { selectCartTotal } from "../../store/cart/cart.selector";
import MainButton from "../Button/button.component";
import { SubTitle } from "../../layouts/shared/Shared";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    setIsProcessingPayment(true);
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;
    console.log(client_secret);

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
          email: currentUser?.email,
        },
      },
    });
    console.log(paymentResult);
    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
      console.log(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("payment successful");
      }
    }
  };
  return (
    <PaymentContainer>
      <PaymentFormContainer onSubmit={paymentHandler}>
        <SubTitle>Credit or Debit card </SubTitle>
        <CardElement />
        <MainButton
          type="submit"
          isDisabled={isProcessingPayment}
          isLoading={isProcessingPayment}
        >
          Pay now
        </MainButton>
      </PaymentFormContainer>
    </PaymentContainer>
  );
};
export default PaymentForm;
