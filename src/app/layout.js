import "./globals.css";

export const metadata = {
  title: "Blog",
  description: "Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
