import React, { useState, useEffect } from 'react'
import { Repeater, types, Link, Text } from 'react-bricks/frontend'
import { useReactBricksContext, useAdminContext } from 'react-bricks/frontend'
import { bgColors } from '../../react-bricks-ui/colors'
import {
  neutralBackgroundSideGroup,
  borderBottomEditProp,
  LayoutProps,
} from '../../react-bricks-ui/LayoutSideProps'
import Section from '../../react-bricks-ui/shared/components/Section'
import classNames from 'classnames'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import Image from 'next/image'
import { useTheme } from 'next-themes'

interface HeaderProps extends LayoutProps {
  menuItems: any[]
  buttons: any[]
}

const Header: types.Brick<HeaderProps> = ({
  backgroundColor,
  borderBottom,
}) => {
  const { toggleColorMode } = useReactBricksContext()
  const { theme } = useTheme()
  const { isAdmin } = useAdminContext()
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const eventHandlers = isAdmin
    ? { onClick: () => setOpen((open) => !open) }
    : { onMouseEnter: () => setOpen(true), onMouseLeave: () => setOpen(false) }

  return (
    <Section
      backgroundColor={backgroundColor}
      borderBottom={borderBottom}
      className="font-samsung"
    >
      <nav className="relative flex items-center mx-auto px-[16px] max-w-[1440px] h-[80px] border-b border-[#dddddd]">
        <Link
          href="/"
          aria-label="home"
          className="inline-flex py-[0.25rem] mr-[16px]"
        >
          {mounted && (
            <Image
              priority={true}
              className="block object-contain object-left"
              alt="samsung-knox"
              src={`${theme === 'light' ? '/image_black.png' : '/image.png'}`}
              width={169}
              height={16}
            />
          )}
        </Link>
        <div className="flex flex-grow justify-between px-[15px] ml-[3%] h-full space-x-2 ">
          <div className="flex items-centers h-full">
            <Repeater
              propName="menuItems"
              renderItemWrapper={(item) => (
                <div
                  key={item.key}
                  className="flex items-center px-[7px] h-full"
                >
                  {item}
                </div>
              )}
            />
          </div>

          <div className="flex h-[80px] transition-all" {...eventHandlers}>
            <button
              className={classNames(
                'inline-flex items-center py-1.5 px-2 rounded-[5px] text-sm font-bold transition-colors ease-out hover:text-[#565656] dark:text-white'
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
                'absolute overflow-hidden right-2 top-[70px] z-[99999] w-[200px] transition-all delay-0 duration-500 opacity-0 bg-white border-2 rounded-3xl dark:bg-[#101827] dark:border-white'
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
        {mounted && (
          <button
            type="button"
            className="flex items-center justify-center w-8 h-8 mr-4 ml-auto text-gray-400 dark:text-gray-200 my-auto"
            onClick={toggleColorMode}
          >
            {theme === 'light' ? (
              <BsMoonFill />
            ) : (
              <BsSunFill className="text-xl" />
            )}
          </button>
        )}
      </nav>
    </Section>
  )
}

Header.schema = {
  name: 'samsung-header',
  label: 'Header',
  repeaterItems: [
    {
      name: 'menuItems',
      itemType: 'samsung-header-menu-item',
      itemLabel: 'Item',
      min: 0,
      max: 6,
    },
    {
      name: 'submenuColumns',
      itemType: 'samsung-header-menu-sub-column',
      max: 4,
    },
  ],
  sideEditProps: [neutralBackgroundSideGroup],
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
  }),
  // aggiungere story di prova
}

export default Header
