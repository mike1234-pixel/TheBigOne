import urlifyArticleTitle from "./urlifyArticleTitle";

// pure function - these tests are ok.

test("urlifies the title successfully", () => {
  expect(urlifyArticleTitle("This is a revolution (in JSX)")).toBe(
    "this-is-a-revolution-in-jsx"
  );
  expect(urlifyArticleTitle("Article.1. This is a Test Title")).toBe(
    "article-1--this-is-a-test-title"
  );
  expect(
    urlifyArticleTitle("FINAL TEST TITLE... new ways of writing code.")
  ).toBe("final-test-title----new-ways-of-writing-code");
  expect(
    urlifyArticleTitle("3) This Article Title Will Not Match The Following...")
  ).not.toBe("3--this-article-title-will-not-match-the-following---");
});
