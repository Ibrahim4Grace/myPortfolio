const express = require(`express`)
const router = express.Router();
const nodemailer = require(`nodemailer`);
const ejs = require(`ejs`);



// Send email to the applicant
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD
    }
});



 // admin DASHBOARD
 const myPortfolio = (req, res) => {
    res.render('index'); 
};
 
const sendEmail = (name, email, subject, message) => {
    const msg = `
      <p>Dear Korede Agboola, You have a new message from your portfolio site.</p>
      <p>Here is the sender information:</p>
      <ul>
          <li>Full Name: ${name}</li>
          <li>Email: ${email}</li>
          <li>Subject: ${subject}</li>
          <li>Message: ${message}</li>
      </ul>
      <p>Best regards</p>
    `;
  
    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: process.env.DESTINATION_EMAIL,
      subject: 'New Message from your Portfolio!',
      html: msg,
    };
  
    return transporter.sendMail(mailOptions);
  };
  
  const contactPost = async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
  
      // Send email
      await sendEmail(name, email, subject, message);
      console.log('Email sent successfully');
    } catch (err) {
      console.error('Error:', err);
      res.status(500).send('Internal Server Error');
    }
  };
  
module.exports = ({ myPortfolio, contactPost});


