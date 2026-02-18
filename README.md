# Juan Medina - Portafolio

Bienvenido a mi portafolio profesional. Soy desarrollador Frontend especializado en React y TypeScript, con más de 5 años de experiencia en desarrollo de sistemas clínicos y aplicaciones web escalables.

## 🚀 Características

- **Tema Light/Dark**: Cambio dinámico de tema con persistencia en localStorage
- **Diseño Responsivo**: Totalmente adaptable a dispositivos móviles, tablets y desktop
- **Navegación Inteligente**: Detección automática de sección activa mientras scrolleas
- **Formulario de Contacto**: Integración con EmailJS para recibir mensajes directamente
- **Stack Moderno**: React 19, TypeScript 5, Vite con HMR

## 🛠️ Stack Tecnológico

### Frontend
- **React** 19.2.0 - Librería de UI
- **TypeScript** 5.9.3 - Tipado estático
- **Vite** 7.3.1 - Bundler ultra-rápido
- **Ant Design** 6.3.0 - Componentes UI profesionales
- **SCSS** 1.97.3 - Estilos modulares
- **React Router** 7.13.0 - Enrutamiento

### Herramientas de Desarrollo
- **ESLint** 9.39.1 - Linting de código
- **Prettier** 3.8.1 - Formateo automático
- **TypeScript ESLint** 8.48.0 - Reglas TypeScript

### Servicios
- **EmailJS** 4.4.1 - Envío de emails desde el navegador
- **Ant Design Icons** 6.1.0 - Set de iconos

## 📋 Prerrequisitos

- **Node.js**: v18 o superior
- **npm** o **yarn**: Gestor de paquetes

## 🏃 Instalación y Ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/portafolio.git
cd portafolio
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:
```env
VITE_EMAIL_SERVICE_ID=tu_service_id
VITE_EMAIL_TEMPLATE_ID=tu_template_id
VITE_EMAIL_PUBLIC_KEY=tu_public_key
```

Obtén estos valores creando una cuenta en [EmailJS](https://www.emailjs.com/)

### 4. Ejecutar en desarrollo
```bash
npm run dev
```

Se abrirá automáticamente en `http://localhost:3000`

### 5. Build para producción
```bash
npm run build
```

### 6. Preview de build
```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/        # Componentes reutilizables
│   ├── Hero.tsx       # Sección principal
│   ├── Skills.tsx     # Habilidades técnicas
│   ├── Experience.tsx # Experiencia laboral
│   ├── Projects.tsx   # Proyectos destacados
│   ├── Contact.tsx    # Formulario de contacto
│   ├── NavBar.tsx     # Barra de navegación
│   └── Footer.tsx     # Pie de página
├── hooks/             # Custom React hooks
│   └── useActiveSection.ts
├── Layout/            # Layouts principales
│   └── MainLayout.tsx
├── pages/             # Páginas
│   └── Home.tsx
├── routes/            # Configuración de rutas
│   └── router.tsx
├── styles/            # Estilos globales
├── App.tsx            # Componente raíz
└── main.tsx           # Punto de entrada
```

## 🎯 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run lint` | Ejecuta ESLint |
| `npm run format` | Formatea código con Prettier |
| `npm run format:check` | Verifica formato sin cambios |
| `npm run preview` | Previsualiza build de producción |

## 📧 Configuración de EmailJS

Para que el formulario de contacto funcione:

1. Ve a [EmailJS](https://www.emailjs.com/)
2. Crea una cuenta
3. Configura un servicio de email (Gmail, Outlook, etc.)
4. Crea una plantilla de email
5. Copia tus credenciales en el archivo `.env`

## 🌐 Despliegue

### Opción 1: Vercel (Recomendado para Vite)
```bash
npm i -g vercel
vercel
```

### Opción 2: Netlify
```bash
npm i -g netlify-cli
netlify deploy
```

### Opción 3: GitHub Pages
Edita `vite.config.ts` y agrega:
```ts
export default defineConfig({
  base: '/portafolio/',
  // ...
})
```

## 👨‍💼 Información de Contacto

- **Email**: j.medina.par@gmail.com
- **LinkedIn**: [juan-medina-paredes](https://www.linkedin.com/in/juan-medina-paredes)
- **GitHub**: Próximamente (este portafolio será mi primer proyecto público)

## 📊 Experiencia Profesional

**Analista Programador / Desarrollador Full Stack**  
Hospital Diospi Suyana | Enero 2021 – Enero 2026

Desarrollo y mantenimiento de sistema clínico interno utilizado diariamente por personal médico y administrativo.

### Especialidades:
- **Frontend**: React, TypeScript, Redux, Ant Design, SCSS
- **Backend**: Laravel, PHP, Ruby on Rails
- **Bases de Datos**: MySQL, SQL Server

### Logros principales:
- Migración exitosa de React 16 a React 18
- Optimización de rendimiento en vistas críticas
- Desarrollo de módulos complejos (gestión de pacientes, reportes clínicos)
- Refactorización y mantenimiento de código legacy

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

---

**Hecho con ❤️ con React y TypeScript**
