import type { Metadata } from 'next'

import Header from '@/app/components/header'
import Section from '@/app/components/section'

import Text from '@/app/aurora/components/text'

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
        <Section title="Card / Widget Wrapper">
          ...
        </Section>
        <Section title="Checkbox">
          ...
        </Section>
        <Section title="Icon">
          ...
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
        <Section title="Radio Text">
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
          <Text>Text</Text>
          <Text fontSize="xs">Text</Text>
          <Text fontSize="sm">Text</Text>
          <Text fontSize="md">Text</Text>
          <Text fontSize="lg">Text</Text>
          <Text fontSize="xl">Text</Text>
          <Text>Text</Text>
          <Text fontWeight="regular">Text</Text>
          <Text fontWeight="semi-bold">Text</Text>
          <Text secondary>Text</Text>
          <Text tertiary>Text</Text>
        </Section>
        <Section title="Textarea">
          ...
        </Section>
      </main>
    </div>
  )
}
