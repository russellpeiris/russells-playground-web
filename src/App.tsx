import { Spinner, PrimaryButton } from './components';
import Navigation from './NavigationRoutes';
import { useEffect, useState } from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? (
        <Spinner text="ardpeiris.com" speed={0.2} />
      ) : (
        <Navigation />
      )}
    </>
  );
};
export default App;
