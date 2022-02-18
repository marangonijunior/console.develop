- **<article>**: Self contained, independently distributable content.
- **<section>**: Thematic grouping of content, not self contained.
- **<header>**: Introductory content.
- **<main>**: Main content, limited to one per page.
- **<nav>**: A section of links, oftentimes for the primary navigation of the page.
- **<aside>**: Non-vital content indirectly related to main content. The page would make sense without this content.
- **<footer>**: Footer of the document, oftentimes containing copyright information.

- #### <p>

  <div class="_2Ix89ObBL--yfIHxbqzAJ1 default">

  <div class="html">

  The paragraph tag, usually used for blocks of text (although they can contain other elements that are part of the paragraph, such as images). For example:

  </div>

  <div class="code-wrapper prism">

      <p>Hello World!</p>

  </div>

  </div>

  [Learn more: <span class="Link Link--fe _2jFzxkZcdWmXPz821xH3eM">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p</span>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)

- #### Heading Tags

  <div class="_2Ix89ObBL--yfIHxbqzAJ1 default">

  <div class="html">

  HTML tags represented by <span><h1></span> through <span><h6></span>. <span><h1></span> is the top level heading, while <span><h2></span> is a secondary subheading and so on. For example:

  </div>

  <div class="code-wrapper prism">

      <h1>Main Heading</h1>
        <h2>Secondary Heading</h2>

  </div>

  </div>

  [Learn more: <span class="Link Link--fe _2jFzxkZcdWmXPz821xH3eM">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements</span>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)

- #### <img>

  <div class="_2Ix89ObBL--yfIHxbqzAJ1 default">

  <div class="html">

  The image tag. This is an empty tag, and it should always include two primary attributes:

  - **src**: The path to the image, either relative or absolute.
  - **alt**: Alternative text to be used with screen readers or any time the image cannot be displayed.

  </div>

  <div class="code-wrapper prism">

      <img src="img/dog.png" alt="dog" />

  </div>

  </div>

  [Learn more: <span class="Link Link--fe _2jFzxkZcdWmXPz821xH3eM">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img</span>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)

- #### <ul>

  <div class="_2Ix89ObBL--yfIHxbqzAJ1 default">

  <div class="html">

  The unordered list tag, used for a list where the order does not matter. By default, most browsers will show this as a bulleted list.

  The unordered list should contain any number of <span><li></span> tags. For example:

  </div>

  <div class="code-wrapper prism">

      <ul>
            <li>AlgoExpert</li>
            <li>SystemsExpert</li>
            <li>MLExpert</li>
            <li>FrontendExpert</li>
        </ul>

  </div>

  </div>

  [Learn more: <span class="Link Link--fe _2jFzxkZcdWmXPz821xH3eM">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul</span>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)

- #### <ol>

  <div class="_2Ix89ObBL--yfIHxbqzAJ1 default">

  <div class="html">

  The ordered list tag, used for a list where the order matters. By default, most browsers will show this as a numbered list.

  The ordered list should contain any number of <span><li></span> tags. For example:

  </div>

  <div class="code-wrapper prism">

      <ol>
            <li>Step 1</li>
            <li>Step 2</li>
            <li>Step 3</li>
        </ol>

  </div>

  </div>

  [Learn more: <span class="Link Link--fe _2jFzxkZcdWmXPz821xH3eM">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol</span>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)

- #### <li>

  <div class="_2Ix89ObBL--yfIHxbqzAJ1 default">

  <div class="html">

  The list item tag, used for individual elements in both unordered and ordered lists.

  List items can also contain other lists to create nested lists. For example:

  </div>

  <div class="code-wrapper prism">

      <ol>
            <li>Step 1</li>
            <li>
              Step 2:
              <ol>
                <li>Substep 1:</li>
                <li>Substep 2:</li>
              </ol>
            </li>
            <li>Step 3</li>
        </ol>

  </div>

  </div>

  [Learn more: <span class="Link Link--fe _2jFzxkZcdWmXPz821xH3eM">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li</span>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)

- #### <pre>

  <div class="_2Ix89ObBL--yfIHxbqzAJ1 default">

  <div class="html">

  The preformatted text tag. This tag preserves whitespace, which can be useful when indentation and newlines need to be preserved. For example:

  </div>

  <div class="code-wrapper prism">

      <pre>
            *
           ***
          *****
         *******
        *********
           | |
        </pre>

  </div>

  </div>

  [Learn more: <span class="Link Link--fe _2jFzxkZcdWmXPz821xH3eM">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre</span>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre)

- #### <br>

  <div class="_2Ix89ObBL--yfIHxbqzAJ1 default">

  <div class="html">

  The line break tag. This is an empty tag used to create a line break in text, such as for the introduction of an email or new lines in a poem. However, this tag should not be used just for spacing out elements as that can be accomplished with CSS. For example:

  </div>

  <div class="code-wrapper prism">

      <p>
            Dear User, <br />
            We hope you are enjoying FrontendExpert!
        </p>

  </div>

  </div>

  [Learn more: <span class="Link Link--fe _2jFzxkZcdWmXPz821xH3eM">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br</span>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br)

- #### <hr>

  <div class="_2Ix89ObBL--yfIHxbqzAJ1 default">

  <div class="html">

  The horizontal rule tag. This is an empty tag used to create a thematic break between content, drawn as a horizontal line by default. For example:

  </div>

  <div class="code-wrapper prism">

      <p>Part 1</p>
        <hr />
        <p>Part 2</p>

  </div>

  </div>

  [Learn more: <span class="Link Link--fe _2jFzxkZcdWmXPz821xH3eM">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr</span>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr)

- #### <a>

  <div class="_2Ix89ObBL--yfIHxbqzAJ1 default">

  <div class="html">

  The anchor tag, used for linking to other pages. This tag should include an <span>href</span> attribute with the path to the page being linked (absolute or relative). For example:

  </div>

  <div class="code-wrapper prism">

      <a href="https://algoexpert.io">AlgoExpert</a>

  </div>

  </div>

  [Learn more: <span class="Link Link--fe _2jFzxkZcdWmXPz821xH3eM">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a</span>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)

- #### <em>

  <div class="_2Ix89ObBL--yfIHxbqzAJ1 default">

  <div class="html">

  The emphasis tag, usually rendered as italics by default in the browser. For example:

  </div>

  <div class="code-wrapper prism">

      <p>I <em>need</em> to study!</p>

  </div>

  </div>

  [Learn more: <span class="Link Link--fe _2jFzxkZcdWmXPz821xH3eM">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em</span>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em)

- #### <strong>

  <div class="_2Ix89ObBL--yfIHxbqzAJ1 default">

  <div class="html">

  The strong tag, usually rendered as bold by default in the browser. For example:

  </div>

  <div class="code-wrapper prism">

      <p><strong>Note:</strong> This is important!</p>

  </div>

  </div>

  [Learn more: <span class="Link Link--fe _2jFzxkZcdWmXPz821xH3eM">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong</span>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong)
