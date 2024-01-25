import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import { Layout } from './components';

export default function NavigationRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
