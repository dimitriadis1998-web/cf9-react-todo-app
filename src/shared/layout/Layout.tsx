import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import type {LayoutProps} from "../types.ts";




const Layout = ({children}:LayoutProps) => {

    return (
        <>
            <Header/>
            <main className="container mx-auto min-h-[95vh] pt-36">{children}</main>
            <Footer/>
        </>
    )
}
export default Layout;