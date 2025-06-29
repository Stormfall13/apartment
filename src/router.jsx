import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import ("./pages/Home"));
const Agreement = lazy(() => import("./pages/Agreement"));

const AppRouter = () => {
    return (
        <Router>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="agreement" element={<Agreement />} />
                    <Route path="*" element={<Navigate to="/" />} /> 
                </Routes>
            </Suspense>
        </Router>
    )
}

export default AppRouter;
