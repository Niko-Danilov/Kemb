
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Home from "@/components/screen/home/Home";
import '@nextcss/reset';
import clsx from "clsx";
import { FC } from 'react';



interface IElement {
  header: React.ReactNode,
  children: React.ReactNode,
  footer: React.ReactNode,
}

export default function HomePage() {
  return (
    <HomePageLayout
      header={<Header />}
      footer={<Footer />}
    >
      <Home />
    </HomePageLayout>
  )
}

const HomePageLayout: FC<IElement> = ({ header, footer, children }) => {


  return (
    <>
      <div className={clsx('flex flex-col min-h-screen', 'wrapper')}>
        {header}
        <main className="grow">
          {children}
        </main>
        {footer}
      </div>
    </>


  )
}
