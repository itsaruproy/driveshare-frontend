import React from 'react'
import { Box } from '@chakra-ui/react'
import Lists from './components/Lists'
import Header from './components/Header'
import Guest from './components/Guest'
import AddNewList from './components/AddNewList'
import Upload from './components/Upload'

const App = () => {
    return (
        <Box bg={'gray.200'} minH="100vh">
            <Header />
            {/* <Lists /> */}
            {/* <Guest /> */}
            {/* <AddNewList /> */}
            <Upload />
        </Box>
    )
}

export default App
