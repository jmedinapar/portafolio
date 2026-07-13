import { Button, Col, Row, Space, Typography } from 'antd'

import './Hero.scss'
import { LinkedinOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

const stackGroups = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Redux', 'SCSS', 'Ant Design', 'Mantine', 'Dayjs'],
  },
  {
    title: 'Backend',
    items: ['Laravel', 'PHP', 'SQL', 'MySQL'],
  },
  {
    title: 'Herramientas',
    items: ['Git', 'GitHub', 'GitLab', 'Trello', 'Vercel', 'Firebase'],
  },
]

const Hero = () => {
  // const [loading, setLoading] = useState(false)

  // const handleDownload = () => {
  //   setLoading(true)

  //   ReactGA.event({
  //     category: 'Engagement',
  //     action: 'Download CV',
  //   })

  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 600)
  // }

  return (
    <section className="hero" id="home">
      <div className="hero__background" aria-hidden="true">
        <span className="hero__orb hero__orb--one" />
        <span className="hero__orb hero__orb--two" />
      </div>

      <div className="hero__panel">
        <Row gutter={[40, 32]} align="middle">
          <Col xs={24} lg={11}>
            <div className="hero__image">
              <img
                src={`${import.meta.env.BASE_URL}foto-portafolio.webp`}
                alt="Juan Medina, Full Stack"
                loading="lazy"
              />
            </div>
          </Col>

          <Col xs={24} lg={13}>
            <div className="hero__content">
              <span className="hero__eyebrow">Full Stack Developer • Remote</span>
              <Title level={1} className="hero__title">
                Hola, soy <span>Juan Medina</span>
              </Title>
              <Title level={3} className="hero__subtitle">
                Diseño y desarrollo experiencias web modernas, rápidas y escalables.
              </Title>

              <div className="hero__stackGroups">
                {stackGroups.map((group) => (
                  <div key={group.title} className="hero__stackGroup">
                    <span className="hero__stackLabel">{group.title}</span>
                    <div className="hero__stackItems">
                      {group.items.map((item) => (
                        <span key={item} className="hero__stackChip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <Paragraph className="hero__description">
                Disponible para proyectos y oportunidades de trabajo remoto.
              </Paragraph>

              <Space size="large" className="hero__buttons">
                <Button
                  size="large"
                  icon={<LinkedinOutlined />}
                  href="https://www.linkedin.com/in/juan-medina-paredes"
                  target="_blank"
                >
                  Linkedin
                </Button>
                <Button type="primary" size="large" href="#contact">
                  Contactar
                </Button>
              </Space>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Hero
