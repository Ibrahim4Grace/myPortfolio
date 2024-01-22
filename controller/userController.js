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
 
const contactPost = async (req, res) => {
  try {
      const { name, email, subject, message } = req.body;

      // Build email message
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

      // Configure email options
      const mailOptions = {
          from: process.env.NODEMAILER_EMAIL,
          to: process.env.DESTINATION_EMAIL,
          subject: 'New Message from your Portfolio!',
          html: msg,
      };

      // Send email
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
        // Send a success response to the client
        res.status(200).json({ success: true, message: 'Email sent successfully' })
  } catch (err) {
      console.error('Error:', err);

      // Respond to the client with an error status
      res.status(500).send('Internal Server Error');
  }
};

  
module.exports = ({ myPortfolio, contactPost});


