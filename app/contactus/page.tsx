import type { Metadata } from "next";
import ContactUsClient from "./ContactUsClient";

export const metadata: Metadata = {
  title: "Contact - Bishop Olawale Olaofe",
  description: "Contact Bishop Olawale - Reach out for book inquiries, speaking engagements, or collaborations.",
};

export default function ContactUs() {
  return <ContactUsClient />;
}
