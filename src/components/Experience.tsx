import { Card, Typography, Tag, Space, Divider } from 'antd';

const { Title, Text, Paragraph } = Typography;

import './Experience.scss';

const item_list = [
  'Desarrollo de módulo centralizado para visualización integral de información del paciente.',
  'Optimización de rendimiento en vistas críticas y reducción de tiempos de renderizado en React.',
  'Migración de React 16 a React 18 mejorando compatibilidad y rendimiento.',
  'Gestión de estado global con Redux para sincronización eficiente de datos clínicos.',
  'Implementación de interfaces dinámicas y consistentes utilizando Ant Design.',
  'Manejo y formateo eficiente de fechas clínicas con Dayjs para garantizar consistencia y rendimiento.',
  'Desarrollo de formularios clínicos complejos (intervenciones quirúrgicas, seguimiento de heridas).',
  'Generación de reportes estructurados de altas hospitalarias.',
  'Refactorización y mantenimiento de código legacy en PHP y Ruby on Rails.',
  'Integración y consumo de APIs REST desarrolladas en Laravel.',
  'Revisión de código y promoción de buenas prácticas dentro del equipo de desarrollo.',
];

const stack_list = [
  'React',
  'TypeScript',
  'Redux',
  'Ant Design',
  'Dayjs',
  'Laravel',
  'PHP',
  'Ruby on Rails',
  'SQL',
  'MySQL',
  'Git',
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <Title level={2} className="experience__title">
          Experiencia Profesional
        </Title>

        <Card className="experience__card" variant="borderless">
          <Title level={4}>Hospital Diospi Suyana</Title>
          <Text strong>Analista programador / Desarrollador Full Stack</Text>
          <Paragraph type="secondary">
            Enero 2021 – Enero 2026 · Sistema Clínico Interno en Producción
          </Paragraph>

          <Divider />
          <Paragraph>
            Desarrollo y mantenimiento de un sistema clínico interno utilizado diariamente por
            personal médico y administrativo para la gestión de pacientes, hospitalización, citas
            médicas, atención psicológica, documentación de heridas e intervenciones quirúrgicas.
          </Paragraph>

          <Title level={5}>Responsabilidades</Title>
          <ul className="experience__list">
            {item_list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <Title level={5}>Stack Tecnológico</Title>
          <Space wrap className="experience__tags">
            {stack_list.map((tech, index) => (
              <Tag key={index}>{tech}</Tag>
            ))}
          </Space>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
