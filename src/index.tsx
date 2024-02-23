import '~/assets/styles/styles.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { App, RouterProvider } from '~/bundles/common/components/components.js';
import { store } from '~/bundles/common/redux/store.js';
import WeatherForecast from '~/bundles/weather-forecast/pages/weather-forecast.js';

import { AppRoute } from './bundles/common/enums/enums.js';

createRoot(document.querySelector('#root') as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider
        routes={[
          {
            path: AppRoute.ROOT,
            element: <App />,
            children: [
              {
                path: AppRoute.ROOT,
                element: <WeatherForecast />,
              },
            ],
          },
        ]}
      />
    </Provider>
  </StrictMode>,
);
