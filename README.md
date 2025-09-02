<div align="center">
  <h1>💰 Expense Tracker</h1>
  <p>A modern, full-stack expense tracking application built with React Native and Node.js</p>
  
  [![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
  [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
  [![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
  [![Clerk](https://img.shields.io/badge/Clerk-1A1D24?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.dev/)

  ![App Screenshot](https://via.placeholder.com/300x600/4a6fa5/ffffff?text=Expense+Tracker)
</div>

## 🚀 Features

- **User Authentication** - Secure sign-up and login using Clerk
- **Transaction Management** - Add, view, and delete expenses/income
- **Real-time Balance** - Automatic calculation of total balance
- **Category-based Tracking** - Categorize expenses for better insights
- **Responsive UI** - Beautiful and intuitive interface
- **Dark Mode** - Eye-friendly dark theme
- **Offline Support** - Works without internet connection
- **Push Notifications** - Stay updated on your spending

## 🛠 Tech Stack

### Frontend (Mobile)
- **React Native** - Cross-platform mobile development
- **Expo** - Development platform for React Native
- **Expo Router** - File-based routing
- **Clerk** - Authentication and user management
- **React Native Paper** - UI components
- **React Native Reanimated** - Smooth animations
- **React Native Gesture Handler** - Gesture recognition
- **React Native Vector Icons** - Beautiful icons

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **CORS** - Cross-Origin Resource Sharing
- **Helmet** - Security middleware
- **Rate Limiting** - Prevent abuse

### Development Tools
- **Git** - Version control
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Commitlint** - Conventional commits

## 📱 Screenshots

| ![Login Screen](https://via.placeholder.com/300x600/4a6fa5/ffffff?text=Login) | ![Dashboard](https://via.placeholder.com/300x600/4a90e2/ffffff?text=Dashboard) |
|:---:|:---:|
| Login Screen | Dashboard |

| ![Add Transaction](https://via.placeholder.com/300x600/50e3c2/ffffff?text=Add+Transaction) | ![Categories](https://via.placeholder.com/300x600/9013fe/ffffff?text=Categories) |
|:---:|:---:|
| Add Transaction | Categories |

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Expo CLI
- MongoDB Atlas account
- Expo Go app (for testing on physical devices)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/expense-tracker.git
   cd expense-tracker
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install
   
   # Install mobile app dependencies
   cd ../mobile
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the `backend` directory:
     ```
     MONGODB_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     CLERK_SECRET_KEY=your_clerk_secret_key
     ```
   - Create a `.env` file in the `mobile` directory:
     ```
     EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
     API_URL=http://localhost:5001/api
     ```

4. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```

5. **Start the mobile app**
   ```bash
   cd mobile
   npm start
   ```

6. **Run on your device**
   - Scan the QR code with your phone's camera (iOS) or Expo Go app (Android)
   - Or press `i` for iOS simulator or `a` for Android emulator

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Expo](https://expo.dev/) for the amazing development platform
- [Clerk](https://clerk.dev/) for authentication
- [React Native Paper](https://reactnativepaper.com/) for UI components
- All the open-source libraries used in this project

<div align="center">
  Made with ❤️ by Your Name
</div>