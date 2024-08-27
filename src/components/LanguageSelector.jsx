import { useDispatch } from 'react-redux';
import { changeLanguage } from '../store/actions/languageActions';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import '../index.css'

const LanguageSelector = () => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    };

    return (
        <div>
            <select onChange={handleChange}>
                <option value="en">EN</option>
                <option value="da">DA</option>
            </select>
        
        </div>
    );
}

export default LanguageSelector;