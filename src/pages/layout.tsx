import Header from '../components/Header'
import './dashboard'

type DashboardLayoutProps = {
  children: React.ReactNode,
};

export default function Layout({ children }: DashboardLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
