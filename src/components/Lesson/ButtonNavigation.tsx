import { ArrowBackIcon, ArrowForwardIcon, CheckIcon } from "@chakra-ui/icons"
import { Button, Grid, GridItem } from "@chakra-ui/react"
import { FC } from "react"
import { Link } from "react-router-dom"

interface IButtonNavigation {
    courseId?: string
    prevId: string | null
    nextId: string | null
}

const ButtonNavigation: FC<IButtonNavigation> = ({ courseId, prevId, nextId }) => {
    return (
        <Grid templateColumns='1fr 1fr' mt={6} alignItems={"center"}>
            {prevId ? (
                <GridItem justifySelf={"flex-start"}>
                    <Link to={"/lessons/" + prevId}>
                        <Button>
                            <ArrowBackIcon />
                        </Button>
                    </Link>
                </GridItem >
            ) : (
                <span></span>
            )}
            {nextId ? (
                <GridItem justifySelf={"flex-end"}>
                    <Link to={"/lessons/" + nextId}>
                        <Button>
                            <ArrowForwardIcon />
                        </Button>
                    </Link>
                </GridItem >
            ) : (
                <GridItem justifySelf={"flex-end"}>
                    <Link to={"/courses/" + courseId}>
                        <Button leftIcon={<CheckIcon />} colorScheme='whatsapp'>
                            Завершить
                        </Button>
                    </Link>
                </GridItem >
            )}
        </Grid>
    )
}

export default ButtonNavigation