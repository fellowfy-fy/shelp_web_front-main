import "./App.css";
import { Navigate, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import CreateCollection from "./pages/CreateCollectionPage";
import AuthPage from "./pages/AuthPage";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import ProfilePage from "./pages/ProfilePage";
import ProductPage from "./pages/ProductPage";
import CreatePostPage from "./pages/CreatePostPage";
import DiscoverPage from "./pages/DiscoverPage";
import ContentPage from "./pages/ContentPage";
import ProfileEdit from "./components/shared/ProfileEdit";
import ChangePassword from "./components/shared/ChangePassword";

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
        <Route path="/profile/edit" element={<ProfileEdit />} />
        <Route path="/profile/password" element={<ChangePassword />} />
        <Route path="/create/collection" element={<CreateCollection />} />
        <Route path="/create/post" element={<CreatePostPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/:username" element={<ProfilePage />} />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/testcontent" element={<ContentPage />} />
      </Route>
    </Routes>
  );
}

export default App;
