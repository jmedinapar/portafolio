import { Card, Col, Row, Typography, Tag, Button, Space, Image, Flex } from 'antd'
import { GithubOutlined, LinkOutlined } from '@ant-design/icons'
import './Projects.scss'

const { Title, Paragraph } = Typography

interface Project {
  title: string
  description: string
  stack: string[]
  demo?: string
  code?: string
  image?: string
}

interface IndependentWork {
  title: string
  description: string
  stack: string[]
  website: string
  image?: string
}

const independentWorks: IndependentWork[] = [
  {
    title: 'Fisioterapia Rouse',
    description:
      'Landing page y sistema de gestión para una clínica de fisioterapia, con enfoque en mostrar servicios, captar pacientes,  los terapeutas agendan citas, visualizan reportes y controlar pagos de manera clara y organizada.',
    stack: ['React', 'TypeScript', 'SCSS', 'Vite', 'Mantine', 'Vercel', 'Firebase'],
    website: 'https://www.fisioterapia-rouse.net.pe/',
    image: 'https://www.fisioterapia-rouse.net.pe/hero.webp',
  },
]

const projects: Project[] = []

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <Title level={2} className="projects__title">
        Proyectos y trabajos independientes
      </Title>

      <div className="projects__section">
        <Title level={3} className="projects__subtitle">
          Trabajos independientes
        </Title>

        <Row gutter={[24, 24]}>
          {independentWorks.map((work) => (
            <Col xs={24} md={12} key={work.title}>
              <Card
                hoverable
                className="projects__card projects__card--featured"
                cover={
                  work.image ? (
                    <img src={work.image} alt={work.title} className="projects__image" />
                  ) : (
                    <div className="projects__image-placeholder">Preview</div>
                  )
                }
              >
                <div className="projects__cardHeader">
                  <Tag color="green">Trabajo independiente</Tag>
                  <Button
                    type="link"
                    icon={<LinkOutlined />}
                    href={work.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver web
                  </Button>
                </div>

                <Title level={4}>{work.title}</Title>
                <Paragraph>{work.description}</Paragraph>

                <div className="projects__tags">
                  <Space size="small" wrap>
                    {work.stack.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </Space>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <Row gutter={[24, 24]}>
        {projects.map((project) => (
          <Col xs={24} sm={12} md={12} lg={8} key={project.title}>
            <Card
              hoverable
              className="projects__card"
              cover={
                project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="projects__image"
                    loading="lazy"
                  />
                ) : (
                  <div className="projects__image-placeholder">Preview</div>
                )
              }
            >
              <Title level={4}>{project.title}</Title>

              <Paragraph>{project.description}</Paragraph>

              <div className="projects__tags">
                <Space size="small">
                  {project.stack.map((tech) => (
                    <Tag key={tech} color="blue">
                      {tech}
                    </Tag>
                  ))}
                </Space>
              </div>

              <Space style={{ marginTop: 16 }}>
                {project.demo && (
                  <Button type="primary" icon={<LinkOutlined />} href={project.demo}>
                    Demo
                  </Button>
                )}
                {project.code && (
                  <Button icon={<GithubOutlined />} href={project.code}>
                    Code
                  </Button>
                )}
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default Projects
