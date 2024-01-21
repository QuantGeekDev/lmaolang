import {
  lmaoTestRunner,
  compilerTest,
} from "../lmaoTestRunner/lmaoTestRunner.js";
import { blue } from "../utils/consoleColors.js";

// TESTS TEST (for ctrl-f indexing)
console.log(blue, "Running 🤣 Test Suite");
// Hello World
const lmaoCode = "🤣🪬🫦Hello World💀🫦💀🪬💀🤣";
const expectedHtml = `<html><body><h1>Hello World</h1></body></html>`;
lmaoTestRunner("Hello World", () => compilerTest(lmaoCode, expectedHtml));

// Div
const divLmao = "📦I am a div💀📦";
const expectedDivHtml = "<div>I am a div</div>";
lmaoTestRunner("Div", () => compilerTest(divLmao, expectedDivHtml));

// Span
const spanLmao = "🤪I am a span💀🤪";
const expectedSpanHtml = "<span>I am a span</span>";
lmaoTestRunner("Span", () => compilerTest(spanLmao, expectedSpanHtml));

// Paragraph
const paragraphLmao = "💬I am a paragraph💀💬";
const expectedParagraphHtml = "<p>I am a paragraph</p>";
lmaoTestRunner("Paragraph", () =>
  compilerTest(paragraphLmao, expectedParagraphHtml)
);

// Ordered List
const orderedListLmao = "📃Ordered List💀📃";
const expectedOrderedListHtml = "<ol>Ordered List</ol>";
lmaoTestRunner("Ordered List", () =>
  compilerTest(orderedListLmao, expectedOrderedListHtml)
);

// Unordered List
const unorderedListLmao = "🎲Unordered List💀🎲";
const expectedUnorderedListHtml = "<ul>Unordered List</ul>";
lmaoTestRunner("Unordered List", () =>
  compilerTest(unorderedListLmao, expectedUnorderedListHtml)
);

// List Item
const listItemLmao = "👂List Item💀👂";
const expectedListItemHtml = "<li>List Item</li>";
lmaoTestRunner("List Item", () =>
  compilerTest(listItemLmao, expectedListItemHtml)
);

// Article
const articleLmao = "🤓Article💀🤓";
const expectedArticleHtml = "<article>Article</article>";
lmaoTestRunner("Article", () => compilerTest(articleLmao, expectedArticleHtml));

// Escaping
const escapeLmao = "I am a not a div 📦💀🤓";
const expectedEscapeHtml = "I am a not a div 📦💀🤓";
lmaoTestRunner("Escape", () => compilerTest(escapeLmao, expectedEscapeHtml));
