import { types } from 'react-bricks/frontend'
import HeroUnit from './samsung/HeroUnit'
import reactBricksUITheme from './react-bricks-ui'
import BlogList from './samsung/blogList/BlogList'
import CallToAction from './samsung/CallToAction'
import Features from './samsung/Features'
import Button from './samsung/Button'
import Header from './samsung/layout/Header'
import HeaderMenuItem from './samsung/layout/HeaderMenuItem'
import HeaderMenuSubColumn from './samsung/layout/HeaderMenuColumn'
import HeaderMenuSubItem from './samsung/layout/HeaderMenuSubItem'
import Footer from './samsung/layout/Footer'
import FooterColumn from './samsung/layout/FooterColumn'
import FooterLink from './samsung/layout/FooterLink'
import CustomerItem from './samsung/customers/CustomerItem'
import Customers from './samsung/customers/Customers'
import SimpleHeroUnit from './samsung/SimpleHeroUnit'
const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Samsung knox',
    categories: [
      {
        categoryName: 'main content',
        bricks: [
          HeroUnit,
          Button,
          BlogList,
          Features,
          CallToAction,
          Customers,
          CustomerItem,
          SimpleHeroUnit,
        ],
      },
      {
        categoryName: 'layout',
        bricks: [
          Header,
          HeaderMenuItem,
          HeaderMenuSubColumn,
          HeaderMenuSubItem,
          Footer,
          FooterColumn,
          FooterLink,
        ],
      },
    ],
  },
]

export default bricks
