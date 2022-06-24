const httpLink = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
const nonHttpLink = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

const formatLink = (artistLink) => {
    if (!artistLink.match(nonHttpLink) || artistLink.match(httpLink)) {
        return artistLink
    } else {
        return "http://" + artistLink
    }
};

export default formatLink
