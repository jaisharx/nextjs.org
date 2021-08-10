import { Box, Button, Grid, Heading, Input, VStack } from '@chakra-ui/react';
import Container from '../container';

export default function CTASection() {
    return (
        <Box as="section" py="100px">
            <Container>
                <Grid templateColumns="1fr .8fr" my="32px">
                    <VStack>
                        <Heading fontSize="32px" mb="12px">
                            Next.js is getting better every day — don’t miss out
                            on all the action.
                        </Heading>
                        <Heading
                            fontSize="16px"
                            fontWeight="normal"
                            lineHeight="1.8"
                            pr="12"
                        >
                            Join the Next.js newsletter and stay updated on new
                            releases and features, guides, and case studies.
                        </Heading>
                    </VStack>

                    <VStack
                        justifySelf="flex-end"
                        alignItems="stretch"
                        justifyContent="center"
                    >
                        <Input
                            w="60"
                            placeholder="you@domain.com"
                            borderWidth="1px"
                            borderColor="#999"
                        />
                        <Button
                            mt="32px"
                            px="56px"
                            h="45px"
                            color="white"
                            bg="#000"
                        >
                            Subscribe
                        </Button>{' '}
                    </VStack>
                </Grid>
            </Container>
        </Box>
    );
}
