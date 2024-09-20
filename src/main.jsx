import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/Main/MainPage.jsx';
import AboutPage from './pages/AboutPage/AboutPage.jsx';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage.jsx';
import CvPage from './pages/CvPage/CvPage.jsx';

const router = createBrowserRouter([
	{
		path: '/react-profile/',
		element: <App/>,
		children: [
			{
				path: '/react-profile/',
				element: <MainPage/>
			},
			{
				path: '/react-profile/about',
				element: <AboutPage/>
			},
			{
				path: '/react-profile/projects',
				element: <ProjectsPage/>
			},
			{
				path: '/react-profile/cv',
				element: <CvPage/>
			}
		]
	}
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router}/>
	</StrictMode>
);
