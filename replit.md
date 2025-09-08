# Si / SiC / GaN Transistor Calculator

## Overview

This is a web-based educational calculator that compares power losses and efficiency between different semiconductor technologies: Silicon (Si), Silicon Carbide (SiC), and Gallium Nitride (GaN) transistors. The application helps users understand the differences in power electronics performance by calculating conduction losses, switching losses, and overall efficiency based on input parameters like voltage, current, switching frequency, temperature, and duty cycle.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Template Engine**: Jinja2 templates with Flask for server-side rendering
- **Client-Side Logic**: Vanilla JavaScript for real-time calculations and interactive charts
- **Styling**: Pure CSS with responsive design for mobile and desktop compatibility
- **Visualization**: Chart.js library for pie chart visualization of power loss distribution

### Backend Architecture
- **Framework**: Flask (Python) - lightweight web framework chosen for simplicity
- **Application Structure**: Minimal MVC pattern with separation of concerns
  - `app.py`: Main Flask application with route definitions
  - `main.py`: Entry point for application execution
  - `templates/`: HTML templates for rendering
  - `static/`: Client-side assets (CSS, JavaScript)

### Data Processing
- **Calculation Engine**: Client-side JavaScript performs real-time power loss calculations
- **Device Database**: Hardcoded device parameters for Si, SiC, and GaN technologies stored in JavaScript constants
- **Formula Implementation**: 
  - Conduction losses: P_cond = I² × R_DS(on) × D
  - Switching losses: P_sw = 0.5 × V_DC × I × (t_r + t_f) × f_sw × 2
  - Temperature compensation for resistance values

### User Interface Design
- **Responsive Layout**: Flexbox-based design that adapts to different screen sizes
- **Real-time Updates**: Immediate calculation and chart updates on parameter changes
- **Educational Focus**: Clean, intuitive interface with explanatory text and formulas
- **Accessibility**: Semantic HTML structure with proper labeling

### Configuration Management
- **Environment Variables**: Session secret key configuration for Flask sessions
- **Development Mode**: Debug mode enabled for development with hot reloading
- **Static Asset Serving**: Flask's built-in static file serving for CSS and JavaScript

## External Dependencies

### Frontend Libraries
- **Chart.js**: JavaScript charting library loaded via CDN for power loss visualization
- **No additional frontend frameworks**: Pure vanilla JavaScript approach for simplicity

### Backend Dependencies
- **Flask**: Python web framework for routing and template rendering
- **Python Standard Library**: OS module for environment variable access

### Hosting Requirements
- **Python Runtime**: Compatible with Python environments supporting Flask
- **Static File Serving**: Standard web server capabilities for CSS/JS assets
- **Port Configuration**: Configured to run on port 5000 with host binding to 0.0.0.0

### Development Tools
- **No Database**: Application operates entirely with client-side calculations and hardcoded device parameters
- **No Authentication**: Simple educational tool with no user management requirements
- **No External APIs**: Self-contained application with no third-party service integrations