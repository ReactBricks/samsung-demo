import React, { useState, useRef, useEffect } from 'react'
import { Image, Repeater, types, Link, Text } from 'react-bricks/frontend'
import { useReactBricksContext, useAdminContext } from 'react-bricks/frontend'
import blockNames from '../react-bricks-ui/blockNames'
import { bgColors, buttonColors } from '../react-bricks-ui/colors'
import {
  backgroundColorsEditProps,
  borderBottomEditProp,
  LayoutProps,
  sectionDefaults,
} from '../react-bricks-ui/LayoutSideProps'
import Section from '../react-bricks-ui/shared/components/Section'
import classNames from 'classnames'
interface HeaderProps extends LayoutProps {
  menuItems: any[]
  logo: types.IImageSource
  buttons: any[]
}

const Header: types.Brick<HeaderProps> = ({
  backgroundColor,
  borderBottom,
}) => {
  const { isDarkColorMode, toggleColorMode } = useReactBricksContext()
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const { isAdmin } = useAdminContext()

  const eventHandlers = isAdmin
    ? { onClick: () => setOpen((open) => !open) }
    : { onMouseEnter: () => setOpen(true), onMouseLeave: () => setOpen(false) }

  return (
    <Section
      backgroundColor={backgroundColor}
      borderBottom={'none'}
      className="font-samsung"
    >
      <nav className="mx-auto max-w-[1440px] h-[80px] border-b border-[#dddddd] flex items-center px-[16px] relative">
        <Link
          href="/"
          aria-label="home"
          className="inline-flex py-[0.25rem] mr-[16px]"
        >
          {isDarkColorMode ? (
            <img
              className="block w-[169px] h-4 object-contain object-left max-w-[300px]"
              alt="samsung-knox"
              src="/image.png"
            />
          ) : (
            <Image
              propName="logo"
              alt="Logo"
              maxWidth={300}
              imageClassName="block w-[169px] h-4 object-contain object-left"
            />
          )}
        </Link>
        <div className="flex flex-grow  space-x-2 px-[15px] ml-[3%] h-full justify-between">
          <div className="flex h-full items-centers">
            <Repeater
              propName="menuItems"
              renderItemWrapper={(item) => (
                <div
                  key={item.key}
                  className="px-[7px] h-full flex items-center"
                >
                  {item}
                </div>
              )}
            />
          </div>

          <div className="flex h-[80px] transition-all" {...eventHandlers}>
            <button
              className={classNames(
                'inline-flex hover:text-[#565656] items-center text-sm font-bold py-1.5 px-2 rounded-[5px] transition-colors ease-out dark:text-white'
              )}
            >
              <Text
                propName="partners"
                placeholder="Type a text..."
                renderPlaceholder={(props) => (
                  <div className="w-[40px]">{props.children}</div>
                )}
                renderBlock={({ children }) => (
                  <div className="">{children}</div>
                )}
              />

              <svg
                viewBox="0 1 13 13"
                width="14px"
                height="14px"
                stroke="black dark:text-white"
                className="inline-block w-[12px] h-[12px] ml-[6px]"
              >
                <path
                  d="m1.15 5.6 5.5 5.5c.2.2.5.2.7 0l5.5-5.5a.5.5 0 0 0-.7-.7L7 10.04 1.85 4.9a.5.5 0 1 0-.7.7Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>

            <div
              className={classNames(
                open ? 'visible opacity-100' : 'invisible',
                'transition-all delay-0 duration-500 opacity-0 overflow-hidden absolute top-[70px] bg-white border-2 rounded-3xl w-[200px] right-2 z-[99999] dark:bg-[#101827] dark:border-white'
              )}
            >
              <Repeater
                propName="submenuColumns"
                itemProps={{ handler: setOpen }}
                renderItemWrapper={(item) => <div key={item.key}>{item}</div>}
              />
            </div>
          </div>
        </div>
      </nav>
    </Section>
  )
}

Header.schema = {
  name: blockNames.Header,
  label: 'Header',
  category: 'layout',
  tags: ['header', 'menu'],
  previewImageUrl: `/bricks-preview-images/${blockNames.Header}.png`,
  repeaterItems: [
    {
      name: 'menuItems',
      itemType: blockNames.HeaderMenuItem,
      itemLabel: 'Item',
      min: 0,
      max: 6,
    },
    {
      name: 'submenuColumns',
      itemType: 'header-menu-sub-column',
    },
  ],
  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: true,
      props: [backgroundColorsEditProps, borderBottomEditProp],
    },
  ],
  getDefaultProps: () => ({
    backgroundColor: bgColors.WHITE.value,
    borderBottom: 'none',
    partners: 'Partners',
    menuItems: [
      {
        linkPath: '',
        linkText: 'Solutions',
        submenuColumns: [
          {
            title: 'FOR IT ADMINS',
            submenuItems: [
              {
                linkText: 'Unified Endpoint Management',
                linkDescription: 'Secure, deploy, manage, and analyze',
                linkPath: '/',
              },
              {
                linkText: 'For Frontline',
                linkDescription: 'Maximize productivity for field force and IT',
                linkPath: '/',
              },
              {
                linkText: 'For School',
                linkDescription: 'Digital classroom under control',
                linkPath: '/',
              },
            ],
          },
          {
            title: 'FOR SERVICE PROVIDERS',
            submenuItems: [
              {
                linkText: 'Rebranding and Customization',
                linkDescription: 'Tailor our devices to your business needs',
                linkPath: '/',
              },
              {
                linkText: 'For Kids Phone',
                linkDescription: 'Create segment-specific devices',
                linkPath: '/',
              },
              {
                linkText: 'Fraud and Theft Protection',
                linkDescription: 'Reduce financial risks for devices',
                linkPath: '/',
              },
            ],
          },
          {
            title: 'FOR EVERYONE',
            submenuItems: [
              {
                linkText: 'Secured by Knox',
                linkDescription: '',
                linkPath: '/',
              },
              {
                linkText: 'Knox devices',
                linkDescription: '',
                linkPath: '/',
              },
              {
                linkText: 'Knox certifications',
                linkDescription: '',
                linkPath: '/',
              },
            ],
          },
        ],
      },
      {
        linkPath: '',
        linkText: 'Products',
        submenuColumns: [
          {
            title: 'UNIFIED ENDPOINT MANAGEMENT',
            submenuItems: [
              {
                linkText: 'Knox Suite',
                linkDescription: 'All-in-one bundle for managing work devices',
                linkPath: '/',
              },
              {
                linkText: 'Knox Platform for Enterprise',
                linkDescription: 'Government-grade security for businesses',
                linkPath: '/',
              },
              {
                linkText: 'Knox Mobile Enrollment',
                linkDescription: 'ulk device setup and deployment',
                linkPath: '/',
              },
            ],
          },
          {
            title: 'REBRANDING AND CUSTOMIZATION',
            submenuItems: [
              {
                linkText: 'Knox Configure',
                linkDescription: 'Remotely tailor Samsung devices',
                linkPath: '/',
              },
            ],
          },
          {
            title: 'BUSINESS SERVICES',
            submenuItems: [
              {
                linkText: 'Samsung Care+ for Business',
                linkDescription: 'Protection plan for corporate devices',
                linkPath: '/',
              },
              {
                linkText: 'Samsung Enterprise Technical Support',
                linkDescription: 'Tier 3 premium technical support',
                linkPath: '/',
              },
            ],
          },
        ],
      },
      {
        linkPath: '/',
        linkText: 'About Knox',
      },
      {
        linkPath: '/',
        linkText: 'Support',
      },
      {
        linkPath: '/',
        linkText: 'Blog',
      },
    ],
    logo: {
      src: 'https://kp4-cdn.samsungknox.com/resource/iUxOLMPWhXEJheVY.svg',
      placeholderSrc:
        'https://kp4-cdn.samsungknox.com/resource/iUxOLMPWhXEJheVY.svg',
      srcSet: '',
      width: 450,
      height: 100,
      alt: 'knox logo',
      seoName: 'samsung-knox',
    },
    buttons: [
      {
        type: 'link',
        text: 'Edit content',
        href: '/admin',
        isTargetBlank: true,
        buttonType: 'submit',
        buttonColor: buttonColors.SKY.value,
        variant: 'solid',
        padding: 'small',
        simpleAnchorLink: true,
      },
    ],
  }),
  stories: [
    {
      id: 'header-dark',
      name: 'Header dark',
      previewImageUrl: `/bricks-preview-images/header-dark.png`,
      showAsBrick: true,
      props: {
        ...sectionDefaults,
        borderBottom: 'none',
        backgroundColor: bgColors.DARK_GRAY.value,
        menuItems: [
          {
            linkPath: '/',
            linkText: 'Home',
          },
          {
            linkPath: '/about-us',
            linkText: 'About us',
          },
        ],
        logo: {
          src: 'https://images.reactbricks.com/original/881feb54-54af-46d5-8825-31e22ccbac25.webp',
          placeholderSrc:
            'https://images.reactbricks.com/placeholder/881feb54-54af-46d5-8825-31e22ccbac25.jpg',
          srcSet:
            'https://images.reactbricks.com/src_set/881feb54-54af-46d5-8825-31e22ccbac25-600.webp 600w,\nhttps://images.reactbricks.com/src_set/881feb54-54af-46d5-8825-31e22ccbac25-450.webp 450w,\nhttps://images.reactbricks.com/src_set/881feb54-54af-46d5-8825-31e22ccbac25-300.webp 300w,\nhttps://images.reactbricks.com/src_set/881feb54-54af-46d5-8825-31e22ccbac25-150.webp 150w,\nhttps://images.reactbricks.com/src_set/881feb54-54af-46d5-8825-31e22ccbac25-75.webp 75w',
          width: 5314,
          height: 1181,
          alt: 'React Bricks',
          seoName: 'react-bricks',
          fallbackSrc:
            'https://images.reactbricks.com/original/881feb54-54af-46d5-8825-31e22ccbac25.png',
          fallbackSrcSet:
            'https://images.reactbricks.com/src_set/881feb54-54af-46d5-8825-31e22ccbac25-600.png 600w,\nhttps://images.reactbricks.com/src_set/881feb54-54af-46d5-8825-31e22ccbac25-450.png 450w,\nhttps://images.reactbricks.com/src_set/881feb54-54af-46d5-8825-31e22ccbac25-300.png 300w,\nhttps://images.reactbricks.com/src_set/881feb54-54af-46d5-8825-31e22ccbac25-150.png 150w,\nhttps://images.reactbricks.com/src_set/881feb54-54af-46d5-8825-31e22ccbac25-75.png 75w',
          fallbackType: 'image/png',
        },
        buttons: [
          {
            type: 'link',
            text: 'Edit content',
            href: '/admin',
            isTargetBlank: true,
            buttonType: 'submit',
            buttonColor: buttonColors.SKY.value,
            variant: 'outline',
            padding: 'small',
            simpleAnchorLink: true,
          },
        ],
      },
    },
  ],
}

export default Header
