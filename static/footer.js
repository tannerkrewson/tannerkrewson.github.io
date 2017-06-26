
function getFooter (projectTitle, gitHubURL) {
    var footer = '';
    footer += projectTitle.trim() + ' by Tanner Krewson<br>\n';

    if (gitHubURL) {
        footer += '<a href="';
        footer += gitHubURL.trim();
        footer += '" target="_blank">View on GitHub</a>'
        footer += '\n|\n';
    }

    footer += '<a href="http://www.tannerkrewson.com/" target="_blank">www.tannerkrewson.com</a>';

    return footer;
}
