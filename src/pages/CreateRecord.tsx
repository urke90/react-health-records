import ExaminationCreateUpdateForm from '@/components/features/medical-examination/CreateExaminationForm';
import Button from '@/components/ui/Button';
import { ERecordType } from '@/types';
import { useState } from 'react';

// ----------------------------------------------------------------

const CreateRecord: React.FC = () => {
  const [chosenRecord, setChosenRecord] = useState<ERecordType>();
  return (
    <div className="p-5">
      <h2 className="h2-bold mb-4">New Record</h2>
      <div className="flex flex-col gap-4 md:flex-row">
        {!chosenRecord ? (
          <div className="grid grid-cols-auto-fit-200 gap-4 w-full">
            <MedicalExaminationCard
              onClick={() => setChosenRecord(ERecordType.MEDICAL_EXAMINATION)}
            />
            <VaccinationRecordCard onClick={() => setChosenRecord(ERecordType.VACCINATION)} />
            <MedicineRecordCard onClick={() => setChosenRecord(ERecordType.MEDICINE)} />
          </div>
        ) : (
          <div className="flex flex-col gap-10 flex-1">
            <div className="flex flex-wrap gap-3 w-[min(500px,100%)] [&>button]:flex-1">
              <Button onClick={() => setChosenRecord(ERecordType.MEDICAL_EXAMINATION)}>
                Examination
              </Button>
              <Button onClick={() => setChosenRecord(ERecordType.VACCINATION)}>Vaccination</Button>
              <Button onClick={() => setChosenRecord(ERecordType.MEDICINE)}>Medicine</Button>
            </div>
            <div>
              <ExaminationCreateUpdateForm />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

interface ICardProps {
  onClick: () => void;
}

const MedicalExaminationCard: React.FC<ICardProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col gap-2 shadow-lg bg-slate-100 p-5 cursor-pointer hover:-translate-y-2 transition flex-1 text-emerald-500"
    >
      <p className="p3-medium">Medical Examination</p>
      <ol className="flex flex-col gap-2 list-decimal pl-3.5">
        <li className="p4-medium">Doctor</li>
        <li className="p4-medium">Examination Date and reminder</li>
        <li className="p4-medium">Purpose of visit</li>
        <li className="p4-medium">Prescription</li>
        <li className="p4-medium">Symptomes</li>
        <li className="p4-medium">Medicines</li>
        <li className="p4-medium">Follow up examination reminder</li>
      </ol>
    </div>
  );
};

const VaccinationRecordCard: React.FC<ICardProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col gap-2 shadow-lg bg-slate-100 p-5 cursor-pointer hover:-translate-y-2 transition flex-1 text-amber-500"
    >
      <p className="p3-medium">Vaccination Record</p>
      <ol className="flex flex-col gap-2 list-decimal pl-3.5">
        <li className="p4-medium">Vaccine name</li>
        <li className="p4-medium">Manufacturer</li>
        <li className="p4-medium">Dosages Received</li>
        <ul className="pl-2 list-disc">
          <li className="p4-regular">Date received</li>
          <li className="p4-regular">Dosage</li>
        </ul>
        <li className="p4-medium">Track next dosage reminder</li>
        <li className="p4-medium">Track last dosage received</li>
      </ol>
    </div>
  );
};

const MedicineRecordCard: React.FC<ICardProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col gap-2 shadow-lg bg-slate-100 p-5 cursor-pointer hover:-translate-y-2 transition flex-1 text-violet-500"
    >
      <p className="p3-medium">Medicine Record</p>
      <ol className="flex flex-col gap-2 list-decimal pl-3.5">
        <li className="p4-medium">Medicine name</li>
        <li className="p4-medium">Dosage</li>
        <li className="p4-medium">Frequency</li>
        <li className="p4-medium">Prescriber</li>
        <li className="p4-medium">Mark as active</li>
        <li className="p4-medium">Set Reminder</li>
        <li className="p4-medium">Track last dosage received</li>
      </ol>
    </div>
  );
};

export default CreateRecord;
