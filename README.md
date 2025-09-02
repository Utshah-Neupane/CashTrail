<div align="center">
  <h1>💰 Expense Tracker</h1>
  <p>A modern, full-stack expense tracking application built with React Native and Node.js</p>
  
  [![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
  [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
  [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
  [![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
  [![Clerk](https://img.shields.io/badge/Clerk-1A1D24?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.dev/)

</div>

## 🚀 Features

- **User Authentication** - Secure sign-up and login using Clerk
- **Transaction Management** - Add, view, and delete expenses/income
- **Real-time Balance** - Automatic calculation of total balance
- **Category-based Tracking** - Categorize expenses for better insights
- **Responsive UI** - Beautiful and intuitive interface
- **Dark Mode** - Eye-friendly dark theme

## 🛠 Tech Stack

### Frontend (Mobile)
- **React Native** - Cross-platform mobile development
- **Expo** - Development platform for React Native
- **Expo Router** - File-based routing
- **Clerk** - Authentication and user management

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **PostgreSQL** - Powerful, open-source relational database
- **Neon** - Serverless Postgres with branching
- **Prisma** - Next-generation ORM for Node.js
- **Helmet** - Security middleware
- **Rate Limiting** - Prevent abuse



## 🎥 Demo

Watch a quick demo of the Expense Tracker app:

[![Expense Tracker Demo](../mobile/assets/images/revenue-i4.png)](https://www.youtube.com/shorts/W3ZHgM-pgpE?feature=share)

*Click the image above to watch the demo video*

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app (for testing on physical devices)

### Installation

#### 1. Clone the repository
```bash
git clone https://github.com/Utshah-Neupane/ExpenseTracker.git
cd ExpenseTracker
```

#### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file with your credentials
# Get these from your service accounts
cat > .env <<EOL
DATABASE_URL=your_neon_database_url
CLERK_SECRET_KEY=your_clerk_secret_key
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
EOL

# Start development server
npm run dev
```

#### 3. Mobile App Setup
```bash
# Navigate to mobile directory
cd ../mobile

# Install dependencies
npm install

# Create .env file with your Clerk publishable key
# Get this from your Clerk dashboard
echo "EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key" > .env

# Start the Expo development server
npx expo start
```

#### 4. Deploy Backend (Optional)
Deploy the backend to Render or your preferred hosting service. Update the `API_URL` in the mobile app's `.env` file with your deployed backend URL.

### Testing
- Use the Expo Go app to scan the QR code from the terminal
- Or press `i` for iOS simulator / `a` for Android emulator

## Using the Deployed Backend

This app connects to a pre-deployed backend at [https://expensetracker-qz6v.onrender.com](https://expensetracker-qz6v.onrender.com). No need to run a local backend server unless you want to modify the backend code.

If you need to deploy your own backend, follow the setup instructions in the Backend Setup section above.


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



