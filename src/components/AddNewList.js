import { Box, Button, Heading, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addNewTarget } from '../actions'

const AddNewList = props => {
    const [target, setTarget] = useState('')
    const [folderID, setFolderID] = useState('')

    const onClickHandler = () => {
        if (target === '' || folderID === '') {
            alert('Please provide appropriate information')
            return
        }
        props.addNewTarget(target, folderID)
    }

    return (
        <Box w={'100%'} h={'100%'} display={'flex'} justifyContent={'center'}>
            <Box
                maxW={'50%'}
                h={'100%'}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
            >
                <Heading>Add New Upload Target</Heading>
                <Box
                    mt={'16px'}
                    display={'flex'}
                    flexDirection={'column'}
                    gap={'10px'}
                    alignItems={'center'}
                >
                    <Text fontWeight={'medium'}>Target Name</Text>
                    <Input
                        value={target}
                        onChange={e => setTarget(e.target.value)}
                        id="targetName"
                        autoComplete="off"
                        placeholder="Electronics Assignment"
                        _hover={{ opactiy: '1' }}
                        borderColor={'blackAlpha.500'}
                    />
                    <Text fontWeight={'medium'}>G-Drive Folder ID</Text>
                    <Input
                        value={folderID}
                        onChange={e => setFolderID(e.target.value)}
                        id="folderID"
                        autoComplete="off"
                        placeholder="1lIZmZVhgtjyiOnjyCovBhe53zQ98JsRe"
                        _hover={{ opactiy: '1' }}
                        borderColor={'blackAlpha.500'}
                    />
                    <Button
                        onClick={() => onClickHandler()}
                        colorScheme={'teal'}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default connect(null, { addNewTarget })(AddNewList)
