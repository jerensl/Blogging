import { MDXProviderProps } from '@mdx-js/react'

export const MarkdownLayout: React.FC<MDXProviderProps> = (
  props
): React.ReactElement => {
  return (
    <div className="prose text-markdown-base max-w-none">
      <div {...props} />
    </div>
  )
}
