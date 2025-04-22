import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import ("./pages/Home"));

const AppRouter = () => {
    return (
        <Router>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Navigate to="/" />} /> 
                </Routes>
            </Suspense>
        </Router>
    )
}

export default AppRouter;
