import React from 'react'
import {Box, Heading, Flex, Text, Button, LightMode} from '@chakra-ui/react'
import {Menu} from 'react-feather'
import {useRouter} from 'next/router'
import {Link} from './link'

const MenuItem = ({title, href}) => {
  const router = useRouter()
  return (
    <Text mt={{base: 4, md: 0}} mr={6} display="block">
      <Link href={href}>
        <Heading as="h2" size="sm" color={router.pathname == href ? 'teal.500' : undefined}>
          {title}
        </Heading>
      </Link>
    </Text>
  )
}
export function Header(props) {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <LightMode>
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="0.5rem" p={4} {...props}>
        <Flex align="center">
          <Heading as="h1" size="lg">
            Jakob Gillich
          </Heading>
        </Flex>

        <Box display={{base: 'block', md: 'none'}} onClick={handleToggle}>
          <Menu />
        </Box>

        <Box
          display={{base: show ? 'block' : 'none', md: 'flex'}}
          width={{base: 'full', md: 'auto'}}
          alignItems="center"
        >
          <MenuItem title="About" href="/" />
          <MenuItem title="Blog" href="/blog" />
        </Box>
      </Flex>
    </LightMode>
  )
}
