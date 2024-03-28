import Sidebar from "./ui/Sidebar";



const Layout = ({ children }) => {
    return (
        <div className="flex h-screen">
            <div>
                <Sidebar />
            </div>
            <div className="flex-grow p-4">
                { children }
            </div>
        </div>
    )
}
export default Layout;