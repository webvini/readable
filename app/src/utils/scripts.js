import Constants from './constants';

class Scripts {
    static stringToUrl(string) {
        return string.toLowerCase().split(' ').join('-')
    }

    static toSummary(text) {
        const value = Constants.articles.summaryLimit
        return (text.length > value) ? `${text.substr(0, value)}...` : text
    }
}

export default Scripts