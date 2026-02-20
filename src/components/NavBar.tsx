import { Layout, Menu, Drawer, Button, Grid, Switch, Typography } from 'antd'
import { MenuOutlined, MoonOutlined, SunOutlined } from '@ant-design/icons'

import { useState } from 'react'
import useActiveSection from '../hooks/useActiveSection'

const { Header } = Layout

const { Title } = Typography

const { useBreakpoint } = Grid

interface NavBarProps {
  toggleTheme: () => void
  themeMode: 'light' | 'dark'
}

const NavBar = (props: NavBarProps) => {
  const screens = useBreakpoint()

  const [open, setOpen] = useState(false)
  const activeSection = useActiveSection(['home', 'experience', 'contact'])

  const menuItems = [
    { key: 'home', label: <a href="#home">Home</a> },
    { key: 'experience', label: <a href="#experience">Experiencia</a> },
    { key: 'contact', label: <a href="#contact">Contacto</a> },
  ]

  return (
    <Header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 24px',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: props.themeMode === 'dark' ? '#141414' : '#fff',
        borderBottom: props.themeMode === 'dark' ? '1px solid #303030' : '1px solid #f0f0f0',
      }}
    >
      <Title
        level={2}
        style={{
          margin: 0,
          color: props.themeMode === 'dark' ? '#fff' : '#000',
        }}
      >
        JM
      </Title>
      <Switch
        checked={props.themeMode === 'dark'}
        onChange={props.toggleTheme}
        checkedChildren={<MoonOutlined />}
        unCheckedChildren={<SunOutlined />}
      />
      {screens.md ? (
        <Menu
          theme={props.themeMode}
          mode="horizontal"
          selectedKeys={[activeSection]}
          items={menuItems}
          style={{ background: 'transparent' }}
        />
      ) : (
        <Button type="text" icon={<MenuOutlined />} onClick={() => setOpen(true)} />
      )}
      <Drawer
        title="Menu"
        placement="right"
        closable={false}
        onClose={() => setOpen(false)}
        open={open}
      >
        <Menu
          theme={props.themeMode}
          mode="vertical"
          selectedKeys={[activeSection]}
          items={menuItems}
          onClick={() => setOpen(false)}
        />
      </Drawer>
    </Header>
  )
}

export default NavBar
