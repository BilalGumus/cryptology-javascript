import React, { useState, useEffect } from 'react'
import { Menu, MenuButton, MenuList, Button, MenuItemOption, MenuOptionGroup, Text } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronDownIcon } from '../assets/icons/icons'

const algorithms = [
    { value: "caesar-cipher", name: "Caesar Cipher" },
    { value: "shift-cipher", name: "Shift Cipher" },
    { value: "affine-cipher", name: "Affine Cipher" },
    { value: "mixed-alphabet-cipher", name: "Mixed Alphabet Cipher" },
    { value: "permutation-cipher", name: "Permutation Cipher" },
    { value: "route-cipher", name: "Route Cipher" }
];

function Picker() {
    const [selectedName, setSelectedName] = useState("Select Algorithm");
    const [selectedValue, setSelectedValue] = useState("Select Algorithm");
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        algorithms.forEach((e) => {
            if (location.pathname === `/${e.value}`) {
                setSelectedName(e.name);
                setSelectedValue(e.value);
            }
        })

        if (location.pathname === "/") {
            setSelectedName("Select Algorithm");
            setSelectedValue("");
        }
    }, [location.pathname])

    const handleChange = (element) => {
        setSelectedName(algorithms.find(e => e.value === element).name);
        setSelectedValue(element);
        navigate(element);
    }

    return (
        <Menu>
            <MenuButton as={Button} variant="ghost" rounded={'xl'} size={'lg'} px={6} rightIcon={<ChevronDownIcon boxSize={5} />}>
                <Text fontSize='md' fontWeight={400}>{selectedName}</Text>
            </MenuButton>
            <MenuList boxShadow={'lg'} rounded={'xl'}>
                <MenuOptionGroup type='radio' value={selectedValue} onChange={handleChange}>
                    {algorithms.map((e) => {
                        return <MenuItemOption key={e.value} value={e.value}>{e.name}</MenuItemOption>
                    })}
                </MenuOptionGroup>
            </MenuList>
        </Menu>
    )
}

export default Picker