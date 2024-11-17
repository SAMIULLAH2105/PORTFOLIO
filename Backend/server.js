import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 8080;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(cors(
  {
    origin:[""],
    methods:["POST","GET"],
    credentials:true
  }
));

app.get("/",(req,res)=>{
  res.json("Hello");
})

// POST route to send email
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "samiullah21january@gmail.com", // Replace with your Gmail address
      pass: "bsnz wmqx tybr fhyb", // Replace with your Gmail App Password
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
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
