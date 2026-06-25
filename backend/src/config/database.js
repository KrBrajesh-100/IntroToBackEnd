import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstant = await mongoose.connect
    (`${process.env.MONGODB_URI}`)
    console.log(`\n MongoDB connected !!
     ${connectionInstant.connection.host}`);


  } catch (error) {
    console.log("MongoDB connection failed", error);
    process.exit(1)
  }
}

export default MongoDB;