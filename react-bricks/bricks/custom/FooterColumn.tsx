import React from 'react'
import {
  Text,
  RichText,
  Image,
  File,
  Repeater,
  types,
} from 'react-bricks/frontend'
import blockNames from '../react-bricks-ui/blockNames'
import { textColors } from '../react-bricks-ui/colors'

interface FooterColumnProps {}

const FooterColumn: types.Brick<FooterColumnProps> = (props) => {
  return (
    <div className="mb-8">
      <Text
        propName="title"
        placeholder="Title..."
        renderBlock={({ children }) => (
          <div
            className={`mb-3 text-lg font-bold uppercase  min-w-[120px] leading-6 dark:text-white`}
          >
            {children}
          </div>
        )}
      />
      <Repeater
        propName="links"
        renderWrapper={(props) => (
          <div className="flex flex-col flex-wrap max-h-[400px]">{props}</div>
        )}
      />
    </div>
  )
}

FooterColumn.schema = {
  name: blockNames.FooterColumn,
  label: 'Column',
  category: 'layout',
  hideFromAddMenu: true,
  // tags: [],
  repeaterItems: [
    {
      name: 'links',
      itemType: blockNames.FooterLink,
    },
  ],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    title: 'Features',
  }),

  // Sidebar Edit controls for props
  sideEditProps: [],
}

export default FooterColumn
