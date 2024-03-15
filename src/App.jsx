import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CitiesProvider } from "./context/CitiesContext";
import { Suspense, lazy } from "react";

import CititesList from "./components/CititesList";
import City from "./components/City";
import CountriesList from "./components/CountriesList";
import Form from "./components/Form";
import { AuthProvider } from "./context/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import SpinnerFullPage from "./components/SpinnerFullPage";

const Product = lazy(() => import ("./pages/Product"));
const PageNotfound = lazy(() => import ("./pages/PageNotFound"));
const Pricing = lazy(() => import ("./pages/Pricing"));
const Homepage = lazy(() => import ("./pages/Homepage"));
const AppLayout = lazy(() => import ("./pages/AppLayout"));
const Login = lazy(() => import ("./pages/Login"));




function App() {
  return (
    <div>
      <CitiesProvider>
      <AuthProvider>
        <BrowserRouter>
        <Suspense fallback={<SpinnerFullPage />}>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="login" element={<Login />} />
            <Route path="app" element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>}>
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CititesList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountriesList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<PageNotfound />} />
          </Routes>
          </Suspense>
        </BrowserRouter>
        </AuthProvider>
      </CitiesProvider>
    </div>
  );
}

export default App;
