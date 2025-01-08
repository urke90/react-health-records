import { z } from 'zod';

// ----------------------------------------------------------------

export const registerFormSchema = z.object({
  email: z.string().trim().email('Please enter valid email address'),
  password: z.string().trim().min(8, 'Password must be at least 8 characters'),
  name: z.string().trim().min(1, 'Name is required'),
});

export type IRegisterForm = z.infer<typeof registerFormSchema>;
