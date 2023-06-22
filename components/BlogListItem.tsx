import React from 'react'
import Link from 'next/link'
import { types } from 'react-bricks/frontend'
import dayjs from 'dayjs'

interface PostListItemProps {
  title: string
  href: string
  content: string
  tag: string[]
  featuredImg?: string
}

const BlogListItem: React.FC<PostListItemProps> = ({
  title,
  href,
  content,
  tag,
  featuredImg,
}) => {
  return (
    <Link
      href={`/blog/post/${href}`}
      className="flex flex-col hover:shadow-2xl group transition-transform ease-in-out duration-300 my-[16px] border border-[#cccccc] mx-[12px] rounded-xl h-[460px] dark:border-white"
    >
      <img
        src={featuredImg}
        className="aspect-video object-cover rounded-t-xl"
      />

      {/* justify-between */}
      <div className="flex flex-col h-full max-h-[233px] p-[24px] text-left cursor-pointer">
        <h6 className="text-sm font-semibold leading-4 tracking-wider mb-[8px] text-[#636c72]">
          {tag[0]}
        </h6>

        <h5 className="font-black text-2xl dark:text-white my-[8px] leading-7 text-2xl font-medium group-hover:underline">
          {title}
        </h5>
        <p className="my-[8px] h-[76px] leading-5 tracking-[0.16px] dark:text-white/80">
          {content}
        </p>
      </div>

      {/* <div className="flex-1 my-4 bg-gray-100 block group py-4 text-gray-900 hover:bg-gray-50 transition-colors duration-300 p-6 -m-6 rounded">
        <div className="flex items-center space-x-4">
        <div className="flex items-center mt-4 text-cyan-500 group-hover:text-cyan-600 font-semibold">
          <div className="mr-2 group-hover:mr-4 transition-all duration-300">
            Read More
          </div>
          &raquo;
        </div>
        </div>
      </div> */}
    </Link>
  )
}

export default BlogListItem
