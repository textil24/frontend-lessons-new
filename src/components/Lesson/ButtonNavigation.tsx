import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { Button, Grid, GridItem } from "@chakra-ui/react"
import { FC } from "react"
import { Link } from "react-router-dom"

interface IButtonNavigation {
    prevId: string | null
    nextId: string | null
}

const ButtonNavigation: FC<IButtonNavigation> = ({ prevId, nextId }) => {
    return (
        <Grid templateColumns='1fr 1fr' mt={6} alignItems={"center"}>
            {prevId ? (
                <GridItem justifySelf={"flex-start"}>
                    <Link to={"/lessons/" + prevId}>
                        <Button leftIcon={<ArrowBackIcon />} colorScheme='gray'>
                            Предыдущий
                        </Button>
                    </Link>
                </GridItem >
            ) : (
                <span></span>
            )}
            {nextId ? (
                <GridItem justifySelf={"flex-end"}>
                    <Link to={"/lessons/" + nextId}>
                        <Button rightIcon={<ArrowForwardIcon />} colorScheme='gray'>
                            Следующий
                        </Button>
                    </Link>
                </GridItem >
            ) : (
                <span></span>
            )}
        </Grid>
    )
}

export default ButtonNavigation