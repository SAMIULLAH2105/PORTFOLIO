import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
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
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
