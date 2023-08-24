import { Heading, Text, Stack } from "@chakra-ui/react"
import { FC } from "react"

interface ISelectionWrapper {
    name: string
    children: React.ReactNode
}

const SelectionWrapper: FC<ISelectionWrapper> = ({ name, children }) => {
    return (
        <Stack direction={"column"}>
            <Heading display={"flex"} size={"sm"}>
                {name} <Text ml={1} color="red.500">*</Text>
            </Heading>
            {children}
        </Stack>
    )
}

export default SelectionWrapper