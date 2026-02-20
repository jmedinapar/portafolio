import { Button, Layout } from 'antd'

import { LinkedinOutlined } from '@ant-design/icons'

const { Footer: AntFooter } = Layout

const Footer = () => {
  return (
    <AntFooter style={{ textAlign: 'center' }}>
      <div style={{ marginBottom: '12px' }}>
        {/* <GithubOutlined style={{ fontSize: 20, marginRight: 16 }} /> */}

        <Button
          icon={<LinkedinOutlined style={{ fontSize: 20, marginRight: 16 }} />}
          type="link"
          target="_blank"
          href="https://www.linkedin.com/in/juan-medina-paredes"
        />

        {/* <MailOutlined style={{ fontSize: 20 }} /> */}
      </div>
      <div>
        © {new Date().getFullYear()} Juan Medina - v{__APP_VERSION__}
      </div>
    </AntFooter>
  )
}

export default Footer
