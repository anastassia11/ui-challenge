import { Card } from '@/components/catalog/Card';
import { Footer } from '@/components/footer/Footer';
import { Header } from "@/components/header/Header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className='min-h-screen bg-base-10'>
      <Header />
      <div className='p-16'>
        <Card />
      </div>
      <Footer />
    </div>
  )
}
