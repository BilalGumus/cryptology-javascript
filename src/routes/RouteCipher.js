import React, { useState } from 'react'
import { Heading, Text, Stack, Editable, EditableInput, EditablePreview, Grid, GridItem, Button, SimpleGrid, HStack } from '@chakra-ui/react'
import { decryptRouteCipher, encryptRouteCipher } from '../algorithms/route-cipher';
import CustomSlider from '../components/widgets/CustomSlider';
import ShiftKey from '../components/widgets/ShiftKey';
import { ChevronDownIcon } from '../assets/icons/icons'

const alphabet = ["A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z"];

function RouteCipher() {
    const [text, setText] = useState("");
    const [KEY, setKEY] = useState(3);
    const [inputFromPlain, setInputFromPlain] = useState(true);
    let plainText, cipherText = "";

    if (inputFromPlain) {
        plainText = text;
        cipherText = encryptRouteCipher(plainText, alphabet, KEY);
    } else {
        cipherText = text
        plainText = decryptRouteCipher(cipherText, alphabet, KEY)
    }

    const handlePlainText = (e) => {
        if (e === "" || alphabet.indexOf(e.toLocaleUpperCase('tr-TR').slice(-1)) !== -1) {
            setInputFromPlain(true);
            setText(e.toLocaleUpperCase('tr-TR'));
        }
    }

    const handleCipherText = (e) => {
        if (e === "" || alphabet.indexOf(e.toLocaleUpperCase('tr-TR').slice(-1)) !== -1) {
            setInputFromPlain(false);
            setText(e.toLocaleUpperCase('tr-TR'));
        }
    }

    const array2D = (ROW, COLUMN, text) => {
        const arr = [];
        for (let i = 0, j = ROW * COLUMN; i < j; i += COLUMN) {
            let currentDimension = text.split("").slice(i, i + COLUMN);
            arr.push(currentDimension);
        }
        return arr;
    }

    return (
        <Stack textAlign={'center'} spacing={{ base: 8, md: 10 }} py={{ base: 16, md: 24 }}>
            <Heading as="h1" size="3xl" >
                <Text as={'span'} position={'relative'} _after={{ content: "''", width: 'full', height: '30%', position: 'absolute', bottom: 1, left: 0, bg: 'orange.400', zIndex: -1, }}>Route</Text> Cipher
            </Heading>
            <HStack justifyContent={"center"}>
                <Button isDisabled rightIcon={<ChevronDownIcon boxSize={5} />}>Spiral</Button>
                <Button isDisabled rightIcon={<ChevronDownIcon boxSize={5} />}>Inward From Bottom-Left, Clockwise</Button>
            </HStack>
            <Grid templateColumns={{ base: "auto", md: '2fr 1fr 2fr' }} gap={6} alignItems={"center"} py={{ base: 12, md: 16 }}>
                <GridItem>
                    <Editable value={plainText} onChange={handlePlainText} placeholder='PLAIN TEXT' outline={"1px dashed"} outlineOffset={"-1px"} bg={"gray.50"} p={{ base: 5, md: 12 }} fontWeight={500} fontSize={"3xl"}>
                        <EditablePreview minW={"100%"} />
                        <EditableInput _focus={{ border: "none" }} />
                    </Editable>
                </GridItem>
                <GridItem>
                    <ShiftKey min={1} defaultValue={KEY} KEY={KEY} setKEY={setKEY} text="Row" />
                </GridItem>
                <GridItem>
                    <Editable value={cipherText} onChange={handleCipherText} placeholder='CIPHER TEXT' outline={"1px dashed"} outlineOffset={"-1px"} bg={"gray.50"} p={{ base: 5, md: 12 }} fontWeight={500} fontSize={"3xl"}>
                        <EditablePreview minW={"100%"} />
                        <EditableInput _focus={{ border: "none" }} />
                    </Editable>
                </GridItem>
            </Grid>
            <Heading as={'h3'} fontSize={'2xl'}>Shift Result</Heading>
            <CustomSlider KEY={KEY} setKEY={setKEY} min={1} />
            <SimpleGrid templateColumns={{ base: "auto", md: "1fr 1fr" }} justifyContent={"center"}>
                <GridItem>
                    <SimpleGrid templateColumns={{ base: "auto", md: "auto ".repeat(Math.ceil(plainText.length / KEY)) }} justifyContent={"center"} gap={2}>
                        {array2D(KEY, Math.ceil(plainText.length / KEY), plainText).map((row) => {
                            return (row.map((element, index) => {
                                return (
                                    <Button outline={"1px dashed"} outlineOffset={"-1px"} rounded={'full'} align={'center'} width={"10"} height={"10"} key={Math.floor(Math.random() * 100000)}>
                                        {element}
                                    </Button>
                                )
                            }))
                        })}
                    </SimpleGrid>
                </GridItem>
                <GridItem>
                    <SimpleGrid templateColumns={{ base: "auto", md: "auto ".repeat(Math.ceil(plainText.length / KEY)) }} justifyContent={"center"} gap={2}>
                        {array2D(KEY, Math.ceil(plainText.length / KEY), cipherText).map((row) => {
                            return (row.map((element, index) => {
                                return (
                                    <Button outline={"1px dashed"} outlineOffset={"-1px"} rounded={'full'} align={'center'} width={"10"} height={"10"} key={Math.floor(Math.random() * 100000)}>
                                        {element}
                                    </Button>
                                )
                            }))
                        })}
                    </SimpleGrid>
                </GridItem>
            </SimpleGrid>
        </Stack>
    )
}

export default RouteCipher