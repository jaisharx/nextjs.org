import { Box, Grid, Heading, Text, VStack, Image } from '@chakra-ui/react';
import Container from './container';

function FooterLinks({ title, children }) {
    return (
        <VStack alignItems="flex-start">
            <Heading fontSize="14px" fontWeight="500" mb="2">
                {title}
            </Heading>
            {children.map((item) => (
                <Text color="#8c8c8c" fontSize="14px">
                    {item}
                </Text>
            ))}
        </VStack>
    );
}

export default function Footer() {
    return (
        <Box as="footer" pt="32px" pb="64px" bg="#FAFAFA" borderTop="1px solid #eaeaea">
            <Container>
                <Grid templateColumns="repeat(4, 1fr)">
                    <FooterLinks title="General resources">
                        {[
                            'Docs',
                            'Learn',
                            'Showcase',
                            'Blog',
                            'Analytics',
                            'Next.js Conf',
                        ]}
                    </FooterLinks>
                    <FooterLinks title="More">
                        {[
                            'Commerce',
                            'Contact Sales',
                            'Github',
                            'Releases',
                            'Telemetry',
                        ]}
                    </FooterLinks>
                    <FooterLinks title="About Vercel">
                        {['Open Source Software', 'Github', 'Twitter']}
                    </FooterLinks>
                    <FooterLinks title="Legal">
                        {['Privacy Policy']}
                    </FooterLinks>
                </Grid>
                <Image src="/vercel.svg" mt="45" w="10%" />
                <Text color="#8c8c8c" fontSize="12px" mt="3">
                    Copyright © 2021 Vercel, Inc. All rights reserved.
                </Text>
            </Container>
        </Box>
    );
}
