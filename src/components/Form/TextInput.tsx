import { UseFormRegister } from "react-hook-form"
import { FormData } from "./form-schema"

interface Props {
	register: UseFormRegister<FormData>
	field: keyof FormData
	placeholder: string
	errorMessage?: string
	variant?: "regular" | "large"
	value?: string
	maxWordLength?: number
}

const TextInput: React.FC<Props> = ({
	register,
	field,
	placeholder,
	errorMessage,
	variant = "regular",
	value,
	maxWordLength,
}) => {
	const wordCount = value?.trim().split(/\s+/).length

	return (
		<div className="text-left">
			<div className="text-[1.3rem] w-full">
				<div className="w-full flex justify-between items-center">
					<span className="font-extrabold block mb-2">{placeholder}*</span>
					{maxWordLength && wordCount && (
						<span
							style={{ color: wordCount > maxWordLength ? "red" : "green" }}
						>
							{wordCount}/{maxWordLength}
						</span>
					)}
				</div>
				{variant === "regular" ? (
					<input
						{...register(field)}
						className="outline-none border border-input-border rounded-sm p-3 w-full h-17"
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

export default TextInput
