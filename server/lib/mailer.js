// lib/mailer.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // для порта 465 (SSL)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

/**
 * Отправка письма с прикреплённым файлом прайс-листа.
 * @param {string} toEmail – Email получателя
 * @param {string} attachmentPath – Путь к PDF файлу
 */
export async function sendPriceByEmail(toEmail, attachmentPath) {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: toEmail,
    subject: 'Ваш прайс-лист',
    text: 'Добрый день! Пожалуйста, найдите прикреплённый прайс-лист.',
    attachments: [
      {
        filename: 'price.pdf',
        path: attachmentPath
      }
    ]
  };

  await transporter.sendMail(mailOptions);
}
