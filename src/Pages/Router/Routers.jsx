
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import HomePage from '../HomePage/HomePage';
import OurService from '../ServicePage/OurService';
import ServiceDetailsPage from '../ServiceDetailsPage/ServiceDetailsPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import ProjectDetailsPage from '../ProjectsPage/Components/ProjectDetailsPage';
import WhoWeAre from '../WhoWeAre/WhoWeAre';

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
               path:'who_we_are',
                element: <WhoWeAre/>
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