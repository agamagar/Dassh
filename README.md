# DasshAI Landing Page

A beautiful, modern landing page built with inspiration from [21st.dev](https://21st.dev/home)'s design principles and component library.

## 🚀 Features

- **Modern Design**: Clean, professional UI with gradients and animations
- **Responsive**: Optimized for all screen sizes
- **Interactive**: Smooth animations, button ripples, and scroll effects
- **Performance**: Lightweight and fast-loading
- **21st.dev Integration Ready**: Structured to easily integrate components from 21st.dev's library

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (`#0ea5e9` to `#0284c7`)
- **Gray Scale**: Modern gray palette for text and backgrounds
- **Gradients**: Subtle gradients for visual depth

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large typography with proper spacing
- **Body**: Clean, readable text with optimal line height

### Components
- Hero section with badge, gradient text, and stats
- Feature cards with hover animations
- Modern buttons with ripple effects
- Responsive navigation with backdrop blur
- Professional footer

## 🔗 Integrating 21st.dev Components

### Option 1: Using 21st.dev Magic MCP (Recommended)

If you're using Cursor or VS Code with Cline, you can use 21st.dev's Magic MCP server:

```bash
# Install the 21st.dev Magic MCP extension in your IDE
# Then use these commands in your AI chat:

/ui hero section with gradient background and call-to-action buttons
/21 pricing table with three tiers and feature comparison
/ui responsive navbar with dark mode toggle
/21 testimonials carousel with customer photos
```

### Option 2: Using 21st.dev API

```javascript
// Example: Fetch a hero component from 21st.dev API
async function get21stDevComponent(componentType, options) {
    const response = await fetch('https://api.21st.dev/v1/components/' + componentType, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer YOUR_API_KEY',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(options)
    });
    
    const component = await response.json();
    return component;
}

// Usage
const heroComponent = await get21stDevComponent('hero', {
    title: 'Transform Your Workflow with AI',
    subtitle: 'Experience the future of productivity',
    style: 'gradient',
    buttons: [
        { text: 'Get Started', style: 'primary' },
        { text: 'Learn More', style: 'secondary' }
    ]
});
```

### Option 3: Browse and Copy Components

1. Visit [21st.dev components](https://21st.dev/s/hero)
2. Browse their extensive library:
   - **Heroes**: 73+ hero components
   - **Features**: 36+ feature sections
   - **Buttons**: 130+ button variations
   - **Cards**: 79+ card designs
   - **Forms**: 23+ form components

3. Copy the code and integrate into your project

## 📋 Available Component Categories from 21st.dev

### Marketing Blocks
- **Heroes** (73): Landing page headers
- **Features** (36): Feature showcases
- **CTAs** (34): Call-to-action sections
- **Pricing** (17): Pricing tables
- **Testimonials** (15): Customer reviews
- **Footers** (14): Page footers

### UI Components
- **Buttons** (130): Various button styles
- **Cards** (79): Content cards
- **Forms** (23): Input forms
- **Navigation** (11): Menu components
- **Modals** (37): Dialog boxes
- **Tables** (30): Data tables

## 🛠️ How to Replace Current Components

### Replace Hero Section
```javascript
// Use 21st.dev Magic MCP:
/ui hero section with animated background, gradient text, and dual CTA buttons for SaaS product

// Or manually integrate from 21st.dev library
```

### Add Pricing Section
```javascript
// Add after features section:
/21 pricing table with three tiers: Starter, Pro, Enterprise with feature comparison

// Update the HTML to include the new pricing section
```

### Enhance Features Section
```javascript
// Replace current feature cards:
/ui feature grid with icons, hover animations, and gradient borders for AI product

// Copy the generated code to replace the current features grid
```

## 🚀 Getting Started

1. **Clone or download** this repository
2. **Open** `index.html` in your browser
3. **Customize** the content for your brand
4. **Integrate** 21st.dev components as needed

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## ⚡ Performance Features

- CSS custom properties for consistent theming
- Efficient animations using transforms
- Lazy loading for scroll animations
- Debounced scroll handlers
- Optimized asset loading

## 🎯 SEO Optimized

- Semantic HTML structure
- Proper heading hierarchy
- Meta tags ready for customization
- Fast loading times
- Mobile-first responsive design

## 🔧 Customization

### Update Colors
Edit the CSS custom properties in `styles.css`:
```css
:root {
    --primary-500: #your-color;
    --primary-600: #your-darker-color;
    /* ... other colors */
}
```

### Modify Content
Update the text content in `index.html` to match your brand and messaging.

### Add New Sections
Use 21st.dev's Magic MCP or API to generate new sections that match the existing design system.

## 📄 Files Structure

```
DasshAI_Website/
├── index.html          # Main HTML file
├── styles.css          # Modern CSS with 21st.dev-inspired design
├── script.js           # Interactive JavaScript
└── README.md           # This file
```

## 🌟 Next Steps

1. **Sign up** for [21st.dev](https://21st.dev) to get API access
2. **Install** their Magic MCP in Cursor/VS Code
3. **Browse** their component library for inspiration
4. **Integrate** components that enhance your landing page
5. **Customize** the design to match your brand

## 🤝 21st.dev Integration Benefits

- **Pre-tested Components**: All components are production-ready
- **Consistent Design**: Professional, modern aesthetics
- **Time Saving**: No need to build components from scratch
- **Responsive**: All components work across devices
- **Accessible**: Built with accessibility best practices

---

Built with ❤️ and inspired by [21st.dev](https://21st.dev)'s component library. 