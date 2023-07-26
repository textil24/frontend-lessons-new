import { Box, Button, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"

const Error = () => {
    return (
        <Modal isCentered={true} size={"sm"} isOpen={true} onClose={() => {}}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Ошибка</ModalHeader>
                <ModalBody>
                    Произошла ошибка. <br />
                    Повторите попытку позже.
                </ModalBody>

                <ModalFooter display={"flex"} justifyContent={"center"}>
                    <Button colorScheme='blue' mr={3}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default Error