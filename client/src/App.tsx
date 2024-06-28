import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import ProfilePage from "./pages/Profile";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import AboutPage from "./pages/About";
import Header from "./components/Header";
import { PrivateRoute } from "./components/PrivateRoute";
import { Footer } from "./components/Footer";
import { NotFound } from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { ContactPage } from "./pages/Contact";
import { FormationPage } from "./pages/Formation";
import { ContentPage } from "./pages/Formation/Content";
import { WelcomePage } from "./pages/Formation/Welcome";
import { QuizzPage } from "./pages/Formation/Quizz";
import { PersonalPage } from "./pages/Formation/Personal";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/formation" element={<FormationPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/formation/welcome" element={<WelcomePage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/formation/content" element={<ContentPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/formation/quizz" element={<QuizzPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/formation/personal" element={<PersonalPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </Router>
  );
}
