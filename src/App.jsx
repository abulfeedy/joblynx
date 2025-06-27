import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme/theme-provider";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
