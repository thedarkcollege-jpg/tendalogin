# Tenda WiFi Information Form

A responsive React.js application built with Next.js for collecting WiFi password information from Tenda router users.

## Features

- **Pre-filled Information**: WiFi name, address, router details, and username are pre-populated
- **Secure Password Input**: Users only need to enter their WiFi password
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Email Integration**: Submissions are sent to a specified email address
- **User Benefits**: Shows free recharge eligibility for regular users
- **Form Validation**: Ensures password field is required before submission
- **Success Feedback**: Confirmation message with benefit information

## Pre-filled Information

- **WiFi Name**: Nitish Pandat 5G
- **Address**: O-24 Gali No 8 Saurabh Vihar Jaitpur Badarpur New Delhi
- **Router Name**: Tenda
- **Username**: admin

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd work
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Email Configuration

To enable email functionality, you'll need to:

1. Install an email service library (e.g., nodemailer):
```bash
npm install nodemailer
```

2. Set up environment variables in `.env.local`:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

3. Update the API route in `src/app/api/submit-wifi-password/route.js` with your email configuration.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── submit-wifi-password/
│   │       └── route.js          # API endpoint for form submission
│   ├── globals.css               # Global styles
│   ├── layout.js                 # Root layout component
│   └── page.js                   # Main page component
└── components/
    └── TendaWiFiForm.js          # Main form component
```

## Technologies Used

- **Next.js 15.5.3**: React framework with App Router
- **React 18**: Frontend library
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript**: Programming language

## Features Details

### Form Components

- **WiFi Information Display**: Read-only fields showing network details
- **Password Input**: Secure input field with validation
- **Submit Button**: Loading state during submission
- **Success Page**: Confirmation with benefit information

### Responsive Design

- Mobile-first approach using Tailwind CSS
- Optimized for all screen sizes
- Touch-friendly interface for mobile devices

### User Experience

- Clear visual hierarchy with icons and colors
- Loading states for better feedback
- Error handling with user-friendly messages
- Special offer highlighting for user engagement

## Customization

You can customize the pre-filled information by modifying the `wifiInfo` object in `src/components/TendaWiFiForm.js`:

```javascript
const wifiInfo = {
  wifiName: 'Your WiFi Name',
  address: 'Your Address',
  routerName: 'Your Router',
  username: 'Your Username'
};
```

## Deployment

The application can be deployed on platforms like:

- [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js)
- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)

For Vercel deployment:
```bash
npm run build
```

## License

This project is open source and available under the [MIT License](LICENSE).
