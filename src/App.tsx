import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import { PrivacyPolicyPage } from "./pages/privacy";
import { TermsConditionsPage } from "./pages/terms";
import { CancellationRefundsPage } from "./pages/cancellation-refund";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-conditions" element={<TermsConditionsPage />} />
        <Route path="/cancellation-refund" element={<CancellationRefundsPage/>} />
      </Routes>
    </>
  );
}

export default App;
