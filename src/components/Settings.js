import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { SettingsIcon } from '../assets/icons/icons';
import { ChevronDownIcon } from '../assets/icons/icons'
import { IconButton } from '@chakra-ui/react'

function Settings() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <IconButton aria-label='Search database' onClick={onOpen} variant='ghost' rounded={'full'} size={'lg'} icon={<SettingsIcon boxSize={6} />} />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Settings</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    Preset Alphabet: <Button isDisabled rightIcon={<ChevronDownIcon boxSize={5} />}>Turkish Latin</Button>
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Settings