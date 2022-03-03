import React, { useState } from 'react'
import { Heading, Text, Stack, Editable, EditableInput, EditablePreview, Grid, GridItem  } from '@chakra-ui/react'
import { cipherAlphabet, shiftDecrypt, shiftEncrypt } from '../algorithms/shiftcipher';
import ShiftKey from '../components/widgets/ShiftKey';
import CustomSlider from '../components/widgets/CustomSlider';
import PreviewAlphabet from '../components/widgets/PreviewAlphabet';

const alphabet = ["A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z"];

function CaesarCipher() {
    const KEY = 3;
    const convertedAlphabet = cipherAlphabet(alphabet, KEY);
    const [text, setText] = useState("");
    const [inputFromPlain, setInputFromPlain] = useState(true);
    let plainText, cipherText = "";

    if (inputFromPlain) {
        plainText = text;
        cipherText = shiftEncrypt(alphabet, plainText, KEY);
    } else {
        cipherText = text
        plainText = shiftDecrypt(alphabet, cipherText, KEY)
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
                <Text as={'span'} position={'relative'} _after={{ content: "''", width: 'full', height: '30%', position: 'absolute', bottom: 1, left: 0, bg: 'orange.400', zIndex: -1, }}>Caesar</Text> Cipher
            </Heading>
            <Grid templateColumns={{ base: "auto", md: '2fr 1fr 2fr' }} gap={6} alignItems={"center"} py={{ base: 12, md: 16 }}>
                <GridItem>
                    <Editable value={plainText} onChange={handlePlainText} placeholder='PLAIN TEXT' outline={"1px dashed"} outlineOffset={"-1px"} bg={"gray.50"} p={{ base: 5, md: 12 }} fontWeight={500} fontSize={"3xl"}>
                        <EditablePreview minW={"100%"} />
                        <EditableInput _focus={{ border: "none" }} />
                    </Editable>
                </GridItem>
                <GridItem>
                    <ShiftKey setInputFromPlain={setInputFromPlain} defaultValue={KEY} KEY={KEY} isDisabled />
                </GridItem>
                <GridItem>
                    <Editable value={cipherText} onChange={handleCipherText} placeholder='CIPHER TEXT' outline={"1px dashed"} outlineOffset={"-1px"} bg={"gray.50"} p={{ base: 5, md: 12 }} fontWeight={500} fontSize={"3xl"}>
                        <EditablePreview minW={"100%"} />
                        <EditableInput _focus={{ border: "none" }} />
                    </Editable>
                </GridItem>
            </Grid>
            <Heading as={'h3'} fontSize={'2xl'}> Shift Result</Heading>
            <CustomSlider KEY={KEY} isDisabled />
            <PreviewAlphabet alphabet={alphabet} convertedAlphabet={convertedAlphabet} />
        </Stack>
    )
}

export default CaesarCipher