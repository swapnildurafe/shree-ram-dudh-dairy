import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, phone, address, quantity, product } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: `🛒 New Order: ${product}`,
    text: `
New Order Received:

📦 Product: ${product}
👤 Customer Name: ${name}
📱 Phone Number: ${phone}
📍 Address: ${address}
🔢 Quantity: ${quantity}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Order email sent successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Failed to send email', error: err.message });
  }
}
