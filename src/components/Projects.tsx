import { Card, Col, Row, Typography, Tag, Button, Space } from "antd";
import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
import "./Projects.scss";

const { Title, Paragraph } = Typography;

interface Project {
  title: string;
  description: string;
  stack: string[];
  demo?: string;
  code?: string;
}

const projects: Project[] = [
  {
    title: "Dashboard Hospital",
    description:
      "Sistema para gestión clínica con visualización de pacientes, hospitalización y reportes. Optimizado para rendimiento y mantenimiento.",
    stack: ["React", "TypeScript", "Ant Design", "Laravel"],
    demo: "#",
    code: "#",
  },
  {
    title: "Mini App Firebase",
    description:
      "Aplicación con autenticación y CRUD en tiempo real usando Firebase. Manejo de estado y arquitectura modular.",
    stack: ["React", "TypeScript", "Firebase", "SCSS"],
    demo: "#",
    code: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <Title level={2} className="projects__title">
        Projects
      </Title>

      <Row gutter={[24, 24]}>
        {projects.map((project) => (
          <Col xs={24} sm={12} md={12} lg={8} key={project.title}>
            <Card
              hoverable
              className="projects__card"
              cover={
                <div className="projects__image-placeholder">
                  Preview
                </div>
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
                  <Button
                    type="primary"
                    icon={<LinkOutlined />}
                    href={project.demo}
                  >
                    Demo
                  </Button>
                )}
                {project.code && (
                  <Button
                    icon={<GithubOutlined />}
                    href={project.code}
                  >
                    Code
                  </Button>
                )}
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Projects;
