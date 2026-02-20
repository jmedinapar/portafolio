import { useState } from 'react'

import { Row, Col, Typography, Form, Input, Button, message, Card } from 'antd'

import { MailOutlined } from '@ant-design/icons'

import './Contact.scss'
import emailjs from '@emailjs/browser'

const { Title, Paragraph } = Typography

interface IContantFormValues {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const [form] = Form.useForm()

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (values: IContantFormValues) => {
    setLoading(true)
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        values as any,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      )

      message.success('Mensaje enviado correctamente')
      form.resetFields()
    } catch (error) {
      message.error('Error al enviar el mensaje')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <Title level={2}>Contacto</Title>
        <Paragraph>
          ¿Tienes un proyecto o una oportunidad? Estoy disponible para trabajo remoto.
        </Paragraph>

        <Row gutter={[48, 48]} className="contact__content">
          <Col xs={24} md={12}>
            <Card variant="outlined">
              <Form form={form} onFinish={handleSubmit} layout="vertical">
                <Form.Item
                  name="name"
                  label="Nombre"
                  rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
                >
                  <Input placeholder="Tu nombre" />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: 'Por favor ingresa tu email' },
                    {
                      type: 'email',
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Por favor ingresa un email válido',
                    },
                  ]}
                >
                  <Input placeholder="tu@email.com" />
                </Form.Item>
                <Form.Item
                  name="message"
                  label="Mensaje"
                  rules={[{ required: true, message: 'Por favor ingresa tu mensaje' }]}
                >
                  <Input.TextArea placeholder="Tu mensaje" rows={4} />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" loading={loading} block>
                    Enviar mensaje
                  </Button>
                </Form.Item>
              </Form>
              <Paragraph type="secondary" style={{ marginTop: '16px' }}>
                Envío gestionado con EmailJS · Sin backend dedicado
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card variant="outlined">
              <div className="contact__info">
                <Title level={4}>También puedes escribirme directamente</Title>
                <Paragraph>
                  <MailOutlined /> j.medina.par@gmail.com
                </Paragraph>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Contact
