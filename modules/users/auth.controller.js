const User = require("./user.model");

const register = async (request, response) => {
  const { email, password } = request.body;

  //checling user email availability
  const emailExists = await User.findOne({ email });
  if (emailExists) {
    return response.status(400).json({ error: "email already in use" });
  }

  const user = await User.create({ ...request.body });
  response.status(201).json({ user });
};


module.exports={register}