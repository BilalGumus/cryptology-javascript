import React from 'react'
import { Heading, Text, Stack, Button, Flex} from '@chakra-ui/react'
import { GitHubIcon } from '../assets/icons/icons'
import { Link } from 'react-router-dom'

const algorithms = [
    { value: "caesar-cipher", name: "Caesar Cipher" },
    { value: "shift-cipher", name: "Shift Cipher" },
    { value: "affine-cipher", name: "Affine Cipher" }
];

function Home() {
    return (
        <>
            <Stack textAlign={'center'} align={'center'} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
                <Heading as='h1' size='2xl'>
                    Welcome To <Text as={'span'} color={'orange.400'}>Cryptology</Text> Wiki 🔑
                </Heading>
                <Text color={'gray.500'} maxW={'3xl'}>
                    This is a simple cryptology website that you can encrypt &amp; decrypt your texts with available ciphers and algorithms. Other algorithms will come over time.
                </Text>
                <Button as={"a"} href='https://github.com/BilalGumus' target={"_blank"} rightIcon={<GitHubIcon boxSize={7} />} rounded={'full'} size={'lg'} fontWeight={'normal'} px={6} colorScheme={'orange'} bg={'orange.400'} _hover={{ bg: 'orange.500' }}>
                    Find My
                </Button>
            </Stack >
            <Stack align={'center'} spacing={{ base: 8, md: 10 }}>
                <Heading as={'h3'} fontSize={'2xl'}>
                    Available Algorithms
                </Heading>
                <Flex justifyContent={"center"} flexWrap={"wrap"} gap={8}>
                    {algorithms.map((e) => {
                        return (
                            <Link key={e.value} to={e.value}>
                                <Button fontSize={'xl'} bg={'white'} boxShadow={'lg'} p={8} rounded={'xl'} align={'center'}>
                                    {e.name}
                                </Button>
                            </Link>
                        )
                    })}
                </Flex>
            </Stack>
        </>
    )
}

export default Home