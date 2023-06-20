import React, { useState, useRef, useEffect } from 'react'
import { Image, Repeater, types, Link, Text } from 'react-bricks/frontend'
import { useReactBricksContext } from 'react-bricks/frontend'
import { FiMenu, FiX } from 'react-icons/fi'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import blockNames from '../react-bricks-ui/blockNames'
import { bgColors, buttonColors } from '../react-bricks-ui/colors'
import {
  backgroundColorsEditProps,
  borderBottomEditProp,
  LayoutProps,
  sectionDefaults,
} from '../react-bricks-ui/LayoutSideProps'
import Section from '../react-bricks-ui/shared/components/Section'
import useOnClickOutside from './useClickOutside'
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isDarkColorMode, toggleColorMode } = useReactBricksContext()
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])
  useOnClickOutside(ref, () => setOpen(false))
  useOnClickOutside(ref, () => setMobileMenuOpen(false))

  return (
    <Section backgroundColor={backgroundColor} borderBottom={'none'}>
      <nav className="mx-auto max-w-[1440px] h-[80px] border-b border-[#dddddd] flex items-center px-[16px] relative">
        <Link
          href="/"
          aria-label="home"
          className="inline-flex py-[0.25rem] mr-[16px]"
        >
          <Image
            propName="logo"
            alt="Logo"
            maxWidth={300}
            imageClassName="block w-[169px] h-4 object-contain object-left"
          />
        </Link>
        <div className="flex flex-grow  space-x-2 px-[15px] ml-[3%] h-full justify-between">
          <div className="flex h-full items-centers">
            <Repeater
              propName="menuItems"
              itemProps={{ mobileRef: setMobileMenuOpen }}
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

          <div
            ref={ref}
            className="flex h-[80px] transition-all"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              className={classNames(
                'inline-flex hover:text-[#565656] items-center text-sm font-bold py-1.5 px-2 rounded-[5px] transition-colors ease-out'
              )}
            >
              <Text
                propName="partners"
                placeholder="Type a text..."
                renderBlock={({ children }) => (
                  <div className="min-w-[20px]">{children}</div>
                )}
              />

              <svg
                viewBox="0 1 13 13"
                width="14px"
                height="14px"
                stroke="black"
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
                'transition-all delay-0 duration-500 opacity-0 overflow-hidden absolute top-[70px] bg-white border-2 rounded-3xl w-[200px] right-2'
              )}
            >
              <Repeater
                propName="submenuItems"
                renderItemWrapper={(item) => (
                  <div
                    key={item.key}
                    onClick={() => setOpen((current) => !current)}
                  >
                    {item}
                  </div>
                )}
              />
            </div>
          </div>
        </div>

        <div className="relative lg:hidden flex items-center h-full sm:gap-x-4">
          <button
            className="group p-1 w-7 h-7 flex justify-center items-center rounded-[5px] bg-gray-200 dark:bg-transparent hover:bg-sky-500/20 dark:hover:bg-sky-500/40 hover:text-sky-600 dark:hover:text-sky-500 focus:bg-sky-500/20 dark:focus:bg-sky-500/40 focus:text-sky-600 dark:focus:text-sky-500"
            onClick={() => setMobileMenuOpen((current) => !current)}
          >
            {mobileMenuOpen ? (
              <FiX className="text-gray-600 dark:text-white" size={18} />
            ) : (
              <FiMenu className="text-gray-600 dark:text-white" size={20} />
            )}
          </button>
          {mobileMenuOpen && (
            <div className="absolute top-8 right-0 w-64 bg-white p-5 border rounded-lg shadow-lg z-10">
              <Repeater
                propName="menuItems"
                itemProps={{
                  mobileRef: ref,
                  setMobileMenuOpen,
                }}
              />
            </div>
          )}
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
      name: 'submenuItems',
      itemType: blockNames.HeaderMenuSubItem,
    },
    {
      name: 'buttons',
      itemType: blockNames.Button,
      itemLabel: 'Button',
      min: 0,
      max: 2,
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
        linkPath: '/',
        linkText: 'Home',
      },
      {
        linkPath: '/about-us',
        linkText: 'About us',
      },
      {
        linkPath: '',
        linkText: 'Features',
        submenuItems: [
          {
            linkText: 'Visual editing',
            linkDescription:
              'The best visual experience for your content editors',
            linkPath: '/',
          },
        ],
      },
    ],
    logo: {
      src: 'https://images.reactbricks.com/original/a63a73db-8df4-4a01-9084-44b8217332cf.svg',
      placeholderSrc:
        'https://images.reactbricks.com/original/a63a73db-8df4-4a01-9084-44b8217332cf.svg',
      srcSet: '',
      width: 450,
      height: 100,
      alt: 'React Bricks',
      seoName: 'react-bricks',
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
