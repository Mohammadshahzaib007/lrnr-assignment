import React from 'react'

import { Box } from '@mui/material'

import SideDrawer from './SideDrawer/SideDrawer'

function Layout(props) {

    const { children } = props

    return (
        <Box display="flex" flexDirection="column" width="100%">
            <SideDrawer />
            {children}
        </Box>
    )
}

export default Layout