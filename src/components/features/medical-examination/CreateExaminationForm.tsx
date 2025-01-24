import Button from '@/components/ui/Button';
import DatePicker from '@/components/ui/DatePicker';
import Input from '@/components/ui/Input';
import RHFChecbox from '@/components/ui/RHFInputs/RHFChecbox';
import Textarea from '@/components/ui/Textarea';
import { baseMedicalExaminationSchema, IBaseMedicalExaminationSchema } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, FormProvider, useForm } from 'react-hook-form';

// ----------------------------------------------------------------

interface ICreateUpdateExaminationFormProps {
  isEdit?: boolean;
}

const CreateExaminationForm: React.FC<ICreateUpdateExaminationFormProps> = ({ isEdit = false }) => {
  const methods = useForm<IBaseMedicalExaminationSchema>({
    resolver: zodResolver(baseMedicalExaminationSchema),
    defaultValues: {
      appointmentTime: new Date(),
      doctor: {
        name: '',
        office: '',
      },
      specialNotes: '',
      symptomes: '',
      createNotification: false,
    },
  });

  const {
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
      isValid,
      // touchedFields: { appointmentTime },
      dirtyFields: { appointmentTime },
    },
    control,
    watch,
    register,
  } = methods;

  const onSubmit = (data: IBaseMedicalExaminationSchema) => {
    console.log('data u onSubmit', data);
  };

  const latestAppontmentTime = new Date().setHours(23, 30, 0);

  return (
    <div className="flex flex-col gap-2">
      <p className="p1-bold">New Examination Record</p>
      <FormProvider {...methods}>
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
                dateFormat="MMMM d, yyyy h:mm aa"
                minTime={new Date()}
                maxTime={new Date(latestAppontmentTime)}
                errorMessage={errors.appointmentTime?.message}
              />
            )}
          />

          <Input
            label="Doctor name"
            {...register('doctor.name')}
            errorMessage={errors.doctor?.name?.message}
          />
          <Input
            label="Office"
            {...register('doctor.office')}
            errorMessage={errors.doctor?.office?.message}
          />
          <Input
            label="Symptoms"
            {...register('symptomes')}
            errorMessage={errors.symptomes?.message}
          />
          <Textarea
            label="Special Notes"
            {...register('specialNotes')}
            errorMessage={errors.specialNotes?.message}
          />
          <RHFChecbox name="notification" label="Create notification?" />
          <Button type="submit" className="mt-2" disabled={isSubmitting || !appointmentTime}>
            Submit
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateExaminationForm;
