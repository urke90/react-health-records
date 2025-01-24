import { Timestamp } from 'firebase/firestore';
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
  firstName: z.string().trim().min(1, 'First name is required'),
  lastName: z.string().trim().min(1, 'Last name is required'),
  birthDate: z.date({ required_error: 'Date of birth is required' }).optional(),
  profileImg: z.string().trim().optional(), // * add .url() method if later in the app i decide to store user images (probably with google)???
  email: z.string().trim().email('Please provide valid email address'),
  allergies: z.string().trim().optional(),
  specialNotes: z.string().trim().optional(),
  address: z.object({
    state: z.string().trim().min(3, 'State is required'),
    city: z.string().trim().min(3, 'City is required'),
    street: z.string().trim().min(3, 'Street is required'),
    phone: z.string().trim().min(3, 'Phone is required'),
  }),
});

export type IUserProfileSchema = z.infer<typeof userProfileSchema>;

export const userProfileSchemaDTO = userProfileSchema.extend({
  id: z.string().trim(),
  createdAt: z.instanceof(Timestamp),
  updatedAt: z.instanceof(Timestamp),
  birthDate: z.instanceof(Timestamp).optional(),
});

export type IUserProfileSchemaDTO = z.infer<typeof userProfileSchemaDTO>;

/******************************** USER  ********************************/

/******************************** MEDICAL EXAMINATION ********************************/

export const baseMedicalExaminationSchema = z.object({
  appointmentTime: z.date({
    required_error: 'Appointment time is required',
    message: 'Please add valid date and time',
  }),
  doctor: z.object({
    name: z.string().trim().optional(),
    office: z.string().trim().optional(),
  }),
  symptomes: z.string().trim().optional(),
  specialNotes: z.string().trim().optional(),
  createNotification: z.boolean(),
  // createdAt: z.instanceof(Timestamp),
  // updatedAt: z.instanceof(Timestamp),
});

export type IBaseMedicalExaminationSchema = z.infer<typeof baseMedicalExaminationSchema>;

/******************************** MEDICAL EXAMINATION ********************************/
