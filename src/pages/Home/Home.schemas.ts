import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(1, { message: 'This field is required' }),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, { message: 'This field is required' })
    .email({ message: 'Please provide a valid email' }),
  phone: z.union([
    z
      .string()
      .trim()
      .regex(
        /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/gi,
        'Please provide a valid phone number',
      ),
    z.literal(''),
  ]),
  message: z.string().trim().min(1, { message: 'This field is required' }),
});
