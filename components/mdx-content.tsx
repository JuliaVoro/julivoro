import { JSX } from 'react'
import { highlight } from 'sugar-high'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'

import Counter from '@/components/counter'

function Code({ children, ...props }: any) {
  let codeHTML = highlight(children)
  return (
    <code
      dangerouslySetInnerHTML={{ __html: codeHTML }}
      {...props}
      data-oid='azl768a'
    />
  )
}

const components = {
  code: Code,
  Counter
}

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      data-oid='rx72suh'
    />
  )
}
