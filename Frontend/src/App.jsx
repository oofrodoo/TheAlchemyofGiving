import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import AboutUs from "./pages/AboutUs";
import Donate from "./pages/Donate";
import RequestItems from "./pages/RequestItems";
import SuccessStories from "./pages/SuccessStories";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import UserLayout from "./layout/UserLayout";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import AcceptableItems from "./pages/Acceptableitems";
import ProtectedRoute from "./components/ProtectedRoute";
import DonateForm from "./pages/DonateForm";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route element={<UserLayout />}>
            {/* Home landing page banako */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} /> {/* Add this line */}
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/acceptableitems" element={<AcceptableItems />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/request" element={<RequestItems />} />
            <Route path="/success" element={<SuccessStories />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/donateform" element={<DonateForm />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
