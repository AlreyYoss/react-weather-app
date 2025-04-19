import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Dynamically import all route files
const modules = import.meta.glob('./**/route.jsx', { eager: true });
const routeArrays = Object.values(modules).map((module) => module.default);

const renderRoute = (route, index) => {
    const { path, element, children } = route;

    return (
        <Route key={index} path={path} element={element}>
            {children && children.map(renderRoute)}
        </Route>
    );
};

const AppRoutes = () => {
    console.log("Loaded Routes:", routeArrays);
    return (
        <Routes>
            {routeArrays.flat().map((route, index) => renderRoute(route, index))}

            {/* Global fallback route for any other unmatched paths */}
            <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
    );
};

export default AppRoutes;