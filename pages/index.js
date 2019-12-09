import React from 'react'
import {Grid, Box, Heading, Anchor, Paragraph, Image, Button, Stack, Meter, Text} from 'grommet'
import {Mail, Link, Github, StackOverflow} from 'grommet-icons'
import DefaultLayout from '../layouts'

const SkillMeter = ({name, value}) => (
  <Box align="center" pad="xsmall">
    <Stack anchor="center">
      <Meter
        type="circle"
        values={[
          {
            value,
            color: 'brand'
          }
        ]}
        max={100}
        size="xsmall"
        thickness="xsmall"
      />
      <Box align="center">
        <Box direction="row" align="center" pad={{bottom: 'xsmall'}}>
          <Text size="normal" wordBreak="normal">
            {name}
          </Text>
        </Box>
      </Box>
    </Stack>
  </Box>
)

const Index = () => (
  <DefaultLayout>
    <Grid columns={['large']} gap="large" justifyContent="center">
      <Box>
        {/*
        <Box height="xsmall" width="xsmall" margin="xsmall" alignSelf="center">
          <Image fit="cover" src="https://i.pravatar.cc/300" />
        </Box>
        */}
        <Heading level={1} margin="xsmall" alignSelf="center">
          Jakob Gillich
        </Heading>
        <Paragraph alignSelf="center" textAlign="center">
          I am a full stack web developer based in Germany. I love crafting great user experiences and I'm a passionate
          runner.
        </Paragraph>
        <Box direction="row" justify="center">
          <Button
            icon={<Mail />}
            label="Contact me"
            color="brand"
            primary
            margin="xsmall"
            href="mailto:jakob@gillich.me"
          />
        </Box>
        <Box direction="row" justify="center">
          <Button icon={<Github />} href="https://github.com/jgillich" title="GitHub Profile" />
          <Button
            icon={<StackOverflow />}
            href="https://stackoverflow.com/users/941764/jgillich"
            title="StackOverflow Profile"
          />
        </Box>
      </Box>
      <Box gap="large">
        <Heading level={2} margin="xsmall" alignSelf="center">
          Skills
        </Heading>
        <Box direction="row" justify="center">
          <SkillMeter name="JavaScript" value={100} />
          <SkillMeter name="React" value={100} />
          <SkillMeter name="Node.js" value={100} />
          <SkillMeter name="Go" value={75} />
          <SkillMeter name="GraphQL" value={75} />
          <SkillMeter name="Rust" value={50} />
          <SkillMeter name="K8s" value={50} />
        </Box>
      </Box>
      <Box gap="large">
        <Box>
          <Heading level={2} margin="xsmall" alignSelf="center">
            Projects
          </Heading>
          <Text alignSelf="center">
            Interested in some code? This website is{' '}
            <Anchor href="https://gitlab.com/jgillich/homepage">open source</Anchor>.
          </Text>
        </Box>
        <Box direction="row" gap="small" height="medium">
          <Box basis="3/4">
            <Image width="100%" fit="contain" src="/static/RocketGraph.png" />
          </Box>
          <Box basis="1/4">
            <Heading level={3} margin="none">
              RocketGraph (2019)
            </Heading>
            <Paragraph>
              RocketGraph is a GraphQL-based utility API for developers. It is powered by a Rust backend and a
              React/Next.js frontend.
            </Paragraph>
            <Button icon={<Link />} label="Visit Page" href="https://www.rocketgraph.co/" />
          </Box>
        </Box>
        <Box direction="row" gap="small" height="medium">
          <Box basis="3/4">
            <Image width="100%" fit="contain" src="/static/Blockforge.png" />
          </Box>
          <Box basis="1/4">
            <Heading level={3} margin="none">
              BlockForge (2018)
            </Heading>
            <Paragraph>
              BlockForge was a cross-platform cryptocurrency miner with a graphical user interface based on web
              technologies. The mining backend was written from scratch in Go.
            </Paragraph>
            <Button icon={<Link />} label="Source Code" href="https://gitlab.com/blockforge/blockforge" />
          </Box>
        </Box>
        <Box direction="row" gap="small" height="medium">
          <Box basis="3/4" direction="row">
            <Image fit="contain" src="/static/Greenguide2.png" />
          </Box>
          <Box basis="1/4">
            <Heading level={3} margin="none">
              GREENguide (2013)
            </Heading>
            <Paragraph>
              GREENguide was a companion app for a local botanical garden, built using web technologies.
            </Paragraph>
          </Box>
        </Box>
      </Box>
      <Box gap="large" />
    </Grid>
  </DefaultLayout>
)

export default Index
