import React from 'react'
import Link from 'next/link'
import { types } from 'react-bricks/frontend'
interface PostListItemProps {
  title: string
  href: string
  content: string
  tag: string[]
  featuredImg?: string
  author?: types.Author
  date?: string
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
      className="flex flex-col hover:shadow-xl group transition-shadow duration-500 mx-[16px] bg-white dark:bg-gray-900 border border-gray-300 mx-[12px] rounded-xl h-[480px] dark:border-white/20 my-[40px]"
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

        <h5 className="font-semibold dark:text-white my-[8px] leading-7 text-2xl group-hover:underline">
          {title}
        </h5>
        <p className="my-[8px] h-[76px] leading-5 tracking-[0.16px] dark:text-white/80">
          {content}
        </p>
      </div>
    </Link>
  )
}

export default BlogListItem
