const Claim = require("../models/Claim.model");
const nodemailer = require("nodemailer");

module.exports.claimsController = {
  addClaims: async (req, res) => {
    try {
      const { email, text, phone } = req.body;

      const transporter = nodemailer.createTransport({
        host: "smtp.mail.ru",
        port: 465,
        secure: true,
        auth: {
          user: "perotravel@mail.ru",
          pass: "MU3gzdDKr52dkJw0fY8G",
        },
      });

      await transporter.sendMail({
        from: "<perotravel@mail.ru>",
        to: `${email}`,
        subject: "Message from Pero Travel",
        text: "Поздравляю, ваша заявка успешно отправлена!",
        html: "Поздравляю, ваша заявка успешно отправлена!",
      });

      const claim = await Claim.create({
        email,
        text,
        phone,
      });
      res.json(claim);
    } catch (e) {
      res.json({ error: e.toString() });
    }
  },
};
