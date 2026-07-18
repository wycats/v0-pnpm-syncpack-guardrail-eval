/** @type {import('syncpack').RcFile} */
const config = {
  versionGroups: [
    {
      dependencies: ["@flags-sdk/vercel"],
      packages: ["**"],
      pinVersion: "1.4.5",
    },
    {
      dependencies: ["@vercel/flags-core"],
      packages: ["**"],
      pinVersion: "1.7.0",
    },
  ],
}

module.exports = config

