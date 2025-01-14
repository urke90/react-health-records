import { useState } from 'react';

// ----------------------------------------------------------------

enum ERecordType {
  MEDICAL_EXAMINATION = 'MEDICAL_EXAMINATION',
  VACCINATION = 'VACCINATION',
  MEDICINE = 'MEDICINE',
}

const CreateRecord: React.FC = (props) => {
  const [recordType, setRecordType] = useState<ERecordType>();
  return (
    <div className="p-5 ">
      <h2 className="h2-bold mb-4">Create new record</h2>
      <div className="flex flex-col gap-4 md:flex-row ">
        <MedicalExaminationCard onClick={() => setRecordType(ERecordType.MEDICAL_EXAMINATION)} />
        <VaccinationRecordCard onClick={() => setRecordType(ERecordType.VACCINATION)} />
        <MedicineRecordCard onClick={() => setRecordType(ERecordType.MEDICINE)} />
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
      className="flex flex-col gap-2 shadow-lg bg-slate-100 p-3 cursor-pointer hover:-translate-y-2 transition flex-1 text-emerald-500"
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
      className="flex flex-col gap-2 shadow-lg bg-slate-100 p-3 cursor-pointer hover:-translate-y-2 transition flex-1 text-amber-500"
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
      className="flex flex-col gap-2 shadow-lg bg-slate-100 p-3 cursor-pointer hover:-translate-y-2 transition flex-1 text-violet-500"
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
