import React from 'react'
import { types, usePageValues, Text } from 'react-bricks/frontend'
import BlogListItem from '../../../components/PostListItem'
import Section from '../react-bricks-ui/shared/components/Section'
//import Container from '../react-bricks-ui/shared/components/Container'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ArrowStyles from './ArrowStyle'
interface ExternalData {
  allTags: string[]
  pagesByTag: types.PageFromList[]
}

const BlogList: types.Brick = () => {
  const [pageValues] = usePageValues()

  const settings = {
    arrows: true,
    infinite: true,
    draggable: true,
    // autoplay: !!autoplay,
    // autoplaySpeed: speed ? parseInt(speed) * 1000 : 3000,
    touchThreshold: 1000,
    slidesToShow: 3,
    accessibility: true,
    prevArrow: (
      <img
        className="arrow"
        src="https://kp4-cdn.samsungknox.com/img/previous_brRh.png"
      />
    ),
    nextArrow: (
      <img
        className="arrow"
        src="https://kp4-cdn.samsungknox.com/img/next_IHDI.png"
      />
    ),
  }

  const { externalData } = pageValues
  const { pagesByTag } = externalData as ExternalData

  return (
    <Section className="max-w-[1440px] mx-auto">
      <div className="px-[24px] pt-[96px] ">
        <Text
          propName="title"
          renderBlock={(props) => (
            <p
              className="mb-[8px] font-bold text-5xl leading-[60px] text-center"
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
          {pagesByTag?.map(
            (post) => (
              console.log(post),
              (
                <BlogListItem
                  key={post.id}
                  title={post.meta.title}
                  href={post.slug}
                  content={post.meta.description}
                  tag={post.tags}
                  featuredImg={post.meta.featuredImage || ''}
                />
              )
            )
          )}
        </Slider>
      </div>
    </Section>
  )
}

BlogList.schema = {
  name: 'blog-list',
  label: 'Blog List',
  getDefaultProps: () => ({
    title: "What's new",
  }),

  // Sidebar Edit controls for props
  sideEditProps: [],
}

export default BlogList
