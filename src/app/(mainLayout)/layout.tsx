import Footer from "@/components/Routes/Footer";
import Nabvar from "@/components/Routes/Nabvar";
import PageLayout from "@/components/utils/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary bg-opacity-20">
        <Nabvar></Nabvar>
        <PageLayout>{children}</PageLayout>
        <Footer/>
      </body>
    </html>
  );
}
