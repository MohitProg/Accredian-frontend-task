import React from "react";
import Home from "./pages/Home";
import { Toaster } from "@/components/ui/sonner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
     <Toaster richColors position="top-center"/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

      <Home />
    </>
  );
};

export default App;
