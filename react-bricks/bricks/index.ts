import { types } from 'react-bricks/frontend'
import HeroUnit from './custom/MyHeroUnit'
import reactBricksUITheme from './react-bricks-ui'
import BlogList from './custom/BlogList'
import Customer from './custom/Customers/Customers'
import CtaSamsung from './custom/ctaSamsung'
import StateInfo from './custom/StateInfo'
import CustomButton from './custom/CustomButton'

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
          Customer,
          CtaSamsung,
        ], // Custom Bricks
      },
    ],
  },
]

export default bricks
