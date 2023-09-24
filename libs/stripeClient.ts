import { loadStripe, Stripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;
export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      process.env.NEXT_PULIC_STRIPE_PULISHABLE_KEY ?? ""
    );
  }
  return stripePromise;
};
