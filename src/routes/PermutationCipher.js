import React, { useState, useEffect } from 'react'
import { Heading, Text, Stack, Editable, EditableInput, EditablePreview, Grid, GridItem, VStack, HStack, VisuallyHidden, PinInput, PinInputField, Box } from '@chakra-ui/react'
import CustomSlider from '../components/widgets/CustomSlider';
import { decryptPermutationCipher, encryptPermutationCipher } from '../algorithms/permutation-cipher';
import ShiftKey from '../components/widgets/ShiftKey';

import { fisherYatesShuffle } from '../algorithms/other/fisher-yates-shuffle';

const alphabet = ["A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z"];
//IMPORTANT: DO BETTER STATE MANAGEMENT
function PermutationCipher() {
    const [CHUNK, setCHUNK] = useState(7);
    const [text, setText] = useState("");
    const [inputFromPlain, setInputFromPlain] = useState(true);
    const [KEY, setKEY] = useState("");
    const [inp, setINP] = useState("");
    const [cipherKEY, setCipherKEY] = useState([]);
    const [x, setX] = useState(true);
    const [editableDisabled, setEditableDisabled] = useState(false);
    let plainText, cipherText = "";
    var regExpText = `^(?:([1-${CHUNK}])(?!.*\\1))*$`;
    const regex = new RegExp(regExpText);

    useEffect(() => {
        setKEY(fisherYatesShuffle(Array.from({ length: CHUNK }, (_, i) => i + 1)).join(""));
        setEditableDisabled(false)
    }, [CHUNK])

    // useEffect(() => {
    //     console.log(CHUNK)
    //     KEY && (KEY.length === CHUNK) ? setEditableDisabled(false) : setEditableDisabled(true)
    // }, [KEY])


    if (inputFromPlain && KEY) {
        plainText = text;
        cipherText = encryptPermutationCipher(alphabet, plainText, KEY.split(""));
    }

    if (!inputFromPlain && KEY) {
        cipherText = text
        plainText = decryptPermutationCipher(alphabet, cipherText, KEY.split(""))
    }

    const handlePlainText = (e) => {
        //IMPORTANT ISSUE IN EVERY CODE FIX IT: DOESN'T WORK WHEN TRY TO WRITE MIDDLE (ONLY CHECKING LAT ELEMENT): USE REGEX
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

    const handlePinInputChange = async (e) => {
        if (!regex.test(e)) {
            setX(false);
            return;
        }
    
        setX(true);
        setKEY(e);
        (e && (e.length === CHUNK)) ? setEditableDisabled(false) : setEditableDisabled(true)
    }

    const inpHandler = (e) => {
        console.log(e.target.value)
    }
    return (
        <Stack textAlign={'center'} spacing={{ base: 8, md: 10 }} py={{ base: 16, md: 24 }}>
            <Heading as="h1" size="3xl" >
                <Text as={'span'} position={'relative'} _after={{ content: "''", width: 'full', height: '30%', position: 'absolute', bottom: 1, left: 0, bg: 'orange.400', zIndex: -1, }}>Permutation</Text> Cipher
            </Heading>
            <Grid templateColumns={{ base: "auto", md: '2fr 1fr 2fr' }} gap={6} alignItems={"center"} py={{ base: 12, md: 16 }}>
                <GridItem>
                    <Editable isDisabled={editableDisabled} value={plainText} onChange={handlePlainText} placeholder='PLAIN TEXT' outline={"1px dashed"} outlineOffset={"-1px"} bg={"gray.50"} p={{ base: 5, md: 12 }} fontWeight={500} fontSize={"3xl"}>
                        <EditablePreview minW={"100%"} />
                        <EditableInput _focus={{ border: "none" }} />
                    </Editable>
                </GridItem>
                <GridItem>
                    <VStack>
                        <ShiftKey min={1} max={9} defaultValue={CHUNK} KEY={CHUNK} setKEY={setCHUNK} />
                        <VisuallyHidden>
                            {/* <Input type={"number"} htmlSize={2} width='auto' value={customKey} onChange={customKeyChangeHandler} max={CHUNK} /> */}
                        </VisuallyHidden>
                    </VStack>
                </GridItem>
                <GridItem>
                    <Editable isDisabled={editableDisabled} value={cipherText} onChange={handleCipherText} placeholder='CIPHER TEXT' outline={"1px dashed"} outlineOffset={"-1px"} bg={"gray.50"} p={{ base: 5, md: 12 }} fontWeight={500} fontSize={"3xl"}>
                        <EditablePreview minW={"100%"} />
                        <EditableInput _focus={{ border: "none" }} />
                    </Editable>
                </GridItem>
            </Grid>
            <Box display={"flex"} justifyContent={"center"}>
                <HStack>
                    <PinInput type="number" onChange={handlePinInputChange} value={KEY} errorBorderColor="red.500" manageFocus={x} isInvalid={!x}>
                        {[...Array(CHUNK)].map((e, i) => { return <PinInputField key={i}></PinInputField> })}
                    </PinInput>
                </HStack>
            </Box>
            <Heading as={'h3'} fontSize={'2xl'}>Shift Result</Heading>
            <CustomSlider KEY={CHUNK} setKEY={setCHUNK} min={1} max={9} />
        </Stack>
    )
}

export default PermutationCipher



/*

import React, { useState, useEffect } from 'react'
import { Heading, Text, Stack, Editable, EditableInput, EditablePreview, Grid, GridItem, Button, VStack, HStack, VisuallyHidden, PinInput, PinInputField } from '@chakra-ui/react'
import CustomSlider from '../components/widgets/CustomSlider';
import { fisherYatesShuffle } from '../algorithms/other/fisher-yates-shuffle';
import { ShuffleIcon } from '../assets/icons/icons';
import { decryptPermutationCipher, encryptPermutationCipher } from '../algorithms/permutation-cipher';
import ShiftKey from '../components/widgets/ShiftKey';

const alphabet = ["A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z"];

function PermutationCipher() {
    const [CHUNK, setCHUNK] = useState(7);
    const [cipherKEY, setCipherKEY] = useState(fisherYatesShuffle(Array.from({ length: CHUNK }, (_, i) => i + 1)));
    const [text, setText] = useState("");
    const [KEY, setKEY] = useState("");
    const [inputFromPlain, setInputFromPlain] = useState(true);
    let plainText, cipherText = "";

    useEffect(() => {
        setCipherKEY(fisherYatesShuffle(Array.from({ length: CHUNK }, (_, i) => i + 1)));
        return () => { }
    }, [CHUNK])

    useEffect(() => {
        console.log(cipherKEY, "changed");
        setKEY(cipherKEY.join(""))
    }, [cipherKEY])


    if (inputFromPlain) {
        plainText = text;
        cipherText = encryptPermutationCipher(alphabet, plainText, KEY);
    } else {
        cipherText = text
        plainText = decryptPermutationCipher(alphabet, cipherText, KEY)
    }

    const handlePlainText = (e) => {
        //IMPORTANT ISSUE IN EVERY CODE FIX IT: DOESN'T WORK WHEN TRY TO WRITE MIDDLE (ONLY CHECKING LAT ELEMENT)
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
        setCipherKEY(fisherYatesShuffle(Array.from({ length: CHUNK }, (_, i) => i + 1)));
    }

    const pinInputChangeHandler = (e) => {
        // const inputArray = Array.from(String(e), Number);
        setKEY(e)
        //setKEY([...new Set(String(e))].join(""))
        // setKEY(parseInt([...new Set(inputArray)].join("")).toString())
    }

    return (
        <Stack textAlign={'center'} spacing={{ base: 8, md: 10 }} py={{ base: 16, md: 24 }}>
            <Heading as="h1" size="3xl" >
                <Text as={'span'} position={'relative'} _after={{ content: "''", width: 'full', height: '30%', position: 'absolute', bottom: 1, left: 0, bg: 'orange.400', zIndex: -1, }}>Permutation</Text> Cipher
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
                        <ShiftKey min={1} defaultValue={CHUNK} KEY={CHUNK} setKEY={setCHUNK} />
                        <Button onClick={handleShuffleAlphabet} rightIcon={<ShuffleIcon boxSize={5} />} rounded={'full'} fontWeight={'normal'} px={6}>Shuffle Key</Button>
                        <VisuallyHidden>
                            // {/* <Input type={"number"} htmlSize={2} width='auto' value={customKey} onChange={customKeyChangeHandler} max={CHUNK} /> /}
                            </VisuallyHidden>
                            </VStack>
                        </GridItem>
                        <GridItem>
                            <Editable value={cipherText} onChange={handleCipherText} placeholder='CIPHER TEXT' outline={"1px dashed"} outlineOffset={"-1px"} bg={"gray.50"} p={{ base: 5, md: 12 }} fontWeight={500} fontSize={"3xl"}>
                                <EditablePreview minW={"100%"} />
                                <EditableInput _focus={{ border: "none" }} />
                            </Editable>
                        </GridItem>
                    </Grid>
                    <HStack>
                        <PinInput type='number' onChange={pinInputChangeHandler} value={KEY}>
                            {[...Array(CHUNK)].map((e, i) => { return <PinInputField key={i} max={7} min={1}></PinInputField> })}
                        </PinInput>
                    </HStack>
                    <Heading as={'h3'} fontSize={'2xl'}>Shift Result</Heading>
                    <CustomSlider KEY={CHUNK} setKEY={setCHUNK} min={1} />
                    <HStack justifyContent={"center"}>
                        {Array.from({ length: CHUNK }, (_, i) => i + 1).map((value, index) => {
                            return (
                                <Button outline={"1px dashed"} outlineOffset={"-1px"} rounded={'full'} align={'center'} width={"10"} height={"10"} key={Math.floor(Math.random() * 100000)}>
                                    {cipherKEY[index]}
                                </Button>
                            )
                        })}
                    </HStack>
                </Stack>
            )
        }
        
        export default PermutationCipher
*/