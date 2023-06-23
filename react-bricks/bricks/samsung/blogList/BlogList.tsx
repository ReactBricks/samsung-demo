import React, { useEffect, useState } from 'react'
import { types, usePageValues, Text } from 'react-bricks/frontend'
import PostListItem from '../../../../components/PostListItem'
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

const NextArrow = (props) => {
  const { className, style, onClick, src } = props
  return <img className={className} style={style} src={src} onClick={onClick} />
}

const PrevArrow = (props) => {
  const { className, style, onClick, src } = props
  return <img className={className} style={style} src={src} onClick={onClick} />
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
  const [src, setSrc] = useState<src>({
    next: 'https://kp4-cdn.samsungknox.com/img/next_IHDI.png',
    prev: 'https://kp4-cdn.samsungknox.com/img/previous_brRh.png',
  })

  useEffect(() => {
    if (theme === 'light')
      setSrc({
        next: 'https://kp4-cdn.samsungknox.com/img/next_IHDI.png',
        prev: 'https://kp4-cdn.samsungknox.com/img/previous_brRh.png',
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
    prevArrow: <NextArrow src={src?.prev} />,
    nextArrow: <PrevArrow src={src?.next} />,
  }

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
        <div className="px-[24px] pt-12">
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
              <PostListItem
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
  name: 'samsung-blog-list',
  label: 'Blog List',
  previewImageUrl: '/bricks-preview-images/samsung-blog-list.png',
  getDefaultProps: () => ({
    title: "What's new",
    ...sectionDefaults,
    borderTop: 'none',
    paddingTop: '12',
    paddingBottom: '0',
  }),
  sideEditProps: [neutralBackgroundSideGroup, paddingBordersSideGroup],
}

export default BlogList
