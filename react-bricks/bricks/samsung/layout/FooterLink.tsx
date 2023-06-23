import React from 'react'
import { Text, types, Link } from 'react-bricks/frontend'
interface FooterLinkProps {
  linkPath: string
}

const FooterLink: types.Brick<FooterLinkProps> = ({ linkPath }) => {
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

FooterLink.schema = {
  name: 'samsung-footer-link',
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

export default FooterLink
