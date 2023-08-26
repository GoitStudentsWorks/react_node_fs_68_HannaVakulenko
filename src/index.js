import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyles';
import { App } from 'App';
import { lightTheme, darkTheme } from 'styles/theme';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/themeSlice';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import '/node_modules/flag-icons/css/flag-icons.min.css';
import './i18n';

function AppWrapper() {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <BrowserRouter basename="/react_node_fs_68_HannaVakulenko">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <App />
        </LocalizationProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppWrapper />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
