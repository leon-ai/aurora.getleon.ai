import Link from 'next/link'

import Header from '@/app/components/header'
import Card from '@/app/components/aurora/card'
import Icon from '@/app/components/aurora/icon'

import globalStyles from './global.module.sass'
import styles from './page.module.sass'

export default function Home() {
  return (
    <div className={`container ${globalStyles.pageContainer}`}>
      <Header
        title="Aurora"
        description={<>The <strong>UI</strong> bricks that power up Leon,<br />
          your open-source personal assistant.</>}
      />
      <main>
        <div className={styles.grid}>
          <Link href="/colors">
            <Card width={380} height={234}>
              <Icon name="palette" type="line" color="#FFF" size="2x" bgType="square" bgColor="#1C75DB" />
              <h2>Colors</h2>
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
          <Link href="/design-tokens">
            <Card width={380} height={234}>
              <Icon name="copper-coin-line" color="#FFF" size="2x" bgType="square" bgColor="#1C75DB" />
              <h2>Design Tokens</h2>
              <p>
                Browse Aurora's pre-defined design tokens that ensure consistent visual elements across all components of Leon.
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
