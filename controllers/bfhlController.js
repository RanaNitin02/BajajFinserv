const { processPayload } = require("../utils/processData");
const { fullName, dob, email, rollNumber } = require("../config/config");

const processData = (req, res) => {
  const { data } = req.body;

  if (!data || !Array.isArray(data)) {
    return res.status(400).json({
      is_success: false,
      error: "Invalid input: 'data' must be a non-empty array",
    });
  }

  const user_id = `${fullName}_${dob}`;
  const result = processPayload(data);

  res.status(200).json({
    is_success: true,
    user_id,
    email,
    roll_number: rollNumber,
    ...result,
  });
};

module.exports = { processData };
