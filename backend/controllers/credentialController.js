import User from "../models/userSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

class credentialController {
  static userRegistration = async (req, res) => {
    // res.send("register page")
    const { name, email, password } = req.body;
    try {
      if (name && email && password) {
        const isUser = await User.findOne({ email: email });
        if (isUser) {
          return res
            .status(400)
            .json({ message: "User Already Exists", isUser });
        } else {
          //password hashing
          const genSalt = await bcryptjs.genSalt(10);
          const hashPassword = await bcryptjs.hash(password, genSalt);

          //saving user
          const newUser = User({
            name,
            email,
            password: hashPassword,
          });
          const registerUser = await newUser.save();
          if (registerUser) {
            return res
              .status(201)
              .json({ message: "User Registered Successfully" });
          } else {
            return res.status(400).json({ message: "User details not found" });
          }
        }
      } else {
        return res.status(400).json({ message: "All fields are Required" });
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  static userLogin = async (req, res) => {
    const { email, password } = req.body;
    const JWT_TOKEN = "SPORTS-MANAGEMENT-SYSTEM";

    try {
      if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const isUser = await User.findOne({ email: email });

      if (!isUser) {
        return res.status(400).json({ message: "User is not Registered" });
      }

      const isPasswordCorrect = await bcryptjs.compare(
        password,
        isUser.password
      );

      if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }

      const token = jwt.sign({ userId: isUser._id }, JWT_TOKEN, {
        expiresIn: "2d",
      });

      return res
        .status(200)
        .json({ message: "Login Success", token, name: isUser.name });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server Error", error: error.message });
    }
  };
}

export default credentialController;
