import { CheckIcon, CopyIcon } from '@chakra-ui/icons';
import { Box, Button, useColorModeValue } from '@chakra-ui/react';
import { FC, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface IPrism {
    code: string
}

const Prism: FC<IPrism> = ({ code }) => {
    const [copy, setCopy] = useState(false)

    const style = useColorModeValue(atomOneLight, atomOneDark)
    const borderColor = useColorModeValue('#DEE2E7', '#2E3650')
    const bgColor = useColorModeValue('#EBEEF0', '#1A223F')
    const color = useColorModeValue('#7c8293', 'white')

    return (
        <Box position={'relative'} overflow={"hidden"}>
            {copy ? (
                <Button
                    top={"6px"}
                    right={"6px"}
                    position={'absolute'}
                    bgColor={bgColor}
                    color={color}
                    leftIcon={<CheckIcon />}
                    size='xs'>
                    Copied!
                </Button>
            ) : (
                <Button
                    onClick={() => {
                        navigator.clipboard.writeText(code)
                        setCopy(true)
                        setTimeout(() => {
                            setCopy(false)
                        }, 3000)
                    }}
                    top={"6px"}
                    right={"6px"}
                    position={'absolute'}
                    bgColor={bgColor}
                    color={color}
                    leftIcon={<CopyIcon />}
                    size='xs'>
                    Copy
                </Button>
            )}
            <SyntaxHighlighter
                language="javascript"
                style={style}
                customStyle={{
                    padding: "25px 20px",
                    border: `1px solid ${borderColor}`
                }}
                wrapLongLines={true}
            >
                {code}
            </SyntaxHighlighter>
        </Box>
    )
}

export default Prism