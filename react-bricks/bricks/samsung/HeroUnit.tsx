import { Image, RichText, Text, types, Repeater } from 'react-bricks/frontend'
import {
  backgroundImageEditProps,
  LayoutProps,
} from '../react-bricks-ui/LayoutSideProps'
import Section from '../react-bricks-ui/shared/components/Section'
import { buttonColors } from '../react-bricks-ui/colors'

interface HeroUnitProps extends LayoutProps {
  title: string
  text: string
}

//=============================
// Component to be rendered
//=============================
const HeroUnit: types.Brick<HeroUnitProps> = ({
  backgroundColor,
  backgroundImage,
  backgroundImageDark,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      backgroundImageDark={backgroundImageDark}
      className="relative bg-opacity-50 lg:bg-opacity-100 font-samsung max-w-[1440px] mx-auto"
    >
      <div className="flex flex-col lg:flex-row justify-around max-w-[1600px] mx-auto py-12 md:pl-14 pl-3 pr-3 lg:py-20 lg:pl-[90px] lg:pr-[24px] items-center">
        <div className="text-left grow-1 max-w-[596px]">
          <Text
            renderBlock={(props) => (
              <h1 className="sm:leading-[84px] leading-tight text-4xl sm:text-[68px] font-bold text-gray-900 dark:text-white mb-3">
                {props.children}
              </h1>
            )}
            placeholder="Type a title..."
            propName="title"
          />
          <RichText
            renderBlock={(props) => (
              <h3 className="text-[21px] leading-[32px] text-gray-700 dark:text-gray-100">
                {props.children}
              </h3>
            )}
            placeholder="Type a text..."
            propName="text"
            allowedFeatures={[
              types.RichTextFeatures.Bold,
              types.RichTextFeatures.Italic,
              types.RichTextFeatures.Highlight,
              types.RichTextFeatures.Code,
              types.RichTextFeatures.Link,
            ]}
            renderCode={(props) => (
              <code className="text-sm py-1 px-2 bg-gray-200 dark:bg-gray-700 rounded">
                {props.children}
              </code>
            )}
          />
          <Repeater
            propName="buttons"
            renderWrapper={(items) => (
              <div className="flex flex-row space-x-5 items-center justify-start mt-6">
                {items}
              </div>
            )}
          />
        </div>

        <Image
          propName="icon"
          alt="Icon"
          maxWidth={708}
          aspectRatio={1}
          imageClassName="max-w-[708px] lg:w-[28rem] xl:w-[46rem] h-auto rounded-full mb-5 basis-0 lg:static -z-10 lg:z-0 grow-1"
        />
      </div>
    </Section>
  )
}

//=============================
// Brick Schema
//=============================
HeroUnit.schema = {
  name: 'samsung-hero-unit',
  label: 'Hero Unit',
  getDefaultProps: () => ({
    title: 'Lorem ipsum dolor et security.',
    text: 'Discover the lorem ipsum dolor business solutions',
    buttons: [
      {
        type: 'link',
        text: 'Learn more',
        href: '',
        isTargetBlank: false,
        buttonColor: buttonColors.BLUE_SAMSUNG.value,
        variant: 'solid',
        padding: 'normal',
      },
      {
        type: 'link',
        text: 'Find solutions',
        href: '',
        isTargetBlank: false,
        buttonColor: buttonColors.BLUE_SAMSUNG.value,
        variant: 'ghost',
        padding: 'normal',
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'buttons',
      itemType: 'samsung-button',
      itemLabel: 'Button',
      min: 0,
      max: 2,
    },
  ],
  sideEditProps: [
    { groupName: 'background-image', props: backgroundImageEditProps },
  ],
}

export default HeroUnit
