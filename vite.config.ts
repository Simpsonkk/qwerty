import reactPlugin from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPathsPlugin from 'vite-tsconfig-paths';

const config = (): ReturnType<typeof defineConfig> => {
  return defineConfig({
    plugins: [tsconfigPathsPlugin(), reactPlugin()],
  });
};

export default config;
