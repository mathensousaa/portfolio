import { forwardRef, type InputHTMLAttributes, useState } from 'react'
import { Input } from '../ui/input'
import { Button, buttonVariants } from '../ui/button'
import { cn } from '@core/lib/utils'
import { Eye, EyeOff } from 'lucide-react'

const PasswordToggleInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
	({ className, ...props }, ref) => {
		const [showPassword, setShowPassword] = useState(false)

		const togglePasswordVisibility = () => {
			setShowPassword(!showPassword)
		}

		return (
			<div className="relative">
				<Input
					ref={ref}
					type={showPassword ? 'text' : 'password'}
					{...props}
					className={cn('', className)}
				/>
				<Button
					variant="ghost"
					className={cn(
						buttonVariants({ variant: 'ghost', size: 'icon' }),
						'absolute top-0 right-0 bottom-0 my-auto hover:bg-transparent',
					)}
					onClick={(e) => {
						e.preventDefault()
						togglePasswordVisibility()
					}}
				>
					{!showPassword ? (
						<Eye className="h-5 w-5 shrink-0 text-input" />
					) : (
						<EyeOff className="h-5 w-5 shrink-0 text-input" />
					)}
				</Button>
			</div>
		)
	},
)

export default PasswordToggleInput
