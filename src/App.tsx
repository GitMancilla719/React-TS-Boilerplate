import { FC } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const App: FC = () => {
  return (
    <div className="">
      <BrowserRouter>
        <NavLink to="/">Route</NavLink>

        <Routes>
          <Route path="/" element={null} />
          {/* Nested */}
          <Route path="/route">
            <Route index element={null} />
            <Route path=":id" element={null} />
          </Route>
          {/* 404 route */}
          <Route path="*" element={null} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
