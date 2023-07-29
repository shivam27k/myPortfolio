import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'

const App = () => {
	const Layout = () => {
		return (
			<div className="app">
				<Outlet />
			</div>
		)
	}
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					path: '/myPortfolio',
					element: <Home />,
				},
				{
					path: '/myPortfolio/*',
					element: <NotFound />,
				},
			],
		},
	])

	return (
		<div>
			<RouterProvider router={router} />
		</div>
	)
}

export default App
