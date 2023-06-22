import blockNames from '../../react-bricks-ui/blockNames'
import React from 'react'
import {
  Text,
  RichText,
  Image,
  File,
  Repeater,
  types,
  Link,
} from 'react-bricks/frontend'
import { textColors } from '../../react-bricks-ui/colors'

interface FooterLinkKnoxProps {
  linkPath: string
}

const FooterLinkKnox: types.Brick<FooterLinkKnoxProps> = ({ linkPath }) => {
  return (
    <Link href={linkPath}>
      <Text
        propName="linkText"
        placeholder="Link..."
        renderBlock={({ children }) => (
          <div className={`text-sm mb-3 hover:underline dark:text-white/80 `}>
            {children}
          </div>
        )}
      />
    </Link>
  )
}

FooterLinkKnox.schema = {
  name: 'footer-link-knox',
  label: 'Link',
  category: 'layout',
  hideFromAddMenu: true,
  // tags: [],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    linkText: 'Pricing',
    linkPath: '/',
  }),

  // Sidebar Edit controls for props
  sideEditProps: [
    {
      name: 'linkPath',
      label: 'Link to...',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default FooterLinkKnox
