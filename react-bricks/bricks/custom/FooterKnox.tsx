import React from 'react'
import { RichText, Image, Repeater, types, Link } from 'react-bricks/frontend'
import blockNames from '../react-bricks-ui/blockNames'
import { bgColors, textColors } from '../react-bricks-ui/colors'
import {
  LayoutProps,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../react-bricks-ui/LayoutSideProps'
import { logos } from '../react-bricks-ui/shared/defaultImages'
import Container from '../react-bricks-ui/shared/components/Container'
import Section from '../react-bricks-ui/shared/components/Section'

interface FooterProps extends LayoutProps {
  siteUrl: string
}

const Footer: types.Brick<FooterProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  siteUrl,
}) => {
  return (
    <footer>
      <Section
        backgroundColor={backgroundColor}
        borderTop={borderTop}
        borderBottom={borderBottom}
        className="mx-auto max-w-[1440px] dark:bg-[#101827]"
      >
        <Container
          paddingTop={paddingTop}
          paddingBottom={paddingBottom}
          className=" xl:ml-0 xl:mr-0"
        >
          <Repeater
            propName="columns"
            renderWrapper={(props) => (
              <div className="pt-[56px] flex w-full ">{props}</div>
            )}
            renderItemWrapper={(props) => (
              <div className="p-[24px] w-1/4">{props}</div>
            )}
          />
        </Container>
      </Section>
    </footer>
  )
}

Footer.schema = {
  name: blockNames.Footer,
  label: 'Footer',
  category: 'layout',
  tags: ['footer'],
  previewImageUrl: `/bricks-preview-images/${blockNames.Footer}.png`,
  repeaterItems: [
    {
      name: 'columns',
      itemType: blockNames.FooterColumn,
      max: 4,
    },
  ],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    ...sectionDefaults,
    backgroundColor: { color: 'ffffff', className: 'bg-white' },
    borderTop: 'full',
    logo: logos.REACT_BRICKS,
    siteUrl: '',
    copyright: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Visual editing CMS for React.',
          },
        ],
      },
      {
        type: 'paragraph',
        children: [
          {
            text: 'Proudly made in Italy',
          },
        ],
      },
    ],
    columns: [
      {
        title: 'Solutions',
        links: [
          {
            linkText: 'Unified Endpoint Management',
            linkPath: '/',
          },
          {
            linkText: 'For School',
            linkPath: '/',
          },
          {
            linkText: 'For Transportation',
            linkPath: '/',
          },
          {
            linkText: 'For Frontline',
            linkPath: '/',
          },
          {
            linkText: 'Rebranding and Customization',
            linkPath: '/',
          },
          {
            linkText: 'Fraud and Theft Protection',
            linkPath: '/',
          },
        ],
      },
      {
        title: 'Products',
        links: [
          {
            linkText: 'Unified Endpoint Management',
            linkPath: '/',
          },
          {
            linkText: 'Knox Platform for Enterprise',
            linkPath: '/',
          },
          {
            linkText: 'Knox Mobile Enrollment',
            linkPath: '/',
          },
          {
            linkText: 'Knox Asset Intelligence',
            linkPath: '/',
          },
        ],
      },
      {
        title: 'Use cases',
        links: [
          {
            linkText: 'Content editors',
            linkPath: '/',
          },
          {
            linkText: 'Developers',
            linkPath: '/',
          },
          {
            linkText: 'Enterprises',
            linkPath: '/',
          },
        ],
      },
      {
        title: 'Partners',
        links: [
          {
            linkText: 'For resellers',
            linkPath: '/',
          },
          {
            linkText: 'For partners',
            linkPath: '/',
          },
          {
            linkText: 'For developers',
            linkPath: '/',
          },
        ],
      },
    ],
  }),

  // Sidebar Edit controls for props
  sideEditProps: [neutralBackgroundSideGroup, paddingBordersSideGroup],
}

export default Footer
