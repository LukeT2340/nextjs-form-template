import { UseFormRegister } from "react-hook-form"
import { FormData } from "./form-schema"

interface Props {
  register: UseFormRegister<FormData>
  field: keyof FormData
  options: string[]
  placeholder: string
  errorMessage?: string
}

const Dropdown: React.FC<Props> = ({
  register,
  field,
  options,
  placeholder,
  errorMessage,
}) => {
  return (
    <div className='text-left'>
      <div className='w-full text-[1.3rem]'>
        <label
          htmlFor={field}
          className='block cursor-pointer text-[1.4rem] mb-2'
        >
          {placeholder}
        </label>
        <select
          id={field}
          {...register(field)}
          className='border border-input-border rounded-sm p-3 w-full text-[1.3rem]'
        >
          <option value=''>Select an option</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {errorMessage && (
        <p className='text-red-500 text-sm mt-1'>{errorMessage}</p>
      )}
    </div>
  )
}

export default Dropdown
