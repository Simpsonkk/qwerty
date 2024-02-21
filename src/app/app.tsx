import {
  Notifications,
  RouterOutlet,
} from '~/bundles/common/components/components.js';

const App: React.FC = () => {
  return (
    <>
      <RouterOutlet />
      <Notifications />
    </>
  );
};

export { App };
