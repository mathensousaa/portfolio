export default function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="w-full border-t border-b-4 border-b-primary bg-secondary/25 p-3 md:p-6">
			<div className="flex items-center justify-between">
				<h2 className="text-primary">SIRE-EDU</h2>© {currentYear} Todos os direitos reservados
			</div>
		</footer>
	)
}
