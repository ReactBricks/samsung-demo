import { Image, RichText, Text, types, Repeater } from 'react-bricks/frontend'
import blockNames from '../react-bricks-ui/blockNames'

//=============================
// Local Types
//=============================
type Padding = 'big' | 'small'

interface HeroUnitProps {
  padding: Padding
  title: string
  text: string
}

//=============================
// Component to be rendered
//=============================
const MyHeroUnit: types.Brick<HeroUnitProps> = ({ padding }) => {
  return (
    <div className="flex max-w-xl mx-auto p-6">
      <div>
        <Text
          renderBlock={(props) => (
            <h1 className="text-3xl sm:text-4xl text-center font-black text-gray-900 dark:text-white leading-tight mb-3">
              {props.children}
            </h1>
          )}
          placeholder="Type a title..."
          propName="title"
        />
        <RichText
          renderBlock={(props) => (
            <p className="text-xl text-center leading-relaxed text-gray-700 dark:text-gray-100">
              {props.children}
            </p>
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
            <div className="flex flex-row space-x-5 items-center justify-center mt-6">
              {items}
            </div>
          )}
        />
      </div>

      <Image
        propName="icon"
        alt="Icon"
        maxWidth={200}
        aspectRatio={1}
        imageClassName="w-20 mb-5 mx-auto"
      />
    </div>
  )
}

//=============================
// Brick Schema
//=============================
MyHeroUnit.schema = {
  name: 'my-hero-unit',
  label: 'Custom Hero Unit',
  previewImageUrl: `/bricks-preview-images/custom-hero-unit.png`,
  getDefaultProps: () => ({
    padding: 'big',
    title: 'Rimani connesso, protetto e produttivo.',
    text: 'Scopri la piattaforma di sicurezza e le soluzioni aziendali Knox',
    buttons: [
      {
        type: 'link',
        text: 'Get Started',
        href: '',
        isTargetBlank: false,
        buttonColor: '#000',
        variant: 'solid',
        padding: 'normal',
      },
      {
        type: 'link',
        text: 'Learn more',
        href: '',
        isTargetBlank: false,
        buttonColor: '#000',
        variant: 'outline',
        padding: 'normal',
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'buttons',
      itemType: blockNames.Button,
      itemLabel: 'Button',
      min: 0,
      max: 2,
    },
  ],
  sideEditProps: [],
}

export default MyHeroUnit
