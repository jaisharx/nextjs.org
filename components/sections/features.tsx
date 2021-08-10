import { Box, Grid, Heading, Image, Link, Flex, Text } from '@chakra-ui/react';
import Container from '../container';

function Card({ title, desc }) {
    return (
        <Box
            p="24px"
            cursor="pointer"
            border="1px solid #eaeaea"
            transition="box-shadow .2s ease"
            _hover={{
                borderColor: 'transparent',
                boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
            }}
        >
            <Heading as="h3" fontSize="18px" fontWeight="600">
                {title}
            </Heading>
            <Text fontSize="14px" my="4" mr="4">
                {desc}
            </Text>
            <Link color="#067df7" fontSize="14px">
                Documentation →
            </Link>
        </Box>
    );
}

function NextLink({ children }) {
    return <Link color="#067df7">{children}</Link>;
}

export default function FeatureSection() {
    return (
        <Box as="section">
            <Container>
                <Box py="100px" px="16px">
                    <Heading textAlign="center" fontSize="32px">
                        Why Next.js
                    </Heading>
                    <Text mt="16px" textAlign="center" color="#696969">
                        The world’s leading companies use and love Next.js
                    </Text>

                    <Grid templateColumns="repeat(3, 1fr)" gap="24px" mt="12">
                        <Card
                            title="Image Optimization"
                            desc="<Image> and Automatic Image Optimization with instant builds."
                        />
                        <Card
                            title="Internationalization"
                            desc="Built-in Domain & Subdomain Routing and Automatic Language detection."
                        />
                        <Card
                            title="Next.js Analytics"
                            desc="A true lighthouse score based on real visitor data & page-by-page insights"
                        />
                        <Card
                            title="Zero Config"
                            desc="Automatic compilation and bundling. Optimized for production from the start."
                        />
                        <Card
                            title="Hybrid: SSG and SSR"
                            desc="Pre-render pages at build time (SSG) or request time (SSR) in a single project."
                        />
                        <Card
                            title="Incremental Static Regeneration"
                            desc="Add and update statically pre-rendered pages incrementally after build time."
                        />
                        <Card
                            title="TypeScript Support"
                            desc="Automatic TypeScript configuration and compilation."
                        />
                        <Card
                            title="Fast Refresh"
                            desc="Fast, reliable live-editing experience, as proven at Facebook scale."
                        />
                        <Card
                            title="File-system Routing"
                            desc="Every component in the `pages`  directory becomes a route."
                        />
                        <Card
                            title="API Routes"
                            desc="Optionally create API endpoints to provide backend functionality."
                        />
                        <Card
                            title="Built-in CSS Support"
                            desc="Create component-level styles with CSS modules. Built-in Sass support."
                        />
                        <Card
                            title="Code-splitting and Bundling"
                            desc="Optimized bundle splitting algorithm created by the Google Chrome team."
                        />
                    </Grid>
                    <Text my="10" textAlign="center" fontSize="14px">
                        <b>And more:</b> Support for{' '}
                        <NextLink>environment variables</NextLink>,{' '}
                        <NextLink>preview mode</NextLink>,{' '}
                        <NextLink>custom head tags</NextLink>,{' '}
                        <NextLink>automatic polyfills</NextLink>, and more.
                    </Text>
                </Box>
            </Container>
            <Flex justify="center" mt="32px" mb="64px">
                <Image src="/assets/social.png" maxW="98%"/>
            </Flex>
        </Box>
    );
}
