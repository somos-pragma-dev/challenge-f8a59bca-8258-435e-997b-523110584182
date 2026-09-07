# Desarrollo de una API REST para gestión de usuarios

La empresa requiere una API REST para gestionar usuarios en un sistema de banca en línea. Los usuarios pueden registrarse, iniciar sesión y actualizar su perfil. La API debe manejar las solicitudes de manera idempotente y asegurar la integridad de los datos. Los actores involucrados son el 'usuario', el'motor de autenticación' y el 'almacenamiento de usuarios'. La API debe procesar un mínimo de 100 solicitudes por segundo con una latencia máxima de 200ms. En caso de fallo del 'almacenamiento de usuarios', la API debe devolver un error 503 y reintentar la operación hasta 3 veces con un intervalo de 1 segundo.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Desarrollo de API REST en entorno Node.js con Express |
| **Nivel** | junior-l1 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Un IDE o editor de código.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Verifica que el proyecto arranca sin errores.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Definición del modelo de usuario

**Objetivo:** Establecer las propiedades y validaciones básicas del modelo de usuario.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Definir el modelo de usuario con las propiedades: nombre, email, contraseña, fecha de registro.
- Implementar las validaciones necesarias para asegurar la integridad de los datos (email único, contraseña con mínimo 8 caracteres).

**Entregable:** Modelo de usuario definido y validado.

<details>
<summary>Pistas de conocimiento</summary>

- Considera las restricciones de negocio al definir las validaciones.
- Piensa en cómo manejarías los errores de validación.

</details>

### Fase 2: Implementación de endpoints para registro y autenticación

**Objetivo:** Crear los endpoints necesarios para el registro y autenticación de usuarios.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Implementar el endpoint de registro que reciba los datos del usuario y los valide antes de almacenarlos.
- Implementar el endpoint de autenticación que verifique las credenciales del usuario y devuelva un token de sesión.

**Entregable:** Endpoints de registro y autenticación funcionales.

<details>
<summary>Pistas de conocimiento</summary>

- Reflexiona sobre la idempotencia de las operaciones y cómo asegurarla.
- Considera la seguridad de las credenciales y la gestión de sesiones.

</details>

### Fase 3: Implementación de endpoint para actualización de perfil

**Objetivo:** Crear el endpoint para que los usuarios puedan actualizar su perfil.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Implementar el endpoint que permita a los usuarios actualizar su nombre y email.
- Asegurar que las actualizaciones sean idempotentes y que se manejen los errores de manera adecuada.

**Entregable:** Endpoint de actualización de perfil funcional.

<details>
<summary>Pistas de conocimiento</summary>

- Considera los posibles errores y cómo manejarlos de manera amigable para el usuario.
- Piensa en cómo asegurarías que las actualizaciones sean idempotentes.

</details>

### Fase 4: Pruebas y optimización

**Objetivo:** Realizar pruebas y optimizar la API para cumplir con los requisitos de rendimiento.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Realizar pruebas de carga para asegurar que la API pueda manejar al menos 100 solicitudes por segundo con una latencia máxima de 200ms.
- Identificar y optimizar los puntos de rendimiento crítico.

**Entregable:** API optimizada y lista para producción.

<details>
<summary>Pistas de conocimiento</summary>

- Considera el uso de herramientas de prueba de carga y monitoreo.
- Piensa en cómo podrías optimizar la API para mejorar el rendimiento.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un endpoint en el contexto de una API REST?
- **paraQueSirve**: ¿Para qué sirve la idempotencia en las operaciones de una API REST?
- **comoSeUsa**: ¿Cómo se usa un token de sesión en el proceso de autenticación?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar una API REST y cómo se pueden manejar?
- **queDecisionesImplica**: ¿Qué decisiones implica asegurar la idempotencia en los endpoints de una API REST?

## Criterios de Evaluacion

- Definición correcta del modelo de usuario con las propiedades y validaciones necesarias.
- Implementación funcional de los endpoints de registro, autenticación y actualización de perfil.
- Aseguramiento de la idempotencia en las operaciones de la API.
- Manejo adecuado de los errores durante el proceso de registro, autenticación y actualización de perfil.
- Optimización de la API para cumplir con los requisitos de rendimiento.

## Como trabajar con un asistente de IA

- **AGENTS.md** — instrucciones nativas del repo (Cursor, Codex, Copilot, Gemini, Claude Code). Abrí el proyecto y el agente las carga solo.
- **PROMPT_MEJORA.md** — el mismo prompt, para copiar y pegar en un chat (claude.ai, ChatGPT, etc.).

---

*Reto generado automaticamente por Challenge Generator - Pragma*
