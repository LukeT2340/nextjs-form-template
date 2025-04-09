import Form from "./components/Form"

export default function Home() {
	return (
		<div className="h-[calc(100vh-44px)] flex items-center justify-center bg-cover bg-no-repeat bg-[url('/assets/images/form-background.jpg')]">
			<Form />
		</div>
	)
}
