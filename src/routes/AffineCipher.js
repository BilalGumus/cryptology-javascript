import React, { useState } from 'react'
import { Heading, Text, Stack, VStack, Editable, EditableInput, EditablePreview, Grid, GridItem } from '@chakra-ui/react'
import { affineEncrypt, affineDecrypt, cipherAlphabet } from '../algorithms/affinecipher';
import ShiftKey from '../components/widgets/ShiftKey';
import CustomSlider from '../components/widgets/CustomSlider';
import PreviewAlphabet from '../components/widgets/PreviewAlphabet';

const alphabet = ["A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z"];

function AffineCipher() {
    const [text, setText] = useState("");
    const [inputFromPlain, setInputFromPlain] = useState(true);
    const [KEY_1, setKEY1] = useState(3);
    const [KEY_2, setKEY2] = useState(5);
    const convertedAlphabet = cipherAlphabet(alphabet, KEY_1, KEY_2);

    let plainText, cipherText = "";

    if (inputFromPlain) {
        plainText = text;
        cipherText = affineEncrypt(alphabet, plainText, KEY_1, KEY_2);
    } else {
        cipherText = text
        plainText = affineDecrypt(alphabet, cipherText, KEY_1, KEY_2);
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

    return (
        <Stack textAlign={'center'} spacing={{ base: 8, md: 10 }} py={{ base: 16, md: 24 }}>
            <Heading as="h1" size="3xl" >
                <Text as={'span'} position={'relative'} _after={{ content: "''", width: 'full', height: '30%', position: 'absolute', bottom: 1, left: 0, bg: 'orange.400', zIndex: -1, }}>Affine</Text> Cipher
            </Heading>
            <Grid templateColumns={{ base: "auto", md: '2fr 1fr 2fr' }} gap={6} alignItems={"center"} py={{ base: 12, md: 16 }}>
                <GridItem>
                    <Editable value={plainText} onChange={handlePlainText} placeholder='PLAIN TEXT' outline={"1px dashed"} outlineOffset={"-1px"} bg={"gray.50"} p={{ base: 5, md: 12 }} fontWeight={500} fontSize={"3xl"}>
                        <EditablePreview minW={"100%"} />
                        <EditableInput _focus={{ border: "none" }} />
                    </Editable>
                </GridItem>
                <GridItem>
                    <VStack>
                        <ShiftKey setInputFromPlain={setInputFromPlain} defaultValue={KEY_1} KEY={KEY_1} setKEY={setKEY1} />
                        <ShiftKey setInputFromPlain={setInputFromPlain} defaultValue={KEY_2} KEY={KEY_2} setKEY={setKEY2} />
                    </VStack>
                </GridItem>
                <GridItem>
                    <Editable value={cipherText} onChange={handleCipherText} placeholder='CIPHER TEXT' outline={"1px dashed"} outlineOffset={"-1px"} bg={"gray.50"} p={{ base: 5, md: 12 }} fontWeight={500} fontSize={"3xl"}>
                        <EditablePreview minW={"100%"} />
                        <EditableInput _focus={{ border: "none" }} />
                    </Editable>
                </GridItem>
            </Grid>
            <Heading as={'h3'} fontSize={'2xl'}> Shift Result</Heading>
            <CustomSlider KEY={KEY_1} setKEY={setKEY1} />
            <CustomSlider KEY={KEY_2} setKEY={setKEY2} />
            <PreviewAlphabet alphabet={alphabet} convertedAlphabet={convertedAlphabet}/>
        </Stack>
    )
}

export default AffineCipher