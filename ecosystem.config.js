// module.exports = [
//   {
//     script: "./dist/index.js",
//     name: "app",
//     exec_mode: "cluster",
//     interpreter: "none",
//   },
// ];

module.exports = {
  apps: [
    {
      name: "app",
      script: "npm run start",
      interpreter: "none",
      exp_backoff_restart_delay: 1000,
    },
  ],
};
