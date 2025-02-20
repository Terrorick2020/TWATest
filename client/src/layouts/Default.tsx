import { Outlet } from 'react-router-dom'

import HeadNav from '../components/Layouts/HeadNav'
import NavBar from '../components/Layouts/NavBar'

const DefaulLayout = () => {
    return (
        <>  
            <div className="default">
                <div className="block">
                    <div id="default-layout">
                        <div className="head-nav">
                            <HeadNav />
                        </div>
                        <div className="outlet">
                            <Outlet />
                        </div>
                        <div className="nav-bar">
                            <NavBar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DefaulLayout