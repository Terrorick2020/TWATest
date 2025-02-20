import { useState } from 'react'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'

import SvgMessage from '../../assets/icon/message.svg?react'
import SvgHeart from '../../assets/icon/heart.svg?react'
import SvgCopy from '../../assets/icon/copy.svg?react'
import SvgProfile from '../../assets/icon/profile.svg?react'


const NavBar = () => {
    const [value, setValue] = useState(0)

    return (
        <>
            <Box className="nav-bar">
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(_event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction
                        label="Чаты"
                        icon={ <SvgMessage />}
                    />
                    <BottomNavigationAction
                        label="Симпатии"
                        icon={ <SvgHeart />}
                    />
                    <BottomNavigationAction
                        label="Анкеты"
                        icon={ <SvgCopy />}
                    />
                    <BottomNavigationAction
                        label="Профиль"
                        icon={ <SvgProfile />}
                    />
                </BottomNavigation>
            </Box>
        </>
    )
}

export default NavBar