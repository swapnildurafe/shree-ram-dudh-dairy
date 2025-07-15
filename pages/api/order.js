import fs from 'fs';
import path from 'path';
import xlsx from 'xlsx';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, address, product, phone, quantity } = req.body;
    const filePath = path.resolve('./', 'orders.xlsx');

    // Load existing Excel data
    let data = [];
    if (fs.existsSync(filePath)) {
      const wb = xlsx.readFile(filePath);
      const sheet = wb.Sheets[wb.SheetNames[0]];
      data = xlsx.utils.sheet_to_json(sheet);
    }

    // Append new order
    const newEntry = {
      name,
      address,
      phone,
      quantity,
      product,
      date: new Date().toLocaleString(),
    };
    data.push(newEntry);

    // Save updated Excel
    const newWb = xlsx.utils.book_new();
    const newSheet = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(newWb, newSheet, 'Orders');
    xlsx.writeFile(newWb, filePath);

    // Email setup
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
      subject: `New Order - ${product}`,
      text: `
🛒 New Order Received

Product: ${product}
Name: ${name}
Phone: ${phone}
Quantity: ${quantity}
Address: ${address}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Order saved and email sent' });
    } catch (error) {
      console.error('Email Error:', error);
      return res.status(500).json({ message: 'Order saved but email failed', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
