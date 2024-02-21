import { type TypedUseSelectorHook, useSelector } from 'react-redux';

import { type store } from '~/bundles/common/redux/store.js';

const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> =
  useSelector;

export { useAppSelector };
