import Card from '@/app/components/card'
import Icon from '@/app/components/icon'

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
        <div className={styles.grid}>
          <Card width={380}>
            <Icon name="palette" type="line" color="#FFF" size="2x" bgType="square" bgColor="#1C75DB" />
            <h2>Color</h2>
            <p>
              Discover the strategic use of color in Aurora's<br />
              design system, where every hue is carefully<br />
              selected to complement its reactive style.
            </p>
          </Card>
          <Card width={380}>
            <Icon name="apps-2" type="line" color="#FFF" size="2x" bgType="square" bgColor="#1C75DB" />
            <h2>Components</h2>
            <p>
              Engage with the building blocks that shape<br />
              your journey with Leon.
            </p>
          </Card>
          <Card width={380}>
            <Icon name="box-3" type="line" color="#FFF" size="2x" bgType="square" bgColor="#1C75DB" />
            <h2>Iconography</h2>
            <p>
              Access Aurora's comprehensive collection of<br />
              high-quality icons, carefully curated to elevate<br />
              the design and improve the user experience.
            </p>
          </Card>
          <Card width={380}>
            <Icon name="font-color" color="#FFF" size="2x" bgType="square" bgColor="#1C75DB" />
            <h2>Typography</h2>
            <p>
              Explore Aurora's carefully selected typefaces<br />
              for optimal legibility and hierarchy.
            </p>
          </Card>
        </div>
      </main>
    </div>
  )
}
