import React, {Fragment} from 'react'
import {Paragraph, Text, Box} from '@chakra-ui/react'
import {Markdown} from './markdown'

export function Post({date, content}) {
  return (
    <Fragment>
      <Text color="gray.500" paddingTop={2} paddingBottom={2} textTransform="uppercase">
        {new Intl.DateTimeFormat('en-US', {
          month: 'short',
          day: '2-digit',
          year: 'numeric',
        }).format(new Date(date))}
      </Text>
      <Markdown>{content}</Markdown>
    </Fragment>
  )
}
