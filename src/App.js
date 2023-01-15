import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MediaForm from "./components/MediaForm/MediaForm";
import TextForm from "./components/TextForm/TextForm";
import CreateAds from "./pages/CreateAds/CreateAds";
import DashBoard from "./pages/Dashboard/DashBoard";

function App() {
  return (
    <div className="w-full h-screen">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/createads" element={<CreateAds />} />
          <Route path="/text-ad" element={<TextForm />} />
          <Route path="/media-ad" element={<MediaForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
