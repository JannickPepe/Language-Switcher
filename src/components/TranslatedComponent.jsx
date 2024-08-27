import { FormattedMessage } from 'react-intl';

const TranslatedComponent = () => {
    return (
        <div>
            <h1><FormattedMessage id="categories.question" /></h1>
            <p><FormattedMessage id="commute.options.walkBicykle" /></p>
            <p><FormattedMessage id="commute.options.subway" /></p>
        </div>
    );
};

export default TranslatedComponent;