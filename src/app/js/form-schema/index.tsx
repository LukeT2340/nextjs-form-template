import * as yup from "yup"

const schema = yup.object().shape({
	description: yup
		.string()
		.test("word-count", "Description must be 25 words or less", (value) => {
			if (!value) return false
			const wordCount = value.trim().split(/\s+/).length
			return wordCount <= 25
		})
		.required("Description is required"),
	firstName: yup.string().required("First name is required"),
	lastName: yup.string().required("Last name is required"),
	email: yup.string().email("Invalid email").required("Email is required"),
	mobile: yup
		.string()
		.matches(/^\d{10}$/, "Mobile number must be 10 digits")
		.required("Mobile number is required"),
	state: yup
		.string()
		.oneOf(["NSW", "QLD", "NT"], "State must be NSW, QLD, or NT")
		.required("State is required"),
	postcode: yup
		.string()
		.matches(/^\d{4}$/, "Postcode must be a 4-digit number")
		.required("Postcode is required"),
	recievePromotions: yup.boolean().required(),
	agreeToTerms: yup
		.boolean()
		.oneOf([true], "You must accept the terms and conditions")
		.required(),
})

export type FormData = yup.InferType<typeof schema>

export default schema
