import React from 'react'
import { Input, IconButton, Text, HStack, VStack, useNumberInput } from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '../../assets/icons/icons'

function ShiftKey({ KEY, setKEY, isDisabled, text, step, defaultValue, min, max }) {
    const keyChangeHandler = (valueAsString, valueAsNumber) => { setKEY(valueAsNumber) };
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({ value: KEY, step: step, defaultValue: defaultValue, min: min, max: max, onChange: keyChangeHandler });
    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps({ isReadOnly: true })

    return (
        <VStack>
            <Text>{text}</Text>
            <HStack justifyContent={"center"} >
                <IconButton isDisabled={isDisabled} {...!isDisabled && { ...dec }} aria-label='Decrease Shift' rounded={'full'} size={'md'} icon={<ChevronDownIcon boxSize={4} />} />
                <Input {...input} width={"40px"} textAlign={"center"} p={0} />
                <IconButton isDisabled={isDisabled} {...!isDisabled && { ...inc }} aria-label='Increase Shift' rounded={'full'} size={'md'} icon={<ChevronUpIcon boxSize={4} />} />
            </HStack>
        </VStack>
    )
}

ShiftKey.defaultProps = {
    step: 1,
    defaultValue: 3,
    min: 0,
    max: 29
}

export default ShiftKey