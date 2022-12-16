const formatDate = date => {
    return `${(date).getMonth()}/${(date).getDate()}/${(date).getFullYear()}`;
};

module.exports = { formatDate, }
// sets the date to month then day, then year