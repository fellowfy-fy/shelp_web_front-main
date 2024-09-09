import "./App.css";
import { Navigate, Routes, Route, useHistory } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import AuthPage from "./pages/AuthPage/AuthPage";
// import AuthPage from "./pages/AuthPage/AuthPage";
// import SignupPage from "./pages/AuthPage/SignupPage";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ContentPage from "./pages/ContentPage/ContentPage";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
  const [authUser] = [null]; // useAuthState(auth);

  return (
      <Routes>
        <Route
          path="/login"
          element={!authUser ? <AuthPage /> : <Navigate to="/" />}
        />
        <Route element={<PageLayout/>}>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/content/:cid" element={<ContentPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/:username" element={<ProfilePage />} />
        </Route>
      </Routes>
  );
}

export default App;
