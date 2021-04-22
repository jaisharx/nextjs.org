import {
    Box,
    Text,
    Heading,
    HStack,
    Image,
    Button,
    Flex,
} from '@chakra-ui/react';

function Showcase() {
    return (
        <HStack mt="20" maxW="100vw">
            <Image
                src="/assets/showcase/image1.jpg"
                transform="scale(0.6728053032038478) translate3d(-4.233600241796016px, -105px, 0)"
            />
            <Image src="/assets/showcase/image2.jpg" w="20%" />
            <Image src="/assets/showcase/image3.jpg" w="20%" />
            <Image src="/assets/showcase/image0.jpg" w="20%" />
            <Image src="/assets/showcase/image4.jpg" w="20%" />
            <Image src="/assets/showcase/image5.jpg" w="20%" />
            <Image src="/assets/showcase/image6.jpg" w="20%" />
        </HStack>
    );
}

function TempShowcase() {
    return <Image src="/assets/showcase-banner.png" />;
}

export default function CustomerSection() {
    return (
        <Box
            as="section"
            py="100"
            bg="#fafafa"
            borderTop="1px solid #eaeaea"
            borderBottom="1px solid #eaeaea"
        >
            <Heading textAlign="center" fontSize="32px">
                Who’s Using Next.js
            </Heading>
            <Text mt="16px" textAlign="center" color="#696969">
                We’re honored some of the most talented creatives out there
                build with Next.js
            </Text>

            <TempShowcase />
            <Flex justifyContent="center">
                <Button
                    mt="32px"
                    px="56px"
                    h="44px"
                    color="white"
                    bg="#0070f3"
                    _hover={{ background: 'rgba(0,118,255,0.9)' }}
                    boxShadow="0 6px 20px rgb(0 118 255 / 23%)"
                >
                    View Showcase
                </Button>
            </Flex>
        </Box>
    );
}
