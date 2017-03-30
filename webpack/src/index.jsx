/*
* if use material-ui
*
* */

import App from 'main/routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
ReactDOM.render(
    <MuiThemeProvider ><App /></MuiThemeProvider>,
    document.getElementById('root'));
