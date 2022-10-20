import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import { Box, Button, HStack, Link, Text } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
const NewListButton = () => {
    return (
        <Box>
            <Link
                as={ReactLink}
                to={'/link/create'}
                style={{ textDecoration: 'none' }}
            >
                <Button colorScheme={'teal'}>
                    <HStack gap={'2px'}>
                        <AddIcon w={3} h={3} />
                        <Text>Add new target</Text>
                    </HStack>
                </Button>
            </Link>
        </Box>
    )
}

export default NewListButton
