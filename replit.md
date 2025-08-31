# OptiPros - Optical Prosthetic for Visually Impaired

## Overview

OptiPros is an innovative optical prosthetic device designed to assist visually impaired individuals through advanced sensing technology and on-device AI capabilities. This Final Year Project (FYP) from COMSATS University Lahore features three core operational modes: Path Sensing (H-shaped detection frame with frequency-based audio feedback), Scene Description (privacy-first on-device AI for environmental awareness), and Text Reading (OCR capabilities for documents and signs). The project emphasizes user independence, privacy protection, and real-world usability developed through continuous collaboration with the visually impaired community.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React SPA**: Single-page application using React 18 with TypeScript for type safety
- **Wouter Router**: Lightweight client-side routing for navigation between sections
- **Vite Build System**: Fast development server and optimized production builds
- **Responsive Design**: Mobile-first approach using Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessibility
- **State Management**: TanStack Query for server state management and caching

### Backend Architecture
- **Express.js Server**: RESTful API server with middleware for request logging and error handling
- **TypeScript**: Full-stack type safety with shared schema definitions
- **Memory Storage**: In-memory data storage for contact submissions with UUID-based identifiers
- **Contact Management**: Form submission handling with validation using Zod schemas

### Data Storage Solutions
- **Drizzle ORM**: Type-safe database toolkit configured for PostgreSQL
- **Schema Definition**: Centralized schema definitions in shared directory for type consistency
- **Database Migrations**: Automated migration system using Drizzle Kit
- **In-Memory Fallback**: MemStorage class provides development/testing storage without database dependency

### Component Architecture
- **Section-Based Layout**: Modular components for Hero, Features, Technology, Gallery, Team, and Contact sections
- **Reusable UI Library**: Comprehensive component library with consistent styling and behavior
- **Form Management**: React Hook Form integration with Zod validation for type-safe form handling
- **Responsive Navigation**: Fixed navigation with scroll-based active section detection

### Development Workflow
- **Hot Module Replacement**: Vite development server with instant updates
- **Type Checking**: Comprehensive TypeScript configuration with strict mode enabled
- **Path Aliases**: Simplified imports using @ and @shared path mappings
- **Asset Management**: Optimized asset handling with Vite's built-in optimization

## External Dependencies

### Database & ORM
- **Neon Database**: Serverless PostgreSQL database for production deployment
- **Drizzle ORM**: Database toolkit with TypeScript integration and schema migrations
- **Connect-PG-Simple**: PostgreSQL session store for Express sessions

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Shadcn/ui**: Component library built on Radix UI primitives
- **Radix UI**: Headless component library for accessibility-compliant UI elements
- **Lucide Icons**: Modern icon library for consistent iconography

### State Management & API
- **TanStack Query**: Server state management with caching and synchronization
- **React Hook Form**: Form library with validation and error handling
- **Zod**: Schema validation for forms and API data

### Development Tools
- **Vite**: Build tool with fast development server and optimized production builds
- **TypeScript**: Static type checking for enhanced development experience
- **ESBuild**: Fast JavaScript/TypeScript bundler for server-side code
- **PostCSS**: CSS processing with Autoprefixer for browser compatibility

### Hosting & Deployment
- **Replit**: Development environment with integrated deployment capabilities
- **Node.js**: Runtime environment for server-side JavaScript execution