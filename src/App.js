import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import "./App.css";

const App = () => {
  const activeMenu = false;

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative  dark:bg-main-dark-bg">
          {/* Setting */}
          <div className="fixed right-4 bottom-4" style={{ zIndex: 1000 }}>
            <TooltipComponent content="Settings" position="top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "blue", borderRadius: 50 }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {/* Sidebar */}
          {activeMenu ? (
            <div className="sidebar w-72 fixed bg-white dark:bg-secondary-dark-bg">Sidebar on</div>
          ) : (
            <div className="sidebar w-0">Sidebar off</div>
          )}

          {/* Navbar */}
          <div className={`bg-main-bg dark:bg-main-dark-bg min-h-screen w-full ${activeMenu ? "md:ml-72" : "flex-2"}`}>
            <div className="navbar bg-main-bg dark:bg-main-dark-bg fixed w-full md:static">navbar</div>
          </div>

          {/* Content */}
          <div>
            <Routes>
              <Route path="/" element="ecommerce" />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
