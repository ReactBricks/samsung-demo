import React from 'react'
import { Repeater, types } from 'react-bricks/frontend'
import {
  LayoutProps,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../../react-bricks-ui/LayoutSideProps'
import Container from '../../react-bricks-ui/shared/components/Container'
import Section from '../../react-bricks-ui/shared/components/Section'

interface FooterProps extends LayoutProps {
  siteUrl: string
}

const Footer: types.Brick<FooterProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
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
            renderItemWrapper={(item) => (
              <div key={item.key} className="p-[24px] w-1/4">
                {item}
              </div>
            )}
          />
        </Container>
      </Section>
    </footer>
  )
}

Footer.schema = {
  name: 'samsung-footer',
  label: 'Footer',
  repeaterItems: [
    {
      name: 'columns',
      itemType: 'samsung-footer-column',
      max: 4,
    },
  ],
  getDefaultProps: () => ({
    ...sectionDefaults,
    backgroundColor: { color: 'ffffff', className: 'bg-white' },
    borderTop: 'none',
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
  sideEditProps: [neutralBackgroundSideGroup, paddingBordersSideGroup],
}

export default Footer
