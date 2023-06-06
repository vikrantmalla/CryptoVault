import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import { connectToMongoDB } from "@/helpers/lib/dbConnect";
import User from "@/model/user";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  connectToMongoDB().catch((err) => res.json(err));

  if (req.method === "POST") {
    if (!req.body) return res.status(400).json({ error: "Data is missing" });

    const { email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(409).json({ error: "User Already exists" });
    } else {
      try {
        const user = await User.create({
          email,
          password,
        });

        const responseData = {
          email: user.email,
          _id: user._id,
        };

        return res.status(201).json({
          success: true,
          message: 'Signup Sucessfully',
          user: responseData,
        });
      } catch (error: unknown) {
        if (error instanceof mongoose.Error.ValidationError) {
          for (let field in error.errors) {
            const msg = error.errors[field].message;
            return res.status(409).json({ error: msg });
          }
        }

        return res.status(500).json({ error: "Something went wrong" });
      }
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default handler;
