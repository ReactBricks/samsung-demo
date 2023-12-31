import classNames from 'classnames'
import * as React from 'react'
import { Image, types, Link } from 'react-bricks/frontend'
import { logos } from '../../react-bricks-ui/shared/defaultImages'
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
        imageClassName={classNames('block object-contain w-[200px] h-[100px]', {
          'opacity-50 grayscale dark:invert': grayscale,
        })}
      />
    </Link>
  )
}

CustomerItemKnox.schema = {
  name: 'samsung-customer-item',
  label: 'Customer',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    image: logos.REACT_BRICKS,
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
