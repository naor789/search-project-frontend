export const getHighlightedText = (text, highlight) => {
    if (highlight.length > 1) {
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return (<span> {parts.map((part, i) =>
            <span key={i} style={part.toLowerCase() === highlight.toLowerCase() ? { backgroundColor: 'var(--grayRBG)', color: 'var(--white)' } : {}}>
                {part}
            </span>)
        } </span>);
    } else {
        return text;
    }
}

export const extractNestedDetails = (arr, key) => {
    const found = arr.find(element => element[key]);
    if (found) {
        return found[key];
    } else {
        return;
    }
}

