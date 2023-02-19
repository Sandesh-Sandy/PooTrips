import Dashboard from './Dashboard'
import { BrowserRouter as Router, Route, Navigate } from 'react-router-dom';

const heading = () => <h1>About</h1>

const AppRoutes = () => {
    return (
        <>
            {/* <Route path='/' element={<h2>Home</h2>} /> */}
            <Route exact path="/" component={<Dashboard />} />
            <Route path="/about" component={<heading />} />
            {/* <Route
                path="/about"
                element={
                    <h1>About</h1>
                }
            /> */}
        </>
    )
}

export default AppRoutes