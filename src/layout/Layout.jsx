import Header from "../components/layout/Header";
import Main from "../components/layout/Main";
import TabBar from "../components/layout/TabBar";

const Layout = () => {
    return (
        <main className="min-h-screen w-full">
            <Header />
            <Main />
            <TabBar />
        </main>
    )
}

export default Layout;