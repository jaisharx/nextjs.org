import { Box, Heading, Text, Flex, Image, Button } from '@chakra-ui/react'
import Container from '../container'

export default function LearnSection() {
  return (
    <Box as="section" py="100px" px="16px">
      <Container>
        <Heading textAlign="center" fontSize="32px">
          Learn Next.js
        </Heading>
        <Text mt="16px" textAlign="center" color="#696969">
          Learn Next.js step-by-step and earn points ✨.
        </Text>
        <Image
          src="/assets/learn.jpg"
          my="60px"
          boxShadow="0 8px 30px rgb(0 0 0 / 12%)"
        />
        <Flex justifyContent="center">
          <Button
            px="56px"
            h="44px"
            color="white"
            bg="#0070f3"
            _hover={{ background: 'rgba(0,118,255,0.9)' }}
            boxShadow="0 6px 20px rgb(0 118 255 / 23%)"
          >
            Get Started
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}
