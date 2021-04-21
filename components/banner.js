import { Box, HStack, Image, Text, Link } from '@chakra-ui/react';
import Container from './container';
import NextImage from 'next/image';

export default function Banner() {
    return (
        <Box bg="black" color="white" p="4">
            <Container>
                <HStack>
                    <Image src="/assets/vercel.svg" mr="auto" />
                    <Link _hover={{ textDecoration: 'none' }}>
                        <Text>Deploy on the platform made for <b>Next.js</b> →</Text>
                    </Link>
                </HStack>
            </Container>
        </Box>
    );
}
