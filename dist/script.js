// View a more complex version of this project with custom toolbar here: https://codepen.io/no_stack_dub_sack/pen/JbPZvm?editors=0110

// coded by @no-stack-dub-sack (github) / @no_stack_sub_sack (codepen)

const projectName = "markdown-previewer";
localStorage.setItem('example_project', 'Markdown Previewer');

// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true });


// INSERTS target="_blank" INTO HREF TAGS (required for codepen links)
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
      editorMaximized: false,
      previewMaximized: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleEditorMaximize = this.handleEditorMaximize.bind(this);
    this.handlePreviewMaximize = this.handlePreviewMaximize.bind(this);
  }
  handleChange(e) {
    this.setState({
      markdown: e.target.value });

  }
  handleEditorMaximize() {
    this.setState({
      editorMaximized: !this.state.editorMaximized });

  }
  handlePreviewMaximize() {
    this.setState({
      previewMaximized: !this.state.previewMaximized });

  }
  render() {
    const classes = this.state.editorMaximized ?
    ['editorWrap maximized',
    'previewWrap hide',
    'fa fa-compress'] :
    this.state.previewMaximized ?
    ['editorWrap hide',
    'previewWrap maximized',
    'fa fa-compress'] :
    ['editorWrap',
    'previewWrap',
    'fa fa-arrows-alt'];
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: classes[0] }, /*#__PURE__*/
      React.createElement(Toolbar, {
        icon: classes[2],
        onClick: this.handleEditorMaximize,
        text: "Editor" }), /*#__PURE__*/
      React.createElement(Editor, { markdown: this.state.markdown,
        onChange: this.handleChange })), /*#__PURE__*/

      React.createElement("div", { className: "converter" }), /*#__PURE__*/

      React.createElement("div", { className: classes[1] }, /*#__PURE__*/
      React.createElement(Toolbar, {
        icon: classes[2],
        onClick: this.handlePreviewMaximize,
        text: "Previewer" }), /*#__PURE__*/
      React.createElement(Preview, { markdown: this.state.markdown }))));



  }}
;

const Toolbar = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "toolbar" }, /*#__PURE__*/
    React.createElement("i", { title: "no-stack-dub-sack", className: "fa fa-free-code-camp" }),
    props.text, /*#__PURE__*/
    React.createElement("i", { onClick: props.onClick, className: props.icon })));


};

const Editor = props => {
  return /*#__PURE__*/(
    React.createElement("textarea", { id: "editor",
      value: props.markdown,
      onChange: props.onChange,
      type: "text" }));

};

const Preview = props => {
  return /*#__PURE__*/(
    React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(props.markdown, { renderer: renderer }) } }));

};

const placeholder =
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));