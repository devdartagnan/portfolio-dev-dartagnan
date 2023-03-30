import Header from '../components/Header'
import { darkTheme } from "../styles/themes/darkTheme";

type DashboardLayoutProps = {
    children: React.ReactNode,
};

export default function Layout({ children }: DashboardLayoutProps) {
    return (
        <>
            <Header/>
            <main>{children}</main>
        </>
    )
}