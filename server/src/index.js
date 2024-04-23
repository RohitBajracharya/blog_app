import dotenv from "dotenv"
import { app } from "./app.js"
import connectDB from "./db/db.js"


dotenv.config()


const PORT = process.env.PORT || 8000

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("ERR: ", error);
            throw error;
        })
        app.listen(PORT, () => {
            console.log(`Server is running on PORT: ${PORT}`);
        })
    })
    .catch((error) => {
        console.error("MONGO DB connected failed!!! ", error.message);
    })

