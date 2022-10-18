import React from 'react'
import { Box, Flex, Text, Button, HStack } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/toast'

const List = () => {
    const toast = useToast()
    const onClickHandler = () => {
        toast({
            title: 'Link copied to Clipboard',
            status: 'success',
            duration: 2000,
            isClosable: true,
        })
    }

    const onRevokeHandler = () => {
        toast({
            title: 'Access Revoked Successfully',
            status: 'success',
            duration: 2000,
            isClosable: true,
        })
    }

    return (
        <Box p="16px" w={'320px'} bg="gray.50" shadow={'lg'} rounded={'md'}>
            <Text mb={'10px'}>The Upload target description</Text>
            <HStack justifyContent={'center'}>
                <Button onClick={onRevokeHandler} colorScheme={'red'}>
                    Revoke Access
                </Button>
                <Button onClick={onClickHandler} colorScheme={'purple'}>
                    Copy Link
                </Button>
            </HStack>
        </Box>
    )
}

const Lists = () => {
    return (
        <Box w={'full'} display="flex" justifyContent={'center'}>
            <Flex gap={'12px'} justifyContent={'center'} direction={'column'}>
                <List />
                <List />
                <List />
                <List />
            </Flex>
        </Box>
    )
}

export default Lists
