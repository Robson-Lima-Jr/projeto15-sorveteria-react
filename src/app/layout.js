import "./globals.css";
import Topo from "@/components/Topo";
import Rodape from "@/components/Rodape";

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

        <Rodape />
      </body>
    </html>
  );
}
