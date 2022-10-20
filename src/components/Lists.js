import React, { Component } from 'react'
import { Box, Flex, HStack } from '@chakra-ui/react'
import { connect } from 'react-redux'
import { fetchLinks } from '../actions'
import List from './List'
import NewListButton from './NewListButton'

class Lists extends Component {
    componentDidMount() {
        console.log('Component mounted')
        this.props.fetchLinks()
    }

    renderLists() {
        const ListsReducer = this.props.Lists
        if (Object.keys(ListsReducer).length === 0) return null

        let listArray = []

        for (let key in ListsReducer) {
            if (ListsReducer.hasOwnProperty(key)) {
                listArray.push({
                    _id: ListsReducer[key]._id,
                    linkID: ListsReducer[key].linkID,
                    folderID: ListsReducer[key].folderID,
                    targetName: ListsReducer[key].targetName,
                })
            }
        }

        return listArray.map(list => {
            return (
                <List
                    key={list._id}
                    targetName={list.targetName}
                    linkID={list.linkID}
                    _id={list._id}
                />
            )
        })
    }

    render() {
        return (
            <Box
                mt={'16px'}
                w={'full'}
                display="flex"
                justifyContent={'center'}
            >
                <Flex
                    gap={'12px'}
                    justifyContent={'center'}
                    direction={'column'}
                >
                    <HStack mx={'auto'}>
                        <NewListButton />
                    </HStack>
                    {this.renderLists()}
                </Flex>
            </Box>
        )
    }
}

const mapStateToProps = state => {
    return { Lists: state.lists }
}

export default connect(mapStateToProps, { fetchLinks })(Lists)
