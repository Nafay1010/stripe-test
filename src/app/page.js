"use client";

import CheckoutPage from "@/components/CheckoutPage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Home() {
  const amount = 100;

  return (
    <main className="flex items-center justify-center w-full p-10  mx-auto text-center text-white border rounded-md bg-[#082C2F] h-screen">
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: amount,
          currency: "usd",
          appearance: {
            theme: "stripe", // or 'flat', 'stripe', 'none', etc.
            variables: {
              colorPrimary: "#0D9488", // Your primary color
              colorBackground: "#F0F9FF", // Background color
              colorText: "#0F172A", // Text color
              fontFamily: '"Poppins", sans-serif', // Custom font
              spacingUnit: "5px",
              borderRadius: "4px",
            },
            
          },
        }}
      >
        <CheckoutPage amount={amount} />
      </Elements>
    </main>
  );
}
