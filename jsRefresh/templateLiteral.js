/* 
    Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings,
    string interpolation with embedded expressions, and special constructs called tagged templates.
*/

// Multiple String using template literal (``)
// const string = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
//                 when an unknown printer took a galley of type and scrambled it to make a type specimen book.
//                 It has survived not only five centuries, but also the leap into electronic typesetting, remaining
//                 essentially unchanged. It was popularised in the 1960s with the release of Letrasetsheets
//                 containing Lorem Ipsum passages, and more recently with desktop publishing software like 
//                 Aldus PageMaker including versions of Lorem Ipsum.`;

const greeting = (name) => {
    // Normal Syntax
    // return "My Name is " + name;
    
    // Embedded expression using Template Literal
    return `My name is ${name}`;
}