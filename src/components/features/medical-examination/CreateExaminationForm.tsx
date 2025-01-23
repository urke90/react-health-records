import Button from '@/components/ui/Button';
import DatePicker from '@/components/ui/DatePicker';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import { baseMedicalExaminationSchema, IBaseMedicalExaminationSchema } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

// ----------------------------------------------------------------

interface ICreateUpdateExaminationFormProps {
  isEdit?: boolean;
}

const CreateExaminationForm: React.FC<ICreateUpdateExaminationFormProps> = ({ isEdit = false }) => {
  const {
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    control,
    watch,
    register,
  } = useForm<IBaseMedicalExaminationSchema>({
    resolver: zodResolver(baseMedicalExaminationSchema),
    defaultValues: {
      appointmentTime: new Date(),
      doctor: {
        name: '',
        office: '',
      },
      specialNotes: '',
      symptomes: '',
    },
  });

  const onSubmit = (data: IBaseMedicalExaminationSchema) => {
    console.log('data u onSubmit', data);
  };

  console.log('watch', watch());
  // console.log('isValid', isValid);
  console.log('errors', errors);

  return (
    <div className="flex flex-col gap-2">
      <p className="p1-bold">New Examination Record</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 w-[min(500px,100%)]">
        <Controller
          name="appointmentTime"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <DatePicker
              label="Appontment Time"
              showTimeSelect
              onChange={onChange}
              onBlur={onBlur}
              selected={value}
              timeIntervals={5}
              minDate={new Date()}
              // minTime={new Date()}
              // maxTime={new Date().setHours(23,45,0)}
            />
          )}
        />

        <Input label="Doctor name" {...register('doctor.name')} />
        <Input label="Office" {...register('doctor.office')} />
        <Input label="Symptoms" {...register('symptomes')} />
        <Textarea label="Special Notes" {...register('specialNotes')} />
        <Button type="submit" className="mt-2" disabled={isSubmitting}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreateExaminationForm;
