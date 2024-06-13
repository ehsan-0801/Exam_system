import { Inter } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Exam System",
  description: "Grade Smarter, Not Harder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ inter.className }>{ children }</body>
    </html>
  );
}
