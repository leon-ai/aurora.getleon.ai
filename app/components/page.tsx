import type { Metadata } from 'next'

import Header from '@/app/components/header'
import Section from '@/app/components/section'

import Text from '@/app/aurora/components/text'
import WidgetWrapper from '@/app/aurora/components/widget-wrapper'
import Flexbox from '@/app/aurora/components/flexbox'
import Icon from '@/app/aurora/components/icon'

import globalStyles from '@/app/global.module.sass'

export const metadata: Metadata = {
  title: 'Components - Aurora'
}

export default function Component() {
  return (
    <div className={`container ${globalStyles.pageContainer}`}>
      <Header
        title="Components"
        description={<>Engage with the building blocks that shape<br />
          your journey with Leon.</>}
      />
      <main>
        <Section title="Card">
          ...
        </Section>
        <Section title="Checkbox">
          ...
        </Section>
        <Section title="Icon">
          <Flexbox alignItems="center" gap="xs">
            <Icon name="home-heart" size="md" />
            <Text>Test here</Text>
          </Flexbox>
          <Flexbox>
            <Icon name="home-heart" size="xs" />
            <Icon name="home-heart" size="sm" />
            <Icon name="home-heart" size="md" bgColor="blue" />
            <Icon name="home-heart" size="lg" bgShape="circle" />
            <Icon name="home-heart" size="lg" color="blue" />
            <Icon name="home-heart" size="xl" bgColor="blue" />
            <Icon name="home-heart" size="xl" bgShape="circle" />
            <Icon name="home-heart" size="md" bgColor="secondary-yellow" color="yellow" />
          </Flexbox>
        </Section>
        <Section title="Image">
          ...
        </Section>
        <Section title="Input">
          ...
        </Section>
        <Section title="Link">
          ...
        </Section>
        <Section title="List">
          ...
        </Section>
        <Section title="Loader">
          ...
        </Section>
        <Section title="Radio">
          ...
        </Section>
        <Section title="Select">
          ...
        </Section>
        <Section title="Slider">
          ...
        </Section>
        <Section title="Switch">
          ...
        </Section>
        <Section title="Table">
          ...
        </Section>
        <Section title="Tabs">
          ...
        </Section>
        <Section title="Text">
          <Text fontSize="xs">Text xs</Text>
          <Text fontSize="sm">Text sm</Text>
          <Text fontSize="md">Text md</Text>
          <Text fontSize="lg">Text lg</Text>
          <Text fontSize="xl">Text xl</Text>
          <Text>Text</Text>
          <Text fontWeight="regular">Text regular</Text>
          <Text fontWeight="semi-bold">Text semi-bold</Text>
          <Text secondary>Text secondary</Text>
        </Section>
        <Section title="Textarea">
          ...
        </Section>
        <Section title="Widget Wrapper">
          <WidgetWrapper>
            <Flexbox alignItems="center" justifyContent="center">
              <Text fontSize="xl" fontWeight="semi-bold">42</Text>
            </Flexbox>
          </WidgetWrapper>
          <WidgetWrapper>
            <Flexbox flexDirection="column" rowGap="xl">
              <Flexbox alignItems="center" justifyContent="center" flexDirection="column" rowGap="xs">
                <Text fontSize="lg" fontWeight="semi-bold">Paris</Text>
                <Text secondary>Thursday, 1 June</Text>
              </Flexbox>
              <Flexbox alignItems="center" justifyContent="center">
                <Icon size="xxl" svg={
                  <svg viewBox="0 0 134 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M72.5478 69.1152L80.4523 74.3849L66.3755 95.5001H90.5398L64.5174 131.531L56.8159 125.969L71.9601 105H48.6245L72.5478 69.1152Z" fill="url(#paint0_linear_81_184)"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M38.5 103.409C16.6613 97.684 0.5 77.174 0.5 52.75C0.5 23.8931 23.0601 0.5 50.8894 0.5C73.9775 0.5 93.4389 16.6014 99.3999 38.5659C100.073 38.5222 100.751 38.5 101.434 38.5C119.144 38.5 133.5 53.3865 133.5 71.7499C133.5 90.1133 119.144 105 101.434 105C101.038 105 100.643 104.992 100.25 104.978V95.5H101.689V95.4983C113.721 95.3553 124 85.1001 124 71.7499C124 58.3056 113.575 48 101.434 48C98.0042 48 94.7111 48.8226 91.7514 50.306C91.6005 47.5424 91.1952 44.8495 90.5594 42.2521L90.5451 42.2579C86.0435 23.5377 69.7734 10 50.8894 10C28.6285 10 10 28.8122 10 52.75C10 72.0623 22.1249 88.0384 38.5 93.4915V103.409Z" fill="url(#paint1_linear_81_184)"/>
                    <defs>
                    <linearGradient id="paint0_linear_81_184" x1="69.5822" y1="69.1152" x2="69.5822" y2="131.531" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F5BD52"/>
                    <stop offset="1" stopColor="#F5DA79"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_81_184" x1="67" y1="0.5" x2="67" y2="105" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#95B6F6"/>
                    <stop offset="1" stopColor="#5193DE"/>
                    </linearGradient>
                    </defs>
                  </svg>
                } />
              </Flexbox>
              <Flexbox alignItems="center" justifyContent="center" flexDirection="column" rowGap="xs">
                <Text fontSize="xl" fontWeight="semi-bold">18°</Text>
                <Text fontWeight="semi-bold">Thunderstorms</Text>
              </Flexbox>
            </Flexbox>
          </WidgetWrapper>
        </Section>
      </main>
    </div>
  )
}
