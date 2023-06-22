import classNames from 'classnames'
import * as React from 'react'
import { Image, types, Link } from 'react-bricks/frontend'
import blockNames from '../../react-bricks-ui/blockNames'
import { customersSamsung } from '../../react-bricks-ui/shared/defaultImages'
export interface CustomerProps {
  grayscale?: boolean
  image: types.IImageSource
  href: string
}

const CustomerItemKnox: types.Brick<CustomerProps> = ({
  grayscale,
  href,
  image,
}) => {
  return (
    <Link
      href={href}
      className="inline-flex items-center no-wrap h-full max-w-[25%] px-[15px] font-samsung"
    >
      <Image
        propName="image"
        alt="customer"
        imageClassName={classNames('block object-contain', {
          'opacity-50 grayscale dark:invert': grayscale,
        })}
      />
    </Link>
  )
}

CustomerItemKnox.schema = {
  name: 'customer-item-knox',
  label: 'Customer',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    image: customersSamsung.KIA,
    href: '',
  }),

  sideEditProps: [
    {
      name: 'href',
      label: 'Link (external or path)',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default CustomerItemKnox
