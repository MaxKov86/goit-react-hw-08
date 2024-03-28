import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './contacts/contactsSlice';
import filtersReducer from './filter/filtersSlice';
import authReducer from './auth/authSlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		contacts: contactsReducer,
		filters: filtersReducer,
	},
});
