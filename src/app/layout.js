import CustomeLayout from "./components/CustomeLayout";
import "./globals.css";

export const metadata = {
  title: "Social Scholars - Scholarly Engagement",
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
     
      <body className="antialiased no-copy">
        <CustomeLayout>{children}</CustomeLayout>
      </body>
    </html>
  );
}
