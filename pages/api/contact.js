import { mailOptions, transporter } from "../../config/nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    // if (!data.email || !data.message) {
    // 	return res.status(400).json({ message: "Bad request" })
    // }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `Poruka od ${data.email}`,
        html: `<h2>Poruka od ${data.email}</h2><p>${data.message}</p><p>Tel:${data.tel}</p>`,
      });
      return res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err.message });
    }
  }
  res.status(400).json({ message: "Bad Request" });
};

export default handler;
