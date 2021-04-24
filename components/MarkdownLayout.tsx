import { MDXProviderProps } from '@mdx-js/react'

export const MarkdownLayout = (props: MDXProviderProps): React.ReactElement => {
  return (
    <div className="prose text-markdown-base max-w-none">
      <main {...props} />
    </div>
  )
}
