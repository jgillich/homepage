import {Flex, Center} from '@chakra-ui/react'

export function Content({children, ...rest}) {
  return (
    <Flex justifyContent="center" wrap="wrap" {...rest}>
      <Center w="100vw" maxWidth="1200px" flexDirection="column" flexWrap="wrap">
        {children}
      </Center>
    </Flex>
  )
}
