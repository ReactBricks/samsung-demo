import { Image, RichText, Text, types, Repeater } from 'react-bricks/frontend'
import {
  LayoutProps,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
} from '../react-bricks-ui/LayoutSideProps'
import { useState } from 'react'
import Section from '../react-bricks-ui/shared/components/Section'
import Container from '../react-bricks-ui/shared/components/Container'

interface FeaturesProps extends LayoutProps {
  title: string

  titleFeature1: string
  textFeature1: string

  titleFeature2: string
  textFeature2: string

  titleFeature3: string
  textFeature3: string

  titleFeature4: string
  textFeature4: string

  sideTitleFeature1: string
  sideTextFeature1: string
  sideButtonLinkFeature1: string
  sideButtonLabelFeature1: string
  sideImageFeature1: types.IImageSource
  overlayFeature1: string

  sideTitleFeature2: string
  sideTextFeature2: string
  sideButtonLinkFeature2: string
  sideButtonLabelFeature2: string
  sideImageFeature2: types.IImageSource
  overlayFeature2: string

  sideTitleFeature3: string
  sideTextFeature3: string
  sideButtonLinkFeature3: string
  sideButtonLabelFeature3: string
  sideImageFeature3: types.IImageSource
  overlayFeature3: string

  sideTitleFeature4: string
  sideTextFeature4: string
  sideButtonLinkFeature4: string
  sideButtonLabelFeature4: string
  sideImageFeature4: types.IImageSource
  overlayFeature4: string
}

//=============================
// Component to be rendered
//=============================
const Features: types.Brick<FeaturesProps> = ({
  overlayFeature1 = 'black',
  overlayFeature2 = 'blue',
  overlayFeature3 = 'cerulean',
  overlayFeature4 = 'green',
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
}) => {
  const [currentRow, setCurrentRow] = useState(1)
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
      className="max-w-[1440px] mx-auto font-samsung dark:bg-[#101827]"
    >
      <Container
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        size="full"
        className="mx-0 xl:mx-0 sm:mx-0"
      >
        <div className="pl-24 pr-3 py-12">
          <div className="flex my-8 gap-4 items-center">
            {/* Single features */}
            <div className="basis-1/3 py-[20px]">
              <Text
                renderBlock={(props) => (
                  <h2 className="max-w-[350px] mt-0 mb-10 text-center md:text-left font-bold text-[36px] leading-[45px] text-gray-900 dark:text-white">
                    {props.children}
                  </h2>
                )}
                placeholder="Type a title..."
                propName="title"
              />

              {/* Feature 1 */}
              <div
                className={`flex border rounded ${
                  currentRow === 1 ? 'shadow-xl' : ''
                } hover:shadow-xl hover:cursor-pointer p-4 gap-6 max-w-full lg:max-w-md transition-shadow duration-500 mb-2 bg-white dark:bg-gray-900 dark:border-white/20`}
                onClick={() => setCurrentRow(1)}
              >
                <Image
                  propName="imageFeature1"
                  alt="Icon"
                  maxWidth={100}
                  aspectRatio={1}
                  imageClassName=""
                />

                <div>
                  <Text
                    renderBlock={(props) => (
                      <h3 className="text-gray-900 dark:text-white text-base mb-1 font-bold">
                        {props.children}
                      </h3>
                    )}
                    placeholder="Type a title..."
                    propName="titleFeature1"
                  />

                  <RichText
                    renderBlock={(props) => (
                      <p className="font-normal text-gray-700 dark:text-gray-100 text-sm">
                        {props.children}
                      </p>
                    )}
                    placeholder="Type a text..."
                    renderPlaceholder={(props) => (
                      <div className="min-w-[30px]">{props.children}</div>
                    )}
                    propName="textFeature1"
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
                </div>
              </div>

              {/* Feature 2 */}
              <div
                className={`flex border rounded ${
                  currentRow === 2 ? 'shadow-xl' : ''
                } hover:shadow-xl hover:cursor-pointer p-4 gap-6 max-w-full lg:max-w-md transition-shadow duration-500 mb-2 bg-white dark:bg-gray-900 dark:border-white/20`}
                onClick={() => setCurrentRow(2)}
              >
                <Image
                  propName="imageFeature2"
                  alt="Icon"
                  maxWidth={100}
                  aspectRatio={1}
                  imageClassName=""
                />

                <div>
                  <Text
                    renderBlock={(props) => (
                      <h3 className="text-gray-900 dark:text-white text-base mb-1 font-bold">
                        {props.children}
                      </h3>
                    )}
                    placeholder="Type a title..."
                    propName="titleFeature2"
                  />

                  <RichText
                    renderBlock={(props) => (
                      <p className="font-normal text-gray-700 dark:text-gray-100 text-sm">
                        {props.children}
                      </p>
                    )}
                    placeholder="Type a text..."
                    renderPlaceholder={(props) => (
                      <div className="min-w-[30px]">{props.children}</div>
                    )}
                    propName="textFeature2"
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
                </div>
              </div>

              {/* Feature 3 */}
              <div
                className={`flex border rounded ${
                  currentRow === 3 ? 'shadow-xl' : ''
                } hover:shadow-xl hover:cursor-pointer p-4 gap-6 max-w-full lg:max-w-md transition-shadow duration-500 mb-2 bg-white dark:bg-gray-900 dark:border-white/20`}
                onClick={() => setCurrentRow(3)}
              >
                <Image
                  propName="imageFeature3"
                  alt="Icon"
                  maxWidth={100}
                  aspectRatio={1}
                  imageClassName=""
                />

                <div>
                  <Text
                    renderBlock={(props) => (
                      <h3 className="text-gray-900 dark:text-white text-base mb-1 font-bold">
                        {props.children}
                      </h3>
                    )}
                    placeholder="Type a title..."
                    propName="titleFeature3"
                  />

                  <RichText
                    renderBlock={(props) => (
                      <p className="font-normal text-gray-700 dark:text-gray-100 text-sm">
                        {props.children}
                      </p>
                    )}
                    placeholder="Type a text..."
                    renderPlaceholder={(props) => (
                      <div className="min-w-[30px]">{props.children}</div>
                    )}
                    propName="textFeature3"
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
                </div>
              </div>

              {/* Feature 4 */}
              <div
                className={`flex border rounded ${
                  currentRow === 4 ? 'shadow-xl' : ''
                } hover:shadow-xl hover:cursor-pointer p-4 gap-6 max-w-full lg:max-w-md transition-shadow duration-500 mb-2 bg-white dark:bg-gray-900 dark:border-white/20`}
                onClick={() => setCurrentRow(4)}
              >
                <Image
                  propName="imageFeature4"
                  alt="Icon"
                  maxWidth={100}
                  aspectRatio={1}
                  imageClassName=""
                />

                <div>
                  <Text
                    renderBlock={(props) => (
                      <h3 className="text-gray-900 dark:text-white text-base mb-1 font-bold">
                        {props.children}
                      </h3>
                    )}
                    placeholder="Type a title..."
                    propName="titleFeature4"
                  />

                  <RichText
                    renderBlock={(props) => (
                      <p className="font-normal text-gray-700 dark:text-gray-100 text-sm">
                        {props.children}
                      </p>
                    )}
                    placeholder="Type a text..."
                    renderPlaceholder={(props) => (
                      <div className="min-w-[30px]">{props.children}</div>
                    )}
                    propName="textFeature4"
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
                </div>
              </div>
            </div>

            {/* Preview */}
            <div className="basis-2/3 h-fit">
              {/* Feature 1 */}
              <div
                className={`${
                  currentRow === 1 ? 'block' : 'hidden'
                } h-fit bg-no-repeat relative`}
              >
                <Image
                  propName="sideImageFeature1"
                  alt="Icon"
                  maxWidth={805}
                  aspectRatio={1.615}
                />

                <img
                  alt="Icon"
                  src={`/overlay/${overlayFeature1}.png`}
                  className="absolute h-full top-0 bottom-0 z-10"
                />

                <div className="px-11 py-3 w-full lg:w-3/5 xl:w-2/5 h-fit text-white absolute top-1/2 bottom-1/2 m-auto z-20">
                  <Text
                    propName="sideTitleFeature1"
                    placeholder="Title..."
                    renderBlock={(props) => (
                      <h3 className="text-[24px] tracking-[0.01rem] font-bold mb-6">
                        {props.children}
                      </h3>
                    )}
                  />
                  <RichText
                    propName="sideTextFeature1"
                    placeholder="Text..."
                    renderBlock={(props) => (
                      <p className="text-base mb-4">{props.children}</p>
                    )}
                  />
                  <Repeater propName="button1" />
                </div>
              </div>

              {/* Feature 2 */}
              <div
                className={`${
                  currentRow === 2 ? 'block' : 'hidden'
                } h-full bg-no-repeat relative`}
              >
                <Image
                  propName="sideImageFeature2"
                  alt="Icon"
                  maxWidth={805}
                  aspectRatio={1.615}
                />
                <img
                  alt="Icon"
                  src={`/overlay/${overlayFeature2}.png`}
                  className="absolute h-full top-0 bottom-0 z-10"
                />
                <div className="px-11 py-3 w-full lg:w-3/5 xl:w-2/5 h-fit text-white absolute top-1/2 bottom-1/2 m-auto z-20">
                  <Text
                    propName="sideTitleFeature2"
                    placeholder="Title..."
                    renderBlock={(props) => (
                      <h3 className="text-[24px] tracking-[0.01rem] font-bold mb-6">
                        {props.children}
                      </h3>
                    )}
                  />
                  <RichText
                    propName="sideTextFeature2"
                    placeholder="Text..."
                    renderBlock={(props) => (
                      <p className="text-base mb-4">{props.children}</p>
                    )}
                  />
                  <Repeater propName="button2" />
                </div>
              </div>

              {/* Feature 3 */}
              <div
                className={`${
                  currentRow === 3 ? 'block' : 'hidden'
                } h-full bg-no-repeat relative`}
              >
                <Image
                  propName="sideImageFeature3"
                  alt="Icon"
                  maxWidth={805}
                  aspectRatio={1.615}
                />
                <img
                  alt="Icon"
                  src={`/overlay/${overlayFeature3}.png`}
                  className="absolute h-full top-0 bottom-0 z-10"
                />
                <div className="px-11 py-3 w-full lg:w-3/5 xl:w-2/5 h-fit text-white absolute top-1/2 bottom-1/2 m-auto z-20">
                  <Text
                    propName="sideTitleFeature3"
                    placeholder="Title..."
                    renderBlock={(props) => (
                      <h3 className="text-[24px] tracking-[0.01rem] font-bold mb-6">
                        {props.children}
                      </h3>
                    )}
                  />
                  <RichText
                    propName="sideTextFeature3"
                    placeholder="Text..."
                    renderBlock={(props) => (
                      <p className="text-base mb-4">{props.children}</p>
                    )}
                  />
                  <Repeater propName="button3" />
                </div>
              </div>

              {/* Feature 4 */}
              <div
                className={`${
                  currentRow === 4 ? 'block' : 'hidden'
                } h-full bg-no-repeat relative`}
              >
                <Image
                  propName="sideImageFeature4"
                  alt="Icon"
                  maxWidth={805}
                  aspectRatio={1.615}
                />
                <img
                  alt="Icon"
                  src={`/overlay/${overlayFeature4}.png`}
                  className="absolute h-full top-0 bottom-0 z-10"
                />
                <div className="px-11 py-3 w-full lg:w-3/5 xl:w-2/5 h-fit text-white absolute top-1/2 bottom-1/2 m-auto z-20">
                  <Text
                    propName="sideTitleFeature4"
                    placeholder="Title..."
                    renderBlock={(props) => (
                      <h3 className="text-[24px] tracking-[0.01rem] font-bold mb-6">
                        {props.children}
                      </h3>
                    )}
                  />
                  <RichText
                    propName="sideTextFeature4"
                    placeholder="Text..."
                    renderBlock={(props) => (
                      <p className="text-base mb-4">{props.children}</p>
                    )}
                  />
                  <Repeater propName="button4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

//=============================
// Brick Schema
//=============================
Features.schema = {
  name: 'samsung-features',
  label: 'Features',
  previewImageUrl: '/bricks-preview-images/samsung-features.png',
  getDefaultProps: () => ({
    title: 'What Knox can do for you',

    titleFeature1: 'Secured by Knox',
    textFeature1: 'Most Samsung devices are Secured by Knox',

    titleFeature2: 'Feature 2',
    textFeature2: 'Lorem ipsum dolor sit amet.',

    titleFeature3: 'Feature 3',
    textFeature3: 'Lorem ipsum dolor sit amet.',

    titleFeature4: 'Feature 4',
    textFeature4: 'Lorem ipsum dolor sit amet.',

    sideTitleFeature1: 'Secured by Knox',
    sideTextFeature1:
      'At every layer of Samsung Galaxy devices, Knox ensures that confidential and sensitive data stays safe, no matter where your life takes you. Your entire device: safeguarded from the inside out, and in real time. This is protection you can be sure of.',
    sideButtonLinkFeature1: '/',
    sideButtonLabelFeature1: 'Learn more',
    overlayFeature1: 'black',

    sideTitleFeature2: 'Feature 2',
    sideTextFeature2:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Lorem ipsum dolor sit amet.',
    sideButtonLinkFeature2: '/',
    sideButtonLabelFeature2: 'Learn more',
    overlayFeature2: 'blue',

    sideTitleFeature3: 'Feature 3',
    sideTextFeature3:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Lorem ipsum dolor sit amet.',
    sideButtonLinkFeature3: '/',
    sideButtonLabelFeature3: 'Learn more',
    overlayFeature3: 'cerulean',

    sideTitleFeature4: 'Feature 4',
    sideTextFeature4:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Lorem ipsum dolor sit amet.',
    sideButtonLinkFeature4: '/',
    sideButtonLabelFeature4: 'Learn more',
    overlayFeature4: 'green',
    paddingBottom: '0',
    paddingTop: '12',
    borderBottom: 'none',
    borderTop: 'none',
    button1: [
      {
        type: 'link',
        text: 'Learn more',
        href: '',
        isTargetBlank: false,
        buttonColor: {
          color: '',
          classNameSolid:
            'border-2 rounded-full py-2 px-6 mt-2 hover:bg-white hover:text-black transition text-[12px] font-bold',
        },
        variant: 'solid',
        padding: 'normal',
      },
    ],
    button2: [
      {
        type: 'link',
        text: 'Learn more',
        href: '',
        isTargetBlank: false,
        buttonColor: {
          color: '',
          classNameSolid:
            'border-2 rounded-full py-2 px-6 mt-2 hover:bg-white hover:text-black transition text-[12px] font-bold',
        },
        variant: 'solid',
        padding: 'normal',
      },
    ],
    button3: [
      {
        type: 'link',
        text: 'Learn more',
        href: '',
        isTargetBlank: false,
        buttonColor: {
          color: '',
          classNameSolid:
            'border-2 rounded-full py-2 px-6 mt-2 hover:bg-white hover:text-black transition text-[12px] font-bold',
        },
        variant: 'solid',
        padding: 'normal',
      },
    ],
    button4: [
      {
        type: 'link',
        text: 'Learn more',
        href: '',
        isTargetBlank: false,
        buttonColor: {
          color: '',
          classNameSolid:
            'border-2 rounded-full py-2 px-6 mt-2 hover:bg-white hover:text-black transition text-[12px] font-bold',
        },
        variant: 'solid',
        padding: 'normal',
      },
    ],
    imageFeature1: {
      src: 'https://images.reactbricks.com/original/e0f458a9-28b7-47ba-bb85-38fddb0a0643.svg',
      placeholderSrc:
        'https://images.reactbricks.com/original/e0f458a9-28b7-47ba-bb85-38fddb0a0643.svg',
      srcSet: '',
      width: 41,
      height: 40,
      alt: 'Icon',
      seoName: '',
    },
  }),
  sideEditProps: [
    neutralBackgroundSideGroup,
    paddingBordersSideGroup,
    {
      groupName: 'Feature 1',
      defaultOpen: true,
      props: [
        {
          name: 'overlayFeature1',
          label: 'Overlay color',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'black', label: 'Black' },
              { value: 'blue', label: 'Blue' },
              { value: 'cerulean', label: 'Cerulean' },
              { value: 'green', label: 'Green' },
            ],
          },
        },
      ],
    },

    {
      groupName: 'Feature 2',
      defaultOpen: false,
      props: [
        {
          name: 'overlayFeature2',
          label: 'Overlay color',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'black', label: 'Black' },
              { value: 'blue', label: 'Blue' },
              { value: 'cerulean', label: 'Cerulean' },
              { value: 'green', label: 'Green' },
            ],
          },
        },
      ],
    },

    {
      groupName: 'Feature 3',
      defaultOpen: false,
      props: [
        {
          name: 'overlayFeature3',
          label: 'Overlay color',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'black', label: 'Black' },
              { value: 'blue', label: 'Blue' },
              { value: 'cerulean', label: 'Cerulean' },
              { value: 'green', label: 'Green' },
            ],
          },
        },
      ],
    },

    {
      groupName: 'Feature 4',
      defaultOpen: false,
      props: [
        {
          name: 'overlayFeature4',
          label: 'Overlay color',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'black', label: 'Black' },
              { value: 'blue', label: 'Blue' },
              { value: 'cerulean', label: 'Cerulean' },
              { value: 'green', label: 'Green' },
            ],
          },
        },
      ],
    },
  ],
  repeaterItems: [
    {
      name: 'button1',
      itemType: 'samsung-button',
      itemLabel: 'Button',
      min: 1,
      max: 1,
    },
    {
      name: 'button2',
      itemType: 'samsung-button',
      itemLabel: 'Button',
      min: 1,
      max: 1,
    },
    {
      name: 'button3',
      itemType: 'samsung-button',
      itemLabel: 'Button',
      min: 1,
      max: 1,
    },
    {
      name: 'button4',
      itemType: 'samsung-button',
      itemLabel: 'Button',
      min: 1,
      max: 1,
    },
  ],
}

export default Features
