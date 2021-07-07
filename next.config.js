const rehypePrism = require('@mapbox/rehype-prism')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withPlugins = require('next-compose-plugins')

const visit = 'unist-util-visit'

const tokenClassNames = {
  tag: 'text-code-red',
  'attr-name': 'text-code-yellow',
  'attr-value': 'text-code-green',
  deleted: 'text-code-red',
  inserted: 'text-code-green',
  punctuation: 'text-code-white',
  keyword: 'text-code-purple',
  string: 'text-code-green',
  function: 'text-code-blue',
  boolean: 'text-code-red',
  comment: 'text-gray-400 italic',
}

const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      rehypePrism,
      () => {
        return (tree) => {
          visit(tree, 'element', (node, index, parent) => {
            let [token, type] = node.properties.className || []
            if (token === 'token') {
              node.properties.className = [tokenClassNames[type]]
            }
          })
        }
      },
    ],
  },
})

module.exports = withPlugins(
  [
    [
      withMDX,
      {
        pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
        trailingSlash: true,
        exportPathMap: function () {
          return {
            '/': { page: '/' },
            '/blog': { page: '/blog' },
            '/about': { page: '/about' },
          }
        },
      },
    ],
    [
      withPWA,
      {
        webpack5: true,
        pwa: {
          dest: 'public',
          runtimeCaching,
        },
      },
    ],
  ],
  {
    /* global config here ... */
  }
)
