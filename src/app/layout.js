import CustomeLayout from "./components/CustomeLayout";
import "./globals.css";

export const metadata = {
  title: "Social Scholars - Scholarly Engagement",
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
     <head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2655358665967568"
     crossorigin="anonymous"></script>
    </head>
    
      <body className="antialiased no-copy">
        <CustomeLayout>{children}</CustomeLayout>
      </body>
    </html>
  );
}
