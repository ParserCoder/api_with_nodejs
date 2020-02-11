module.exports = function todoEntity() {
  return function todoFactory({ Title, Description }) {
    if (!Title) {
      throw new Error("cannot add todo without title!")
    }
    if (!Description) {
      throw new Error("no description found for this todo ")
    }

    return Object.freeze({
      getTitle: () => Title,
      getDescription: () => Description
    })
  }
}
