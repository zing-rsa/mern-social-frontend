import { Routes, Route, Navigate, useParams } from 'react-router-dom';

import { Feed, Login, Signup, Profile, Dashboard, Users } from './views';
import NoAuth from './views/unauthorized/unauthorized';
import { useAuth } from './providers/auth.provider';
import NotFound from './views/notfound/notfound';
import AuthLoader from './components/auth-loader/auth-loader';
import Loader from './components/loader/loader';

function RouteHandler() {

    const { authLoading } = useAuth();

    return (
        <>
            {authLoading ?
                <AuthLoader />
                :
                <Routes>
                    <Route index element={<Navigate replace to="/feed" />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />

                    <Route path='/feed' element={
                        <ProtectedRoute component={(props) => <Feed {...props} />} />
                    } />
                    <Route path='/profile/:id' element={
                        <ProtectedRoute component={(props) => <Profile {...props} key={props.id} />} />
                    } />

                    <Route path='/admin'>

                        <Route index element={
                            <Navigate to='dashboard' />}
                        />
                        <Route index path='dashboard' element={
                            <AdminRoute component={(props) => <Dashboard {...props} />} />}
                        />
                        <Route path='users' element={
                            <AdminRoute component={(props) => <Users {...props} />} />}
                        />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>

            }
        </>
    );
}

const ProtectedRoute = ({ component, ...rest }) => {
    const { authenticated, authLoading } = useAuth();
    const { id } = useParams();

    if (authenticated === false) {
        let remark = 'Please log in to continue...'
        return <Navigate to="/login" replace state={{ remark }} />;
    }

    return component({ ...rest, id });
};

const AdminRoute = ({ component, ...rest }) => {
    const { authenticated, authLoading, user } = useAuth();

    if (authenticated === false) {
        let remark = 'Please log in to continue...'
        return <Navigate to="/login" replace state={{ remark }} />;
    }

    if (user.isAdmin) {
        return component(rest);
    } else {
        return <NoAuth />
    }

};

export default RouteHandler;
