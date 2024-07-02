import "./globals.css";
import Topo from "@/components/Topo";

export const metadata = {
  title: "Gelateria",
  description: "Projeto DevMedia: Gelateria",
  author: "Robson Lima Junior",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body >
        <Topo />

        {children}
      
      </body>
    </html>
  );
}
