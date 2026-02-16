Pidelo – Plataforma de Delivery Inteligente

Pidelo es una aplicación móvil desarrollada con React Native y Expo que conecta clientes con negocios locales, permitiendo realizar pedidos en tiempo real, gestionar órdenes y dar seguimiento al proceso de entrega.

El proyecto está diseñado con una arquitectura modular y escalable, incluyendo panel administrativo, autenticación, seguimiento en vivo y un chatbot de asistencia.

Descripción del Proyecto

Pidelo busca resolver problemas comunes en el sector de entregas locales:

Dificultad para gestionar pedidos de manera organizada.

Falta de seguimiento en tiempo real.

Procesos manuales en negocios pequeños.

Experiencia de usuario poco optimizada en pedidos móviles.

La aplicación permite:

Registro e inicio de sesión de usuarios.

Selección de tipo de cuenta.

Gestión de pedidos.

Seguimiento en vivo de órdenes.

Panel administrativo para negocios.

Edición de perfil.

Integración de chatbot de asistencia.

Tecnologías Utilizadas

React Native

Expo

TypeScript

React Navigation

Node.js (estructura preparada para backend)

Arquitectura modular por componentes y pantallas

Estructura del Proyecto
pidelo/
│
├── .expo/                      # Configuración de Expo
├── assets/                     # Recursos estáticos
├── backend/                    # Backend del proyecto (API)
├── frontend/
│   ├── navigation/
│   │   └── StackNavigation.tsx
│   │
│   ├── onboarding/
│   │   └── Onboarding.tsx
│   │
│   ├── screens/
│   │   ├── accountTypeSelection/
│   │   │   └── AccountTypeSelection.tsx
│   │   │
│   │   ├── admin/
│   │   │   ├── businessSettings/
│   │   │   ├── dashboard/
│   │   │   ├── manageOrders/
│   │   │   └── menuManagement/
│   │   │
│   │   ├── auth/
│   │   │   ├── Login.tsx
│   │   │   └── Signup.tsx
│   │   │
│   │   ├── chatbot/
│   │   │   └── Chatbot.tsx
│   │   │
│   │   ├── homeFeed/
│   │   │   └── homeFeed.tsx
│   │   │
│   │   ├── liveOrderTracking/
│   │   │
│   │   ├── orders/
│   │   │   └── Order.tsx
│   │   │
│   │   ├── profile/
│   │   │   ├── EditProfile.tsx
│   │   │   └── Profile.tsx
│   │   │
│   │   └── SplashScreen.tsx
│
├── App.js
├── index.js
├── app.json
├── package.json
├── package-lock.json
└── tsconfig.json

Funcionalidades Principales
Autenticación

Registro de usuario.

Inicio de sesión.

Selección de tipo de cuenta (cliente o negocio).

Cliente

Visualización de negocios y productos.

Realización de pedidos.

Seguimiento en tiempo real.

Edición de perfil.

Asistencia mediante chatbot.

Negocio (Admin)

Gestión de productos.

Configuración del negocio.

Administración de órdenes.

Panel de control.

Instalación y Ejecución

Clonar el repositorio:

git clone https://github.com/alextafale/Pidelo.git


Entrar al proyecto:

cd Pidelo


Instalar dependencias:

npm install


Ejecutar el proyecto:

npx expo start

Estado del Proyecto

En desarrollo activo.
Arquitectura preparada para escalar con backend propio y futuras integraciones como pagos en línea y geolocalización avanzada.
