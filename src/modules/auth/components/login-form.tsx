import { useForm } from 'react-hook-form'
import { loginSchema, type LoginSchema } from '@auth/schemas/login-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/modules/core/components/ui/form'
import { Input } from '@/modules/core/components/ui/input'
import { Button } from '@/modules/core/components/ui/button'
import PasswordToggleInput from '@/modules/core/components/ui/password-toggle-input'
import { Link } from 'react-router-dom'

export default function LoginForm() {
	const form = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	function onFormSubmit(values: LoginSchema) {
		console.log(values)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onFormSubmit)} className="space-y-4">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>E-mail</FormLabel>
							<FormControl>
								<Input placeholder="Insira seu e-mail" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="flex w-full justify-between">
								Senha{' '}
								<Link to="/esqueci-a-senha" className="font-normal text-primary hover:underline">
									Esqueceu a senha?
								</Link>
							</FormLabel>
							<FormControl>
								<PasswordToggleInput placeholder="Insira sua senha" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="w-full">
					Acessar
				</Button>
			</form>
		</Form>
	)
}
