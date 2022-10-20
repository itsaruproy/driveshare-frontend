import React from 'react'
import {
    HStack,
    Box,
    Heading,
    Text,
    Button,
    Link as ChakraLink,
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

const Features = props => {
    return (
        <HStack>
            <CheckCircleIcon />
            <Text>{props.children}</Text>
        </HStack>
    )
}

const Guest = () => {
    return (
        <Box
            w={'full'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            gap={'12px'}
        >
            <Heading>Welcome to DriveShare</Heading>
            <Box mt={'10'} display={'flex'} flexDirection={'column'}>
                <Features>
                    Give access to specific folders of your drive without
                    sharing your drive
                </Features>
                <Features>
                    You get an unique link of your upload target from the app,
                    people can upload directly by visiting that link
                </Features>
                <Features>
                    You can revoke the access of you Google Drive folder sharing
                    anytime just in one click
                </Features>
            </Box>
            <Box>
                <ChakraLink
                    href="#"
                    isExternal
                    style={{ textDecoration: 'none' }}
                >
                    <Button colorScheme={'purple'}>Demo Video</Button>
                </ChakraLink>
            </Box>
        </Box>
    )
}

export default Guest
