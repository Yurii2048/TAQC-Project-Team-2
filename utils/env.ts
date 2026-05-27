import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });


const BASE_URL = process.env.BASE_URL;
const LOGIN = String(process.env.LOGIN);
const PASSWORD = String(process.env.PASSWORD);
const HEADLESS = process.env.HEADLESS === 'true';
const RETRIES = process.env.RETRIES;
const TIMEOUT = Number(process.env.TIMEOUT) || 30000;

export { BASE_URL, LOGIN, PASSWORD, HEADLESS, RETRIES, TIMEOUT };