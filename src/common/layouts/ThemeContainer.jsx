import { useSelector } from 'react-redux';
import HeaderTop from './HeaderTop';

const ThemeContainer = ({children}) => {
    const isLightTheme = useSelector((state) => state.theme.isLightTheme); // Accessing the theme state from Redux store
    const commonStyle = "bg-cover bg-center h-full w-full";
    const themeStyle = isLightTheme ? "text-black" : "text-white";
    const weatherTheme = commonStyle + " " + themeStyle;
    return (
        <div 
            className={weatherTheme}
            style={{
              backgroundImage: `url(${isLightTheme
                ? '/src/common/assets/bg-light.png'
                : '/src/common/assets/bg-dark.png'})`,
            }}
        >
            <HeaderTop />
            {children}
        </div>
    );
}

export default ThemeContainer;