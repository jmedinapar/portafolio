import { Button, Card, Col, Row, Space, Typography } from 'antd'

import './Hero.scss'
import { DownloadOutlined, LinkedinOutlined } from '@ant-design/icons'
import ReactGA from 'react-ga4'
import { useState } from 'react'

const { Title, Paragraph } = Typography

const Hero = () => {
  const [loading, setLoading] = useState(false)

  const handleDownload = () => {
    setLoading(true)

    ReactGA.event({
      category: 'Engagement',
      action: 'Download CV',
    })

    setTimeout(() => {
      setLoading(false)
    }, 600)
  }
  return (
    <section className="hero" id="home">
      <Card variant="outlined" className="hero__card">
        <Row gutter={[32, 32]}>
          <Col xs={24} md={10}>
            <div className="hero__image">
              <img
                src={`${import.meta.env.BASE_URL}foto.png`}
                alt="Juan Medina, Frontend Developer"
                loading="lazy"
              />
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className="hero__content">
              <Title level={1} className="hero__title">
                Juan Medina
              </Title>
              <Title level={3} className="hero__subtitle">
                Frontend Developer
              </Title>
              <Paragraph className="hero__stack">
                React · TypeScript · Redux · SCSS · Ant Design · Dayjs
              </Paragraph>
              <Paragraph>
                Disponible para proyectos y oportunidades de trabajo remoto.
              </Paragraph>
              <Space size="large" className="hero__buttons">
                {/* <Button type="primary" size="large" href="#projects" >Ver Proyectos</Button> */}
                <Button
                  size="large"
                  icon={<LinkedinOutlined />}
                  href="https://www.linkedin.com/in/juan-medina-paredes"
                  target="_blank"
                >
                  Linkedin
                </Button>
                <Button
                  href={`${import.meta.env.BASE_URL}cv/Juan-Medina-CV.pdf`}
                  size="large"
                  loading={loading}
                  icon={<DownloadOutlined />}
                  download
                  onClick={handleDownload}
                >
                  Descargar CV
                </Button>
                <Button type="primary" size="large" href="#contact">
                  Contactar
                </Button>
              </Space>
            </div>
          </Col>
        </Row>
      </Card>
    </section>
  )
}

export default Hero
