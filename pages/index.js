import React from 'react'
import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  Avatar,
  Stack,
  Tag,
  IconButton,
  FormControl,
  Input,
  Textarea,
  Center,
  LightMode,
  Link as ChakraLink,
} from '@chakra-ui/react'
import {GitHub, Mail, ExternalLink, Gitlab, MessageSquare, Home, DollarSign} from 'react-feather'
import {Content} from '../components/content'
import {Header} from '../components/header'
import portfolio from '../data/portfolio.json'

function Hero() {
  return (
    <Stack alignItems="center" spacing={5}>
      <Avatar size="xl" name="Jakob Gillich" src="/static/portrait.jpg" bg="white" />
      <Heading size="3xl" textAlign="center">
        I build modern web apps using{' '}
        <Box d="inline" color="#61DBFB">
          React
        </Box>{' '}
        and{' '}
        <Box d="inline" color="#e535ab">
          GraphQL
        </Box>
      </Heading>
      <Stack isInline>
        <Button
          aria-label="Email"
          leftIcon={<Mail />}
          colorScheme="blue"
          title="Email"
          as="a"
          href="mailto:jakob@gillich.me"
        >
          Email
        </Button>
        <Button
          aria-label="GitHub profile"
          leftIcon={<GitHub />}
          colorScheme="blue"
          title="GitHub profile"
          as="a"
          href="https://github.com/jgillich"
        >
          GitHub
        </Button>
        <Button
          aria-label="Matrix"
          leftIcon={<MessageSquare />}
          colorScheme="blue"
          title="Matrix"
          as="a"
          href="https://matrix.to/#/@jgillich:matrix.org"
        >
          Matrix
        </Button>
      </Stack>
    </Stack>
  )
}

function Services() {
  return (
    <Stack direction={['column', 'column', 'row']}>
      <Stack>
        <Heading size="md">Web App Development</Heading>
        <Text>I design and build modern web apps according to your specifications.</Text>
        <Stack isInline>
          <Tag size="sm">React</Tag>
          <Tag size="sm">Next.js</Tag>
          <Tag size="sm">GraphQL</Tag>
          <Tag size="sm">Jamstack</Tag>
        </Stack>
      </Stack>

      <Stack>
        <Heading size="md">GraphQL API Development</Heading>
        <Text>Get advanced GraphQL expertise from the author of graphql-crystal.</Text>
        <Stack isInline>
          <Tag size="sm">Node.js</Tag>
          <Tag size="sm">Go</Tag>
          <Tag size="sm">Rust</Tag>
          <Tag size="sm">Scala</Tag>
          <Tag size="sm">Crystal</Tag>
        </Stack>
      </Stack>

      <Stack>
        <Heading size="md">DevOps Consulting</Heading>
        <Text>Do you want to reap the benefits of infrastructure as code? I can help.</Text>
        <Stack isInline>
          <Tag size="sm">Docker</Tag>
          <Tag size="sm">Kubernetes</Tag>
          <Tag size="sm">Terraform</Tag>
          <Tag size="sm">Nix</Tag>
        </Stack>
      </Stack>
    </Stack>
  )
}

function Portfolio() {
  return (
    <Stack spacing={5}>
      <Heading>Portfolio</Heading>
      {portfolio.map(project => (
        <Box borderRadius="md" overflow="hidden" key={project.name} color="gray.900">
          <LightMode>
            <Stack p="6" bg="gray.50">
              <Stack isInline justify="space-between" align="center">
                <Heading size="lg">{project.name}</Heading>
                {project.url ? (
                  <IconButton
                    aria-label="Website"
                    size="sm"
                    icon={<ExternalLink />}
                    title="Website"
                    colorScheme="blue"
                    as="a"
                    href={project.url}
                  ></IconButton>
                ) : null}
                {project.github ? (
                  <IconButton
                    aria-label="GitHub"
                    size="sm"
                    icon={<GitHub />}
                    title="GitHub"
                    colorScheme="blue"
                    as="a"
                    href={project.github}
                  ></IconButton>
                ) : null}
                {project.gitlab ? (
                  <IconButton
                    aria-label="GitLab"
                    size="sm"
                    icon={<Gitlab />}
                    title="GitLab"
                    colorScheme="blue"
                    as="a"
                    href={project.gitlab}
                  ></IconButton>
                ) : null}
              </Stack>
            </Stack>
            {project.image ? (
              <ChakraLink href={project.url || project.github || project.gitlab} isExternal={true}>
                <Center maxW="4xl" bg="gray.50">
                  <Image src={project.image} objectFit="cover" />
                </Center>
              </ChakraLink>
            ) : null}
            <Stack p="6" bg="gray.50">
              <Text>{project.description}</Text>
              <Stack direction={['column', 'row']} spacing={2}>
                {project.tags.map(tag => (
                  <Tag size="sm" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </Stack>
            </Stack>
          </LightMode>
        </Box>
      ))}
    </Stack>
  )
}

function Contact() {
  return (
    <Stack>
      <Heading>Contact</Heading>
      <form action="https://formspree.io/f/mqkgawjz" method="POST">
        <Stack>
          <Stack direction={['column', 'row']}>
            <Input type="text" name="name" placeholder="Name" aria-describedby="Your Name" />
            <Input type="email" name="_replyto" placeholder="Email" aria-describedby="Your Email" />
          </Stack>
          <FormControl>
            <Textarea type="text" name="text" placeholder="Message" aria-describedby="Your Email" />
          </FormControl>

          <Button colorScheme="blue" type="submit">
            Send
          </Button>
        </Stack>
      </form>
    </Stack>
  )
}

function Footer() {
  return (
    <Stack pt={10} pb={10}>
      <Stack direction={['column', 'column', 'row']} justify="space-around">
        <Stack>
          <Text>Jakob Gillich</Text>
          <Text>Huberstr. 16</Text>
          <Text>72072 Tübingen</Text>
          <Text>Germany</Text>
        </Stack>
        <Stack>
          {/*<Text>Tax ID aasdasdasd</Text>*/}
          <Text>IBAN DE89 1001 7997 4647 7171 22</Text>
          <Text>BIC HOLVDEB1</Text>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default function Index() {
  return (
    <Box bg="gray.900" color="gray.50">
      <Header />
      <Content>
        <Stack maxW="4xl" p={5} marginBottom={10} spacing={10} wrap="wrap">
          <Hero />
          <Services />
          <Portfolio />
          <Contact />
          <Footer />
        </Stack>
      </Content>
    </Box>
  )
}
