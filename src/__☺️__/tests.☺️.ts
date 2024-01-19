import {
  lmaoTestRunner,
  compilerTest,
} from "../lmaoTestRunner/lmaoTestRunner.js";

// Hello World Test
const lmaoCode = "🤣🪬🫦Hello World💀🫦💀🪬💀🤣";
const expectedHtml = `<html><body><h1>Hello World</h1></body></html>`;
lmaoTestRunner("Hello World", () => compilerTest(lmaoCode, expectedHtml));

// Div Test
const divLmao = "📦I am a div💀📦";
const expectedDivHtml = "<div>I am a div</div>";
lmaoTestRunner("Div", () => compilerTest(divLmao, expectedDivHtml));

// Span Test
const spanLmao = "🤪I am a span💀🤪";
const expectedSpanHtml = "<span>I am a span</span>";
lmaoTestRunner("Span", () => compilerTest(spanLmao, expectedSpanHtml));

// Paragraph Test
const paragraphLmao = "💬I am a paragraph💀💬";
const expectedParagraphHtml = "<p>I am a paragraph</p>";
lmaoTestRunner("Paragraph", () =>
  compilerTest(paragraphLmao, expectedParagraphHtml)
);

// Ordered List Test
const orderedListLmao = "📃Ordered List💀📃";
const expectedOrderedListHtml = "<ol>Ordered List</ol>";
lmaoTestRunner("Ordered List", () =>
  compilerTest(orderedListLmao, expectedOrderedListHtml)
);

// Unordered List Test
const unorderedListLmao = "🎲Unordered List💀🎲";
const expectedUnorderedListHtml = "<ul>Unordered List</ul>";
lmaoTestRunner("Unordered List", () =>
  compilerTest(unorderedListLmao, expectedUnorderedListHtml)
);
