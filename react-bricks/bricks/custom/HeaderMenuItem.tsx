import blockNames from '../react-bricks-ui/blockNames'
import classNames from 'classnames'
import React, { useRef, useState } from 'react'
import { Text, Repeater, types, Link, Plain } from 'react-bricks/frontend'
import useOnClickOutside from './useClickOutside'
import { textColors } from '../react-bricks-ui/colors'

interface HeaderMenuItemProps {
  linkPath: string
  linkText: any
  submenuColumns?: any
  mobileRef?: React.MutableRefObject<HTMLDivElement>
  setMobileMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

const HeaderMenuItem: types.Brick<HeaderMenuItemProps> = ({
  linkPath,
  linkText,
  submenuColumns,
  mobileRef,
  setMobileMenuOpen,
}) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useOnClickOutside(ref, () => setOpen(false))
  useOnClickOutside(mobileRef, () => setMobileMenuOpen(false))
  if (!submenuColumns || !submenuColumns.length) {
    return (
      <div>
        <Link
          href={linkPath}
          className="hidden lg:inline-flex justify-center items-center text-sm font-bold px-[8px] py-[7px] hover:text-[#565656]"
        >
          <Text
            propName="linkText"
            placeholder="Type a text..."
            renderBlock={({ children }) => <span>{children}</span>}
          />
        </Link>
        <Link
          href={linkPath}
          className="block lg:hidden text-sm mb-3 transition-colors ease-out text-gray-800 hover:text-sky-600"
        >
          <div onClick={() => setMobileMenuOpen(false)}>
            {' '}
            {typeof linkText === 'string'
              ? linkText
              : Plain.serialize(linkText)}
          </div>
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div
        ref={ref}
        className="flex h-[80px]"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button
          className={classNames(
            'inline-flex hover:text-[#565656] items-center text-sm font-bold  px-2 rounded-[5px] transition-colors ease-out '
          )}
        >
          <Text
            propName="linkText"
            placeholder="Type a text..."
            renderBlock={({ children }) => <div>{children}</div>}
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
            'transition-all delay-0 duration-500 opacity-0 overflow-hidden ease-in-out w-[1440px] bg-white p-3 border absolute top-[80px] start-[0] z-[1000] border-t-0 flex'
          )}
        >
          <Repeater
            propName="submenuColumns"
            renderItemWrapper={(item) => (
              <div
                key={item.key}
                //onClick={() => setOpen((current) => !current)}
                className="flex-col"
              >
                {item}
              </div>
            )}
          />
        </div>
      </div>
    </div>
  )
}

HeaderMenuItem.schema = {
  name: blockNames.HeaderMenuItem,
  label: 'Menu Item',
  category: 'layout',
  hideFromAddMenu: true,

  repeaterItems: [
    {
      name: 'submenuItems',
      itemType: blockNames.HeaderMenuSubItem,
    },
    {
      name: 'submenuColumns',
      itemType: 'header-menu-sub-column',
    },
  ],

  getDefaultProps: () => ({
    linkPath: '/',
    linkText: 'Solutions',
  }),

  sideEditProps: [
    {
      name: 'linkPath',
      label: 'Link to...',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default HeaderMenuItem
