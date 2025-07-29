require("dotenv").config();

module.exports = {
  fullName: process.env.FULL_NAME,
  dob: process.env.DOB,
  email: process.env.EMAIL,
  rollNumber: process.env.ROLL_NUMBER,
  port: process.env.PORT || 3000,
};
