const mongoose = require("mongoose");
const next = require("next");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
    "<password>",
    process.env.DATABASE_PASSWORD
);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log("DB connection successful!");

        const dev = process.env.NODE_ENV !== "production";
        const nextServer = next({ dev });
        const handle = nextServer.getRequestHandler();

        try {
            const port = 3000;
            console.log("Preparing Next.js server...");
            nextServer.prepare().then(() => {
                console.log("Next.js server prepared.");

                const app = require("./app");

                app.get("*", (req, res) => {
                    return handle(req, res);
                });

                app.listen(port, () => {
                    console.log(`App running on port ${port}....`);
                });
            });

        } catch (error) {
            console.log("Error:", error);
        }
    })
    .catch(error => {
        console.error("DB connection error:", error);
    });
