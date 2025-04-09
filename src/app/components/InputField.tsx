import { UseFormRegister } from "react-hook-form"
import { FormData } from "../js/form-schema"

interface Props {
	register: UseFormRegister<FormData>
	field: keyof FormData
	placeholder: string
	errorMessage?: string
	variant?: "regular" | "large"
}

const InputField: React.FC<Props> = ({
	register,
	field,
	placeholder,
	errorMessage,
	variant = "regular",
}) => {
	return (
		<div className="text-left">
			<div className="text-[1.3rem] w-full">
				<span className="font-extrabold block mb-2">{placeholder}*</span>
				{variant === "regular" ? (
					<input
						{...register(field)}
						className="outline-none border border-input-border rounded-sm p-3 w-full"
					/>
				) : (
					<textarea
						{...register(field)}
						className="outline-none border border-input-border rounded-sm p-3 w-full resize-none"
						rows={4}
					/>
				)}
			</div>
			{errorMessage && (
				<p className="text-red-500 text-sm mt-1">{errorMessage}</p>
			)}
		</div>
	)
}

export default InputField
