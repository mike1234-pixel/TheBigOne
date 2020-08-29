const urlifyArticleTitle = (articleTitle: string): string => {
  let urlifiedTitle = articleTitle
    .toLowerCase()
    .replace(/\.|\s|\//g, "-")
    .replace(/\(|\)|\?/g, "")
    .replace(/"-"$/, "")
    .replace(":", "")
    .replace(/'/g, "");

  if (urlifiedTitle.charAt(urlifiedTitle.length - 1) === "-") {
    return urlifiedTitle.replace(/.$/, "");
  }
  return urlifiedTitle;
};

export default urlifyArticleTitle;
