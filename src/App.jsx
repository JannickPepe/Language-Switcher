import { IntlProvider } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import LanguageSelector from "./components/LanguageSelector";
import TranslatedComponent from "./components/TranslatedComponent";

function App() {
    // eslint-disable-next-line no-unused-vars
    const dispatch = useDispatch();
    const locale = useSelector((state) => state.language.locale);
    const messages = useSelector((state) => state.messages[locale]);
    return (
        <IntlProvider locale={locale} messages={messages}>
            <div>
                <LanguageSelector />
                <TranslatedComponent />
            </div>
        </IntlProvider>

    );
}

export default App;