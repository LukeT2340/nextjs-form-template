import { UseFormRegister } from "react-hook-form"
import { FormData } from "./form-schema"

interface Props {
  register: UseFormRegister<FormData>
  field: keyof FormData
  text: string
  errorMessage?: string
}

const CheckBox: React.FC<Props> = ({ register, field, text, errorMessage }) => {
  return (
    <div>
      <div className='flex items-start gap-7 text-left w-full text-[1.3rem]'>
        <input
          type='checkbox'
          id={field}
          {...register(field)}
          className='mt-1'
        />
        <label htmlFor={field} className='cursor-pointer text-[1.4rem]'>
          {text}
        </label>
      </div>
      {errorMessage && (
        <p className='text-red-500 text-sm mt-1'>{errorMessage}</p>
      )}
    </div>
  )
}

export default CheckBox
