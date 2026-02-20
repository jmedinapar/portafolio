import { Button, Card, Col, Row, Space, Typography } from 'antd';

import './Hero.scss';
import { LinkedinOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Hero = () => {
  return (
    <section className="hero" id="home">
      <Card variant="outlined" className="hero__card">
        <Row gutter={[32, 32]}>
          <Col xs={24} md={10}>
            <div className="hero__image">
              <img src={`${import.meta.env.BASE_URL}foto.png`} alt="Juan Medina, Frontend Developer" loading="lazy" />
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
              <Paragraph>Disponible para proyectos y oportunidades de trabajo remoto.</Paragraph>
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
                <Button type="primary" size="large" href="#contact">
                  Contactar
                </Button>
              </Space>
            </div>
          </Col>
        </Row>
      </Card>
    </section>
  );
};

export default Hero;
