import React from 'react'
import { Text, types, Link } from 'react-bricks/frontend'
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
          <div className={`mb-3  text-sm hover:underline dark:text-white/80 `}>
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
  getDefaultProps: () => ({
    linkText: 'Pricing',
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

export default FooterLinkKnox
