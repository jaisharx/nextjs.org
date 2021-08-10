import { Box, Text, Flex, Heading, HStack, Button } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Container from '../container';

const PrimaryBtn = styled(Button)`
    font-weight: normal;
    padding: 0.8rem 3.5rem;
    color: white;
    height: auto;
    background-color: #0070f3;
    box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);

    &:hover {
        background-color: #0076ffe6;
        box-shadow: 0 6px 20px rgb(0 118 255 / 23%);
    }
`;

const SecondaryBtn = styled(Button)`
    font-weight: normal;
    padding: 0.8rem 3.5rem;
    height: auto;
    background-color: white;
    box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);

    &:hover {
        background-color: white;
        box-shadow: 0 6px 20px rgb(93 93 93 / 23%);
    }
`;

const MainHeading = styled.h1`
    color: black;
    font-size: 100px;
    letter-spacing: -0.05em;
    font-weight: 800;
    text-align: center;
    line-height: 1;
`;

export default function HeroSection() {
    return (
        <Box as="section" pt="120px" pb="30px">
            <Container>
                <MainHeading>
                    The React Framework
                    <br />
                    for Production
                </MainHeading>
                <Text mt="30px" textAlign="center" fontSize="20px" color="#666">
                    Next.js gives you the best developer experience with all the
                    features you need for production: hybrid static & server
                    rendering, TypeScript support, smart bundling, route
                    pre-fetching, and more. No config needed.
                </Text>
                <Flex justifyContent="center" mt="40px">
                    <HStack spacing="4">
                        <PrimaryBtn>Start Learning</PrimaryBtn>
                        <SecondaryBtn>Documentation</SecondaryBtn>
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
