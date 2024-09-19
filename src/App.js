import "./App.css";
import { Navigate, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import CreateCollection from "./pages/CreateCollectionPage";
import AuthPage from "./pages/AuthPage";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import ProfilePage from "./pages/ProfilePage";
import ContentPage from "./pages/ContentPage";
import ProductPage from "./pages/ProductPage";
import CreatePostPage from "./pages/CreatePostPage";

function App() {
  const [authUser] = [null]; // useAuthState(auth);

  return (
    <Routes>
      <Route
        path="/authorize"
        element={!authUser ? <AuthPage /> : <Navigate to="/" />}
      />
      <Route element={<PageLayout />}>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/create/collection" element={<CreateCollection />} />
        <Route path="/create/post" element={<CreatePostPage />} />
        <Route path="/content/:cid" element={<ContentPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/:username" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
