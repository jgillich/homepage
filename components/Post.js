import React, {Fragment} from 'react'
import {Paragraph, Text, Markdown, Box} from 'grommet'
import styled from 'styled-components'
import Highlight, {defaultProps} from 'prism-react-renderer'
import github from 'prism-react-renderer/themes/github'

const BlogParagraph = styled(Paragraph)`
  max-width: 100%;
`

const Pre = ({children}) => {
  return (
    <Highlight
      {...defaultProps}
      code={children.props.children}
      language={children.props.className && children.props.className.replace('lang-', '')}
      theme={github}
    >
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={style}>
          <Box pad="small" overflow="auto">
            {tokens.map((line, i) => (
              <div key={line} {...getLineProps({line, key: i})}>
                {line.map((token, key) => (
                  <span key={token} {...getTokenProps({token, key})} />
                ))}
              </div>
            ))}
          </Box>
        </pre>
      )}
    </Highlight>
  )
}

const Post = ({date, content}) => (
  <Fragment>
    <Text color="dark-3">
      {new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      }).format(new Date(date))}
    </Text>
    <Markdown
      components={{
        p: BlogParagraph,
        pre: Pre
      }}
    >
      {content}
    </Markdown>
  </Fragment>
)

export default Post
