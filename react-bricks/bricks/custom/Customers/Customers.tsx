import classNames from 'classnames'
import * as React from 'react'
import { Repeater, types, RichText, Text } from 'react-bricks/frontend'
import {
  LayoutProps,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
} from '../../react-bricks-ui/LayoutSideProps'
import { customersSamsung } from '../../react-bricks-ui/shared/defaultImages'
import blockNames from '../../react-bricks-ui/blockNames'
import { bgColors } from '../../react-bricks-ui/colors'
import Container from '../../react-bricks-ui/shared/components/Container'
import Section from '../../react-bricks-ui/shared/components/Section'

export interface CustomersProps extends LayoutProps {
  grayscale?: boolean
  customers: any
}

const Customers: types.Brick<CustomersProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  grayscale,
  customers,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
      className="max-w-[1440px] mx-auto"
    >
      <Container
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        className="mx-0 xl:mx-0 px-[24px]"
      >
        <Text
          propName="title"
          renderBlock={(props) => (
            <p
              className="mb-[32px] font-bold text-5xl leading-[60px] text-center"
              {...props.attributes}
            >
              {props.children}
            </p>
          )}
          placeholder="Title..."
        />

        <div
          className={classNames(
            'flex no-wrap justify-center items-center mx-auto h-[100px]'
          )}
        >
          <Repeater propName="customers" itemProps={{ grayscale }} />
        </div>
        <RichText
          propName="description"
          renderBlock={(props) => (
            <p
              className="mt-[64px] text-lg leading-[24px] text-center mx-auto"
              {...props.attributes}
            >
              {props.children}
            </p>
          )}
          placeholder="Description..."
        />
      </Container>
    </Section>
  )
}

Customers.schema = {
  name: blockNames.Customers,
  label: 'Customers',
  category: 'logos',
  tags: ['customers', 'logos', 'logo cloud'],
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Customers/Customers.tsx',
  previewImageUrl: `/bricks-preview-images/${blockNames.Customers}.png`,
  getDefaultProps: () => ({
    backgroundColor: bgColors.WHITE.value,
    paddingTop: '12',
    paddingBottom: '12',
    borderTop: 'none',
    borderBottom: 'none',
    grayscale: false,
    title: 'Success stories',
    description:
      'Knox has developed over 20,000 business in 100+ countries achieve their goals',
    customers: [
      {
        image: customersSamsung.WALMART,
      },
      {
        image: customersSamsung.PEPSICO,
      },
      {
        image: customersSamsung.HARLEY_DAVISON,
      },
      {
        image: customersSamsung.KIA,
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'customers',
      itemType: blockNames.Customer,
      itemLabel: 'Customer',
      min: 0,
      max: 12,
    },
  ],
  sideEditProps: [
    neutralBackgroundSideGroup,
    paddingBordersSideGroup,
    {
      groupName: 'Logos',
      defaultOpen: true,
      props: [
        {
          name: 'grayscale',
          label: 'Greyscale',
          type: types.SideEditPropType.Boolean,
        },
      ],
    },
  ],
}

export default Customers
