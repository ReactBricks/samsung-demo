import { types } from 'react-bricks/frontend'
import HeroUnit from './custom/MyHeroUnit'
import reactBricksUITheme from './react-bricks-ui'
import BlogList from './custom/blogList/BlogList'
import CtaSamsung from './custom/ctaSamsung'
import StateInfo from './custom/StateInfo'
import CustomButton from './custom/CustomButton'
import HeaderKnox from './custom/layout/HeaderKnox'
import HeaderMenuItemKnox from './custom/layout/HeaderMenuItemKnox'
import HeaderMenuSubColumnKnox from './custom/layout/HeaderMenuColumnKnox'
import HeaderMenuSubItemKnox from './custom/layout/HeaderMenuSubItemKnox'
import FooterKnox from './custom/layout/FooterKnox'
import FooterColumnKnox from './custom/layout/FooterColumnKnox'
import FooterLinkKnox from './custom/layout/FooterLinkKnox'
import CustomerItemKnox from './custom/customers/CustomerItemKnox'
import CustomersKnox from './custom/customers/CustomersKnox'
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
