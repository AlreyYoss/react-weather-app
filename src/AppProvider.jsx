import { Provider } from 'react-redux';
import store from './redux/store';
import ThemeContainer from './common/layouts/ThemeContainer';
const AppProvider = ({children}) => {
    return (
        <Provider store={store}>
            <ThemeContainer>
                {children}
            </ThemeContainer>
        </Provider>
    );
 
}

export default AppProvider;