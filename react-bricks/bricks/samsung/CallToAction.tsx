import classNames from 'classnames'
import * as React from 'react'
import { Repeater, RichText, Text, types } from 'react-bricks/frontend'
import {
  neutralBackgroundSideGroup,
  LayoutProps,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../react-bricks-ui/LayoutSideProps'
import blockNames from '../react-bricks-ui/blockNames'
import { buttonColors } from '../react-bricks-ui/colors'
import Container from '../react-bricks-ui/shared/components/Container'
import Section from '../react-bricks-ui/shared/components/Section'

export interface CallToActionProps extends LayoutProps {}

const CallToAction: types.Brick<CallToActionProps> = ({
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
      className="max-w-[1440px] mx-auto font-samsung dark:bg-[#101827]"
    >
      <Container
        size="full"
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        className="mx-0 xl:mx-0 sm:mx-0"
      >
        <div className="flex px-[142px] py-12">
          <div className="basis-9/12 px-[15px]">
            <Text
              propName="title"
              renderBlock={(props) => (
                <h2
                  className={classNames(
                    'font-bold text-5xl leading-[60px] mb-[16px] dark:text-white'
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
                <p
                  className="leading-6 mb-[32px] dark:text-white/80"
                  {...props.attributes}
                >
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

CallToAction.schema = {
  name: 'samsung-call-to-action',
  label: 'Call to action',
  previewImageUrl: '/bricks-preview-images/samsung-call-to-action.png',
  playgroundLinkLabel: 'View source code on Github',
  getDefaultProps: () => ({
    ...sectionDefaults,
    backgroundColor: { color: '#f7f7f7', className: 'bg-[#f7f7f7]' },
    borderTop: 'none',
    paddingTop: '12',
    paddingBottom: '12',
    title: 'What do you need?',
    description:
      'We can help you find the right Samsung Knox products and services for your needs',
    buttons: [
      {
        type: 'link',
        text: 'find solutions',
        href: '',
        isTargetBlank: false,
        buttonColor: buttonColors.BLUE_SAMSUNG.value,
        variant: 'solid',
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
      max: 1,
    },
  ],
  sideEditProps: [neutralBackgroundSideGroup, paddingBordersSideGroup],
}

export default CallToAction
