import { Outlet } from 'react-router-dom';
import '../assets/styles/layout/layout.scss'
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div className="wrapper">
            <Header />
                <main>
                    <Outlet />
                </main>
            <Footer />
        </div>
    )
}

export default Layout;