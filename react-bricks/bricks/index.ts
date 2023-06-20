import { types } from 'react-bricks/frontend'
import HeroUnit from './custom/MyHeroUnit'
import reactBricksUITheme from './react-bricks-ui'
import BlogList from './custom/BlogList'
import Customer from './custom/Customers/Customers'
import CtaSamsung from './custom/ctaSamsung'
const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Custom',
    categories: [
      {
        categoryName: 'Samsung knox',
        bricks: [HeroUnit, BlogList, Customer, CtaSamsung], // Custom Bricks
      },
    ],
  },
]

export default bricks
