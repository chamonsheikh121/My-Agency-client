
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import HomePage from '../HomePage/HomePage';
import OurService from '../ServicePage/OurService';
import ServiceDetailsPage from '../ServiceDetailsPage/ServiceDetailsPage';

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
               path:'projects',
                element: <HomePage/>
            },
            {
               path:'services',
                element: <OurService/>
            },
            {
               path:'services/:id',
                element: <ServiceDetailsPage/>
            },
        ]
    }
])
export default routers;