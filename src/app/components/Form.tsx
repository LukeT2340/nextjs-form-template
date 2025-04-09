"use client"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import axios, { AxiosError } from "axios"
import { toast } from "react-toastify"
import schema from "../js/form-schema"
import InputField from "./InputField"
import CheckBox from "./CheckBox"
import Dropdown from "./Dropdown"

interface Props {
	setSubmitted: (arg0: boolean) => void
}

const Form: React.FC<Props> = ({ setSubmitted }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	})

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onSubmit = async (data: any) => {
		try {
			await axios.post(`/api/submit`, data)
			setSubmitted(true)
		} catch (error) {
			console.log(error)
			const axiosError = error as AxiosError<{ message: string }>
			toast(
				axiosError.response?.data?.message ||
					axiosError.message ||
					"An error occurred"
			)
		}
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="bg-form-background rounded-[7px] text-center py-[40px] px-[75px]"
		>
			<div className="max-w-[524px] mx-auto mb-10">
				<h2>
					In 25 words or less, tell us how you would spend a perfect day with
					your plus one in Spain & Portugal?
				</h2>
			</div>
			<InputField
				register={register}
				placeholder="25 words or less"
				field="description"
				errorMessage={errors.description?.message}
				variant="large"
			/>
			<div className="grid mb-5 grid-cols-2 gap-y-4 gap-x-20">
				<InputField
					register={register}
					placeholder="First name"
					field="firstName"
					errorMessage={errors.firstName?.message}
				/>
				<InputField
					register={register}
					placeholder="Last name"
					field="lastName"
					errorMessage={errors.lastName?.message}
				/>
				<InputField
					register={register}
					placeholder="Email Address"
					field="email"
					errorMessage={errors.email?.message}
				/>
				<InputField
					register={register}
					placeholder="Mobile"
					field="mobile"
					errorMessage={errors.mobile?.message}
				/>
				<Dropdown
					register={register}
					options={["NSW", "QLD", "NT"]}
					placeholder="State"
					field="state"
					errorMessage={errors.state?.message}
				/>
				<InputField
					register={register}
					placeholder="Postcode"
					field="postcode"
					errorMessage={errors.postcode?.message}
				/>
			</div>
			<div className="max-w-[500px] mb-5 mx-auto">
				<CheckBox
					register={register}
					field="receivePromotions"
					text="I would like to hear the latest news and promotions from Contiki."
					errorMessage={errors.receivePromotions?.message}
				/>
				<CheckBox
					register={register}
					field="agreeToTerms"
					text="I’ve read and accept the terms and conditions and the privacy policy."
					errorMessage={errors.agreeToTerms?.message}
				/>
			</div>
			<div className="max-w-[547px] mb-5 mx-auto text-[1rem] leading-[1.3rem] font-light">
				<p>
					At the time of entry, entrants can also opt-in to receive marketing
					and promotional material from Contiki, ABN 46 121 XXX XXX. By
					opting-in, entrants agree that their PI will be collected and handled
					by Contiki and will be subject to their privacy policy which can be
					viewed at contiki.com/en-au/resources/legalstuff
				</p>
			</div>
			<button
				type="submit"
				className="bg-theme-green cursor-pointer mb-5 mx-auto flex justify-center items-center gap-2 w-[180px] h-[45px] rounded-[23px] border"
			>
				<span className="font-extrabold uppercase text-[1.4rem] leading-[1.7rem]">
					Submit
				</span>
				<img src={"/assets/images/arrow.svg"} alt="Chevron right" />
			</button>
			<div className="max-w-[658px] text-[0.9rem] leading-[1.2rem] mx-auto">
				<p>
					Conditions apply, see www.9now.nine.com.au/contiki. AU residents 18+.
					Entries close 11:59pm AEST 21/07/23 . Limit 1 entry per person. Draw
					10:30am AEST 22/07/24 at Anisimoff Legal, G13, 3 Amy Close, Wyong NSW
					2259. Winners published on website 24/07/24. Prizes: $25K AUD Contiki
					Travel Gift Card. INSERT PERMIT NUMBERS
				</p>
			</div>
		</form>
	)
}

export default Form
