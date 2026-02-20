import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const { Content } = Layout

interface MainLayoutProps {
  toggleTheme: () => void
  themeMode: 'light' | 'dark'
}

const MainLayout = (props: MainLayoutProps) => {
  return (
    <Layout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <NavBar toggleTheme={props.toggleTheme} themeMode={props.themeMode} />
      <Content style={{ color: '#f5f5f5', flex: 1 }}>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  )
}

export default MainLayout
