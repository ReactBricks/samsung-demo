import { types } from 'react-bricks/frontend'
import HeroUnit from './samsung/HeroUnit'
import reactBricksUITheme from './react-bricks-ui'
import BlogList from './samsung/blogList/BlogList'
import CtaSamsung from './samsung/CallToAction'
import StateInfo from './samsung/Features'
import CustomButton from './samsung/Button'
import HeaderKnox from './samsung/layout/HeaderKnox'
import HeaderMenuItemKnox from './samsung/layout/HeaderMenuItemKnox'
import HeaderMenuSubColumnKnox from './samsung/layout/HeaderMenuColumnKnox'
import HeaderMenuSubItemKnox from './samsung/layout/HeaderMenuSubItemKnox'
import FooterKnox from './samsung/layout/Footer'
import FooterColumnKnox from './samsung/layout/FooterColumn'
import FooterLinkKnox from './samsung/layout/FooterLinkKnox'
import CustomerItemKnox from './samsung/customers/CustomerItem'
import CustomersKnox from './samsung/customers/Customers'
const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Custom',
    categories: [
      {
        categoryName: 'Samsung knox',
        bricks: [
          HeroUnit,
          CustomButton,
          BlogList,
          StateInfo,
          CtaSamsung,
          HeaderKnox,
          HeaderMenuItemKnox,
          HeaderMenuSubColumnKnox,
          HeaderMenuSubItemKnox,
          FooterKnox,
          FooterColumnKnox,
          FooterLinkKnox,
          CustomerItemKnox,
          CustomersKnox,
        ], // Custom Bricks
      },
    ],
  },
]

export default bricks
