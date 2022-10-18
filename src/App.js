import React from 'react'
import { Box } from '@chakra-ui/react'
import Lists from './components/Lists'
import Header from './components/Header'
import Guest from './components/Guest'

const App = () => {
    return (
        <Box bg={'gray.200'} minH="100vh">
            <Header />
            {/* <Lists /> */}
            <Guest />
        </Box>
    )
}

export default App
