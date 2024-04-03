import type { z } from 'zod';
import type { contactSchema } from './Home.schemas';

export interface FeaturedProject {
  id: string;
  heading: string;
  cover: string;
}

export type Contact = z.infer<typeof contactSchema>;
