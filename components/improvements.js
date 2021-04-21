import { Badge, Box, Text, Link, Flex, HStack } from '@chakra-ui/react';
import Container from './container';

function NewBadge({ children }) {
    return (
        <Badge
            background="linear-gradient(90deg,#ed6292 25%,#ed5760 87.5%)"
            borderRadius="5"
            color="white"
            mr="1"
            px="2"
            py="1"
        >
            {children}
        </Badge>
    );
}

export default function Improvements() {
    return (
        <Box>
            <Container>
                <Flex justifyContent="center">
                    <HStack
                        border="2px solid #eaeaea"
                        p="2"
                        mt="6"
                        fontSize="15px"
                    >
                        <NewBadge>NEW</NewBadge>
                        <Text>
                            <b>Next.js 10.1</b> – 3x Faster Refresh, Image
                            Improvements, Apple Silicon Support, and more.{' '}
                            <Link fontWeight="bold">Read →</Link>
                        </Text>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    );
}
