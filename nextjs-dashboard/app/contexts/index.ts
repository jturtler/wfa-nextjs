import { useAuth } from './AuthContext';
import { useClients } from './ClientContext';
import { useMainUi } from './MainUiContext';

const useAppContext = () => {
    const authContext = useAuth();
    const clientContext = useClients();
    const mainUiContext = useMainUi();
  
    return {
      ...authContext,
      ...clientContext,
      ...mainUiContext
    };
  };
  
  export default useAppContext;