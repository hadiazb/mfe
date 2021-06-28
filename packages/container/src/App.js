import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
	StylesProvider,
	createGenerateClassName,
} from '@material-ui/core/styles';

import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

const generateClassName = createGenerateClassName({
	productionPrefix: 'co',
});

const App = () => {
	return (
		<BrowserRouter>
			<StylesProvider generateClassName={generateClassName}>
				<Fragment>
					<Header />
					<MarketingApp /> {/*  <====  Componente de React */}
				</Fragment>
			</StylesProvider>
		</BrowserRouter>
	);
};

export default App;
