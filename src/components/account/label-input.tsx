// React Hook Type imports
import { type UseFormRegisterReturn } from 'react-hook-form'

// Props Type
interface Props {
  title: string
  id: string
  type: string
  required?: boolean
  register: UseFormRegisterReturn<string>
  error?: string | undefined
}

const LabelInput = ({ title, id, required = false, type, register, error }: Props) => {
  return (
    <>
      <label htmlFor={id} className='font-semibold [&>input]:font-normal space-y-2'>{title} {required ? <span className='text-red-800'>*</span> : <span />}
        <input type={type} className='border-border border p-2 w-full' {...register} />
      </label>
      {
        error !== undefined
          ? (
            <p className='text-red-700'>{error?.toString()}</p>
          )
          : null
      }

    </>
  )
}

export default LabelInput
