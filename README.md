# Go Umrah

A comprehensive platform for managing Umrah services, including hotel bookings, transportation, and Islamic attractions in Makkah and Madinah.

## Features

- Hotel bookings in Makkah and Madinah
- Transportation services
- Islamic attractions and landmarks
- User authentication
- Shopping cart functionality
- Responsive design

## Tech Stack

- React + Vite
- Firebase (Authentication, Firestore, Storage)
- Tailwind CSS
- React Router DOM

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Building for Production

```bash
npm run build
```

## Environment Variables

Create a `.env` file in the root directory with your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```
