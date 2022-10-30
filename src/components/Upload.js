import { Box, Button, Heading, Input, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants'

const Upload = props => {
    const toast = useToast()
    const uploadBtn = useRef(null)
    const [file, setFile] = useState(null)
    const [target, setTarget] = useState('Example Target')
    const [isAvailable, setIsAvailable] = useState(false)

    useEffect(() => {
        let linkID = props.match.params.id
        const getUploadInfo = async () => {
            try {
                const response = await axios.get(BASE_URL + `/upload/${linkID}`)
                console.log('Upload Info', response.data)
                setTarget(response.data.info.targetName)
                setIsAvailable(true)
            } catch {}
        }

        getUploadInfo()
    }, [props.match.params.id, setTarget, setIsAvailable])

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
            toast({
                title: 'Uploading',
                status: 'info',
                isClosable: true,
            })

            await axios.post(BASE_URL + `/upload/${linkID}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })

            toast.closeAll()
            toast({
                title: 'File uploaded successfully',
                status: 'success',
                duration: 4000,
                isClosable: true,
            })

            setFile(null)
        } catch {
            toast({
                title: 'Something went wrong',
                status: 'error',
                duration: 4000,
                isClosable: true,
            })
        }

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
                <Heading mb={'20px'}>{target}</Heading>
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
