import {
    Box,
    Text,
    Image,
    Flex,
    Button,
    HStack,
    Link,
    StatLabel,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import Container from './container';

function Links({ children }) {
    return (
        <HStack spacing="14" mr="auto">
            {children.map((item, idx) => (
                <Link key={idx}>
                    <Text color="#696969">{item}</Text>
                </Link>
            ))}
        </HStack>
    );
}

const LearnBtn = styled(Button)`
    color: white;
    padding: 0.25rem 1rem;
    background-color: #0076ffe6;
    border: 1px solid #0076ffe6;

    &:hover {
        color: #0076ffe6;
        background-color: transparent;
    }
`;

export default function Navbar() {
    return (
        <Box p="4" position="sticky" top="0" bg="white" zIndex="sticky">
            <Container>
                <Flex alignItems="center">
                    <Image src="/assets/logo.svg" mr="12" />
                    <Links>
                        {[
                            'Showcase',
                            'Docs',
                            'Blog',
                            'Analytics',
                            'Commerce',
                            'Enterprise',
                        ]}
                    </Links>
                    <HStack spacing="8">
                        <LearnBtn>Learn</LearnBtn>
                        <Image src="/assets/github.svg" w="6" color="#696969" />
                    </HStack>
                </Flex>
            </Container>
        </Box>
    );
}
