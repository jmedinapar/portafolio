import { Card, Col, Row, Typography, Tag, Space } from 'antd';
import './Skills.scss';

const { Title } = Typography;

const frontendSkills = ['React', 'TypeScript', 'Redux', 'Ant Design', 'SCSS'];

const backendSkills = ['Laravel', 'Firebase'];

const tools = ['Git', 'GitHub', 'SQL Server', 'MySql'];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <Title level={2} className="skills__title">
        Habilidades
      </Title>
      <Row gutter={[24, 24]} className="skills__grid">
        <Col xs={24} md={8}>
          <Card className="skills__card">
            <Title level={4}>Frontend</Title>
            <Space size="small" wrap>
              {frontendSkills.map((skill) => (
                <Tag key={skill} color={'blue'}>
                  {skill}
                </Tag>
              ))}
            </Space>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card className="skills__card">
            <Title level={4}>Backend</Title>
            <Space size="small" wrap>
              {backendSkills.map((skill) => (
                <Tag key={skill} color={'green'}>
                  {skill}
                </Tag>
              ))}
            </Space>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card className="skills__card">
            <Title level={4}>Herramientas</Title>
            <Space size="small" wrap>
              {tools.map((tool) => (
                <Tag key={tool} color={'purple'}>
                  {tool}
                </Tag>
              ))}
            </Space>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default Skills;
