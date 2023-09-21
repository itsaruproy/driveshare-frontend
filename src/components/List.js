import React from 'react'
import { connect } from 'react-redux'
import { deleteTarget } from '../actions'
import { Box, Text, Button, HStack } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/toast'

const List = props => {
    const toast = useToast()

    const onClickHandler = (linkID, _id) => {
        props
            .deleteTarget(linkID, _id)
            .then(() => {
                toast({
                    title: 'Access Revoked Successfully',
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                })
            })
            .catch(() => {
                toast({
                    title: 'Failed to remove target',
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                })
            })
    }

    const copyLink = () => {
        navigator.clipboard.writeText(
            `${window.location.origin}/upload/${props.linkID}`
        )
        toast({
            title: 'Link copied to Clipboard',
            status: 'success',
            duration: 2000,
            isClosable: true,
        })
    }

    /*
    const onRevokeHandler = () => {
        toast({
            title: 'Access Revoked Successfully',
            status: 'success',
            duration: 2000,
            isClosable: true,
        })
    }*/

    return (
        <Box p="16px" w={'320px'} bg="gray.50" shadow={'lg'} rounded={'md'}>
            <Text fontWeight={'semibold'} mb={'10px'}>
                {props.targetName}
            </Text>
            <HStack justifyContent={'center'}>
                <Button
                    onClick={() => onClickHandler(props.linkID, props._id)}
                    colorScheme={'red'}
                >
                    Revoke Access
                </Button>
                <Button onClick={copyLink} colorScheme={'teal'}>
                    Copy Link
                </Button>
            </HStack>
        </Box>
    )
}

export default connect(null, { deleteTarget })(List)
