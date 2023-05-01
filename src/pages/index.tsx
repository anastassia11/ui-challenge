import { Header } from "@/components/header/Header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (<>
    <Header />
  </>)
}
