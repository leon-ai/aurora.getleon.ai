import Card from '@/app/components/card'

import styles from './page.module.sass'

export default function Home() {
  return (
    <div className={`container ${styles.pageContainer}`}>
      <header>
        <h1 className={styles.title}>Aurora</h1>
        <p>
          The <strong>UI</strong> bricks that power up Leon,<br/>
          your open-source personal assistant.
        </p>
      </header>
      <main>
        <Card width={332}>
          <h2>Color</h2>
          <p>
            Discover the strategic use of color in Aurora's<br />
            design system, where every hue is carefully<br />
            selected to complement its reactive style.
          </p>
        </Card>
      </main>
    </div>
  )
}
