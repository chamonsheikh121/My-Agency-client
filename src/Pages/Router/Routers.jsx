
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import HomePage from '../HomePage/HomePage';
import OurService from '../ServicePage/OurService';
import ServiceDetailsPage from '../ServiceDetailsPage/ServiceDetailsPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import ProjectDetailsPage from '../ProjectsPage/Components/ProjectDetailsPage';

const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
               path:'services',
                element: <OurService/>
            },
            {
               path:'projects',
                element: <ProjectsPage/>
            },
            {
               path:'project/details',
                element: <ProjectDetailsPage/>
            },
            {
               path:'services/:id',
                element: <ServiceDetailsPage/>
            },
        ]
    }
])
export default routers;