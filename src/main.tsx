import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";
import { Toaster } from "./components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <main className="flex flex-col items-center justify-center ">
      <Navbar />
      <App />
      <Footer />
      <Analytics />
      <Toaster richColors />
    </main>
  </BrowserRouter>
);
