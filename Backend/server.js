import nodemailer from "nodemailer";

// Vercel handles requests through serverless functions, so we use this format
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER, // Use environment variable for email user
        pass: process.env.SMTP_PASS, // Use environment variable for email password
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: "samiullah.codes@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `You have a new message from your contact form:
      
      Name: ${name}
      Email: ${email}
      Message: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    }
  } else {
    // Handle non-POST requests
    res.status(405).send("Method Not Allowed");
  }
}
