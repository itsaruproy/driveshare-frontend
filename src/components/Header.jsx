import React from 'react'
import {
    Box,
    Text,
    Button,
    HStack,
    Icon,
    Link as ChakraLink,
} from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
const Header = () => {
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
                    <Button colorScheme={'teal'}>Log in</Button>
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

export default Header
