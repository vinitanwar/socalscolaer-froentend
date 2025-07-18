import CustomeLayout from "./components/CustomeLayout";
import "./globals.css";

export const metadata = {
  title: "Social Scholars - Scholarly Engagement",
  description: "Scholarly Engagement",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Social Scholars - Scholarly Engagement</title>
       
      </head>
      <body className="antialiased">
        <CustomeLayout>{children}</CustomeLayout>
      </body>
    </html>
  );
}
