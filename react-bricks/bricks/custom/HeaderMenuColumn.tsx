import { Menu } from '@headlessui/react'
import blockNames from '../react-bricks-ui/blockNames'
import React from 'react'
import { Text, types, Link, Repeater } from 'react-bricks/frontend'
import classNames from 'classnames'
import { FiChevronRight } from 'react-icons/fi'

interface HeaderMenuSubColumnProps {
  title: string
}

const HeaderMenuSubColumn: types.Brick<HeaderMenuSubColumnProps> = ({
  title,
}) => {
  return (
    <div>
      <div>
        <Text
          propName="title"
          placeholder="Column title.."
          renderBlock={({ children }) => (
            <div className="px-[15px]">{children}</div>
          )}
        />
      </div>
      <Repeater
        propName="submenuItems"
        renderItemWrapper={(item) => <div className="px-[15px]">{item}</div>}
      />
    </div>
  )
}

HeaderMenuSubColumn.schema = {
  name: 'header-menu-sub-column',
  label: 'Header menu columns',
  category: 'layout',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    title: 'FOR IT ADMINS',
  }),
  repeaterItems: [
    {
      name: 'submenuItems',
      itemType: blockNames.HeaderMenuSubItem,
    },
  ],

  sideEditProps: [],
}

export default HeaderMenuSubColumn
