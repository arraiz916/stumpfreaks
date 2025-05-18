import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import multer from 'multer';

dotenv.config();
const router = express.Router();

// Use memory storage for uploaded files
const upload = multer({ storage: multer.memoryStorage() });

router.post('/', upload.single('image'), async (req, res) => {
  const { name, phone, address, description } = req.body;
  const image = req.file;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const attachments = image
    ? [{
        filename: image.originalname,
        content: image.buffer
      }]
    : [];

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: 'New Estimate Request',
    html: `
      <h2>New Estimate Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service Address / Area:</strong> ${address}</p>
      <p><strong>Comments:</strong><br/>${description ? description.replace(/\n/g, '<br/>') : '(none)'}</p>
    `,
    attachments
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

export default router;
