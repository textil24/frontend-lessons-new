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
        <Box display={"flex"} flexDirection={"column"}>
            <svg style={{alignSelf: "flex-end"}} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M5 5v22h22V5H5zm2 2h18v18H7V7zm13.244 8c-1.425 0-2.346.912-2.346 2.12c0 1.31.77 1.937 1.928 2.43l.4.173c.733.323 1.169.511 1.169 1.062c0 .465-.427.799-1.092.799c-.788 0-1.236-.418-1.578-.979l-1.31.75c.464.931 1.433 1.645 2.925 1.645c1.52 0 2.66-.788 2.66-2.232c0-1.35-.77-1.949-2.139-2.528l-.398-.172c-.693-.304-.988-.503-.988-.978c0-.39.294-.694.77-.694c.465 0 .758.2 1.034.694l1.256-.807c-.532-.93-1.265-1.283-2.29-1.283zm-5.85.096v5.463c0 .798-.342 1.005-.865 1.005c-.55 0-.788-.379-1.035-.826l-1.31.79c.38.807 1.129 1.472 2.412 1.472C15.02 23 16 22.24 16 20.576v-5.48h-1.605z" /></svg>
            <Box border={"1px solid #2E3650"} borderRadius={"5px"}>
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
                        script.js
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
                    mt={"-1px"}
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
        </Box>
    )
}

export default Monaco