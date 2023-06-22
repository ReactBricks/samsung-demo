import classNames from 'classnames'
import * as React from 'react'
import { Repeater, RichText, Text, types } from 'react-bricks/frontend'
import {
  backgroundSideGroup,
  LayoutProps,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../react-bricks-ui/LayoutSideProps'
import blockNames from '../react-bricks-ui/blockNames'
import { bgColors, buttonColors, textColors } from '../react-bricks-ui/colors'
import Container from '../react-bricks-ui/shared/components/Container'
import Section, { Border } from '../react-bricks-ui/shared/components/Section'

export interface CallToActionProps extends LayoutProps {}

const CtaSamsung: types.Brick<CallToActionProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
      className="max-w-[1440px] mx-auto font-samsung"
    >
      <Container
        size="full"
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        className="mx-0 xl:mx-0 px-[142px] pt-[96px] pb-[96px] lg:pb-[96px] sm:mx-0"
      >
        <div className="flex">
          <div className="basis-9/12 px-[15px]">
            <Text
              propName="title"
              renderBlock={(props) => (
                <h2
                  className={classNames(
                    'font-bold text-5xl leading-[60px] mb-[16px]'
                  )}
                  {...props.attributes}
                >
                  {props.children}
                </h2>
              )}
              placeholder="Call to action title"
            />
            <RichText
              propName="description"
              renderBlock={(props) => (
                <p className="leading-6 mb-[32px]" {...props.attributes}>
                  {props.children}
                </p>
              )}
              placeholder="Call to action description"
            />
          </div>

          <Repeater
            propName="buttons"
            renderWrapper={(props) => (
              <div className="basis-3/12 my-auto">{props}</div>
            )}
          />
        </div>
      </Container>
    </Section>
  )
}

CtaSamsung.schema = {
  name: 'cta-samsung',
  label: 'Call to action',
  playgroundLinkLabel: 'View source code on Github',
  previewImageUrl: `/bricks-preview-images/${blockNames.CallToAction}.png`,
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/CallToAction/CallToAction.tsx',
  getDefaultProps: () => ({
    ...sectionDefaults,
    backgroundColor: { color: '#f7f7f7', className: 'bg-[#f7f7f7]' },
    borderTop: 'none',
    paddingTop: '12',
    paddingBottom: '20',
    title: 'What do you need?',
    description:
      'We can help you find the right Samsung Knox products and services for your needs',
    buttons: [
      {
        text: 'FIND SOLUTIONS',
        type: 'solid',
        buttonColor: {
          ...buttonColors.BLUE.value,
          classNameSolid: 'bg-blue-700 text-white hover:bg-blue-800',
        },
        href: 'https://reactbricks.com',
        isTargetBlank: true,
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
      max: 1,
    },
  ],
  sideEditProps: [backgroundSideGroup, paddingBordersSideGroup],
}

export default CtaSamsung
