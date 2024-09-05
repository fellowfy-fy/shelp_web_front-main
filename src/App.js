import "./App.css";
import { Navigate, Routes, Route, useHistory } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ContentPage from "./pages/ContentPage/ContentPage";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
  const [authUser] = [null]; // useAuthState(auth);

  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/content/:cid" element={<ContentPage />} />
        <Route
          path="/login"
          element={!authUser ? <AuthPage /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignupPage /> : <Navigate to="/" />}
        />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
