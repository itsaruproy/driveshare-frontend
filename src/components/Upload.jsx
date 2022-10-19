import { Box, Button, FormLabel, Heading, Input } from '@chakra-ui/react'
import React, { useRef } from 'react'

const Upload = () => {
    const uploadBtn = useRef(null)
    const onClickHandler = () => {
        uploadBtn.current.click()
    }
    return (
        <Box w="100%" h="100%">
            <Box
                display={'flex'}
                alignItems={'center'}
                flexDirection={'column'}
                gap={'16px'}
            >
                <Heading mb={'20px'}>
                    Upload file for Electronics Assignment
                </Heading>
                <Input hidden ref={uploadBtn} id="file" type={'file'} />
                <Button onClick={onClickHandler} colorScheme={'teal'}>
                    Select File
                </Button>
                <Button colorScheme={'teal'} size={'lg'}>
                    Submit
                </Button>
            </Box>
        </Box>
    )
}

export default Upload
