import { Pool } from 'pg';
import axios from 'axios';

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

export const fetchModelAParameters = async () => {
  const client = await pool.connect();
  try {
    const res = await client.query('SELECT * FROM model_a_parameters');
    return res.rows;
  } finally {
    client.release();
  }
};

export const sendToInferenceService = async (data: any) => {
  const response = await axios.post(process.env.INFERENCE_SERVICE_URL, data);
  return response.data;
};