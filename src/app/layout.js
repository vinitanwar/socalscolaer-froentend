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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Social Scholars" />
        <meta
          property="og:description"  
          content="Social Scholars is an independent news platform dedicated to delivering insightful, well-researched, and balanced reporting on topics that shape society."
        />
        <meta
          property="og:image"
          content="https://www.social-scholars.com/news-image.webp"
        />
        <meta
          property="og:url"
          content="https://www.social-scholars.com/article-slug"
        />
      </head>
      <body className="antialiased">
        <CustomeLayout>{children}</CustomeLayout>
      </body>
    </html>
  );
}
