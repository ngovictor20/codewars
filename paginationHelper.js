// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
    this.numberOfPages = Math.ceil(collection.length / itemsPerPage);
    this.length = collection.length;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
    return this.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
    return this.numberOfPages;
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
    if (pageIndex > this.numberOfPages - 1 || itemIndex < 0) {
        return -1;
    }
    if (pageIndex === this.numberOfPages - 1) {
        return this.length % this.itemsPerPage;
    } else {
        return this.itemsPerPage;
    }
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
    if (itemIndex > this.length - 1 || pageIndex < 0) return -1;
    return Math.floor(itemIndex / this.itemsPerPage);
}