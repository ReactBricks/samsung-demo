import blockNames from '../../react-bricks-ui/blockNames'
import { Text, types, Repeater } from 'react-bricks/frontend'
import React from 'react'
interface HeaderMenuSubColumnProps {
  title: string
  refs?: React.MutableRefObject<HTMLDivElement>
  handler?: React.Dispatch<React.SetStateAction<boolean>>
}

const HeaderMenuSubColumn: types.Brick<HeaderMenuSubColumnProps> = ({
  handler,
}) => {
  return (
    <div className="max-w-3/12 font-samsung">
      <div className="px-[15px]">
        <Text
          propName="title"
          placeholder="Column title.."
          renderBlock={({ children }) => (
            <div className="mb-[8px] text-sm uppercase text-[#555] font-bold dark:text-white">
              {children}
            </div>
          )}
        />
      </div>
      <Repeater
        propName="submenuItems"
        renderItemWrapper={(item) => (
          <div
            key={item.key}
            onClick={() => handler(false)}
            className="px-[15px]"
          >
            {item}
          </div>
        )}
      />
    </div>
  )
}

HeaderMenuSubColumn.schema = {
  name: 'samsung-header-menu-sub-column',
  label: 'Header menu columns',
  category: 'layout',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    title: 'FOR IT ADMINS',
  }),
  repeaterItems: [
    {
      name: 'submenuItems',
      itemType: 'samsung-header-menu-sub-item',
    },
  ],

  sideEditProps: [],
}

export default HeaderMenuSubColumn
