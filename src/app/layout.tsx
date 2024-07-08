import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucas Vaz",
  description: "Lucas Vaz é um profissional de TIC com mais de 5 anos de experiência. Ele possui habilidades em desenvolvimento de software, análise de sistemas e engenharia de computação. Confira seu portfólio para saber mais sobre seus projetos, habilidades e experiências profissionais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Lucas Vaz é um profissional de TIC com mais de 5 anos de experiência. Ele possui habilidades em desenvolvimento de software, análise de sistemas e engenharia de computação. Confira seu portfólio para saber mais sobre seus projetos, habilidades e experiências profissionais." />
        <meta name="keywords" content="lucas, vaz, tic, ti, computação, engenharia, software, desenvolvedor, analista" />
        <meta name="author" content="Lucas Vaz" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Lucas Vaz" />
        <meta property="og:description" content="Portfólio profissional de Lucas Vaz, mostrando suas habilidades em TIC, desenvolvimento de software e engenharia de computação." />
        <meta property="og:image" content="https://lucasvaz.dev.br/logowhite.png" />
        <meta property="og:url" content="https://lucasvaz.dev.br/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lucas Vaz" />
        <meta name="twitter:description" content="Portfólio profissional de Lucas Vaz, mostrando suas habilidades em TIC, desenvolvimento de software e engenharia de computação." />
        <meta name="twitter:image" content="https://lucasvaz.dev.br/logowhite.png" />
        <meta name="twitter:site" content="@Lucax_Dev" />
        <title>Lucas Vaz</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
