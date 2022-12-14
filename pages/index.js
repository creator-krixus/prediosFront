import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Catastro</title>
        <meta name="Catastro" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
      </main>
      <div className={styles.containerInfo}>
        <Image src="/images/oficinas.png" alt="oficinas" width={1200} height={106} className={styles.imagen}/>
        <span className={styles.slogan}>Ordenando nuestro territorio</span>
      </div>
      <div className={styles.containerCountry}>
        <div className={styles.country}>
          <div className={styles.card}>Pais</div>
          <div className={styles.card}>Departamento</div>
          <div className={styles.card}>Municipio</div>
        </div>
        <div>
        <Image src="/images/reu.png" alt="oficinas" width={1200} height={206} className={styles.imagenTwo}/>
        </div>
      </div>
      <h3 className={styles.title}>Una mision de todos</h3>
      <div className={styles.containerNew}>
        <div className={styles.divInfo}>
          <p>Where does it come from?
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.

            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            Where can I get some?
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below accompanied by English versions from the 1914 translation by H. Rackham.
          </p>
        </div>
        <div className={styles.divInfo}>
          <Image src="/images/reunion.png" alt="oficinas" width={630} height={506} className={styles.imagenThree}/>
        </div>
      </div>
      <Footer />
    </div>
  )
}
