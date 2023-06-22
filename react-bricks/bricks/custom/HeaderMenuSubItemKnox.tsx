import { Menu } from '@headlessui/react'
import blockNames from '../react-bricks-ui/blockNames'
import React from 'react'
import { Text, types, Link } from 'react-bricks/frontend'
import classNames from 'classnames'
import { FiChevronRight } from 'react-icons/fi'

interface HeaderMenuSubItemProps {
  linkPath: string
}

const HeaderMenuSubItem: types.Brick<HeaderMenuSubItemProps> = ({
  linkPath,
}) => {
  return (
    <Link
      href={linkPath}
      className="group p-0 mb-3 lg:p-3 flex items-start font-samsung"
    >
      <div className="text-sky-500 lg:hidden mr-2">
        <FiChevronRight />
      </div>
      <div className="flex-1 overflow-hidden lg:overflow-auto">
        <Text
          propName="linkText"
          placeholder="Type a text..."
          renderBlock={({ children }) => (
            <div
              className={classNames(
                'text-sm truncate lg:overflow-auto lg:whitespace-normal font-bold transition-colors ease-out group-hover:underline leading-4 dark:text-white'
              )}
            >
              {children}
            </div>
          )}
        />
        <div className="hidden lg:block">
          <Text
            propName="linkDescription"
            placeholder="Type a text..."
            renderBlock={({ children }) => (
              <div
                className={classNames(
                  'text-xs transition-colors ease-out dark:text-white/80'
                )}
              >
                {children}
              </div>
            )}
          />
        </div>
      </div>
    </Link>
  )
}

HeaderMenuSubItem.schema = {
  name: blockNames.HeaderMenuSubItem,
  label: 'Submenu Item',
  category: 'layout',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    linkText: 'Changelog',
    linkDescription: 'Release notes for all React Bricks versions',
    linkPath: '/',
  }),

  sideEditProps: [
    {
      name: 'linkPath',
      label: 'Link to...',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default HeaderMenuSubItem
