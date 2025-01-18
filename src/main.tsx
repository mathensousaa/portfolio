import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@core/assets/index.css'
import { ReactQueryProvider } from '@core/lib/react-query/index.tsx'
import Router from '@core/components/router.tsx'
import { ThemeProvider } from '@core/contexts/theme-context'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ReactQueryProvider>
			<ThemeProvider defaultTheme="dark" storageKey="ui-theme">
				<Router />
			</ThemeProvider>
		</ReactQueryProvider>
	</StrictMode>,
)
