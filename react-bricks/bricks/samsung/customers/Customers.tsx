import classNames from 'classnames'
import * as React from 'react'
import { Repeater, types, RichText, Text } from 'react-bricks/frontend'
import {
  LayoutProps,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
} from '../../react-bricks-ui/LayoutSideProps'
import { customersSamsung } from '../../react-bricks-ui/shared/defaultImages'
import { bgColors } from '../../react-bricks-ui/colors'
import Container from '../../react-bricks-ui/shared/components/Container'
import Section from '../../react-bricks-ui/shared/components/Section'

export interface CustomersProps extends LayoutProps {
  grayscale?: boolean
  customers: any
}

const CustomersKnox: types.Brick<CustomersProps> = ({
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
      className="max-w-[1440px] mx-auto font-samsung"
    >
      <Container
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        className="mx-0 xl:mx-0 px-[24px]"
      >
        <div className="py-12">
          <Text
            propName="title"
            renderBlock={(props) => (
              <p
                className="mb-[32px] font-bold text-5xl leading-[60px] text-center dark:text-white"
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
                className="mt-[64px] mx-auto text-lg leading-[24px] text-center tracking-[0.16px] dark:text-white/80"
                {...props.attributes}
              >
                {props.children}
              </p>
            )}
            placeholder="Description..."
          />
        </div>
      </Container>
    </Section>
  )
}

CustomersKnox.schema = {
  name: 'samsung-customers',
  label: 'Customers',
  previewImageUrl: '/bricks-preview-images/samsung-customers.png',
  getDefaultProps: () => ({
    backgroundColor: bgColors.WHITE.value,
    paddingTop: '0',
    paddingBottom: '12',
    borderTop: 'none',
    borderBottom: 'none',
    grayscale: false,
    title: 'Success stories',
    description:
      'Knox has developed over 20,000 business in 100+ countries achieve their goals',
    customers: [
      {
        image: {
          src: 'https://images.reactbricks.com/original/b13de669-2b68-4cce-acbe-c76104d448cc.svg',
          placeholderSrc:
            'https://images.reactbricks.com/original/b13de669-2b68-4cce-acbe-c76104d448cc.svg',
          srcSet: '',
          alt: 'Samsung Knox',
          seoName: 'samsung-knox',
          width: 184.447,
          height: 17.428,
        },
        href: '',
      },
      {
        image: {
          src: 'https://images.reactbricks.com/original/1adb822d-e809-4a86-9b96-c40450ba9eef.svg',
          placeholderSrc:
            'https://images.reactbricks.com/original/1adb822d-e809-4a86-9b96-c40450ba9eef.svg',
          srcSet: '',
          alt: 'React Bricks',
          seoName: 'react-bricks',
          width: 1700.787,
          height: 377.953,
        },
        href: '',
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'customers',
      itemType: 'samsung-customer-item',
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

export default CustomersKnox
