import Head from "next/head"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({children, title, description}) {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
        </Head>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </div>
  )
}

Layout.defaultProps = {
    title: "Catastro",
    description: "Pagina encargada de realizar el registro de los predios nacionales"
}
