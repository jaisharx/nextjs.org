import { Box, Text, Flex, Heading, HStack, Button } from '@chakra-ui/react';
import Container from '../container';

export default function HeroSection() {
    return (
        <Box as="section" pt="120px" pb="30px">
            <Container>
                <Heading
                    as="h1"
                    letterSpacing="-0.05em"
                    fontSize="100px"
                    fontWeight="800"
                    textAlign="center"
                    lineHeight="1"
                >
                    The React Framework
                    <br />
                    for Production
                </Heading>
                <Text mt="30px" textAlign="center" fontSize="20px" color="#666">
                    Next.js gives you the best developer experience with all the
                    features you need for production: hybrid static & server
                    rendering, TypeScript support, smart bundling, route
                    pre-fetching, and more. No config needed.
                </Text>
                <Flex justifyContent="center" mt="40px">
                    <HStack spacing="4">
                        <Button
                            px="56px"
                            colorScheme="blue"
                            boxShadow="0 6px 20px rgb(0 118 255 / 23%)"
                        >
                            Start Learning
                        </Button>
                        <Button
                            px="56px"
                            bg="white"
                            color="#696969"
                            fontWeight="400"
                            boxShadow="0 6px 20px rgb(93 93 93 / 23%)"
                        >
                            Documentation
                        </Button>
                    </HStack>
                </Flex>
                <Flex justifyContent="center" alignItems="center" mt="30px">
                    <Text mr="2">License: MIT</Text>
                    <Button variant="ghost">Github</Button>
                </Flex>
            </Container>
        </Box>
    );
}
