import React, { useEffect, useState } from 'react'
import { types, usePageValues, Text } from 'react-bricks/frontend'
import BlogListItem from '../../../../components/BlogListItem'
import Section from '../../react-bricks-ui/shared/components/Section'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useTheme } from 'next-themes'
import ArrowStyles from './ArrowStyle'
import {
  LayoutProps,
  sectionDefaults,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
} from '../../react-bricks-ui/LayoutSideProps'
import Container from '../../react-bricks-ui/shared/components/Container'
interface ExternalData {
  allTags: string[]
  pagesByTag: types.PageFromList[]
}
export interface BlogListProps extends LayoutProps {}

interface src {
  prev: string
  next: string
}

const BlogList: types.Brick<BlogListProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
}) => {
  const [pageValues] = usePageValues()
  const { theme } = useTheme()
  const [src, setSrc] = useState<src>()

  useEffect(() => {
    if (theme === 'light')
      setSrc({
        next: 'https://kp4-cdn.samsungknox.com/img/next_IHDI.png',
        prev: 'https://kp4-cdn.samsungknox.com/img/next_IHDI.png',
      })
    else setSrc({ next: '/next_white.png', prev: '/prev_white.png' })
  }, [theme])
  const settings = {
    arrows: true,
    infinite: true,
    draggable: true,
    touchThreshold: 1000,
    slidesToShow: 3,
    accessibility: true,
    prevArrow: <img className="" src={src?.prev} />,
    nextArrow: <img className="" src={src?.next} />,
  }

  console.log(theme)

  const { externalData } = pageValues
  const { pagesByTag } = externalData as ExternalData

  return (
    <Section
      className="max-w-[1440px] mx-auto font-samsung"
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        size="full"
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
      >
        <div className="px-[24px] pt-[96px] ">
          <Text
            propName="title"
            renderBlock={(props) => (
              <p
                className="mb-[8px] font-bold text-5xl leading-[60px] text-center dark:text-white"
                {...props.attributes}
              >
                {props.children}
              </p>
            )}
            placeholder="Title..."
          />

          <ArrowStyles />

          <Slider {...settings}>
            {/*@ts-ignore*/}
            {pagesByTag?.map((post) => (
              <BlogListItem
                key={post.id}
                title={post.meta.title}
                href={post.slug}
                content={post.meta.description}
                tag={post.tags}
                featuredImg={post.meta.featuredImage || ''}
              />
            ))}
          </Slider>
        </div>
      </Container>
    </Section>
  )
}

BlogList.schema = {
  name: 'blog-list',
  label: 'Blog List',
  getDefaultProps: () => ({
    title: "What's new",
    ...sectionDefaults,
    backgroundColor: { color: '#f7f7f7', className: 'bg-[#f7f7f7]' },
    borderTop: 'none',
    paddingTop: '0',
    paddingBottom: '0',
  }),
  sideEditProps: [neutralBackgroundSideGroup, paddingBordersSideGroup],
}

export default BlogList
