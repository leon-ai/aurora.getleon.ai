import type { Metadata } from 'next'

import Header from '@/app/components/header'
import Section from '@/app/components/section'

import Text from '@/app/aurora/components/text'
import WidgetWrapper from '@/app/aurora/components/widget-wrapper'
import Flexbox from '@/app/aurora/components/flexbox'
import Icon from '@/app/aurora/components/icon'
import Card from '@/app/aurora/components/card'
import Badge from '@/app/aurora/components/badge'

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
        <Section title="Badge">
            <Badge>Edited</Badge>
            <Badge color="yellow">Warning</Badge>
            <Badge color="red">Danger</Badge>
            <Badge color="green">Success</Badge>
        </Section>
        <Section title="Card">
          <Card>
            <Text>Hello world</Text>
          </Card>
          <Card fullWidth>
            <Flexbox alignItems="center" justifyContent="space-between">
              <Text>Text 1</Text>
              <Text>Text 2</Text>
            </Flexbox>
          </Card>
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
              <Card fullWidth>
                <Flexbox alignItems="center" justifyContent="space-between">
                  <Flexbox flexDirection="column" alignItems="center">
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
                  <Flexbox flexDirection="column" alignItems="center">
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
                  <Flexbox flexDirection="column" alignItems="center">
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
            </Flexbox>
          </WidgetWrapper>
        </Section>
      </main>
    </div>
  )
}
