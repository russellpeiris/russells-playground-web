import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { Home } from './pages';

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
