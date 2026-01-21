# Forma Creations - Design Guidelines

## Filosofía de Diseño

Este proyecto sigue una estética **editorial minimalista** inspirada en el sistema de diseño de Apple. Los principios clave son:

- **Claridad sobre ornamentación**: Cada elemento tiene una razón de ser
- **Tipografía como arquitectura**: Los headlines son el elemento visual principal
- **Espaciado respirable pero compacto**: No sobrecargado, pero eficiente
- **Animaciones rápidas**: Interacciones instantáneas, sin esperas
- **Sin imágenes decorativas**: Todo tiene función, no hay relleno

---

## Paleta de Colores

### Colores Base (Apple Palette)

```css
--background: #F5F5F7;      /* Athens Gray - Fondo principal */
--foreground: #1D1D1F;      /* Shark - Texto principal */
--primary: #0066CC;         /* Science Blue - Acentos y CTAs */
--white: #FFFFFF;           /* Blanco puro */
```

### Colores de Texto

```css
--text-editorial: #6E6E73;  /* Texto secundario/cuerpo */
--text-caption: #86868B;    /* Labels y captions */
--text-muted: #A1A1A6;      /* Placeholders */
--text-subtle: #A3A3A1;     /* Texto en fondos oscuros */
```

### Colores de Fondos Oscuros

```css
--bg-dark: #000000;         /* Negro puro - Footer */
--bg-process: #000000;      /* Sección Process */
--border-dark: #262626;     /* Divisores en dark mode */
--border-subtle: #333333;   /* Borders inactivos en dark */
```

### Uso de Colores

- **Fondos claros**: `bg-[#F5F5F7]` (Athens Gray)
- **Fondos oscuros**: `bg-[#000000]` (Negro puro)
- **Texto principal**: `text-[#1D1D1F]` (Shark)
- **Texto en oscuro**: `text-[#F9F9F7]` (Off-white)
- **Links y CTAs**: `text-[#0066CC]` (Science Blue)
- **Hover en links**: `hover:text-[#0066CC]`

---

## Tipografía

### Font Family

```css
font-family: 'Geist', -apple-system, BlinkMacSystemFont, sans-serif;
```

### Jerarquía de Tamaños

#### Headlines (Bold - font-weight: 700)
```css
h1: text-[clamp(3rem,12vw,9rem)] font-medium leading-[0.9] tracking-[-0.05em]
h2: text-[clamp(2.5rem,8vw,6rem)] font-semibold leading-[0.95] tracking-[-0.04em]
h3: text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.15] tracking-[-0.03em]
```

**Importante**: Los headlines siempre usan `font-medium` (500) o `font-semibold` (600), NUNCA bold (700).
La fuente Geist se ve mejor con estos pesos.

#### Body Text
```css
Texto editorial: text-[15px] md:text-[16px] leading-[1.7] tracking-[-0.01em]
Texto pequeño: text-[14px] leading-[1.65] tracking-[-0.01em]
Links: text-[15px] md:text-[17px] tracking-[-0.01em]
```

#### Captions y Labels
```css
text-[11px] tracking-[0.08em] uppercase
```

### Letter Spacing (Tracking)

- Headlines grandes: `-0.05em` a `-0.03em`
- Cuerpo: `-0.01em`
- Captions (uppercase): `0.08em`

---

## Espaciado

### Entre Secciones

**SIEMPRE usar espaciado compacto**:
```tsx
<section className="py-12 md:py-16">
```

❌ **NUNCA usar**: `py-32`, `py-48`, `my-20`, etc.

### Margenes Internos

```tsx
Secciones: px-6 md:px-10
Containers: max-w-[1400px]
Gap entre elementos: gap-8, gap-12, gap-16
```

### Estructura de Márgenes

```tsx
mt-8           // Separación pequeña
mt-12 md:mt-16 // Separación media
mt-16 md:mt-20 // Separación grande (máximo)
```

---

## Animaciones y Transiciones

### Duración

**Regla de oro: Animaciones RÁPIDAS**

```css
duration-200   /* Cambios instantáneos (hover, active states) */
duration-300   /* Transiciones rápidas */
duration-500   /* Solo para efectos específicos */
```

❌ **NUNCA usar**: `duration-700`, `duration-1000` o superiores

### Easing

**Easing preferido**:
```css
ease-[cubic-bezier(0.76,0,0.24,1)]  /* Liquid ease - suave y natural */
```

### Ejemplos de Uso

```tsx
// Hover en links
className="transition-colors duration-300"

// Process component hover
className="transition-all duration-200"

// Form inputs focus
className="transition-colors duration-500"
```

### Animaciones Prohibidas

❌ NO usar IntersectionObserver para fade-in
❌ NO usar scroll-triggered animations lentas
❌ NO usar opacity-0 initial states

---

## Componentes

### Header

```tsx
- Glassmorphism: backdrop-blur-xl bg-[#F5F5F7]/90
- Altura: h-20
- Sticky: top-0 z-50
- Borde sutil inferior
```

### Hero

```tsx
- Sin estadísticas (usuario está empezando)
- Año actual: 2026
- Headline gigante: clamp(3rem,12vw,9rem)
- CTA text-only con flecha animada
```

### Process

```tsx
- Fondo negro con grain texture
- 4 pasos horizontales en desktop
- Hover cambia a Science Blue (#0066CC)
- Animaciones: duration-200
- Progress indicators como líneas
```

### Contact Form

```tsx
- Labels flotantes animadas
- Focus border: border-[#0066CC]
- Sin botones grandes, solo text CTA
- Validación HTML5 nativa
```

### Footer

```tsx
- Fondo negro (#000000)
- Logo invertido (blanco), tamaño h-10
- Layout 3 columnas: [2fr,1fr,1fr]
- Copyright con símbolo ©
- Links hover a Science Blue
```

---

## Efectos Visuales

### Grain Texture

Usado en secciones con clase `.grain` o inline:

```tsx
<div
  className="absolute inset-0 opacity-[0.03]"
  style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  }}
/>
```

### Reglas Horizontales (Dividers)

```tsx
<div className="rule-fade" />  // Con gradiente
<div className="h-[0.5px] bg-[#262626]" />  // Sólida en dark
```

---

## Convenciones de Código

### Imports

```tsx
import { useState } from "react";  // React hooks
import type { ComponentProps } from "react";  // Types
```

### Classnames

**Orden recomendado**:
1. Layout (flex, grid, position)
2. Sizing (w-, h-, max-w-)
3. Spacing (p-, m-, gap-)
4. Typography (text-, font-, leading-, tracking-)
5. Colors (bg-, text-, border-)
6. Effects (transition-, hover:, focus:)

Ejemplo:
```tsx
className="flex items-center gap-3 px-6 py-3 text-[15px] font-medium text-[#0066CC] hover:text-[#004C99] transition-colors duration-300"
```

### Estados

```tsx
// Hover
hover:text-[#0066CC]
hover:translate-x-1

// Focus
focus:outline-none
focus:border-[#0066CC]

// Active
activeStep === index ? "text-[#0066CC]" : "text-[#525252]"
```

---

## Información de Contacto

**SIEMPRE usar**:
- Email: `formacreationsmx@gmail.com`
- Instagram: `@formacreations.mx`
- URL Instagram: `https://instagram.com/formacreations.mx`
- Año: `2026`

---

## Directrices Generales

### ✅ DO

- Usar Science Blue (#0066CC) para todos los CTAs y links
- Mantener animaciones rápidas (200ms-300ms)
- Usar espaciado compacto (py-12 md:py-16)
- Preferir text-only CTAs sobre botones grandes
- Mantener la tipografía limpia y bold para headlines
- Usar grain texture en secciones alternadas
- Invert logo cuando esté sobre fondo oscuro

### ❌ DON'T

- NO agregar imágenes de proyectos (no hay portfolio aún)
- NO usar animaciones lentas o fade-ins automáticos
- NO usar espaciado excesivo (py-32, py-48)
- NO cambiar la paleta de colores de Apple
- NO agregar estadísticas falsas
- NO usar font-weight: 700 en headlines (usar 500-600)
- NO crear botones llamativos estilo "material design"

---

## Tech Stack

- **Framework**: Astro 5.16.11
- **UI**: React 18 (para interactividad)
- **Styling**: Tailwind CSS v3.4.0
- **Font**: Geist (Google Fonts)
- **Build**: Vite

### Hydration

```tsx
// Componentes interactivos en viewport
<Header client:load />
<Contact client:visible />

// Componentes estáticos
<Footer /> // Astro component
```

---

## Performance

- Sin imágenes pesadas (solo logo SVG)
- Sin animaciones costosas al cargar
- Hydration selectiva con client:visible
- Build size objetivo: < 200KB total JS
- Usar SVG para íconos y efectos

---

## Accessibility

- Contraste WCAG AA mínimo
- Labels en todos los inputs
- aria-label en botones de progreso
- rel="noopener noreferrer" en links externos
- Keyboard navigation funcional

---

**Última actualización**: Enero 2026
**Mantenedor**: Luis / Forma Creations
