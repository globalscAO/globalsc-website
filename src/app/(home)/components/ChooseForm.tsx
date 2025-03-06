
interface Props {
	handleClose: () => void
}

const ChooseForm: React.FC<Props> = ({ handleClose }) => {
	return (
		<section
			className="fixed top-0 left-0 bg-[#00000095] w-screen h-screen flex justify-center items-center z-50"
			onClick={handleClose}
		>
			<div
				className="w-1/2 max-lg:w-11/12 h-fit bg-[#11005a] rounded-3xl flex flex-col text-white justify-center items-center"
			>
				<div className="lg:p-8 max-lg:p-4">
					<p className="text-center text-sm">
						Você está preenchendo este formulário como indivíduo ou em nome de
						uma empresa?
					</p>
				</div>

				<div className="w-full flex h-52 max-lg:h-fit max-lg:pb-6 max-lg:pt-4 max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:px-8 max-lg:gap-2">
					{[
						{ title: "Individual", style: "rounded-bl-3xl", src: '/individual-form' },
						{ title: "Empresa", style: "rounded-br-3xl", src: '/enterprise-form' },
					].map((btn, index) => (
						<a key={index}
							href={btn.src}
							className={`w-1/2 max-lg:w-full flex items-center justify-center hover:bg-[#ffffff17] max-lg:bg-white max-lg:hover:text-white max-lg:text-[#11005a] text-xl max-lg:rounded-full ${btn.style} max-lg:p-2 max-lg:text-lg`}
						>
							{btn.title}
						</a>
					))}
				</div>
			</div>
		</section>
	)
}

export default ChooseForm
