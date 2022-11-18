import User from "../models/usermodel";
import { sign } from "jsonwebtoken";
export const createUser = async (req: any, res: any): Promise<any> => {
  try {
    const user = await User.create(req.body);
    const token: string = await sign(user.dataValues, "12324213", {
      expiresIn: "2 days",
    });
    return res
      .status(200)
      .json({ message: "User Created Successfully", user: user, token: token });
  } catch (e) {
    return res.status(400).json({ message: e });
  }
};

export const LoginUser = async (req: any, res: any): Promise<any> => {
  try {
    const user = await User.findOne({
      where: { username: req.body.username, password: req.body.password },
    });
    if (user) {
      const token: any = await sign(user?.dataValues, "12324213", {
        expiresIn: "2 days",
      });
      res.status(200).json({
        message: "User Loggedin Successfully",
        user: user,
        token: token,
      });
    } else {
      throw Error("Incorrect Username password");
    }
  } catch (e) {
    return res.status(400).json({ message: e });
  }
};
