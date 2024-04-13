const isProd = process.env.NODE_ENV === "production";

module.exports = {
  siteUrl: isProd ? "https://www.assistivteq.com/" : "http://localhost:3000",
  generateRobotsTXt: isProd,
};
