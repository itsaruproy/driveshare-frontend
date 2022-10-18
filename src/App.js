import React from 'react'
import { Box } from '@chakra-ui/react'
import Lists from './components/Lists'
import Header from './components/Header'

const App = () => {
    return (
        <Box bg={'gray.200'} minH="100vh">
            <Header />
            <Lists />
        </Box>
    )
}

export default App
