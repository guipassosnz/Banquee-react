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

server.post("/hero-banner", (req, res) => {
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
server.post("/section-features", (req, res) => {
  res.status(200).json({
    mainTitle: "One app. <br/> One Banking.",
    featureItens: [
      {
        icon: "img/instant-transactions.svg",
        title: "Instant transactions",
        description:
          "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
      },
      {
        icon: "img/saving-accounts.png",
        title: "Saving accounts",
        description:
          "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
      },
      {
        icon: "img/mobile-banking.svg",
        title: "Mobile banking",
        description:
          "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
      },
      {
        icon: "img/badgeadv-stats.svg",
        title: "Advanced statistics",
        description:
          "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
      },
      {
        icon: "img/badgev-cards.svg",
        title: "Virtual Cards",
        description:
          "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
      },
      {
        icon: "img/badgev-cards.svg",
        title: "Virtual Cards",
        description:
          "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
      },
    ],
    bannerImage: "img/Phone.svg",
  });
});

server.listen(port, () => {
  console.log(`Example server listening on port ${port}`);
});
