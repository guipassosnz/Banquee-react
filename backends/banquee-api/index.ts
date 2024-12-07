import express from "express";
import cors from "cors";

const server = express();

server.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const port = 5800;

// rotas ou endpoints

server.get("/", (req, res) => {
  res.send("Hello World!");
});

server.post("/get-user-name", (req, res) => {
  res.status(200).json({
    mainTitle: "Banking starts here.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    checklistItems: [
      "Instant transfers",
      "Saving accounts",
      "Payment wordlwide",
      "100% mobile banking",
    ],
    openAccountButtonLabel: "Open Account",
    compareCardsButtonLabel: "Compare cards",
    bannerImage: "cards.svg",
  });
});

server.listen(port, () => {
  console.log(`Example server listening on port ${port}`);
});
