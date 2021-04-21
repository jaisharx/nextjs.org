import { Box, Grid, Heading, Image, Link, Text } from '@chakra-ui/react';
import Container from '../container';

function Card() {
    return (
        <Box border="1px solid #eaeaea" p="24px">
            <Heading as="h3" fontSize="18px" fontWeight="600">
                Image Optimization
            </Heading>
            <Text fontSize="14px" my="4" mr="4">
                Image and Automatic Image Optimization with instant builds.
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
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
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
            <Box mt="32px" mb="64px">
                <Image src="/assets/social.png" />
            </Box>
        </Box>
    );
}
