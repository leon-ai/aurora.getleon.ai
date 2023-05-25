import Image from 'next/image'
import styles from './page.module.sass'

export default function Home() {
  return (
    <main className={`container ${styles.pageContainer}`}>
      <header>
        <h1 className={styles.title}>Aurora</h1>
        <p>
          The <strong>UI</strong> bricks that power up Leon,<br />
          your open-source personal assistant.
        </p>
      </header>
    </main>
  )
}
