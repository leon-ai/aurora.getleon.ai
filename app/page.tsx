import Link from 'next/link'

import Card from '@/app/components/card'
import Icon from '@/app/components/icon'

import styles from './page.module.sass'

export default function Home() {
  return (
    <div className={`container ${styles.pageContainer}`}>
      <svg className={styles.bgGrid} width="971" viewBox="0 0 971 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M970 0V191.5C970 195.918 966.418 199.5 962 199.5H485.5H8.99999C4.58172 199.5 1 195.918 1 191.5V0M243.25 199.5V0M727.75 199.5V0M970 99.75H1" stroke="url(#paint0_linear_7_59)" strokeDasharray="5 5"/>
        <defs>
          <linearGradient id="paint0_linear_7_59" x1="1" y1="0" x2="79.8066" y2="382.775" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1C75DB" stopOpacity="0.75"/>
            <stop offset="0.5" stopColor="#1C75DB" stopOpacity="0.25"/>
            <stop offset="1" stopColor="#1C75DB" stopOpacity="0.75"/>
          </linearGradient>
        </defs>
      </svg>
      <header>
        <h1 className={styles.title}>Aurora</h1>
        <p>
          The <strong>UI</strong> bricks that power up Leon,<br />
          your open-source personal assistant.
        </p>
      </header>
      <main>
        <div className={styles.grid}>
          <Link href="/color">
            <Card width={380} height={234}>
              <Icon name="palette" type="line" color="#FFF" size="2x" bgType="square" bgColor="#1C75DB" />
              <h2>Color</h2>
              <p>
                Discover the strategic use of color in Aurora's<br />
                design system, where every hue is carefully<br />
                selected to complement its reactive style.
              </p>
            </Card>
          </Link>
          <Link href="/components">
            <Card width={380} height={234}>
              <Icon name="apps-2" type="line" color="#FFF" size="2x" bgType="square" bgColor="#1C75DB" />
              <h2>Components</h2>
              <p>
                Engage with the building blocks that shape<br />
                your journey with Leon.
              </p>
            </Card>
          </Link>
          <Link href="/iconography">
            <Card width={380} height={234}>
              <Icon name="box-3" type="line" color="#FFF" size="2x" bgType="square" bgColor="#1C75DB" />
              <h2>Iconography</h2>
              <p>
                Access Aurora's comprehensive collection of<br />
                high-quality icons, carefully curated to elevate<br />
                the design and improve the user experience.
              </p>
            </Card>
          </Link>
          <Link href="/typography">
            <Card width={380} height={234}>
              <Icon name="font-color" color="#FFF" size="2x" bgType="square" bgColor="#1C75DB" />
              <h2>Typography</h2>
              <p>
                Explore Aurora's carefully selected typefaces<br />
                for optimal legibility and hierarchy.
              </p>
            </Card>
          </Link>
        </div>
      </main>
    </div>
  )
}
