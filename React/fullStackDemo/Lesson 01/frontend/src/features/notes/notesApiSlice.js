import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const nodesAdapter = createEntityAdapter({})

const initialState = nodesAdapter.getInitialState()

export const nodesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getNodes: builder.query({
            query: () => '/nodes',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            keepUnusedDataFor: 5,
            transformResponse: responseData => {
                const loadedNodes = responseData.map(node => {
                    node.id = node._id
                    return node
                })
                return nodesAdapter.setAll(initialState, loadedNodes)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Node', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Node', id }))
                    ]
                } else return [{ type: 'Node', id: 'LIST' }]
            }
        })
    })
})

export const {
    nodeGetNodeQuery,
} = nodesApiSlice

// returns the query result object
export const selectNodesResult = nodesApiSlice.endpoints.getNodes.select()

// creates memoized selector
const selectNodesData = createSelector(
    selectNodesResult,
    nodesResult => nodesResult.data
)

// getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllNodes,
    selectById: selectNodeById,
    selectIds: selectNodeIds
    // Pass in a selector that returns the nodes slice of state
} = nodesAdapter.getSelectors(state => selectNodesData(state) ?? initialState)