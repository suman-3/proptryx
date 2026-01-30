import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";
import { HashRouter } from "react-router-dom";
import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";
import { Toaster } from "./components/ui/sonner";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <main className="flex flex-col items-center justify-center ">
      <Navbar />
      <App />
      <Footer />
      <Toaster richColors />
    </main>
  </HashRouter>
);
