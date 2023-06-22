import classNames from 'classnames'
import React, { useState } from 'react'
import {
  Text,
  Repeater,
  types,
  Link,
  useAdminContext,
} from 'react-bricks/frontend'

interface HeaderMenuItemKnoxProps {
  linkPath: string
  linkText: any
  submenuColumns?: any
}

const HeaderMenuItemKnox: types.Brick<HeaderMenuItemKnoxProps> = ({
  linkPath,
  submenuColumns,
}) => {
  const [open, setOpen] = useState(false)
  const { isAdmin } = useAdminContext()
  const eventHandlers = isAdmin
    ? { onClick: () => setOpen((open) => !open) }
    : { onMouseEnter: () => setOpen(true), onMouseLeave: () => setOpen(false) }

  if (!submenuColumns || !submenuColumns.length) {
    return (
      <div className="font-samsung">
        <Link
          href={linkPath}
          className="inline-flex justify-center items-center text-sm font-bold px-[8px] py-[7px] hover:text-[#565656] dark:text-white"
        >
          <Text
            propName="linkText"
            placeholder="Type a text..."
            renderPlaceholder={(props) => (
              <div className="w-[40px]">{props.children}</div>
            )}
            renderBlock={({ children }) => <span>{children}</span>}
          />
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className="flex h-[80px]" {...eventHandlers}>
        <button
          className={classNames(
            'inline-flex hover:text-[#565656] items-center text-sm font-bold  px-2 rounded-[5px] transition-colors ease-out dark:text-white'
          )}
        >
          <Text
            propName="linkText"
            placeholder="Type a text..."
            renderPlaceholder={(props) => (
              <div className="w-[40px] ">{props.children}</div>
            )}
            renderBlock={({ children }) => <div>{children}</div>}
          />

          <svg
            viewBox="0 1 13 13"
            width="14px"
            height="14px"
            stroke="black dark:white"
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
            'transition-all delay-0 duration-500 opacity-0 overflow-hidden ease-in-out w-full bg-white p-3 border absolute top-[80px] start-[0] z-[1000] border-t-0  pt-[47px] pb-[28px] px-[150px] dark:bg-[#101827] dark:border-white'
          )}
        >
          <Repeater
            propName="submenuColumns"
            itemProps={{ handler: setOpen }}
            renderItemWrapper={(item) => (
              <div key={item.key} className="flex-col">
                {item}
              </div>
            )}
            renderWrapper={(item) => (
              <div className="flex gap-x-[5px]">{item}</div>
            )}
          />
        </div>
      </div>
    </div>
  )
}

HeaderMenuItemKnox.schema = {
  name: 'header-menu-item-knox',
  label: 'Menu Item',
  category: 'layout',
  hideFromAddMenu: true,

  repeaterItems: [
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

export default HeaderMenuItemKnox
