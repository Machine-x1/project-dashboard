import Index from "./pages/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from "./pages/Edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
