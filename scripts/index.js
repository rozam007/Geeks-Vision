const dotenv = require('dotenv');
const path = require('path');

const loadEnv = (envFile) => {
  try {
    const envPath = path.resolve(process.cwd(), envFile);
    const result = dotenv.config({ path: envPath });

    if (result.error) {
      console.log(`Could not load ${envFile}:`, result.error.message);
    } else {
      console.log(`Loaded environment variables from ${envFile}:`);
      console.log(result.parsed);
    }
  } catch (error) {
    console.error(`Error loading ${envFile}:`, error.message);
  }
};

// List of potential env files used by Next.js
const envFiles = [
  './.env',
];

console.log('Environment Variables Used in Build:');
envFiles.forEach((file) => loadEnv(file));

// Runtime environment variables
console.log('\nRuntime Environment Variables:');
console.log(process.env);
