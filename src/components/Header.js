import React from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import { connect } from 'react-redux'
import axios from 'axios'
import { signIn, signOut } from '../actions'
import { BASE_URL, SCOPES } from '../constants'
import {
    Box,
    Text,
    Button,
    HStack,
    Icon,
    Link as ChakraLink,
} from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import NewListButton from './NewListButton'

const Header = props => {
    const login = useGoogleLogin({
        flow: 'auth-code',
        scope: SCOPES,
        onSuccess: async codeResponse => {
            // send the code to server and accept the returned token
            // Call the action creator that will set the tokens and make the dispath returns something
            // Then chain to that, call another action that fetches all the current users links based on the id
            try {
                const response = await axios.post(BASE_URL + '/getToken', {
                    code: codeResponse.code,
                })
                props.signIn(response.data.token)
                console.log(response)
            } catch (err) {
                console.log(err)
            }
            // SEND THE RETURNED TOKEN FROM THE SERVER
            // console.log(codeResponse)
        },
        onError: errorResponse => console.log(errorResponse),
    })

    const logout = () => {
        props.signOut()
    }

    return (
        <Box
            w={'100%'}
            display={'flex'}
            bg={'gray.200'}
            p={'16px'}
            textColor={'gray.700'}
        >
            <Box
                px={'12'}
                w={'100%'}
                display="flex"
                justifyContent={'space-between'}
                alignItems={'center'}
            >
                <Box>
                    <Text fontSize={'2xl'} fontWeight={'semibold'}>
                        DriveShare
                    </Text>
                </Box>
                <HStack spacing={'5'}>
                    {props.Token ? (
                        <Button onClick={logout} colorScheme={'teal'}>
                            Log out
                        </Button>
                    ) : (
                        <Button onClick={login} colorScheme={'teal'}>
                            Log in
                        </Button>
                    )}
                    <ChakraLink
                        isExternal
                        href="https://www.github.com/itsaruproy"
                        style={{ textDecoration: 'none' }}
                    >
                        <Button colorScheme={'blackAlpha'}>
                            <HStack>
                                <Icon as={FaGithub} />
                                <Text>@itsaruproy</Text>
                            </HStack>
                        </Button>
                    </ChakraLink>
                </HStack>
            </Box>
        </Box>
    )
}

const mapStateToProps = state => {
    return { Token: state.auth.Token }
}

export default connect(mapStateToProps, { signIn, signOut })(Header)
