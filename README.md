# 🤖 OrderFlow - Sistema Inteligente de Gestión de Pedidos

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)
![Angular](https://img.shields.io/badge/angular-17-red.svg)
![TypeScript](https://img.shields.io/badge/typescript-5.0-blue.svg)

> Automatiza la gestión de pedidos para negocios pequeños mediante un chatbot de IA en WhatsApp y un panel de control en tiempo real.

---

## 📋 Descripción

**OrderFlow** es una solución integral que combina inteligencia artificial conversacional con WhatsApp para revolucionar la forma en que los negocios pequeños gestionan sus pedidos.

### El Problema
Los negocios pequeños (fondas, cafeterías, tiendas locales) enfrentan desafíos diarios:
- ❌ Atención manual de mensajes en WhatsApp (50-100+ diarios)
- ❌ Pérdida de pedidos por olvido o confusión
- ❌ No pueden costear sistemas profesionales ($50-200/mes)
- ❌ Clientes sin seguimiento del estado de su pedido
- ❌ Falta de análisis de ventas y tendencias

### Nuestra Solución
✅ **Chatbot IA** que atiende pedidos automáticamente 24/7  
✅ **Panel web** profesional para gestionar todo en tiempo real  
✅ **Notificaciones automáticas** de estado por WhatsApp  
✅ **Analytics** para tomar mejores decisiones de negocio  
✅ **Gratis o muy económico** - tecnología accesible para todos  

---

## ✨ Características Principales

### 🤖 Chatbot Inteligente con IA
- Conversación natural en español
- Extracción inteligente de datos (productos, cantidad, dirección)
- Manejo de errores y correcciones del cliente
- Confirmación de pedidos antes de procesar
- Powered by **Google Gemini Flash**

### 📊 Panel de Control Web
- Dashboard con métricas en tiempo real
- Gestión completa de pedidos (crear, editar, cancelar)
- Cambio de estados con notificación automática
- Catálogo de productos personalizable
- Filtros y búsqueda avanzada
- Reportes y analytics visuales

### 📱 Integración WhatsApp
- Recepción automática de mensajes
- Envío de notificaciones de estado
- Historial completo de conversaciones
- Templates de mensajes personalizables

### ⚡ Tiempo Real
- WebSockets para actualizaciones instantáneas
- Notificaciones push en el panel
- Sincronización automática entre dispositivos

---

## 🛠️ Stack Tecnológico

### Frontend
- **Angular 17** - Framework web moderno
- **Angular Material** - Componentes UI profesionales
- **RxJS** - Programación reactiva
- **Socket.io Client** - WebSockets
- **Chart.js** - Visualización de datos

### Backend
- **Node.js + Express** - API REST
- **TypeScript** - Type-safe development
- **Prisma ORM** - Acceso a base de datos
- **PostgreSQL** - Base de datos relacional
- **Socket.io** - WebSockets server
- **JWT** - Autenticación segura

### Integraciones
- **Google Gemini Flash** - Modelo de lenguaje IA
- **Twilio WhatsApp API** - Mensajería
- **LangChain.js** - Orquestación de IA (opcional)

### DevOps
- **Docker** - Contenedorización
- **GitHub Actions** - CI/CD
- **Vercel** - Frontend hosting
- **Railway** - Backend hosting

---

## 🚀 Inicio Rápido

### Prerequisitos
```bash
node >= 18.0.0
npm >= 9.0.0
PostgreSQL >= 15
```

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/orderflow.git
cd orderflow
```

2. **Instalar dependencias del backend**
```bash
cd backend
npm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env
# Editar .env con tus credenciales
```

4. **Configurar base de datos**
```bash
npx prisma migrate dev
npx prisma db seed
```

5. **Iniciar backend**
```bash
npm run dev
```

6. **Instalar dependencias del frontend**
```bash
cd ../frontend
npm install
```

7. **Iniciar frontend**
```bash
ng serve
```

8. **Abrir en navegador**
```
http://localhost:4200
```

---

## 📁 Estructura del Proyecto

```
orderflow/
├── backend/
│   ├── src/
│   │   ├── config/          # Configuración (DB, JWT, etc)
│   │   ├── controllers/     # Controladores de rutas
│   │   ├── middlewares/     # Auth, validación, errors
│   │   ├── models/          # Modelos Prisma
│   │   ├── services/        # Lógica de negocio
│   │   │   ├── ai/          # Integración Gemini
│   │   │   ├── whatsapp/    # Integración Twilio
│   │   │   └── orders/      # Gestión de pedidos
│   │   ├── routes/          # Rutas de la API
│   │   ├── sockets/         # WebSocket handlers
│   │   └── utils/           # Utilidades
│   ├── prisma/
│   │   └── schema.prisma    # Schema de base de datos
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/        # Services, guards, interceptors
│   │   │   ├── shared/      # Componentes reutilizables
│   │   │   ├── features/    # Módulos de funcionalidad
│   │   │   │   ├── auth/
│   │   │   │   ├── dashboard/
│   │   │   │   ├── orders/
│   │   │   │   ├── products/
│   │   │   │   └── analytics/
│   │   │   └── layouts/     # Layouts principales
│   │   └── environments/    # Configuración por ambiente
│   └── package.json
│
└── docs/                    # Documentación adicional
```

---

## 🔧 Configuración

### Variables de Entorno (Backend)

```env
# Base de datos
DATABASE_URL="postgresql://user:password@localhost:5432/orderflow"

# JWT
JWT_SECRET="tu-secret-key-super-segura"
JWT_EXPIRES_IN="7d"

# Twilio WhatsApp
TWILIO_ACCOUNT_SID="tu-account-sid"
TWILIO_AUTH_TOKEN="tu-auth-token"
TWILIO_WHATSAPP_NUMBER="whatsapp:+14155238886"

# Google Gemini
GEMINI_API_KEY="tu-api-key"

# Server
PORT=3000
NODE_ENV="development"

# Frontend URL (CORS)
FRONTEND_URL="http://localhost:4200"
```

### Variables de Entorno (Frontend)

```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  socketUrl: 'http://localhost:3000'
};
```

---

## 📡 API Documentation

### Autenticación
```http
POST /api/auth/register
POST /api/auth/login
POST /api/auth/refresh
```

### Pedidos
```http
GET    /api/orders              # Listar pedidos
GET    /api/orders/:id          # Obtener pedido
POST   /api/orders              # Crear pedido
PATCH  /api/orders/:id          # Actualizar pedido
PATCH  /api/orders/:id/status   # Cambiar estado
DELETE /api/orders/:id          # Cancelar pedido
```

### Productos
```http
GET    /api/products            # Listar productos
POST   /api/products            # Crear producto
PATCH  /api/products/:id        # Actualizar producto
DELETE /api/products/:id        # Eliminar producto
```

### Analytics
```http
GET /api/analytics/dashboard    # Métricas generales
GET /api/analytics/sales        # Ventas por período
GET /api/analytics/products     # Top productos
```

### WebHooks
```http
POST /api/webhooks/whatsapp     # Recibir mensajes de Twilio
```

[Ver documentación completa de la API](./docs/API.md)

---

## 🎯 Roadmap

### ✅ Fase 1 - MVP (Completado)
- [x] Autenticación y autorización
- [x] CRUD de pedidos
- [x] Integración WhatsApp básica
- [x] Chatbot con IA
- [x] Panel de control
- [x] Notificaciones en tiempo real

### 🚧 Fase 2 - En Desarrollo
- [ ] Dashboard analytics avanzado
- [ ] Multi-negocio (saas)
- [ ] Roles y permisos
- [ ] Modo oscuro
- [ ] Exportar reportes PDF/Excel

### 📋 Fase 3 - Planeado
- [ ] Predicción de tiempo de entrega con ML
- [ ] Recomendaciones personalizadas
- [ ] Integración Google Maps
- [ ] App móvil nativa
- [ ] Pagos en línea
- [ ] Sistema de inventario

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Convenciones de Commits
```
Add: Nueva funcionalidad
Fix: Corrección de bug
Update: Actualización de código existente
Refactor: Refactorización
Docs: Documentación
Style: Formato, punto y coma faltante, etc
Test: Agregar tests
```

---

## 🧪 Testing

### Backend
```bash
npm run test           # Unit tests
npm run test:e2e       # Integration tests
npm run test:coverage  # Coverage report
```

### Frontend
```bash
ng test                # Unit tests
ng e2e                 # E2E tests
```

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 👥 Equipo

- **[Tu Nombre]** - Full Stack Developer - [@tu-github](https://github.com/tu-usuario)
- **[Compañero 1]** - Frontend Developer
- **[Compañero 2]** - Backend Developer

---

## 🙏 Agradecimientos

- [Angular Team](https://angular.io/) por el increíble framework
- [Google](https://ai.google.dev/) por Gemini Flash
- [Twilio](https://www.twilio.com/) por la API de WhatsApp
- [Prisma](https://www.prisma.io/) por el mejor ORM

---

## 📞 Contacto

Proyecto Link: [https://github.com/tu-usuario/orderflow](https://github.com/tu-usuario/orderflow)

Demo en vivo: [https://orderflow.vercel.app](https://orderflow.vercel.app)

---

## 📸 Screenshots

### Dashboard Principal
![Dashboard](./docs/images/dashboard.png)

### Gestión de Pedidos
![Orders](./docs/images/orders.png)

### Conversación WhatsApp
![WhatsApp](./docs/images/whatsapp-chat.png)

### Analytics
![Analytics](./docs/images/analytics.png)

---

<div align="center">
  <strong>Hecho con ❤️ para negocios pequeños en México</strong>
  
  ⭐ Si te gusta el proyecto, dale una estrella!
</div>