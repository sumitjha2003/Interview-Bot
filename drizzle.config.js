/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:lR3ZNoJfvO2Y@ep-red-mud-a5xrb4ni.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
  };