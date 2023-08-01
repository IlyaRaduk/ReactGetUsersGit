export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit);
}

export const getPagesArray = (totalPages, currentPages) => {
    let result = [];
    const LIMITPAGE = 5;

    for (let i = 0; i < totalPages; i++) {
        if (i > currentPages + LIMITPAGE || i < currentPages - LIMITPAGE) { continue };

        result.push(i + 1);
    }
    return result;
}