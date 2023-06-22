import { Image, RichText, Text, types, Link } from 'react-bricks/frontend'
import { LayoutProps } from '../react-bricks-ui/LayoutSideProps'
import { useState } from 'react'

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

  sideTitleFeature2: string
  sideTextFeature2: string
  sideButtonLinkFeature2: string
  sideButtonLabelFeature2: string
  sideImageFeature2: types.IImageSource

  sideTitleFeature3: string
  sideTextFeature3: string
  sideButtonLinkFeature3: string
  sideButtonLabelFeature3: string
  sideImageFeature3: types.IImageSource

  sideTitleFeature4: string
  sideTextFeature4: string
  sideButtonLinkFeature4: string
  sideButtonLabelFeature4: string
  sideImageFeature4: types.IImageSource
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
  sideTitleFeature2,
  sideTextFeature2,
  sideButtonLinkFeature2,
  sideButtonLabelFeature2,
  sideImageFeature2,
  sideTitleFeature3,
  sideTextFeature3,
  sideButtonLinkFeature3,
  sideButtonLabelFeature3,
  sideImageFeature3,
  sideTitleFeature4,
  sideTextFeature4,
  sideButtonLinkFeature4,
  sideButtonLabelFeature4,
  sideImageFeature4,
}) => {
  const [currentRow, setCurrentRow] = useState(1)
  return (
    <div className="px-3 md:pl-14 lg:pl-[90px] md:pr-6 mt-[56px] font-samsung">
      <Text
        renderBlock={(props) => (
          <h2 className="mt-0 mb-12 text-center md:text-left font-bold text-[36px] leading-[45px] text-gray-900 dark:text-white">
            {props.children}
          </h2>
        )}
        placeholder="Type a title..."
        propName="title"
      />

      <div className="flex my-8 gap-4">
        {/* Single features */}
        <div className="basis-1/3">
          {/* Feature 1 */}
          <div
            className={`flex border rounded ${
              currentRow === 1 ? 'shadow-xl' : ''
            } hover:shadow-xl hover:cursor-pointer p-4 gap-6 transition-shadow duration-500 mb-2`}
            onClick={() => setCurrentRow(1)}
          >
            <Image
              propName="imageFeature1"
              alt="Icon"
              maxWidth={41}
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
            } hover:shadow-xl hover:cursor-pointer p-4 gap-6 max-w-full lg:max-w-md transition-shadow duration-500 mb-2`}
            onClick={() => setCurrentRow(2)}
          >
            <Image
              propName="imageFeature2"
              alt="Icon"
              maxWidth={41}
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
            } hover:shadow-xl hover:cursor-pointer p-4 gap-6 max-w-full lg:max-w-md transition-shadow duration-500 mb-2`}
            onClick={() => setCurrentRow(3)}
          >
            <Image
              propName="imageFeature3"
              alt="Icon"
              maxWidth={41}
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
            } hover:shadow-xl hover:cursor-pointer p-4 gap-6 max-w-full lg:max-w-md transition-shadow duration-500 mb-2`}
            onClick={() => setCurrentRow(4)}
          >
            <Image
              propName="imageFeature4"
              alt="Icon"
              maxWidth={41}
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
        <div className="basis-2/3">
          <div
            className={`${
              currentRow === 1 ? 'block' : 'hidden'
            } h-full bg-no-repeat bg-cover`}
            style={{ backgroundImage: `url("${sideImageFeature1?.src}")` }}
          >
            <div className="p-11 w-3/5 text-white">
              <h3 className="text-[24px] tracking-[0.01rem] font-bold mb-6">
                {sideTitleFeature1}
              </h3>
              <p className="text-base mb-4">{sideTextFeature1}</p>
              <Link
                href={sideButtonLinkFeature1}
                className="border-2 rounded-full py-2 px-6 mt-2 hover:bg-white hover:text-black transition text-[12px] font-bold"
              >
                {sideButtonLabelFeature1}
              </Link>
            </div>
          </div>

          <div
            className={`${
              currentRow === 2 ? 'block' : 'hidden'
            } h-full bg-no-repeat bg-cover`}
            style={{ backgroundImage: `url("${sideImageFeature2?.src}")` }}
          >
            <div className="p-11 w-3/5 text-white">
              <h3 className="text-[24px] tracking-[0.01rem] font-bold mb-6">
                {sideTitleFeature2}
              </h3>
              <p className="text-base mb-4">{sideTextFeature2}</p>
              <Link
                href={sideButtonLinkFeature2}
                className="border-2 rounded-full py-2 px-6 mt-2 hover:bg-white hover:text-black transition text-[12px] font-bold"
              >
                {sideButtonLabelFeature2}
              </Link>
            </div>
          </div>

          <div
            className={`${
              currentRow === 3 ? 'block' : 'hidden'
            } h-full  bg-no-repeat bg-cover`}
            style={{ backgroundImage: `url("${sideImageFeature3?.src}")` }}
          >
            <div className="p-11 w-3/5 text-white">
              <h3 className="text-[24px] tracking-[0.01rem] font-bold mb-6">
                {sideTitleFeature3}
              </h3>
              <p className="text-base mb-4">{sideTextFeature3}</p>
              <Link
                href={sideButtonLinkFeature3}
                className="border-2 rounded-full py-2 px-6 mt-2 hover:bg-white hover:text-black transition text-[12px] font-bold"
              >
                {sideButtonLabelFeature3}
              </Link>
            </div>
          </div>

          <div
            className={`${
              currentRow === 4 ? 'block' : 'hidden'
            } h-full  bg-no-repeat bg-cover`}
            style={{ backgroundImage: `url("${sideImageFeature4?.src}")` }}
          >
            <div className="p-11 w-3/5 text-white">
              <h3 className="text-[24px] tracking-[0.01rem] font-bold mb-6">
                {sideTitleFeature4}
              </h3>
              <p className="text-base mb-4">{sideTextFeature4}</p>
              <Link
                href={sideButtonLinkFeature4}
                className="border-2 rounded-full py-2 px-6 mt-2 hover:bg-white hover:text-black transition text-[12px] font-bold"
              >
                {sideButtonLabelFeature4}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  }),
  sideEditProps: [
    {
      groupName: 'Feature 1',
      defaultOpen: true,
      props: [
        {
          name: 'sideTitleFeature1',
          label: 'Side title feature',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'sideTextFeature1',
          label: 'Side text feature',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'sideButtonLinkFeature1',
          label: 'Side button link feature',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'sideButtonLabelFeature1',
          label: 'Side button label feature',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'sideImageFeature1',
          label: 'Side image feature',
          type: types.SideEditPropType.Image,
        },
      ],
    },

    {
      groupName: 'Feature 2',
      defaultOpen: false,
      props: [
        {
          name: 'sideTitleFeature2',
          label: 'Side title feature',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'sideTextFeature2',
          label: 'Side text feature',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'sideButtonLinkFeature2',
          label: 'Side button link feature',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'sideButtonLabelFeature2',
          label: 'Side button label feature',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'sideImageFeature2',
          label: 'Side image feature',
          type: types.SideEditPropType.Image,
        },
      ],
    },

    {
      groupName: 'Feature 3',
      defaultOpen: false,
      props: [
        {
          name: 'sideTitleFeature3',
          label: 'Side title feature',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'sideTextFeature3',
          label: 'Side text feature',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'sideButtonLinkFeature3',
          label: 'Side button link feature',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'sideButtonLabelFeature3',
          label: 'Side button label feature',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'sideImageFeature3',
          label: 'Side image feature',
          type: types.SideEditPropType.Image,
        },
      ],
    },

    {
      groupName: 'Feature 4',
      defaultOpen: false,
      props: [
        {
          name: 'sideTitleFeature4',
          label: 'Side title feature',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'sideTextFeature4',
          label: 'Side text feature',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'sideButtonLinkFeature4',
          label: 'Side button link feature',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'sideButtonLabelFeature4',
          label: 'Side button label feature',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'sideImageFeature4',
          label: 'Side image feature',
          type: types.SideEditPropType.Image,
        },
      ],
    },
  ],
}

export default StateInfo
