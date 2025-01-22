export enum ERecordType {
  MEDICAL_EXAMINATION = 'MEDICAL_EXAMINATION',
  VACCINATION = 'VACCINATION',
  MEDICINE = 'MEDICINE',
}

/*************************************** THESE ARE FOR PLANNING APPLICATION MADE, REMOVE THEM LATER IF NOT NEEDED ******************************/

export interface IUserDTO {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  birthDate: number | string;
  profileImg: string | null;
  address: {
    state: string;
    city: string;
    street: string;
    phone: string;
    email: string;
  };
  medicalExamination: IMedicalExaminationRecordDTO[]; // this is just string[] (id[]) and during fetch it will be populated with documents from collections
  vaccination: IVaccinationRecordDTO[]; // this is just string[] (id[]) and during fetch it will be populated with documents from collections
  activeMedicines: IMedicineRecordDTO[];
  allergies?: string;
  specialNotes?: string;
  createdAt: number; // ! Looks like I get this timestamp (1233212321) as number
  updatedAt: number; // ! Looks like I get this timestamp (1233212321) as number
}

interface IMedicalExaminationRecordDTO {
  id: string;
  visited: string; // datum posete
  purposeOfVisit: string;
  prescription: string;
  symptomes?: string | string[];
  medicines: IMedicineRecordDTO[];
  followUpExamination: number | string | null; // da li ovo treba da konvertujem u timestamp
  createdAt: number;
  updatedAt: number;
}

interface IMedicineRecordDTO {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  reminderInterval: number; // time interval in milliseconds between reminders
  lastReminderSent: number; // timestamp to track when last reminder was sent
  sideEffects?: string;
  prescribedBy?: string;
  isActive: boolean;
  createdAt: number;
  updatedAt: number;
}

interface IVaccinationRecordDTO {
  id: string;
  name: string;
  manufacturer?: string;
  dosagesReceived: {
    id: string;
    date: number; // timestamp
    value: number;
    createdAt: number | string;
  }[];
  followUpReminder?: number;
  lastReminderTime?: number;
  createdAt: number;
  updatedAt: number;
}

/*************************************** THESE ARE FOR PLANNING APPLICATION MADE, REMOVE THEM LATER IF NOT NEEDED ******************************/
