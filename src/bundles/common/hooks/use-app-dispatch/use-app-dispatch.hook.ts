import { useDispatch } from 'react-redux';

import { type store } from '~/bundles/common/redux/store.js';

const useAppDispatch: () => typeof store.dispatch = () => useDispatch();

export { useAppDispatch };
