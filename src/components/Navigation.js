import React from 'react'
import { Flex, Spacer, IconButton } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { HomeIcon } from '../assets/icons/icons'
import Picker from './Picker'
import Settings from './Settings'

function Navigation() {
    return (
        <Flex mt={"4"} gap={2}>
            <Link to="/">
                <IconButton aria-label='Home' variant='ghost' rounded={'full'} size={'lg'} icon={<HomeIcon boxSize={6} />} />
            </Link>
            <Spacer />
            <Picker />
            <Settings />
        </Flex>
    )
}

export default Navigation