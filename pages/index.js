import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lawrecks</title>
        <meta name="description" content="Lawrecks Portfolio"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, {`I'm`} <span>Ugo</span>
        </h1>

        <p className={styles.description}>
        {`I'm`} a Software Engineer
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/lawrecks" className={styles.card}>
            <h2>GitHub &rarr;</h2>
            <p>Have a look a look at my projects on GitHub</p>
          </a>

          <a href="https://www.linkedin.com/in/ugochukwu-ejiogu-123404123/" className={styles.card}>
            <h2>LinkedIn &rarr;</h2>
            <p>Stop by to view my professional experience</p>
          </a>

          <a
            href="https://twitter.com/lawrecks"
            className={styles.card}
          >
            <h2>Twitter &rarr;</h2>
            <p>Come follow me and view my tweets as well</p>
          </a>

          <a
            href="https://blog.lawrecks.com"
            className={styles.card}
          >
            <h2>Blog &rarr;</h2>
            <p>
              I write too. Just click already, to view my articles
            </p>
          </a>

          <a
            href="https://soundcloud.com/lawrecks"
            className={styles.card}
          >
            <h2>Music &rarr;</h2>
            <p>
              {`Let's`} go to SoundCloud for some of my covers!
            </p>
          </a>

          <a
            href="mailto:ugo.lawrence.ejiogu@gmail.com"
            className={styles.card}
          >
            <h2>Email me &rarr;</h2>
            <p>
              Contact me via email if you want to talk business
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a>
          Developed with love by Lawrecks
        </a>
      </footer>
    </div>
  )
}
