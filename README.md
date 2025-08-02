# BMI Calculator Pro 🏥

A professional-grade Body Mass Index calculator built with React, featuring real-time validation, 7-day history tracking, and interactive data visualization.

## 🌟 Features

### Core Functionality

- **Dual Unit Support**: Seamlessly switch between Metric (kg/m) and Imperial (lbs/in) systems
- **Real-time Validation**: Smart input validation with helpful error messages
- **Instant Calculations**: Accurate BMI calculations using WHO-approved formulas
- **Category Classification**: Clear visual categorization (Underweight, Normal, Overweight, Obese)

### Advanced Features

- **7-Day History Tracking**: Monitor BMI trends over time with persistent local storage
- **Interactive Charts**: Beautiful area charts powered by Recharts for data visualization
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Professional UI**: Modern glassmorphism design with smooth animations

### User Experience

- **Loading States**: Elegant loading animations for better perceived performance
- **Error Handling**: Comprehensive error states with user-friendly messages
- **Accessibility**: WCAG-compliant color contrast and semantic HTML
- **Progressive Enhancement**: Works without JavaScript for basic calculations

## Screenshots

### Homepage
![Homepage](screenshots/homepage.png)

### BMI Result
![BMI Result](screenshots/BMI.png)

### History Section
![History Section](screenshots/charts.png)


## 🚀 Demo

**[🔗 Live Demo](https://josh-bmi-calculator-pro.vercel.app/)** - Try it yourself!

## 🛠️ Built With

- **Frontend Framework**: [React 18](https://reactjs.org/) - Modern React with Hooks
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Charts**: [Recharts](https://recharts.org/) - Composable charting library
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- **Build Tool**: [Create React App](https://create-react-app.dev/) - Zero-config React setup
- **Deployment**: [Vercel](https://vercel.com/) - Optimized for Next.js and React

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 14.0 or higher)
- **npm** or **yarn** package manager
- Modern web browser with ES6 support

## ⚡ Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/bmi-calculator-pro.git
cd bmi-calculator-pro
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm start
```

### 4. Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Project Structure

```
bmi-calculator-pro/
├── public/
│   ├── index.html          # HTML template
│   └── favicon.ico         # App favicon
├── src/
│   ├── App.js              # Main application component
│   ├── index.js            # React DOM entry point
│   └── index.css           # Global styles & Tailwind imports
├── tailwind.config.js      # Tailwind configuration
├── package.json            # Dependencies & scripts
└── README.md              # Project documentation
```

## 🎯 Key Components

### BMI Calculator Logic

- **Custom Hook**: `useBMICalculator()` for business logic separation
- **Validation**: Real-time input validation with error handling
- **Unit Conversion**: Automatic conversion between metric and imperial units

### State Management

- **React Hooks**: `useState` for form state, `useReducer` for complex history state
- **Local Storage**: Persistent data storage for user history
- **Effect Management**: `useEffect` for data loading and side effects

### UI Components

- **InputForm**: User data collection with real-time validation
- **ResultDisplay**: BMI results with category visualization
- **HistoryPanel**: 7-day trend tracking with interactive charts
- **Header**: Professional branding with feature highlights

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Desktop** (1024px+): Full layout with side-by-side components
- **Tablet** (768px - 1023px): Stacked layout with maintained functionality
- **Mobile** (320px - 767px): Single-column layout with touch-optimized inputs

## 🎨 Design System

### Color Palette

- **Primary**: Purple to Blue gradient (`from-purple-600 to-blue-600`)
- **Secondary**: Teal accents (`teal-600`)
- **Success**: Green (`green-600`)
- **Warning**: Yellow (`yellow-600`)
- **Error**: Red (`red-600`)

### Typography

- **Primary Font**: System fonts for optimal performance
- **Headings**: Bold weights with proper hierarchy
- **Body**: Regular weight with optimal line height

## 📊 BMI Categories

The calculator uses WHO-approved BMI categories:

| Category      | BMI Range   | Color Code |
| ------------- | ----------- | ---------- |
| Underweight   | < 18.5      | Blue       |
| Normal Weight | 18.5 - 24.9 | Green      |
| Overweight    | 25.0 - 29.9 | Yellow     |
| Obese         | ≥ 30.0      | Red        |

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Connect Repository**:

   ```bash
   # Push to GitHub first
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy with Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure build settings (auto-detected)
   - Deploy!

### Build for Production

```bash
# Create optimized production build
npm run build

# The build folder contains the deployable files
```

## 🧪 Available Scripts

| Script          | Description                 |
| --------------- | --------------------------- |
| `npm start`     | Start development server    |
| `npm run build` | Create production build     |
| `npm test`      | Run test suite              |
| `npm run eject` | Eject from Create React App |

## 🔮 Future Enhancements

- [ ] **User Accounts**: Save data across devices
- [ ] **Goal Setting**: Set and track BMI goals
- [ ] **Export Data**: Download history as CSV/PDF
- [ ] **Health Insights**: Personalized recommendations
- [ ] **Multiple Profiles**: Family member support
- [ ] **Dark Mode**: Theme customization
- [ ] **Offline Support**: PWA capabilities

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👨‍💻 Author

**Joshua Omialni**

- GitHub: (https://github.com/J2nx99)
- LinkedIn: (https://linkedin.com/in/joshua-omilani-5723b6255)
- Portfolio: ](https://joshua-omilani.vercel.app/)


**[⭐ Star this repository](https://github.com/j2n99/bmi-calculator-pro)** if you found it helpful!

Made with ❤️ and React

</div>
