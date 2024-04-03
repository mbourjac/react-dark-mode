import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(1, { message: 'This field is required' }),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, { message: 'This field is required' })
    .email({ message: 'Please provide a valid email' }),
  message: z.string().trim().min(1, { message: 'This field is required' }),
});
