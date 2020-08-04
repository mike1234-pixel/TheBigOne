const urlifyArticleTitle = (articleTitle) => {
  let urlifiedTitle = articleTitle
    .toLowerCase()
    .replace(/\.|\s|\//g, "-")
    .replace(/\(|\)|\?/g, "")
    .replace(/"-"$/, "");

  if (urlifiedTitle.charAt(urlifiedTitle.length - 1) === "-") {
    return urlifiedTitle.replace(/.$/, "");
  }
  return urlifiedTitle;
};

export default urlifyArticleTitle;
