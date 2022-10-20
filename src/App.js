import React from 'react'
import { Box } from '@chakra-ui/react'
import { Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import history from './history'
import { signIn, signOut } from './actions'
import Lists from './components/Lists'
import Header from './components/Header'
import Guest from './components/Guest'
import AddNewList from './components/AddNewList'
import Upload from './components/Upload'

const App = props => {
    return (
        <Box bg={'gray.200'} minH="100vh">
            <Router history={history}>
                <>
                    <Header />
                    <Route
                        path="/"
                        exact
                        component={props.Token ? Lists : Guest}
                    />
                    <Route path="/upload/:id" exact component={Upload} />
                    <Route path="/link/create" exact component={AddNewList} />
                </>
            </Router>
            {/* <Header /> */}
            {/* <Lists /> */}
            {/* <Guest /> */}
            {/* <AddNewList /> */}
            {/* <Upload /> */}
        </Box>
    )
}

const mapStateToProps = state => {
    return { Token: state.auth.Token }
}

export default connect(mapStateToProps, { signIn, signOut })(App)
