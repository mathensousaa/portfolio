import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LinksScreen from '@/modules/links/screens/links'

export default function Router() {
	const router = createBrowserRouter([
		{
			path: '/links',
			element: <LinksScreen />,
		},
	])

	return <RouterProvider router={router} />
}
