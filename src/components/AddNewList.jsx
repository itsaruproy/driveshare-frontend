import { Box, Button, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'

const AddNewList = () => {
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
                        _hover={{ opactiy: '1' }}
                        borderColor={'blackAlpha.500'}
                    />
                    <Text fontWeight={'medium'}>G-Drive Folder ID</Text>
                    <Input
                        _hover={{ opactiy: '1' }}
                        borderColor={'blackAlpha.500'}
                    />
                    <Button colorScheme={'teal'}>Submit</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default AddNewList
