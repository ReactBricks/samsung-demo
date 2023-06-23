import { fetchPage, fetchPages, fetchTags, types } from 'react-bricks/frontend'
import config from './config'

const pageTypes: types.IPageType[] = [
  {
    name: 'page',
    pluralName: 'pages',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    getDefaultContent: () => [],
    getExternalData: async (page, args) => {
      const tagArgs = args?.tag ? { tag: args.tag } : {}

      const pages = await fetchPages(config.apiKey, {
        ...tagArgs,
        type: 'blog',
        pageSize: 4,
        sort: '-publishedAt',
      })
      const tags = await fetchTags(process.env.API_KEY)

      return {
        pagesByTag: pages,
        allTags: tags?.items || [],
      }
    },
  },
  {
    name: 'blog',
    pluralName: 'Blog',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    getDefaultContent: () => [],
    allowedBlockTypes: [
      'title',
      'paragraph',
      'big-image',
      'video',
      'code',
      'tweet',
      'tweet-light',
      'blog-title',
      'newsletter-subscribe',
      'external-data-example',
    ],
    getExternalData: () =>
      fetch('https://catfact.ninja/fact')
        .then((response) => response.json())
        .then((data) => ({
          catFact: data.fact,
        })),
  },

  {
    name: 'layout',
    pluralName: 'layout',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    getDefaultContent: () => [],
    isEntity: true,
  },
]

export default pageTypes
