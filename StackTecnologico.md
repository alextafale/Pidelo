# 🛠️ Stack Tecnológico - Sistema de Pedidos con Chatbot IA

## 📋 Descripción del Proyecto
Sistema web de gestión de pedidos que integra un chatbot de IA en WhatsApp para automatizar la toma de pedidos y notificar a los clientes sobre el estado de sus compras en tiempo real.

---

## 🎨 Frontend (Panel de Control Web)

### Core Framework
- **Angular 17+**
  - Standalone Components (arquitectura moderna)
  - Signals para estado reactivo
  - TypeScript estricto
  - Servidor: `ng serve` en desarrollo

### UI/UX
- **Angular Material** - Componentes UI profesionales
  - Tablas, diálogos, formularios, menús
  - Sistema de temas personalizable
- **TailwindCSS** (opcional) - Utility-first CSS para estilos custom
- **Angular CDK** - Componentes avanzados
  - Virtual scrolling
  - Drag & drop
  - Overlay system

### Estado y Datos
- **RxJS** - Programación reactiva
  - Observables para HTTP
  - Operadores para transformación de datos
- **Angular Signals** - Estado reactivo simple
- **Socket.io-client** - WebSocket client para tiempo real

### Visualización de Datos
- **Chart.js** - Librería de gráficas
- **ng2-charts** - Wrapper Angular para Chart.js
  - Gráficas de línea, barras, pie
  - Dashboard analytics

### HTTP y Autenticación
- **HttpClient** (nativo Angular) - Peticiones HTTP
- **JWT Decode** - Decodificar tokens JWT
- **Interceptores HTTP** - Inyección automática de tokens

### Utilidades
- **date-fns** - Manipulación de fechas
- **ngx-toastr** - Notificaciones toast

---

## ⚙️ Backend (API REST + WebSockets)

### Runtime y Framework
- **Node.js 18+** - Runtime JavaScript
- **Express.js** - Framework web minimalista
- **TypeScript** - Tipado estático

### Base de Datos
- **PostgreSQL 15+** - Base de datos relacional
- **Prisma ORM** - ORM moderno con TypeScript
  - Migraciones automáticas
  - Type-safe queries
  - Prisma Studio (GUI para BD)

### Autenticación y Seguridad
- **jsonwebtoken (JWT)** - Tokens de autenticación
- **bcrypt** - Hash de contraseñas
- **helmet** - Headers de seguridad HTTP
- **cors** - Cross-Origin Resource Sharing
- **express-rate-limit** - Protección contra brute force

### Validación
- **class-validator** - Validación de DTOs
- **class-transformer** - Transformación de objetos
- **joi** (alternativa) - Validación de schemas

### WebSockets
- **Socket.io** (servidor) - Comunicación bidireccional en tiempo real
  - Notificaciones push
  - Actualización de estados en vivo

### Logging y Monitoreo
- **Winston** - Logging estructurado
  - Niveles: error, warn, info, debug
  - Múltiples transportes (consola, archivo)
- **morgan** - HTTP request logger

### Utilidades Backend
- **dotenv** - Variables de entorno
- **nodemon** - Auto-restart en desarrollo
- **ts-node** - Ejecutar TypeScript directamente

---

## 🤖 Inteligencia Artificial

### Modelo de Lenguaje
- **Google Gemini Flash (gemini-1.5-flash)**
  - Modelo ultrarrápido y económico de Google
  - Ventajas:
    - **Gratis** hasta 1,500 requests/día
    - Baja latencia (perfecto para chatbot)
    - Context window de 1M tokens
    - Multimodal (texto e imágenes)
  - Function calling para extraer datos estructurados
  - JSON mode para respuestas estructuradas

### SDK y Librerías
- **@google/generative-ai** - SDK oficial de Google
  - Cliente Node.js para Gemini API
  - Soporte para streaming
  - Type-safe con TypeScript
  
### Orquestación de IA (opcional)
- **LangChain.js** - Framework para aplicaciones LLM
  - Integración con Gemini
  - Chain de conversación con memoria
  - Output parsers (JSON estructurado)
  - Prompt templates

### Gestión de Prompts
- **Prompt Engineering**
  - System prompts personalizados
  - Few-shot examples
  - Extracción de entidades (nombre, dirección, productos, cantidad)
  - JSON Schema para respuestas estructuradas

---

## 💬 Integración WhatsApp

### Proveedor Principal
- **Twilio WhatsApp API**
  - Sandbox para desarrollo
  - Números productivos
  - $15 crédito gratuito inicial
  - Webhooks para recibir mensajes
  - API REST para enviar mensajes

### Alternativa (si necesario)
- **Meta Cloud API** (WhatsApp Business Platform)
  - Gratuita
  - Configuración más compleja
  - Requiere Facebook Business Manager

### Librerías de Integración
- **twilio-node** - SDK oficial de Node.js
- **axios** - Cliente HTTP para webhooks

---

## 🚀 DevOps y Deployment

### Control de Versiones
- **Git** - Sistema de control de versiones
- **GitHub** - Hosting de repositorio
  - GitHub Actions (CI/CD opcional)

### Hosting Frontend
- **Vercel** (recomendado)
  - Deploy automático desde Git
  - SSL gratis
  - CDN global
- **Netlify** (alternativa)
- **Firebase Hosting** (alternativa)

### Hosting Backend
- **Railway.app** (recomendado)
  - Free tier generoso
  - PostgreSQL incluido
  - Deploy desde Git
  - Variables de entorno
- **Render** (alternativa)
- **Fly.io** (alternativa)

### Base de Datos en Producción
- **Supabase** - PostgreSQL managed
  - 500MB gratis
  - Backups automáticos
  - Dashboard web
- **Railway PostgreSQL** (incluido en plan)

### Monitoreo y Errores
- **Sentry** - Error tracking
  - Frontend y backend
  - Stack traces
  - Alertas por email
- **LogTail** (opcional) - Log management