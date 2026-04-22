import "./globals.css";

export const metadata = {
  title: "Cafe Meraki Sri Lanka",
  description:
    "Cafe Meraki by Ovinmee in Moratuwa: 4.6-rated family restaurant with dine-in, takeaway, delivery, and Rs 1,000-1,500 pricing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
