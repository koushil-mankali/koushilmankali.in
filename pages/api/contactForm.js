// const mail = require("@sendgrid/mail");

// mail.setApiKey(
//   "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"
// );

// let ContactForm = (req, res) => {
//   let { name, mail, mess } = req;

//   if (name == "" || mail == "" || mess == "") {
//     return res
//       .status(400)
//       .json({ status: fail, message: "Please Enter Valid Data!" });
//   }

//   console.log(name, mail, mess);

//   let msg = {
//     to: "koushilmankali@gmail.com",
//     from: mail,
//     subject: "Mail from koushilmankali.com",
//     text: mess,
//   };

//   mail.send(msg);
// };

// module.exports = ContactForm;
