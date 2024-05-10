import type {
  Path,
  FormState,
  UseFormGetFieldState,
  UseFormRegister,
} from 'react-hook-form';
import { cn } from '../../../lib/tailwind';
import type { Contact } from '../Home.types';

type ContactInputProps = {
  id: Path<Contact>;
  label: string;
  type?: 'text' | 'email' | 'textarea';
  formState: FormState<Contact>;
  getFieldState: UseFormGetFieldState<Contact>;
  register: UseFormRegister<Contact>;
};

export const ContactInput = ({
  id,
  label,
  type,
  formState,
  getFieldState,
  register,
}: ContactInputProps) => {
  const attributes = {
    id,
    type,
    ...register(id),
    className: cn(
      'w-full p-2 text-xl font-bold focus-visible:bg-primary focus-visible:outline-none dark:bg-black dark:text-white dark:focus-visible:bg-secondary',
      type === 'textarea' && 'block resize-none',
    ),
  };
  const fieldState = getFieldState(id, formState);
  const errorMessage = fieldState.error?.message;

  return (
    <>
      <label
        htmlFor={id}
        className="br-border flex justify-between p-2 font-bold sm:text-xl md:text-2xl"
      >
        <span className="uppercase">{label}</span>
        {errorMessage && <span>{errorMessage}</span>}
      </label>
      <div className="bl-border">
        {type === 'textarea' ?
          <textarea rows={5} {...attributes}></textarea>
        : <input key={id} {...attributes} />}
      </div>
    </>
  );
};
