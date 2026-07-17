/** @type {import('syncpack').RcFile} */
const config = {
  versionGroups: [
    {
      dependencies: ["@flags-sdk/vercel"],
      packages: ["**"],
      pinVersion: "1.3.0",
    },
    {
      dependencies: ["@vercel/flags-core"],
      packages: ["**"],
      pinVersion: "1.4.0",
    },
  ],
}

module.exports = config

