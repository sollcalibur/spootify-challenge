export const getParamValues = (url) => {
    return url
        .slice(1)
        .split('&')
        .reduce((prev, curr) => {
            const [title, value] = curr.split('=');
            prev[title] = value;
            return prev;
        }, {});
};

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};