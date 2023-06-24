'use client'

import { useState } from 'react'

import {
  Button,
  Card,
  Checkbox,
  CircularProgress,
  Flexbox,
  Icon,
  IconButton,
  Image,
  Link,
  List,
  ListHeader,
  ListItem,
  Loader,
  Progress,
  Radio,
  RadioGroup,
  ScrollContainer,
  Status,
  Tab,
  TabContent,
  TabGroup,
  TabList,
  Text,
  TextInput,
  WidgetWrapper
} from '@/app/aurora'
import Section from '@/app/components/section'
import { Timer } from '@/app/components/timer'

export default function ComponentList() {
  const [isSending, setIsSending] = useState(false)
  const [isSendingIconButton, setIsSendingIconButton] = useState(false)
  const [isPlayButtonActivated, setIsPlayButtonActivated] = useState(false)

  return (
    <>
      <Section title="Button">
        <Flexbox flexDirection="row" gap="xl">
          <WidgetWrapper>
            <Flexbox gap="md">
              <Button onClick={() => console.log('button clicked')}>Continue</Button>
              <Button
                iconName="mail"
                loading={isSending}
                onClick={() => {
                  setIsSending(true)

                  setTimeout(() => {
                    setIsSending(false)
                  }, 2000)
                }}
              >Send</Button>
              <Button iconName="arrow-right" iconPosition="right">Next step</Button>
              <Button disabled>Disabled</Button>
              <Button secondary iconName="heart">Secondary button</Button>
              <Button secondary disabled>Disabled</Button>
              <Button loading>Loading</Button>
              <Button danger>Danger</Button>
              <Button danger disabled iconName="delete-bin">Disabled</Button>
              <Button light>Light button</Button>
              <Button light iconName="arrow-right" iconPosition="right">Next</Button>
              <Button light disabled>Disabled</Button>
            </Flexbox>
          </WidgetWrapper>
          <WidgetWrapper>
            <Flexbox gap="md">
              <TextInput placeholder="Input 1" />
              <TextInput placeholder="Input 2" />
              <Flexbox gap="md">
                <Button type="submit">Submit</Button>
                <Button type="reset" secondary>Reset</Button>
              </Flexbox>
            </Flexbox>
          </WidgetWrapper>
        </Flexbox>
      </Section>
      <Section title="Card">
        <WidgetWrapper>
          <Flexbox gap="md">
            <Card>
              <Text>Hello world</Text>
            </Card>
            <Card fullWidth>
              <Flexbox alignItems="center" justifyContent="space-between" flexDirection="row">
                <Text>Text 1</Text>
                <Text>Text 2</Text>
              </Flexbox>
            </Card>
          </Flexbox>
        </WidgetWrapper>
      </Section>
      <Section title="Checkbox">
        <WidgetWrapper>
          <Flexbox gap="md">
            <Checkbox
              label="This is a checkbox"
              checked={false}
              value="test"
              onChange={(e) => console.log('Checkbox state:', e)}
            />
            <Checkbox
              label="This is a checked checkbox"
              checked={true}
              value="test"
              onChange={(e) => console.log('Checkbox state:', e)}
            />
            <Checkbox
              label="Disabled checkbox"
              checked={true}
              value="test2"
              disabled
            />
          </Flexbox>
        </WidgetWrapper>
      </Section>
      <Section title="Circular Progress">
        <Flexbox gap="md">
          <WidgetWrapper>
            <Flexbox gap="md">
              <CircularProgress value={33} size="sm" />
              <CircularProgress value={33} />
              <CircularProgress value={33} size="lg" />
            </Flexbox>
          </WidgetWrapper>
          <WidgetWrapper>
            <Timer value={0} />
          </WidgetWrapper>
        </Flexbox>
      </Section>
      <Section title="Flexbox">
        <WidgetWrapper>
          <Flexbox gap="md">
            <Flexbox flexDirection="row" justifyContent="space-between">
              <Card><Text>1</Text></Card>
              <Card><Text>2</Text></Card>
              <Card><Text>3</Text></Card>
              <Card><Text>4</Text></Card>
              <Card><Text>5</Text></Card>
            </Flexbox>
            <Flexbox flexDirection="row" gap="md" justifyContent="space-between">
              <Card fullWidth><Flexbox justifyContent="center" alignItems="center"><Text>1</Text></Flexbox></Card>
              <Card fullWidth><Flexbox justifyContent="center" alignItems="center"><Text>2</Text></Flexbox></Card>
              <Card fullWidth><Flexbox justifyContent="center" alignItems="center"><Text>3</Text></Flexbox></Card>
            </Flexbox>
            <Flexbox>
              <Card fullWidth><Flexbox justifyContent="center" alignItems="center"><Text>1</Text></Flexbox></Card>
            </Flexbox>
          </Flexbox>
        </WidgetWrapper>
      </Section>
      <Section title="Icon">
        <WidgetWrapper>
          <Flexbox alignItems="center" gap="xs" flexDirection="row">
            <Icon name="home-heart" size="md" />
            <Text>Test here</Text>
          </Flexbox>
          <Flexbox flexDirection="row" gap="md">
            <Icon name="home-heart" size="xs" />
            <Icon name="home-heart" size="sm" />
            <Icon name="home-heart" size="md" bgColor="blue" />
            <Icon name="home-heart" size="md" bgColor="secondary-yellow" color="yellow" />
            <Icon name="home-heart" size="lg" color="yellow" bgColor="transparent-yellow" />
            <Icon name="home-heart" size="lg" color="blue" />
            <Icon name="home-heart" size="xl" bgColor="blue" />
            <Icon name="home-heart" size="xl" color="red" bgColor="transparent-red" />
          </Flexbox>
        </WidgetWrapper>
      </Section>
      <Section title="Icon Button">
        <Flexbox gap="md">
          <WidgetWrapper>
            <Flexbox gap="md">
              <Flexbox flexDirection="row" gap="md">
                <IconButton name="mail" loading={isSendingIconButton} onClick={() => {
                  console.log('button clicked')
                  setIsSendingIconButton(true)

                  setTimeout(() => {
                    setIsSendingIconButton(false)
                  }, 2000)
                }} />
                <IconButton name="mail" loading />
                <IconButton name="mail" disabled />
              </Flexbox>
              <Flexbox flexDirection="row" gap="md">
                <IconButton name="mail" secondary />
                <IconButton name="mail" shape="circle" secondary />
                <IconButton name="mail" shape="circle" secondary disabled />
              </Flexbox>
              <Flexbox flexDirection="row" gap="md">
                <IconButton name="delete-bin" danger />
                <IconButton name="delete-bin" shape="circle" danger />
                <IconButton name="delete-bin" disabled danger />
              </Flexbox>
              <Flexbox flexDirection="row" gap="md">
                <IconButton name="send-plane" light iconType="line" activated={false} onClick={(isActivated) => console.log('isActivated', isActivated)} />
                <IconButton name="send-plane" light iconType="fill" activated={false} onClick={(isActivated) => console.log('isActivated', isActivated)} />
                <IconButton name="send-plane" light iconType="fill" disabled />
              </Flexbox>
              <Flexbox flexDirection="row" gap="md">
                <IconButton name="send-plane" light secondary iconType="line" activated={false} onClick={(isActivated) => console.log('isActivated', isActivated)} />
                <IconButton name="send-plane" light secondary iconType="fill" activated={false} onClick={(isActivated) => console.log('isActivated', isActivated)} />
                <IconButton name="send-plane" light secondary iconType="fill" disabled />
              </Flexbox>
            </Flexbox>
          </WidgetWrapper>
          <WidgetWrapper>
            <Flexbox justifyContent="space-between" alignItems="center" flexDirection="row">
              <IconButton name="shuffle" light secondary activated onClick={(isActivated) => console.log('Shuffle', isActivated)} />
              <Flexbox flexDirection="row">
                <IconButton name="skip-left" size="lg" light secondary iconType="fill" />
                <IconButton
                  name={isPlayButtonActivated ? 'pause' : 'play'}
                  size="lg"
                  shape="circle"
                  iconType="fill"
                  activated={false}
                  onClick={(isActivated) => {
                    console.log('Play', isActivated)
                    setIsPlayButtonActivated(isActivated)
                  }}
                />
                <IconButton name="skip-right" size="lg" light secondary iconType="fill" />
              </Flexbox>
              <IconButton name="repeat" secondary light activated={false} onClick={(isActivated) => console.log('Repeat', isActivated)} />
            </Flexbox>
          </WidgetWrapper>
          <WidgetWrapper>
            <Flexbox gap="md" flexDirection="row">
              <IconButton name="mail" size="xs" />
              <IconButton name="mail" size="sm" />
              <IconButton name="mail" size="md" />
              <IconButton name="mail" size="lg" />
            </Flexbox>
          </WidgetWrapper>
        </Flexbox>
      </Section>
      <Section title="Image">
        <WidgetWrapper>
          <Flexbox gap="md">
            <Flexbox flexDirection="row" gap="md">
              <Image src="https://placehold.co/512/333/FFF" width={128} height={128} />
              <Image src="https://placehold.co/512/333/FFF" shape="circle" width={128} height={128} />
            </Flexbox>
            <Image src="https://placehold.co/512/333/FFF" width="100%" height={300} />
            <Flexbox flexDirection="row" gap="md">
              <Image src="https://placehold.co/512/333/FFF" width={64} height={64} borderColor="white" />
              <Image src="https://placehold.co/512/333/FFF" width={64} height={64} borderColor="blue" />
              <Image src="https://placehold.co/512/333/FFF" width={64} height={64} borderColor="blue" shape="circle" />
            </Flexbox>
            <Flexbox flexDirection="row" gap="md">
              <Image src="https://placehold.co/512/333/FFF" gradient width={128} height={128} />
              <Image src="https://placehold.co/512/333/FFF" gradient gradientPosition="top" width={128} height={128} />
            </Flexbox>
            <Flexbox flexDirection="row" gap="md">
              <Image src="https://placehold.co/512/333/FFF" gradient gradientPosition="left" width={128} height={128} />
              <Image src="https://placehold.co/512/333/FFF" gradient gradientPosition="right" width={128} height={128} />
            </Flexbox>
          </Flexbox>
        </WidgetWrapper>
      </Section>
      <Section title="Link">
        <WidgetWrapper>
          <Flexbox gap="md">
            <Flexbox flexDirection="row" gap="md">
              <Link href="https://docs.getleon.ai/">Docs</Link>
              <Link href="https://docs.getleon.ai/">
                <Icon name="file" />Docs
              </Link>
              <Link href="https://docs.getleon.ai/">
                Next<Icon name="arrow-right" />
              </Link>
            </Flexbox>
            <Flexbox flexDirection="row" gap="md">
              <Link href="https://docs.getleon.ai/" fontSize="sm">Docs</Link>
              <Link href="https://docs.getleon.ai/" fontSize="sm">
                <Icon name="file" size="sm" />Docs
              </Link>
              <Link href="https://docs.getleon.ai/" fontSize="sm">
                Next<Icon name="arrow-right" size="sm" />
              </Link>
            </Flexbox>
          </Flexbox>
        </WidgetWrapper>
      </Section>
      <Section title="List">
        <Flexbox gap="md">
          <WidgetWrapper noPadding>
            <List>
              <ListHeader>Shopping List</ListHeader>
              <ListItem>
                <Checkbox
                  label="Potatoes"
                  value="item1"
                  checked={false}
                  onChange={(e) => console.log('Checkbox state:', e)}
                />
              </ListItem>
              <ListItem>
                <Checkbox value="item2" checked={false} label="2 bottles of milk" />
              </ListItem>
              <ListItem>
                <Checkbox value="item3" checked={false} label="One bottle of orange juice but not the same as the last time" />
              </ListItem>
              <ListItem>
                <Checkbox value="item4" checked={false} label="2 bottles of milk" />
              </ListItem>
              <ListItem>
                <Checkbox value="item5" checked={true} label="1kg of rice" />
              </ListItem>
              <ListItem>
                <Checkbox value="item5" checked={true} label="Shampoo" />
              </ListItem>
            </List>
          </WidgetWrapper>
          <WidgetWrapper noPadding>
            <List>
              <ListHeader>You are all set</ListHeader>
              <ListItem>
                <Flexbox flexDirection="row" alignItems="center" gap="sm">
                  <Icon name="check" size="sm" type="fill" bgShape="circle" color="green" bgColor="transparent-green" />
                  <Text>Installation is done</Text>
                </Flexbox>
              </ListItem>
              <ListItem>
                <Flexbox flexDirection="row" alignItems="center" gap="sm">
                  <Icon name="check" size="sm" type="fill" bgShape="circle" color="green" bgColor="transparent-green" />
                  <Text>Configuration is done</Text>
                </Flexbox>
              </ListItem>
              <ListItem>
                <Flexbox flexDirection="row" alignItems="center" gap="sm">
                  <Icon name="check" size="sm" type="fill" bgShape="circle" color="green" bgColor="transparent-green" />
                  <Text>Leon is now ready to use</Text>
                </Flexbox>
              </ListItem>
            </List>
          </WidgetWrapper>
          <WidgetWrapper noPadding>
            <List>
              <ListItem>
                <Flexbox flexDirection="row" alignItems="center" gap="sm">
                  <Icon name="alert" size="sm" type="fill" bgShape="circle" color="yellow" bgColor="transparent-yellow" />
                  <Text>The voice provider is missing</Text>
                </Flexbox>
              </ListItem>
              <ListItem>
                <Flexbox flexDirection="row" alignItems="center" gap="sm">
                  <Icon name="close" size="sm" type="fill" bgShape="circle" color="red" bgColor="transparent-red" />
                  <Text>NLP models are broken</Text>
                </Flexbox>
              </ListItem>
              <ListItem>
                <Flexbox flexDirection="row" alignItems="center" gap="sm">
                  <Icon name="close" size="sm" type="fill" bgShape="circle" color="red" bgColor="transparent-red" />
                  <Text>Leon cannot run properly</Text>
                </Flexbox>
              </ListItem>
            </List>
          </WidgetWrapper>
          <WidgetWrapper noPadding>
            <List>
              <ListHeader align="center">Select your music provider</ListHeader>
              <ListItem align="center" onClick={() => alert('Spotify') }>
                <Image src="/spotify.svg" width={110} height={31} backgroundSize="contain" />
              </ListItem>
              <ListItem align="center" onClick={() => alert('Apple Music') }>
                <Image src="/apple-music.svg" width={110} height={31} backgroundSize="contain" />
              </ListItem>
              <ListItem align="center" onClick={() => alert('YouTube Music')}>
                <Image src="/youtube-music.svg" width={110} height={31} backgroundSize="contain" />
              </ListItem>
              <ListItem align="center" onClick={() => alert('Deezer')}>
                <Image src="/deezer.svg" width={110} height={31} backgroundSize="contain" />
              </ListItem>
            </List>
          </WidgetWrapper>
          <WidgetWrapper noPadding>
            <Image
              width="100%"
              height={200}
              radiusTop
              overlay
              gradient
              gradientPosition="bottom"
              src="https://www.marionskitchen.com/wp-content/uploads/2021/08/20201116_Marions-Best-Pancakes-16-819x1024.jpeg"
            />
            <List>
              <ListHeader>
                <Icon name="book-2" />
                Pancakes Ingredients
              </ListHeader>
              <ListItem>
                <Flexbox flexDirection="row" gap="md" alignItems="center">
                  <Image
                    src="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_487/k%2Farchive%2F44462d0c84edfe82ffa94d560d263ad41a9a654a"
                    width={64} height={64}
                  />
                  <Flexbox>
                    <Text fontWeight="semi-bold">Flour</Text>
                    <Text secondary>1 ½ cups</Text>
                  </Flexbox>
                </Flexbox>
              </ListItem>
              <ListItem>
                <Flexbox flexDirection="row" gap="md" alignItems="center">
                  <Image
                    src="data:image/jpeg;base64,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"
                    width={64} height={64}
                  />
                  <Flexbox>
                    <Text fontWeight="semi-bold">Baking powder</Text>
                    <Text secondary>3 ½ teaspoons</Text>
                  </Flexbox>
                </Flexbox>
              </ListItem>
              <ListItem>
                <Flexbox flexDirection="row" gap="md" alignItems="center">
                  <Image
                    src="https://www.tasteofhome.com/wp-content/uploads/2019/11/sugar-shutterstock_615908132.jpg?fit=700,800"
                    width={64} height={64}
                  />
                  <Flexbox>
                    <Text fontWeight="semi-bold">Sugar</Text>
                    <Text secondary>1 tablespoon</Text>
                  </Flexbox>
                </Flexbox>
              </ListItem>
              <ListItem>
                <Flexbox flexDirection="row" gap="md" alignItems="center">
                  <Image
                    src="https://www.rd.com/wp-content/uploads/2019/05/salt-shaker-scaled.jpg?resize=700,466"
                    width={64} height={64}
                  />
                  <Flexbox>
                    <Text fontWeight="semi-bold">Salt</Text>
                    <Text secondary>¼ teaspoon</Text>
                  </Flexbox>
                </Flexbox>
              </ListItem>
              <ListItem>
                <Flexbox flexDirection="row" gap="md" alignItems="center">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl7ESHXvVuPYQ-uw3CVe8IIc6Fv5ydg0eZOIRznww3_TRf9oy8I71xjxZ0jQK8lVd8W6g&usqp=CAU"
                    width={64} height={64}
                  />
                  <Flexbox>
                    <Text fontWeight="semi-bold">Milk</Text>
                    <Text secondary>1 ¼ cups</Text>
                  </Flexbox>
                </Flexbox>
              </ListItem>
              <ListItem>
                <Flexbox flexDirection="row" gap="md" alignItems="center">
                  <Image
                    src="data:image/jpeg;base64,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"
                    width={64} height={64}
                  />
                  <Flexbox>
                    <Text fontWeight="semi-bold">Butter</Text>
                    <Text secondary>3 tablespoons butter</Text>
                  </Flexbox>
                </Flexbox>
              </ListItem>
              <ListItem>
                <Flexbox flexDirection="row" gap="md" alignItems="center">
                  <Image
                    src="https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg"
                    width={64} height={64}
                  />
                  <Flexbox>
                    <Text fontWeight="semi-bold">Egg</Text>
                    <Text secondary>1 egg</Text>
                  </Flexbox>
                </Flexbox>
              </ListItem>
            </List>
          </WidgetWrapper>
        </Flexbox>
      </Section>
      <Section title="Loader">
        <WidgetWrapper>
          <Loader />
        </WidgetWrapper>
      </Section>
      <Section title="Modal">
        ...
      </Section>
      <Section title="Progress">
        <Flexbox flexDirection="row" gap="md">
          <WidgetWrapper>
            <Flexbox gap="md">
              <Progress value={72} size="sm" />
              <Progress value={72} />
              <Progress value={72} size="lg" />
            </Flexbox>
          </WidgetWrapper>
          <WidgetWrapper>
            <Flexbox flexDirection="row" gap="md">
              <Progress value={72} size="sm" orientation="vertical" />
              <Progress value={72} orientation="vertical" />
              <Progress value={72} size="lg" orientation="vertical" />
            </Flexbox>
          </WidgetWrapper>
        </Flexbox>
      </Section>
      <Section title="Radio">
        <WidgetWrapper>
          <RadioGroup defaultValue="orange">
            <Flexbox gap="md">
              <Radio label="Strawberry" value="strawberry" />
              <Radio label="Apple" value="apple" />
              <Radio label="Lemon" value="lemon" />
              <Radio label="Orange" value="orange" disabled />
            </Flexbox>
          </RadioGroup>
        </WidgetWrapper>
      </Section>
      <Section title="Scroll Container">
        <Flexbox gap="md">
          <WidgetWrapper>
            <ScrollContainer>
              <Flexbox flexDirection="row" gap="md">
                <Card>
                  Card 1
                </Card>
                <Card>
                  Card 2
                </Card>
                <Card>
                  Card 3
                </Card>
                <Card>
                  Card 4
                </Card>
                <Card>
                  Card 5
                </Card>
              </Flexbox>
            </ScrollContainer>
          </WidgetWrapper>
          <WidgetWrapper>
            <ScrollContainer orientation="vertical" height={200}>
              <Flexbox gap="md">
                <Card>
                  Card 1
                </Card>
                <Card>
                  Card 2
                </Card>
                <Card>
                  Card 3
                </Card>
                <Card>
                  Card 4
                </Card>
                <Card>
                  Card 5
                </Card>
              </Flexbox>
            </ScrollContainer>
          </WidgetWrapper>
        </Flexbox>
      </Section>
      <Section title="Select">
        ...
      </Section>
      <Section title="Slider">
        ...
      </Section>
      <Section title="Status">
        <WidgetWrapper>
          <Flexbox flexDirection="row" gap="xs">
            <Status>Normal</Status>
            <Status color="blue">Edited</Status>
            <Status color="yellow">Warning</Status>
            <Status color="red" iconName="error-warning" iconType="fill">Danger</Status>
            <Status color="green" iconName="check">Success</Status>
          </Flexbox>
        </WidgetWrapper>
      </Section>
      <Section title="Switch">
        ...
      </Section>
      <Section title="Table">
        ...
      </Section>
      <Section title="Tabs">
        <WidgetWrapper>
          <TabGroup defaultValue="first">
            <TabList>
              <Tab value="first">Tab 1</Tab>
              <Tab value="second">Tab 2</Tab>
              <Tab value="third" disabled>Tab 3</Tab>
            </TabList>
            <TabContent value="first">
              <Text>Tab 1 content</Text>
            </TabContent>
            <TabContent value="second">
              <Text>Tab 2 content</Text>
            </TabContent>
            <TabContent value="third">
              <Text>Tab 3 content</Text>
            </TabContent>
          </TabGroup>
        </WidgetWrapper>
      </Section>
      <Section title="Text">
        <WidgetWrapper>
          <Flexbox gap="xs">
            <Text fontSize="xs">Text xs</Text>
            <Text fontSize="sm">Text sm</Text>
            <Text fontSize="md">Text md</Text>
            <Text fontSize="lg">Text lg</Text>
            <Text fontSize="xl">Text xl</Text>
            <Text>Text</Text>
            <Text fontWeight="regular">Text regular</Text>
            <Text fontWeight="semi-bold">Text semi-bold</Text>
            <Text secondary>Text secondary</Text>
          </Flexbox>
        </WidgetWrapper>
      </Section>
      <Section title="Text Input">
        <WidgetWrapper>
          <Flexbox gap="md" display="inline-flex" fullWidth>
            <TextInput
              type="password"
              placeholder="Your password"
            />
            <TextInput
              placeholder="Your Spotify API key"
              iconName="key-2"
              onChange={(value) => console.log('Text input value:', value)}
            />
            <TextInput
              type="email"
              placeholder="Your email address"
              iconName="mail"
              hint="Leon will notify you there once the task is over."
            />
            <TextInput
              type="email"
              placeholder="Your email address (disabled)"
              iconName="mail"
              value="louis@getleon.ai"
              disabled
            />
            <TextInput placeholder="Test" value="This is a test (disabled)" disabled />
            <TextInput placeholder="Multiline" multiline />
            <TextInput placeholder="Your comment here..." multiline iconName="edit-2" />
            <TextInput placeholder="Your email content here..." multiline iconName="mail" />
            <TextInput placeholder="Content here... (custom height)" multiline height={200} />
            <TextInput placeholder="Multiline (disabled)" value="Multiline (disabled)" multiline disabled />
          </Flexbox>
        </WidgetWrapper>
      </Section>
      <Section title="Toast">
        ...
      </Section>
      <Section title="Widget Wrapper">
        <Flexbox gap="md">
          <WidgetWrapper>
            <Flexbox alignItems="center" justifyContent="center">
              <Text fontSize="xl" fontWeight="semi-bold">42</Text>
            </Flexbox>
          </WidgetWrapper>
          <WidgetWrapper>
            <Flexbox rowGap="xl">
              <Flexbox alignItems="center" justifyContent="center" rowGap="xs">
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
              <Flexbox alignItems="center" justifyContent="center" rowGap="xs">
                <Text fontSize="xl" fontWeight="semi-bold">18°</Text>
                <Text fontWeight="semi-bold">Thunderstorms</Text>
              </Flexbox>
              <Card fullWidth>
                <Flexbox justifyContent="space-between" flexDirection="row">
                  <Flexbox alignItems="center">
                    <Icon svg={
                      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.125 3.375V0.75H13.875V3.375H12.125ZM17.0548 4.22708L18.3673 1.95377L19.8828 2.82877L18.5703 5.10208L17.0548 4.22708ZM13 19.125C16.3827 19.125 19.125 16.3827 19.125 13C19.125 9.61726 16.3827 6.875 13 6.875C9.61726 6.875 6.875 9.61726 6.875 13C6.875 16.3827 9.61726 19.125 13 19.125ZM13 20.875C17.3492 20.875 20.875 17.3492 20.875 13C20.875 8.65076 17.3492 5.125 13 5.125C8.65076 5.125 5.125 8.65076 5.125 13C5.125 17.3492 8.65076 20.875 13 20.875ZM22.625 12.125H25.25V13.875H22.625V12.125ZM23.1713 6.11723L20.898 7.42973L21.773 8.94527L24.0463 7.63277L23.1713 6.11723ZM6.11723 2.82877L7.42973 5.10208L8.94527 4.22708L7.63277 1.95377L6.11723 2.82877ZM4.22703 8.94527L1.95371 7.63277L2.82871 6.11723L5.10203 7.42973L4.22703 8.94527ZM12.125 22.625V25.25H13.875V22.625H12.125ZM3.375 12.125H0.75V13.875H3.375V12.125ZM1.95367 18.3672L4.22698 17.0547L5.10198 18.5703L2.82867 19.8828L1.95367 18.3672ZM7.42978 20.8981L6.11728 23.1714L7.63283 24.0464L8.94533 21.7731L7.42978 20.8981ZM18.3672 24.0464L17.0547 21.7731L18.5703 20.8981L19.8828 23.1714L18.3672 24.0464ZM20.898 18.5703L23.1713 19.8828L24.0463 18.3672L21.773 17.0547L20.898 18.5703Z" fill="url(#paint0_linear_98_274)"/>
                        <defs>
                          <linearGradient id="paint0_linear_98_274" x1="13" y1="0.75" x2="13" y2="25.25" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#EFC977"/>
                            <stop offset="1" stopColor="#E07256"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    } />
                    <Text fontSize="sm" fontWeight="semi-bold">1</Text>
                    <Text fontSize="xs" secondary>UV Index</Text>
                  </Flexbox>
                  <Flexbox alignItems="center">
                    <Icon svg={
                      <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.25012 3.62007L9.25012 3.61492L4.29697 3.61486L9.04818 1.89804L9.04766 1.89662C9.13865 1.87368 9.23281 1.86552 9.32652 1.87251C9.33888 1.87343 9.35124 1.87462 9.36358 1.87607L9.36376 1.87609C9.49244 1.89125 9.61614 1.9348 9.72593 2.00362L9.72594 2.00363C9.83573 2.07244 9.92887 2.16479 9.99863 2.274L9.99874 2.27418C10.0685 2.3834 10.1131 2.50674 10.1293 2.6353L10.1294 2.63555C10.1456 2.76416 10.133 2.89478 10.0926 3.01795L10.0926 3.01805C10.0522 3.14125 9.98486 3.25392 9.89556 3.34792L9.89547 3.348C9.80619 3.44195 9.69715 3.51489 9.57623 3.56153L9.576 3.56163C9.56463 3.56601 9.55318 3.57015 9.54166 3.57404C9.44775 3.60581 9.34916 3.62136 9.25012 3.62007ZM0.5 3.12588V5.36496L9.23212 5.36507C9.56375 5.36878 9.8936 5.30947 10.204 5.18973L10.2042 5.18964C10.4405 5.09847 10.6616 4.97378 10.861 4.81995C10.9672 4.73804 11.0672 4.64787 11.1601 4.55009L11.1602 4.55001C11.4275 4.2686 11.629 3.9313 11.7501 3.56247L11.7501 3.56237C11.8712 3.19354 11.9088 2.80242 11.8602 2.41728L11.8602 2.41704C11.8116 2.03189 11.6781 1.66236 11.4692 1.33515L11.4691 1.33498C11.2602 1.00774 10.9812 0.731029 10.6523 0.524867L10.6523 0.524857C10.538 0.453214 10.4186 0.390712 10.2954 0.337749C10.064 0.238303 9.81876 0.172484 9.56722 0.142911L9.56703 0.14289C9.19227 0.0988584 8.81256 0.136353 8.45385 0.252652L8.45358 0.251906L8.42673 0.261607L8.42357 0.262674L8.42321 0.262797L8.42323 0.262875L0.5 3.12588ZM0.5 10.6233V12.421L12.0551 16.5318L12.055 16.5321C12.4731 16.699 12.923 16.7715 13.3724 16.7446C13.5452 16.7342 13.7163 16.7093 13.8839 16.6702C14.1522 16.6076 14.4117 16.5089 14.655 16.3762C15.0502 16.1606 15.393 15.8604 15.659 15.497C15.925 15.1337 16.1076 14.7161 16.1938 14.2741C16.2799 13.832 16.2676 13.3764 16.1575 12.9397C16.0475 12.503 15.8426 12.096 15.5573 11.7476C15.3817 11.5331 15.1783 11.3442 14.9531 11.1853C14.8124 11.0861 14.6632 10.9987 14.507 10.9242C14.1013 10.7306 13.6579 10.6288 13.2084 10.6259V10.6233L0.5 10.6233ZM13.1965 12.3735L5.58821 12.3735L12.7362 14.9164L12.7355 14.9182C12.9054 14.9809 13.0866 15.0077 13.2676 14.9969C13.4601 14.9853 13.6476 14.9315 13.8168 14.8391C13.9861 14.7468 14.1329 14.6182 14.2468 14.4626C14.3607 14.3071 14.4389 14.1282 14.4758 13.939C14.5127 13.7497 14.5074 13.5546 14.4603 13.3676C14.4132 13.1806 14.3254 13.0062 14.2032 12.8571C14.0811 12.7079 13.9275 12.5875 13.7535 12.5045C13.5797 12.4215 13.3898 12.3779 13.1973 12.3767L13.1965 12.3767L13.1965 12.3764L13.1965 12.3735ZM17.1408 3.8421L17.14 3.84254L16.2794 2.31877L16.2784 2.31701L16.2801 2.31604C16.7461 2.05306 17.2661 1.90044 17.8003 1.8699C17.8778 1.86547 17.9552 1.86363 18.0326 1.86435C18.4892 1.8686 18.9413 1.96219 19.3632 2.14065C19.8566 2.34935 20.2955 2.66855 20.6461 3.07365C20.9967 3.47876 21.2497 3.95897 21.3856 4.47729C21.5214 4.99561 21.5365 5.53821 21.4297 6.06329C21.3229 6.58837 21.097 7.08192 20.7695 7.50592C20.4894 7.86846 20.1415 8.17188 19.7458 8.39966C19.6787 8.43828 19.6102 8.47472 19.5405 8.50891C19.0595 8.74476 18.5308 8.86701 17.9951 8.86627V8.86601H0.5V7.11601H17.9976L17.9976 7.11412C18.2651 7.11449 18.5293 7.05342 18.7695 6.93561C19.0098 6.8178 19.2198 6.64639 19.3835 6.43458C19.5471 6.22278 19.6599 5.97623 19.7133 5.71394C19.7666 5.45164 19.7591 5.18059 19.6912 4.92168C19.6233 4.66276 19.497 4.42288 19.3218 4.22051C19.1467 4.01814 18.9274 3.8587 18.681 3.75444C18.4345 3.65019 18.1674 3.60392 17.9002 3.61919C17.6334 3.63445 17.3736 3.71071 17.1408 3.8421Z" fill="url(#paint0_linear_98_290)"/>
                        <defs>
                          <linearGradient id="paint0_linear_98_290" x1="11" y1="0.125" x2="11" y2="16.7501" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#CED3EA"/>
                            <stop offset="1" stopColor="#7E83A9"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    } />
                    <Text fontSize="sm" fontWeight="semi-bold">10 m/s</Text>
                    <Text fontSize="xs" secondary>Wind</Text>
                  </Flexbox>
                  <Flexbox alignItems="center">
                    <Icon svg={
                      <svg width="16" height="20" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.125 14.8183C14.125 17.2834 11.6634 19.75 8 19.75C4.33662 19.75 1.875 17.2834 1.875 14.8183C1.875 12.2614 3.53802 9.0771 5.4927 6.30502C6.37618 5.05209 7.26285 3.9607 7.95623 3.15447C8.6628 4.0237 9.57962 5.20696 10.4931 6.54233C11.4456 7.93465 12.372 9.45984 13.0546 10.9442C13.7497 12.4558 14.125 13.783 14.125 14.8183ZM0.125 14.8183C0.125 10.0611 4.61482 4.3246 6.81418 1.79993C7.52759 0.980991 8 0.5 8 0.5C8 0.5 8.45258 1.0003 9.14075 1.83835C11.3232 4.49612 15.875 10.5509 15.875 14.8183C15.875 18.5085 12.3492 21.5 8 21.5C3.65076 21.5 0.125 18.5085 0.125 14.8183ZM4.06105 11.875H5.94368C5.58945 12.6834 5.375 13.4501 5.375 14.1024C5.375 15.1039 6.35468 16.25 8 16.25V18C5.58375 18 3.625 16.255 3.625 14.1024C3.625 13.384 3.79213 12.6275 4.06105 11.875Z" fill="url(#paint0_linear_98_327)"/>
                        <defs>
                          <linearGradient id="paint0_linear_98_327" x1="8" y1="0.5" x2="8" y2="21.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#95B6F6"/>
                            <stop offset="1" stopColor="#5193DE"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    } />
                    <Text fontSize="sm" fontWeight="semi-bold">98%</Text>
                    <Text fontSize="xs" secondary>Humidity</Text>
                  </Flexbox>
                </Flexbox>
              </Card>
              <TabGroup defaultValue="today" size="sm">
                <TabList>
                  <Tab value="today">Today</Tab>
                  <Tab value="tomorrow">Tomorrow</Tab>
                  <Tab value="next">Next 7 days</Tab>
                </TabList>
                <TabContent value="today">
                  <ScrollContainer>
                    <Flexbox gap="md" flexDirection="row">
                      <Card>
                        <Flexbox gap="xs" alignItems="center" justifyContent="center">
                          <Text fontSize="xs" secondary>10:00</Text>
                          <Icon svg={
                            <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M14.0219 13.3896L15.478 14.3604L12.8849 18.25H17.3362L12.5426 24.8873L11.1239 23.8627L13.9137 20H9.61499L14.0219 13.3896Z" fill="url(#paint0_linear_101_318)"/>
                              <path fillRule="evenodd" clipRule="evenodd" d="M7.75 19.7069C3.72708 18.6523 0.75 14.8742 0.75 10.375C0.75 5.05926 4.9058 0.75 10.0323 0.75C14.2853 0.75 17.8703 3.71604 18.9684 7.76213C19.0923 7.75409 19.2173 7.75001 19.3431 7.75001C22.6054 7.75001 25.25 10.4923 25.25 13.875C25.25 17.2577 22.6054 20 19.3431 20C19.2701 20 19.1974 19.9986 19.125 19.9959V18.25H19.3901V18.2497C21.6064 18.2233 23.5 16.3342 23.5 13.875C23.5 11.3984 21.5796 9.50001 19.3431 9.50001C18.7113 9.50001 18.1047 9.65152 17.5595 9.92479C17.5317 9.41571 17.457 8.91964 17.3399 8.44118L17.3373 8.44225C16.508 4.99379 13.5109 2.5 10.0323 2.5C5.93157 2.5 2.5 5.96541 2.5 10.375C2.5 13.9325 4.73353 16.8755 7.75 17.88V19.7069Z" fill="url(#paint1_linear_101_318)"/>
                              <defs>
                              <linearGradient id="paint0_linear_101_318" x1="13.4756" y1="13.3896" x2="13.4756" y2="24.8873" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F5BD52"/>
                              <stop offset="1" stopColor="#F5DA79"/>
                              </linearGradient>
                              <linearGradient id="paint1_linear_101_318" x1="13" y1="0.75" x2="13" y2="20" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#95B6F6"/>
                              <stop offset="1" stopColor="#5193DE"/>
                              </linearGradient>
                              </defs>
                            </svg>
                          } />
                          <Text fontSize="sm" fontWeight="semi-bold">15°</Text>
                        </Flexbox>
                      </Card>
                      <Card>
                        <Flexbox gap="xs" alignItems="center" justifyContent="center">
                          <Text fontSize="xs" secondary>11:00</Text>
                          <Icon svg={
                            <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M22.6856 9.65097C23.199 8.91404 23.5001 8.0181 23.5001 7.05184C23.5001 4.53793 21.4622 2.5 18.9483 2.5C17.7989 2.5 16.7489 2.92603 15.9478 3.62879C15.4876 3.24821 14.9879 2.91381 14.4556 2.63269C15.5987 1.4706 17.1894 0.75 18.9483 0.75C22.4287 0.75 25.2501 3.57143 25.2501 7.05184C25.2501 8.61613 24.6801 10.0473 23.7365 11.149C23.4619 10.5972 23.1064 10.0927 22.6856 9.65097Z" fill="url(#paint0_linear_101_219)"/>
                              <path fillRule="evenodd" clipRule="evenodd" d="M25.25 13.875C25.25 16.7083 23.3946 19.0923 20.875 19.792V17.9408C22.39 17.3065 23.5 15.7578 23.5 13.875C23.5 11.3984 21.5796 9.50001 19.3431 9.50001C18.7113 9.50001 18.1047 9.65151 17.5595 9.92476C17.5317 9.41569 17.457 8.91962 17.3399 8.44116L17.3372 8.44225C16.508 4.99378 13.5109 2.5 10.0323 2.5C5.93157 2.5 2.5 5.96541 2.5 10.375C2.5 13.2005 3.90892 15.6383 6 17.0252V19.0469C2.89321 17.4908 0.75 14.1924 0.75 10.375C0.75 5.05926 4.90581 0.75 10.0323 0.75C14.2853 0.75 17.8703 3.71604 18.9684 7.76213C19.0923 7.75409 19.2172 7.75001 19.3431 7.75001C22.6054 7.75001 25.25 10.4923 25.25 13.875ZM7.75092 18.608C7.75079 18.1894 7.88412 17.7345 8.0658 17.3089C8.45386 16.3999 9.0625 15.625 9.0625 15.625C9.0625 15.625 9.64373 16.4278 10.0329 17.3096C10.2286 17.7531 10.3758 18.2166 10.3759 18.608C10.3762 19.3768 9.78872 20 9.06384 20C8.33897 20 7.75115 19.3768 7.75092 18.608ZM12.4408 17.3089C12.2591 17.7345 12.1258 18.1894 12.1259 18.608C12.1262 19.3768 12.714 20 13.4388 20C14.1637 20 14.7512 19.3768 14.7509 18.608C14.7508 18.2166 14.6036 17.7531 14.4079 17.3096C14.0187 16.4278 13.4375 15.625 13.4375 15.625C13.4375 15.625 12.8289 16.3999 12.4408 17.3089ZM10.2661 22.983C10.266 22.5644 10.3993 22.1095 10.581 21.6839C10.9691 20.7749 11.5777 20 11.5777 20C11.5777 20 12.1589 20.8028 12.5481 21.6846C12.7438 22.1281 12.891 22.5916 12.8911 22.983C12.8913 23.7518 12.3039 24.375 11.579 24.375C10.8542 24.375 10.2663 23.7518 10.2661 22.983ZM16.8158 17.3089C16.6341 17.7345 16.5008 18.1894 16.5009 18.608C16.5012 19.3768 17.089 20 17.8138 20C18.5387 20 19.1262 19.3768 19.1259 18.608C19.1258 18.2166 18.9786 17.7531 18.7829 17.3096C18.3937 16.4278 17.8125 15.625 17.8125 15.625C17.8125 15.625 17.2039 16.3999 16.8158 17.3089ZM14.6541 22.983C14.654 22.5644 14.7873 22.1095 14.969 21.6839C15.3571 20.7749 15.9657 20 15.9657 20C15.9657 20 16.547 20.8028 16.9361 21.6846C17.1319 22.1281 17.279 22.5916 17.2791 22.983C17.2794 23.7518 16.6919 24.375 15.9671 24.375C15.2422 24.375 14.6544 23.7518 14.6541 22.983Z" fill="url(#paint1_linear_101_219)"/>
                              <defs>
                              <linearGradient id="paint0_linear_101_219" x1="19.8528" y1="0.75" x2="19.8528" y2="11.1491" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#EFC977"/>
                              <stop offset="1" stopColor="#E07256"/>
                              </linearGradient>
                              <linearGradient id="paint1_linear_101_219" x1="13" y1="0.75" x2="13" y2="24.375" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#95B6F6"/>
                              <stop offset="1" stopColor="#5193DE"/>
                              </linearGradient>
                              </defs>
                            </svg>
                          } />
                          <Text fontSize="sm" fontWeight="semi-bold">15°</Text>
                        </Flexbox>
                      </Card>
                      <Card>
                        <Flexbox gap="xs" alignItems="center" justifyContent="center">
                          <Text fontSize="xs" secondary>12:00</Text>
                          <Icon svg={
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M23.4811 10.5596C24.5707 9.52343 25.2499 8.05979 25.2499 6.4375C25.2499 3.29638 22.7035 0.75 19.5624 0.75C17.5975 0.75 15.8652 1.74647 14.8435 3.26165C15.2905 3.6844 15.695 4.15156 16.05 4.65606C16.7002 3.37661 18.029 2.5 19.5624 2.5C21.737 2.5 23.4999 4.26288 23.4999 6.4375C23.4999 7.40527 23.1508 8.29149 22.5716 8.97708C22.9545 9.44802 23.2635 9.9814 23.4811 10.5596Z" fill="url(#paint0_linear_101_293)"/>
                              <path fillRule="evenodd" clipRule="evenodd" d="M0.75 10.375C0.75 14.1924 2.89321 17.4908 6 19.0469V17.0252C3.90892 15.6383 2.5 13.2005 2.5 10.375C2.5 5.96541 5.93157 2.5 10.0323 2.5C13.5109 2.5 16.508 4.99379 17.3373 8.44225L17.3399 8.44118C17.457 8.91964 17.5317 9.41571 17.5595 9.92479C18.1047 9.65152 18.7113 9.50001 19.3431 9.50001C21.5796 9.50001 23.5 11.3984 23.5 13.875C23.5 15.3717 22.7986 16.6572 21.75 17.4402V19.4701C23.8126 18.5146 25.25 16.3689 25.25 13.875C25.25 10.4923 22.6054 7.75001 19.3431 7.75001C19.2173 7.75001 19.0923 7.75409 18.9684 7.76213C17.8703 3.71604 14.2853 0.75 10.0323 0.75C4.9058 0.75 0.75 5.05926 0.75 10.375ZM15.3791 16.6772C15.5625 16.7832 15.85 16.737 15.9969 16.4823C16.0774 16.3429 16.1809 16.0532 16.2558 15.5817C16.2857 15.3937 16.3082 15.1954 16.3245 14.9918C15.8135 15.3534 15.4263 15.7199 15.2389 16.0445C15.0919 16.2991 15.1956 16.5713 15.3791 16.6772ZM16.3201 12.9315C17.2321 12.4205 18.0043 12.1286 18.0043 12.1286C18.0043 12.1286 18.1053 12.9503 18.1093 13.9856C18.1136 15.1197 18.0014 16.5102 17.5123 17.3575C16.8973 18.4232 15.5506 18.7972 14.5043 18.1929C13.458 17.5886 13.1085 16.2349 13.7235 15.1693C14.2602 14.2393 15.3666 13.4657 16.3201 12.9315ZM9.60158 17.5678C9.78506 17.6738 10.0725 17.6275 10.2194 17.3729C10.2999 17.2334 10.4034 16.9438 10.4783 16.4723C10.5082 16.2843 10.5307 16.086 10.547 15.8824C10.036 16.244 9.64877 16.6105 9.46141 16.9351C9.31444 17.1897 9.4181 17.4619 9.60158 17.5678ZM10.5426 13.8221C11.4546 13.3111 12.2268 13.0192 12.2268 13.0192C12.2268 13.0192 12.3278 13.8409 12.3318 14.8762C12.3361 16.0103 12.2239 17.4007 11.7349 18.2481C11.1198 19.3138 9.77308 19.6878 8.72681 19.0835C7.68055 18.4792 7.33096 17.1255 7.94599 16.0599C8.48269 15.1299 9.58907 14.3563 10.5426 13.8221ZM17.9694 21.8487C17.8224 22.1034 17.535 22.1496 17.3515 22.0437C17.168 21.9377 17.0644 21.6656 17.2113 21.4109C17.3987 21.0863 17.7859 20.7198 18.297 20.3583C18.2806 20.5618 18.2581 20.7601 18.2282 20.9481C18.1533 21.4196 18.0499 21.7093 17.9694 21.8487ZM19.9767 17.495C19.9767 17.495 19.2046 17.7869 18.2925 18.2979C17.339 18.8321 16.2326 19.6058 15.6959 20.5357C15.0809 21.6013 15.4305 22.9551 16.4767 23.5593C17.523 24.1636 18.8697 23.7896 19.4848 22.724C19.9738 21.8766 20.086 20.4861 20.0817 19.352C20.0778 18.3167 19.9767 17.495 19.9767 17.495ZM11.473 23.4452C11.6565 23.5512 11.9439 23.505 12.0908 23.2503C12.1713 23.1109 12.2748 22.8212 12.3497 22.3497C12.3796 22.1617 12.4021 21.9634 12.4184 21.7598C11.9074 22.1214 11.5202 22.4879 11.3328 22.8125C11.1858 23.0671 11.2895 23.3393 11.473 23.4452ZM12.414 19.6995C13.326 19.1885 14.0982 18.8966 14.0982 18.8966C14.0982 18.8966 14.1992 19.7183 14.2032 20.7536C14.2075 21.8877 14.0953 23.2782 13.6062 24.1255C12.9912 25.1912 11.6445 25.5652 10.5982 24.9609C9.55194 24.3566 9.20235 23.0029 9.81739 21.9373C10.3541 21.0074 11.4605 20.2337 12.414 19.6995Z" fill="url(#paint1_linear_101_293)"/>
                              <defs>
                              <linearGradient id="paint0_linear_101_293" x1="20.0467" y1="0.75" x2="20.0467" y2="10.5596" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#EFC977"/>
                              <stop offset="1" stopColor="#E07256"/>
                              </linearGradient>
                              <linearGradient id="paint1_linear_101_293" x1="13" y1="0.75" x2="13" y2="25.2499" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#95B6F6"/>
                              <stop offset="1" stopColor="#5193DE"/>
                              </linearGradient>
                              </defs>
                            </svg>
                          } />
                          <Text fontSize="sm" fontWeight="semi-bold">15°</Text>
                        </Flexbox>
                      </Card>
                      <Card>
                        <Flexbox gap="xs" alignItems="center" justifyContent="center">
                          <Text fontSize="xs" secondary>13:00</Text>
                          <Icon svg={
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M12.125 0.75V3.375H13.875V0.75H12.125ZM17.0358 17.6075C18.3164 16.4848 19.125 14.8368 19.125 13C19.125 9.61726 16.3827 6.875 13 6.875C9.61726 6.875 6.875 9.61726 6.875 13C6.875 13.1241 6.87869 13.2473 6.88597 13.3696C6.28681 13.5801 5.72743 13.8752 5.22214 14.2404C5.1582 13.8364 5.125 13.4221 5.125 13C5.125 8.65076 8.65076 5.125 13 5.125C17.3492 5.125 20.875 8.65076 20.875 13C20.875 15.16 20.0054 17.1168 18.5972 18.5396C18.1525 18.1277 17.6222 17.8071 17.0358 17.6075ZM22.625 12.125H25.25V13.875H22.625V12.125ZM23.1713 6.11723L20.898 7.42973L21.773 8.94527L24.0463 7.63277L23.1713 6.11723ZM17.0548 4.22708L18.3673 1.95377L19.8828 2.82877L18.5703 5.10208L17.0548 4.22708ZM6.11723 2.82877L7.42973 5.10208L8.94527 4.22708L7.63277 1.95377L6.11723 2.82877ZM4.22703 8.94527L1.95371 7.63277L2.82871 6.11723L5.10203 7.42973L4.22703 8.94527ZM3.375 12.125H0.75V13.875H3.375V12.125ZM23.1713 19.8828L20.898 18.5703L21.773 17.0547L24.0463 18.3672L23.1713 19.8828Z" fill="url(#paint0_linear_101_298)"/>
                              <path fillRule="evenodd" clipRule="evenodd" d="M9.06251 23.4998C9.08685 23.4998 9.11114 23.4996 9.13539 23.4993H15.5665C15.5777 23.4995 15.5889 23.4997 15.6002 23.4998H15.625V23.4999C15.625 23.4999 15.625 23.4999 15.625 23.4999C17.0748 23.4999 18.25 22.3246 18.25 20.8749C18.25 19.4251 17.0748 18.2499 15.625 18.2499C14.9518 18.2499 14.3378 18.5033 13.8731 18.92C13.8768 18.8429 13.8787 18.7654 13.8787 18.6875C13.8787 18.0966 13.7722 17.5306 13.5774 17.0077C14.1883 16.6835 14.8852 16.4999 15.625 16.4999C18.0413 16.4999 20 18.4586 20 20.8749C20 23.2911 18.0413 25.2499 15.625 25.2499C15.6143 25.2499 15.6036 25.2499 15.5929 25.2498L9.09641 25.2498V25.2497C9.08511 25.2498 9.07381 25.2498 9.06251 25.2498C5.43814 25.2498 2.5 22.3117 2.5 18.6873C2.5 15.0629 5.43814 12.1248 9.06251 12.1248C11.9256 12.1248 14.3604 13.9582 15.257 16.5151C14.6529 16.5654 14.0837 16.7384 13.5744 17.0092C12.8933 15.1788 11.1302 13.8748 9.06251 13.8748C6.40463 13.8748 4.25 16.0294 4.25 18.6873C4.25 21.3452 6.40463 23.4998 9.06251 23.4998Z" fill="url(#paint1_linear_101_298)"/>
                              <defs>
                              <linearGradient id="paint0_linear_101_298" x1="13" y1="0.75" x2="13" y2="19.8828" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#EFC977"/>
                              <stop offset="1" stopColor="#E07256"/>
                              </linearGradient>
                              <linearGradient id="paint1_linear_101_298" x1="11.25" y1="12.1248" x2="11.25" y2="25.2499" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#B2D4F7"/>
                              <stop offset="1" stopColor="#D9E2F3"/>
                              </linearGradient>
                              </defs>
                            </svg>
                          } />
                          <Text fontSize="sm" fontWeight="semi-bold">15°</Text>
                        </Flexbox>
                      </Card>
                      <Card>
                        <Flexbox gap="xs" alignItems="center" justifyContent="center">
                          <Text fontSize="xs" secondary>14:00</Text>
                          <Icon svg={
                            <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M14.0219 13.3896L15.478 14.3604L12.8849 18.25H17.3362L12.5426 24.8873L11.1239 23.8627L13.9137 20H9.61499L14.0219 13.3896Z" fill="url(#paint0_linear_101_318)"/>
                              <path fillRule="evenodd" clipRule="evenodd" d="M7.75 19.7069C3.72708 18.6523 0.75 14.8742 0.75 10.375C0.75 5.05926 4.9058 0.75 10.0323 0.75C14.2853 0.75 17.8703 3.71604 18.9684 7.76213C19.0923 7.75409 19.2173 7.75001 19.3431 7.75001C22.6054 7.75001 25.25 10.4923 25.25 13.875C25.25 17.2577 22.6054 20 19.3431 20C19.2701 20 19.1974 19.9986 19.125 19.9959V18.25H19.3901V18.2497C21.6064 18.2233 23.5 16.3342 23.5 13.875C23.5 11.3984 21.5796 9.50001 19.3431 9.50001C18.7113 9.50001 18.1047 9.65152 17.5595 9.92479C17.5317 9.41571 17.457 8.91964 17.3399 8.44118L17.3373 8.44225C16.508 4.99379 13.5109 2.5 10.0323 2.5C5.93157 2.5 2.5 5.96541 2.5 10.375C2.5 13.9325 4.73353 16.8755 7.75 17.88V19.7069Z" fill="url(#paint1_linear_101_318)"/>
                              <defs>
                              <linearGradient id="paint0_linear_101_318" x1="13.4756" y1="13.3896" x2="13.4756" y2="24.8873" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F5BD52"/>
                              <stop offset="1" stopColor="#F5DA79"/>
                              </linearGradient>
                              <linearGradient id="paint1_linear_101_318" x1="13" y1="0.75" x2="13" y2="20" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#95B6F6"/>
                              <stop offset="1" stopColor="#5193DE"/>
                              </linearGradient>
                              </defs>
                            </svg>
                          } />
                          <Text fontSize="sm" fontWeight="semi-bold">15°</Text>
                        </Flexbox>
                      </Card>
                    </Flexbox>
                  </ScrollContainer>
                </TabContent>
                 <TabContent value="tomorrow">
                  <Text>Tab 2 content</Text>
                </TabContent>
                 <TabContent value="next">
                  <Text>Tab 3 content</Text>
                </TabContent>
              </TabGroup>
            </Flexbox>
          </WidgetWrapper>
        </Flexbox>
      </Section>
    </>
  )
}
