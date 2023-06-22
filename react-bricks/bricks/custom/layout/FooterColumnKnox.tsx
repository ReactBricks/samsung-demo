import React from 'react'
import { Text, Repeater, types } from 'react-bricks/frontend'

const FooterColumnKnox: types.Brick = (props) => {
  return (
    <div className="mb-8">
      <Text
        propName="title"
        placeholder="Title..."
        renderBlock={({ children }) => (
          <div
            className={`mb-3 text-lg font-bold uppercase leading-6 dark:text-white`}
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

FooterColumnKnox.schema = {
  name: 'footer-column-knox',
  label: 'Column',
  category: 'layout',
  hideFromAddMenu: true,
  repeaterItems: [
    {
      name: 'links',
      itemType: 'footer-link-knox',
    },
  ],
  getDefaultProps: () => ({
    title: 'Features',
  }),
  sideEditProps: [],
}

export default FooterColumnKnox
