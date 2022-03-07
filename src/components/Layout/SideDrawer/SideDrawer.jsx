import * as React from 'react';

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import NotificationsIcon from '@mui/icons-material/Notifications';

import CustomDrawer from './Drawer';
import { Avatar, Button } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function SideDrawer() {

    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" elevation={0} color="transparent">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="default"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={() => setIsDrawerOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon htmlColor='rgba(0,0,0,.54)' />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box display="flex" alignItems="center" width="20%" justifyContent="space-between" >
                        <Button color='inherit' variant="text" startIcon={<PersonAddIcon htmlColor='rgba(0,0,0,.54)' />}>Invite Team Member</Button>
                        <IconButton color="default">
                            <NotificationsIcon />
                        </IconButton>

                        <Avatar sx={{ bgcolor: "#A55996", width: 32, height: 32, fontSize: 14, cursor: 'pointer' }}>FL</Avatar>
                    </Box>
                </Toolbar>
            </AppBar>


            <CustomDrawer open={isDrawerOpen} drawerCloseHandler={() => setIsDrawerOpen(false)} />
        </Box>
    );
}
