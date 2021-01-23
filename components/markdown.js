import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'
import Lowlight from 'react-lowlight'
import js from 'highlight.js/lib/languages/javascript'
import bash from 'highlight.js/lib/languages/bash'
import shell from 'highlight.js/lib/languages/shell'
import {Link} from './link'
import {Box, Heading} from '@chakra-ui/react'
import githubSchema from 'hast-util-sanitize/lib/github.json'

Lowlight.registerLanguage('javascript', js)
Lowlight.registerLanguage('bash', bash)
Lowlight.registerLanguage('shell', shell)

const schema = Object.assign({}, githubSchema, {
  attributes: Object.assign({}, githubSchema.attributes, {
    code: [...(githubSchema.attributes.code || []), 'className'],
  }),
})

const LowlightCode = ({className = '', children}) => {
  const language = className.split('-')[1] || ''
  const value = children[0] || ''
  const props = {value, inline: true, language}

  props.language = language

  return <Lowlight {...props} />
}

/*
const Pre = ({children}) => {
  console.log(children)
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
*/

export function Markdown({children}) {
  return unified()
    .use(parse)
    .use(remark2react, {
      sanitize: schema,
      remarkReactComponents: {
        a: Link,
        code: LowlightCode,
        pre: props => (
          <Box marginTop={2} marginBottom={2} className="hljs" overflowX="auto" as="pre" maxW="85vw">
            {props.children}
          </Box>
        ),
        //pre: props => <Box />,
        h1: p => <Heading as="h1" size="2xl" {...p} />,
        h2: p => <Heading as="h2" size="xl" {...p} />,
        h3: p => <Heading as="h3" size="lg" {...p} />,
        h4: p => <Heading as="h4" size="md" {...p} />,
        h5: p => <Heading as="h5" size="sm" {...p} />,
        h6: p => <Heading as="h6" size="xs" {...p} />,
      },
    })
    .processSync(children).result
}
