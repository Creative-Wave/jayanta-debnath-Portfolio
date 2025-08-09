import "./globals.css";
import { ReactNode } from "react";
import Head from "next/head";
import { Poppins } from "next/font/google";

// Load Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.variable}>
      <Head>
        {/* Favicon */}
        <link rel="icon" href="logo1.png" sizes="32x32" />
      </Head>
      <body className="bg-[#0F0725] overflow-x-hidden">
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
