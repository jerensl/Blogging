import { MDXProviderProps } from '@mdx-js/react'

export const MarkdownLayout = (props: MDXProviderProps): React.ReactElement => {
  return (
    <div className="prose text-gray-500 max-w-none dark:bg-gray-900">
      <main {...props} />
    </div>
  )
}
