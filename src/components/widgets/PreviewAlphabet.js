import React from 'react'
import { Flex, Button, VStack } from '@chakra-ui/react'
import { ChevronDoubleDownIcon } from '../../assets/icons/icons';

function PreviewAlphabet({ alphabet, convertedAlphabet }) {
    return (
        <Flex justifyContent={"space-between"} display={{ base: "none", xl: "flex" }}>
            {alphabet.map((value, index) => {
                return (
                    <VStack key={index}>
                        <Button bg={"white"} outline={"1px dashed"} outlineOffset={"-1px"} width={"10"} height={"10"} rounded={'full'} align={'center'} key={Math.floor(Math.random() * 100000)}>
                            {value}
                        </Button>
                        <ChevronDoubleDownIcon key={Math.floor(Math.random() * 100000)} />
                        <Button outline={"1px dashed"} outlineOffset={"-1px"} rounded={'full'} align={'center'} width={"10"} height={"10"} key={Math.floor(Math.random() * 100000)}>
                            {convertedAlphabet[index]}
                        </Button>
                    </VStack>
                )
            })}
        </Flex>
    )
}

export default PreviewAlphabet