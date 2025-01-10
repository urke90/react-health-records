import { z } from 'zod';

// ----------------------------------------------------------------

/******************************** AUTH  ********************************/

export const registerFormSchema = z.object({
  email: z.string().trim().email('Please enter valid email address'),
  password: z.string().trim().min(6, 'Password must be at least 6 characters'),
  userName: z.string().trim().min(1, 'Name is required'),
});

export type IRegisterForm = z.infer<typeof registerFormSchema>;

export const loginFormSchema = z.object({
  email: z.string().trim().email('Please enter valid email address'),
  password: z.string().trim().min(6, 'Password must be at least 6 characters'),
});

export type ILoginForm = z.infer<typeof loginFormSchema>;

/******************************** AUTH  ********************************/

/******************************** USER  ********************************/

export const userProfileSchema = z.object({
  // id: z.string().trim();
  userName: z.string().trim().min(3, 'Username is required and must be at least 3 characters long'),
  firstName: z
    .string()
    .trim()
    .min(3, 'First name is required and must be at least 3 characters long'),
  lastName: z
    .string()
    .trim()
    .min(3, 'Last name is required and must be at least 3 characters long'),
  birthDate: z.date({ required_error: 'Date of birth is required' }).optional(),
  profileImg: z.string().trim().url().optional(),
  email: z.string().trim().email('Please provide valid email address'),
  address: z.object({
    state: z.string().trim().min(3, 'State is required'),
    city: z.string().trim().min(3, 'City is required'),
    street: z.string().trim().min(3, 'Street is required'),
    phone: z.string().trim().min(3, 'Phone is required'),
  }),
  allergies: z.string().trim().optional(),
  specialNotes: z.string().trim().optional(),
});

export type IUserProfileSchema = z.infer<typeof userProfileSchema>;

/******************************** USER  ********************************/
