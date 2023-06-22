import { types } from 'react-bricks/frontend'
import HeroUnit from './custom/MyHeroUnit'
import reactBricksUITheme from './react-bricks-ui'
import BlogList from './custom/BlogList'
import CtaSamsung from './custom/ctaSamsung'
import StateInfo from './custom/StateInfo'
import CustomButton from './custom/CustomButton'
import HeaderKnox from './custom/HeaderKnox'
import HeaderMenuItemKnox from './custom/HeaderMenuItemKnox'
import HeaderMenuSubColumnKnox from './custom/HeaderMenuColumnKnox'
import HeaderMenuSubItemKnox from './custom/HeaderMenuSubItemKnox'
import FooterKnox from './custom/FooterKnox'
import FooterColumnKnox from './custom/FooterColumnKnox'
import FooterLinkKnox from './custom/FooterLinkKnox'
import CustomerItemKnox from './custom/Customers/CustomerItemKnox'
import CustomersKnox from './custom/Customers/CustomersKnox'
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
