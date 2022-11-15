import Head from 'next/head'
import styles from './index.module.css';
import Quote from './Components/Quote';

export default function Home() {

  return (
    <>
      <Head>
        <title>X-In</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={[styles["hero-area"], styles["bg-primary"]].join(" ")} >

        <div className="container">
          <div className="row">
            <div className="col-lg-7 ">
              <h1 className="px-2 text-white">Refresh <br /> &ldquo;Quotes&ldquo;</h1>
              <div className={`${styles["ico"]} list-unstyled d-flex`}>
                <a class=" px-3 text-white" href="https://twitter.com/_x_in_"><i class="fa-brands fa-twitter fa-xl "></i></a>
            <a class="mb-4 px-3 text-white" href="https://github.com/Jarvis-Ank"><i class="fa-brands fa-github fa-xl"></i></a>
              </div>
            </div>
            <div class="col-lg-5 px-4 text-center">
              <Quote />              
            </div>
          </div>
          <div className={styles.type}>
            <a href="#type02"></a>
          </div>
        </div>

      
      </section>
         </>
  )
}