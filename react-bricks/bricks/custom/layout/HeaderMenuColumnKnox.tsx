import blockNames from '../../react-bricks-ui/blockNames'
import { Text, types, Repeater } from 'react-bricks/frontend'
import React from 'react'
interface HeaderMenuSubColumnKnoxProps {
  title: string
  refs?: React.MutableRefObject<HTMLDivElement>
  handler?: React.Dispatch<React.SetStateAction<boolean>>
}

const HeaderMenuSubColumnKnox: types.Brick<HeaderMenuSubColumnKnoxProps> = ({
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
          <div onClick={() => handler(false)} className="px-[15px]">
            {item}
          </div>
        )}
      />
    </div>
  )
}

HeaderMenuSubColumnKnox.schema = {
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
      itemType: 'header-menu-sub-item-knox',
    },
  ],

  sideEditProps: [],
}

export default HeaderMenuSubColumnKnox
