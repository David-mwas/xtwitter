import express from "express";

const app = express();

const PORT = 5000;
app.listen(PORT, () => console.info(`server running on port ${PORT}`));
