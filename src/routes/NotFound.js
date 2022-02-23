import { Container, Stack, Flex, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <Flex align={'center'} justify={'center'} h={'calc(100vh - 64px)'} w={'full'}>
            <Stack as={Container} rounded={'xl'} p={8} spacing={6} maxW={'lg'} align={'center'} textAlign={'center'} marginBottom={"10%"}>
                <Stack spacing={2}>
                    <Heading>404 Page not found</Heading>
                    <Text>
                        This page was not found. You may have mistyped the address or the
                        page may have moved.
                    </Text>
                </Stack>
                <Flex>
                    <Link to="/">
                        <Button colorScheme={'orange'} rounded={'full'} bg={'orange.400'} _hover={{ bg: 'orange.500' }}>
                            Go Home
                        </Button>
                    </Link>
                </Flex>
            </Stack>
        </Flex>
    );
};

export default NotFound;