import { Box, Button, Heading, Input, Text } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants'

const Upload = props => {
    const uploadBtn = useRef(null)
    const [file, setFile] = useState(null)

    const onClickHandler = () => {
        uploadBtn.current.click()
    }

    const onChangeHandler = e => {
        console.log(file)
        setFile(e.target.files[0])
    }

    const onSubmitHandler = async () => {
        // create new form data
        let formData = new FormData()
        formData.append('file', file)

        // send the file to the api
        let linkID = props.match.params.id

        try {
            await axios.post(BASE_URL + `/upload/${linkID}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
        } catch {}

        if (file) {
            console.log(file)
        }
        console.log('Link ID : ', linkID)
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
                <Input
                    onChange={onChangeHandler}
                    hidden
                    ref={uploadBtn}
                    id="file"
                    type={'file'}
                />
                <Text fontWeight={'semibold'}>
                    {file ? file.name : 'No File Selected'}
                </Text>
                <Button onClick={onClickHandler} colorScheme={'teal'}>
                    Select File
                </Button>
                <Button
                    onClick={() => onSubmitHandler()}
                    colorScheme={'teal'}
                    size={'lg'}
                >
                    Submit
                </Button>
            </Box>
        </Box>
    )
}

export default Upload
