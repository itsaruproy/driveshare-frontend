import React from 'react'
import { Box } from '@chakra-ui/react'
import Lists from './components/Lists'
import Header from './components/Header'
import Guest from './components/Guest'
import AddNewList from './components/AddNewList'

const App = () => {
    return (
        <Box bg={'gray.200'} minH="100vh">
            <Header />
            {/* <Lists /> */}
            {/* <Guest /> */}
            <AddNewList />
        </Box>
    )
}

export default App
