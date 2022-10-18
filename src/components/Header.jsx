import React from 'react'
import { Box, Text, Button, HStack } from '@chakra-ui/react'
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
                    <Button colorScheme={'purple'}>Learn More</Button>
                </HStack>
            </Box>
        </Box>
    )
}

export default Header
