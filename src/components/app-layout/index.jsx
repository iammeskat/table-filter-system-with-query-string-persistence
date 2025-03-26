"use client";
import ReduxProvider from '@/redux/redux-provider';
import { store } from '@/redux/store';
import Topbar from './topbar';

const AppLayout = ({ children }) => {
	return (
		<ReduxProvider store={store}>
			<div className='w-full min-h-screen'>
				<Topbar />
				<div className='app-container py-4'>
					{children}
				</div>
			</div>
		</ReduxProvider>
	)
}

export default AppLayout