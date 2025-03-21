// server/lib/mailer.js
import nodemailer from 'nodemailer';
import xlsx from 'xlsx';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Создаем транспорт для отправки писем
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
 * Генерирует Excel-файл с прайс-листом
 * @param {Array} products - Массив товаров из базы данных
 * @returns {Promise<string>} - Путь к сгенерированному Excel файлу
 */
export async function generateExcelPriceList(products) {
  // Создаем новый Excel-файл
  const workbook = xlsx.utils.book_new();
  
  // Преобразуем товары в формат для Excel
  const productData = products.map(product => ({
    'Название': product.title,
    'Описание': product.description,
    'Цена (опт)': product.price || 'По запросу',
    'Артикул': product._id
  }));
  
  // Создаем лист с данными
  const worksheet = xlsx.utils.json_to_sheet(productData);
  
  // Добавляем лист в книгу
  xlsx.utils.book_append_sheet(workbook, worksheet, 'Прайс-лист');
  
  // Создаем временный файл для сохранения
  const tempDir = path.join(process.cwd(), 'tmp');
  
  // Проверяем существование директории, если нет - создаем
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }
  
  const fileName = `price-list-${Date.now()}.xlsx`;
  const filePath = path.join(tempDir, fileName);
  
  // Записываем файл
  xlsx.writeFile(workbook, filePath);
  
  return filePath;
}

/**
 * Отправляет письмо с прайс-листом в виде Excel-файла
 * @param {string} toEmail - Email получателя
 * @param {Array} products - Массив товаров для прайс-листа
 * @returns {Promise<void>}
 */
export async function sendPriceByEmail(toEmail, products) {
  try {
    // Генерируем Excel-файл
    const excelFilePath = await generateExcelPriceList(products);
    
    // Формируем HTML для письма с корпоративным стилем
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background-color: #1f2937;
            color: white;
            padding: 20px;
            text-align: center;
          }
          .content {
            padding: 20px;
            background-color: #f9f9f9;
          }
          .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>VOSTOK TRADE COMPANY</h1>
          </div>
          <div class="content">
            <h2>Прайс-лист на продукцию</h2>
            <p>Уважаемый клиент!</p>
            <p>Благодарим вас за интерес к нашей продукции. В прикрепленном файле вы найдете актуальный прайс-лист.</p>
            <p>Если у вас возникнут вопросы, пожалуйста, свяжитесь с нами по контактам, указанным на нашем сайте.</p>
            <p>С уважением,<br>Команда VOSTOK TRADE COMPANY</p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} VOSTOK TRADE COMPANY. Все права защищены.</p>
          </div>
        </div>
      </body>
      </html>
    `;
    
    // Настройки письма
    const mailOptions = {
      from: `"VOSTOK TRADE COMPANY" <${process.env.SMTP_USER}>`,
      to: toEmail,
      subject: 'Прайс-лист VOSTOK TRADE COMPANY',
      html: htmlContent,
      attachments: [
        {
          filename: 'price-list.xlsx',
          path: excelFilePath
        }
      ]
    };
    
    // Отправляем письмо
    await transporter.sendMail(mailOptions);
    
    // Удаляем временный файл после отправки
    fs.unlink(excelFilePath, (err) => {
      if (err) console.error('Ошибка при удалении временного файла:', err);
    });
    
    return true;
  } catch (error) {
    console.error('Ошибка при отправке письма:', error);
    throw error;
  }
}