import React, { useState } from 'react'
import { Heading, Text, Stack, Editable, EditableInput, EditablePreview, Grid, GridItem, Button } from '@chakra-ui/react'
import PreviewAlphabet from '../components/widgets/PreviewAlphabet';
import { mixedAlphabetDecrypt, mixedAlphabetEncrypt } from '../algorithms/mixed-alphabetcipher';
import { fisherYatesShuffle } from '../algorithms/other/fisher-yates-shuffle';
import { ShuffleIcon } from '../assets/icons/icons';

const alphabet = ["A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z"];

function MixedAlphabetCipher() {
    const [mixedAlphabet, setMixedAlphabet] = useState(fisherYatesShuffle(alphabet));
    const [text, setText] = useState("");
    const [inputFromPlain, setInputFromPlain] = useState(true);
    let plainText, cipherText = "";

    if (inputFromPlain) {
        plainText = text;
        cipherText = mixedAlphabetEncrypt(alphabet, mixedAlphabet, plainText);
    } else {
        cipherText = text
        plainText = mixedAlphabetDecrypt(alphabet, mixedAlphabet, cipherText)
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

    const handleShuffleAlphabet = () => {
        setMixedAlphabet(fisherYatesShuffle(alphabet));
    }

    return (
        <Stack textAlign={'center'} spacing={{ base: 8, md: 10 }} py={{ base: 16, md: 24 }}>
            <Heading as="h1" size="3xl" >
                <Text as={'span'} position={'relative'} _after={{ content: "''", width: 'full', height: '30%', position: 'absolute', bottom: 1, left: 0, bg: 'orange.400', zIndex: -1, }}>Mixed Alphabet</Text> Cipher
            </Heading>
            <Grid templateColumns={{ base: "auto", md: '2fr 1fr 2fr' }} gap={6} alignItems={"center"} py={{ base: 12, md: 16 }}>
                <GridItem>
                    <Editable value={plainText} onChange={handlePlainText} placeholder='PLAIN TEXT' outline={"1px dashed"} outlineOffset={"-1px"} bg={"gray.50"} p={{ base: 5, md: 12 }} fontWeight={500} fontSize={"3xl"}>
                        <EditablePreview minW={"100%"} />
                        <EditableInput _focus={{ border: "none" }} />
                    </Editable>
                </GridItem>
                <GridItem>
                    <Button onClick={handleShuffleAlphabet} rightIcon={<ShuffleIcon boxSize={5} />} rounded={'full'} fontWeight={'normal'} px={6}>Shuffle Alphabet</Button>
                </GridItem>
                <GridItem>
                    <Editable value={cipherText} onChange={handleCipherText} placeholder='CIPHER TEXT' outline={"1px dashed"} outlineOffset={"-1px"} bg={"gray.50"} p={{ base: 5, md: 12 }} fontWeight={500} fontSize={"3xl"}>
                        <EditablePreview minW={"100%"} />
                        <EditableInput _focus={{ border: "none" }} />
                    </Editable>
                </GridItem>
            </Grid>
            <Heading as={'h3'} fontSize={'2xl'}>Shift Result</Heading>
            <PreviewAlphabet alphabet={alphabet} convertedAlphabet={mixedAlphabet} />
        </Stack>
    )
}

export default MixedAlphabetCipher