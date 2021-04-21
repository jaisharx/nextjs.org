import { Box, Text, Image, Flex, Button, HStack, Link } from '@chakra-ui/react';
import Container from './container';

function Links({ children }) {
    return (
        <HStack spacing="14" mr="auto">
            {children.map((item) => (
                <Link>
                    <Text color="#696969">{item}</Text>
                </Link>
            ))}
        </HStack>
    );
}

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
                        <Button colorScheme="blue">Learn</Button>
                        <Image src="/assets/github.svg" w="6" color="#696969" />
                    </HStack>
                </Flex>
            </Container>
        </Box>
    );
}
