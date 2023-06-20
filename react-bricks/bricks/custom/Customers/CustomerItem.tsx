import classNames from 'classnames'
import * as React from 'react'
import { Image, types } from 'react-bricks/frontend'
import blockNames from '../../react-bricks-ui/blockNames'
import { customersSamsung } from '../../react-bricks-ui/shared/defaultImages'
export interface CustomerProps {
  grayscale?: boolean
  image: types.IImageSource
}

const Customer: types.Brick<CustomerProps> = ({ grayscale = false }) => {
  return (
    <div className="inline-flex items-center px-[15px] md:px-5 h-full max-w-[25%] no-wrap">
      <Image
        propName="image"
        alt="customer"
        imageClassName={classNames('block object-contain', {
          'opacity-50 grayscale dark:invert': grayscale,
        })}
      />
    </div>
  )
}

Customer.schema = {
  name: blockNames.Customer,
  label: 'Customer',
  category: 'logos',
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Customers/CustomerItem.tsx',

  getDefaultProps: () => ({
    image: customersSamsung.KIA,
  }),
}

export default Customer
