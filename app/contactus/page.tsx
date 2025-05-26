import type { Metadata } from "next";
import ContactUsClient from "./ContactUsClient";

export const metadata: Metadata = {
  title: "Contact - Sameer Hirsi",
  description: "Contact Sameer Hirsi - Reach out for book inquiries, speaking engagements, or collaborations.",
};

export default function ContactUs() {
  return <ContactUsClient />;
}
