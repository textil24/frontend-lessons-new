import { Box, Button } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react"
import { FC, useState } from "react";
import { TriangleUpIcon, RepeatClockIcon } from '@chakra-ui/icons'

interface IMonaco {
    code: string[]
}

const Monaco: FC<IMonaco> = ({ code }) => {

    const [codeStringElements, setCodeStringElements] = useState(code)
    const [fileIndex, setFileIndex] = useState(0)

    const handleEditorChange = (newValue: any) => {
        setCodeStringElements((prevArray: any) => {
            const newArray = [...prevArray]
            newArray[fileIndex] = newValue
            return newArray
        })
    }

    const handleRunClick = () => {
        console.log(codeStringElements[fileIndex])
    }

    const handleResetClick = () => {
        setCodeStringElements((prevArray: any) => {
            const newArray = [...prevArray]
            newArray[fileIndex] = code[fileIndex]
            return newArray
        })
    }

    return (
        <Box>
            <Box
                display={"flex"}
                alignItems={"center"}
                borderTopRadius={"5px"}
                bgColor={"#1e1e1e"}
                overflow={"hidden"}
            >
                <Box
                    fontWeight={"500"}
                    fontSize={"14px"}
                    padding={"8px"}
                    bgColor={"#292b34"}
                    cursor={"pointer"}
                    color={"white"}
                    onClick={() => setFileIndex(0)}>
                    <span style={{ backgroundColor: "white", color: "#1a202c", padding: "1px 3px" }}>JS</span> script.js
                </Box>
            </Box>
            <Editor
                value={codeStringElements[fileIndex]}
                onChange={handleEditorChange}
                height="40vh"
                width="100%"
                theme={"vs-dark"}
                className="monaco-editor-wrapper__default"
                defaultLanguage={"python"}
            />
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                borderTop={"1px solid #2d3748"}
                bgColor={"#1e1e1e"}
                padding={"8px"}
                borderBottomRadius={"5px"}
            >
                <Button
                    rightIcon={<TriangleUpIcon transform={"rotate(90deg)"} />}
                    bgColor={"#292b34"}
                    color={"white"}
                    size='sm'
                    _hover={{
                        backgroundColor: "#373B4A"
                    }}
                    onClick={handleRunClick}>
                    Выполнить
                </Button>
                <Button
                    leftIcon={<RepeatClockIcon />}
                    bgColor={"#1e1e1e"}
                    color={"#f1b2a6"}
                    size='sm'
                    onClick={handleResetClick}
                    _hover={{
                        backgroundColor: "#282C3D"
                    }}
                >
                    Сбросить
                </Button>
            </Box>
        </Box>
    )
}

export default Monaco