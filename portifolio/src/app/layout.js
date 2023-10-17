import Head from 'next/head';
import './globals.css'

export const metadata = {
  title: "Portifólio",
  icons: {
    icon: "/img/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body >{children}</body>
    </html>
  )
}
