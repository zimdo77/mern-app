import mongoose from "mongoose";

// async function is used because await is used
export const connectDB = async () => {
  try {
    // MongoDB URI in the .env - can set database name after ...mongodb.net/
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB CONNECTED SUCCESSFULLY");
  } catch (error) {
    console.error("ERROR CONNECTING TO MONGODB.", error);
    process.exit(1); // exit with failure
  }
};
