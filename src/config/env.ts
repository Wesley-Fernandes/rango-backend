import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  JWT_SECRET_CODE: z.string(),
  PORT: z.string().min(4).transform(Number),
  DATABASE_URL: z.string(),
});

export default envSchema.parse(process.env);
