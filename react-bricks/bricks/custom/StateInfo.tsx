import {
  Image,
  RichText,
  Text,
  types,
  Link,
  Repeater,
} from 'react-bricks/frontend'
import {
  LayoutProps,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
} from '../react-bricks-ui/LayoutSideProps'
import { useState } from 'react'
import Section from '../react-bricks-ui/shared/components/Section'
import Container from '../react-bricks-ui/shared/components/Container'

interface StateInfoProps extends LayoutProps {
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
const StateInfo: types.Brick<StateInfoProps> = ({
  sideTitleFeature1,
  sideTextFeature1,
  sideButtonLinkFeature1,
  sideButtonLabelFeature1,
  sideImageFeature1,
  overlayFeature1 = 'black',
  sideTitleFeature2,
  sideTextFeature2,
  sideButtonLinkFeature2,
  sideButtonLabelFeature2,
  sideImageFeature2,
  overlayFeature2 = 'blue',
  sideTitleFeature3,
  sideTextFeature3,
  sideButtonLinkFeature3,
  sideButtonLabelFeature3,
  sideImageFeature3,
  overlayFeature3 = 'cerulean',
  sideTitleFeature4,
  sideTextFeature4,
  sideButtonLinkFeature4,
  sideButtonLabelFeature4,
  sideImageFeature4,
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
              {/* Feature 1 */}
              <Text
                renderBlock={(props) => (
                  <h2 className="max-w-[350px] mt-0 mb-10 text-center md:text-left font-bold text-[36px] leading-[45px] text-gray-900 dark:text-white">
                    {props.children}
                  </h2>
                )}
                placeholder="Type a title..."
                propName="title"
              />
              <div
                className={`flex border rounded ${
                  currentRow === 1 ? 'shadow-xl' : ''
                } hover:shadow-xl hover:cursor-pointer p-4 gap-6 max-w-full lg:max-w-md transition-shadow duration-500 mb-2 bg-white dark:bg-gray-900 dark:border-white/20`}
                onClick={() => setCurrentRow(1)}
              >
                <Image
                  propName="imageFeature1"
                  alt="Icon"
                  maxWidth={41}
                  aspectRatio={1.8}
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
                  maxWidth={41}
                  aspectRatio={1.8}
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
                  maxWidth={41}
                  aspectRatio={1.8}
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
                  maxWidth={41}
                  aspectRatio={1.8}
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
StateInfo.schema = {
  name: 'state-info',
  label: 'State info',
  getDefaultProps: () => ({
    title: 'What Knox can do for you',

    titleFeature1: 'Secured by Knox',
    textFeature1: 'Most Samsung devices are Secured by Knox',

    titleFeature2: 'Unified Endpoint Management',
    textFeature2: 'Manage devices for work',

    titleFeature3: 'Rebranding and Customization',
    textFeature3: 'Tailor Samsung devices to your needs',

    titleFeature4: 'Fraud and Theft Protection',
    textFeature4: 'Safeguards for businesses with device financing plans',

    sideTitleFeature1: 'Secured by Knox',
    sideTextFeature1:
      'At every layer of Samsung Galaxy devices, Knox ensures that confidential and sensitive data stays safe, no matter where your life takes you. Your entire device: safeguarded from the inside out, and in real time. This is protection you can be sure of.',
    sideButtonLinkFeature1: '/',
    sideButtonLabelFeature1: 'Learn more',
    overlayFeature1: 'black',

    sideTitleFeature2: 'Unified Endpoint Management',
    sideTextFeature2:
      'Knox solutions allow enterprise IT admins to easily secure, deploy, manage, and analyze mobile devices for business use, while allowing device users to stay protected and productive. Ensure your devices for work are always under IT control with Knox.',
    sideButtonLinkFeature2: '/',
    sideButtonLabelFeature2: 'Learn more',
    overlayFeature2: 'blue',

    sideTitleFeature3: 'Rebranding and Customization',
    sideTextFeature3:
      'With Samsung Knox, any off-the-shelf Samsung devices can turn into a special edition, or the unique tool for your business. Transform devices and fulfill use cases such as media-bundled tablets, interactive store kiosks and more – all without opening the box.',
    sideButtonLinkFeature3: '/',
    sideButtonLabelFeature3: 'Learn more',
    overlayFeature3: 'cerulean',

    sideTitleFeature4: 'Fraud and Theft Protection',
    sideTextFeature4:
      'Guard your company’s device payment plans and maintain control of mobile device assets outside your reach. Knox allows carriers, insurance firms, or any businesses to remotely protect Samsung devices against financial risk.',
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
  }),
  sideEditProps: [
    neutralBackgroundSideGroup,
    paddingBordersSideGroup,
    {
      groupName: 'Feature 1',
      defaultOpen: true,
      props: [
        {
          name: 'sideButtonLinkFeature1',
          label: 'Side button link feature',
          type: types.SideEditPropType.Text,
        },
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
          name: 'sideButtonLinkFeature2',
          label: 'Side button link feature',
          type: types.SideEditPropType.Text,
        },
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
          name: 'sideButtonLinkFeature3',
          label: 'Side button link feature',
          type: types.SideEditPropType.Text,
        },
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
          name: 'sideButtonLinkFeature4',
          label: 'Side button link feature',
          type: types.SideEditPropType.Text,
        },
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
      itemType: 'custom-button',
      itemLabel: 'Button',
      min: 1,
      max: 1,
    },
    {
      name: 'button2',
      itemType: 'custom-button',
      itemLabel: 'Button',
      min: 1,
      max: 1,
    },
    {
      name: 'button3',
      itemType: 'custom-button',
      itemLabel: 'Button',
      min: 1,
      max: 1,
    },
    {
      name: 'button4',
      itemType: 'custom-button',
      itemLabel: 'Button',
      min: 1,
      max: 1,
    },
  ],
}

export default StateInfo
