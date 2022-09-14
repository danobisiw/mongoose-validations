const User = require("./user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const gnenerateToken=(user)=>{
 
  const token = jwt.sign(
    { id: user._id, email: user.email },
    "e0d5d47fa5561f4f67b25d2fedc70f182547f4994f27664d597e5f964980c685",
    {
      expiresIn: "1h",
    }
  );
  return{
    token,
    user,
  };
}


exports.register = async (request, response) => {
  const { email, password } = request.body;

  //checking user email availability
  const emailExists = await User.findOne({ email });
  if (emailExists) {
    return response.status(400).json({ error: "email already in use" });
  }
  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await User.create({ ...request.body, password: hashedPassword });

  const token = jwt.sign(
    { id: user._id, email: user.email },
    "e0d5d47fa5561f4f67b25d2fedc70f182547f4994f27664d597e5f964980c685",
    {
expiresIn: "1h"
    }
  );
const returnUser={
  token,
  user,
};

  response.status(201).json({ returnUser });
};

exports.login = async (request, response) => {
  const { email, password } = request.body;

  let user = await User.findOne({ email });
  if (!user) {
    return response.status(400).json({ message: "invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return
    response.status(400).json({ message: "invalid credentials" });
  }
 const token=gnenerateToken(user)

  response.status(200).json({ token });
  };
