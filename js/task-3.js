

function getElementWidth(content, padding, boarder) {
    const contentNumber = Number.parseInt(content);
    const paddingNumber = Number.parseInt(padding);
    const boarderNumber = Number.parseInt(boarder);
    return contentNumber + (paddingNumber * 2) + (boarderNumber * 2);
}
