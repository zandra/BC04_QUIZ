let javaScriptQuestions = [
  { title: "What is the JavaScript syntax for printing values in Console?",
    choices: ["console.log(5)","console.print(5)", "print.console(5)", "print(5)"],
    answer: "console.log(5)"
  },
  { title: "JavaScript is a ________ Side Scripting Language. ",
    choices: ["Server", "ISP", "Client", "None of the above"],
    answer: "Client"
  },
  {
    title: "What is the alternate name for Java script?",
    choices: ["LimeScript", "ECMScript", "ECMAScript", "Both 2 and 3"],
    answer: "ECMAScript"
  },
  {
    title: "What is the method in JavaScript used to remove the whitespace at the beginning and end of any string?",
    choices:["replace()", "strip()", "remove()", "trim()" ],
    answer: "trim()"
  },
  {
    title: "Which function adds a new element to an array?",
    choices: ["pop()", "push()", "join()", "map()"],
    answer: "push()"
  },
  {
    title: "What is the correct way to append a value to an array of JavaScript?",
    choices: ["arr[arr.length]=value", "arr[arr.length+1]=value","arr[arr.length-1]=value", "arr[arr.length*1]=value" ],
    answer: "arr[arr.length]=value"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "What is negative infinity in JavaScript?",
    choices: ["Any of the below", "number in JavaScript, derived by dividing number by zero.", "number in JavaScript, derived by dividing negative number by zero.", "number in JavaScript, derived by dividing number by a negative number."],
    answer: "number in JavaScript, derived by dividing negative number by zero."
  },
  {
    title: "What is the correct syntax for declaring a function called \"isFun\" in JavaScript?",
    choices:["function isFun()", "function = isFun()", "function: isFun()", "function => isFun()"],
    answer: "function isFun()"
  },
  { 
    title: "Which of the following is a server-side javascript object?",
    choices: ["Function", "File", "FileUpload", "Date"],
    answer: "File"
  },
  {
    title: "Which of the following is a client-side Java Script object?",
    choices: ["Function", "File", "FileUpload", "Date"],
    answer: "FileUpload"
  },
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "JavaScript can be used for storing the forms contents to a database file on the server.",
    choices: ["True", "False"],
    answer: "False"
  },
  {
    title: "Which of the following type of variable takes precedence over other if names are same?",
    choices: ["global variable","local variable", "Both of the above.", "None of the above."],
    answer: "local variable"
  },
  {
    title: "Which was the first browser to support JavaScript?",
    choices: ["Mozilla Firefox", "Netscape", "Google Chrome", "IE"],
    answer: "Netscape"
  }
];

let htmlQestions = [
  {
    title: "In CSS, what is the correct option to select all the tags on a page?",
    choices: ["None", "p {}", "#p {}", ".p {}", "<p> {}"],
    answer: "p {}"
  },
  {
    title: "Select the correct HTML tag to make a text italic?",
    choices: ["Italic", "I", "II", "None", "It"],
    answer: "None"
  },
  {
    title: "In CSS, what is the property used to set the spacing in between lines of text?",
    choices: ["line-spacing", "line-height", "spacing", "None", "letter-spacing"],
    answer: "line-height"
  },
  {
    title: "What is the correct HTML for referring to an external style sheet?",
    choices: ["<stylesheet>mystyle.css</stylesheet>", "<style scr=\"mystyle\".css", "<link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">"],
    answer: "<link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">"
  },
  {
    title: "Where in an HTML document is the correct place to refer to an external style sheet?",
    choices: ["In the <head> section", "In the <body> section", "At the end of the document"],
    answer: "In the <head> section"
  },
  {
    title: "Which HTML attribute is used to define inline styles?",
    choices: ["font", "styles", "style", "class"],
    answer: "style"
  },
  {
    title: "Which is the correct CSS syntax?",
    choices: ["{body;color:black;}", "{body:color=black;}", "body {color:black;}", "body:color=black;"],
    answer: "body {color:black;}"
  },
  {
    title: "Which CSS property controls the text size?",
    choices: ["text-size", "text-style", "font-size", "font-style"],
    answer: "font-size"
  },
  {
    title: "How do you make each word in a text start with a capital letter?",
    choices: ["text-transform: capitalize", "text-style: capitalize", "transform: capitalize", "You can't do that with CSS"],
    answer: "text-transform: capitalize"
  },
  {
   title: "When using the padding property, are you allowed to use negative values?",
   choices: ["Yes", "No"],
   answer: "No"
  },
  {
   title: "How do you make a list that lists its items with squares?",
   choices: ["list-type: square;", "list-style-type: square;", "list: square;"],
   answer: "list-style-type: square;"
  },
  {
    title: "How do you select all p elements inside a div element?",
    choices: ["div + p", "div p", "div.p"],
    answer: "div p"
  },
  {
    title: "How do you group selectors?",
    choices: ["Separate each selector with a space", "Separate each selector with a comma", "Separate each selector with a plus sign"],
    answer: "Separate each selector with a comma"
  },
  {
    title: "What is the default value of the position property?",
    choices: ["relative", "fixed", "static", "absolute"],
    answer: "static"
  },
  {
    title: "How do you insert a comment in a CSS file?",
    choices: ["// this is a comment", "/* this is a comment */", "` this is a comment `", "// this is a comment //"],
    answer: "/* this is a comment */"
  }
];

var questions = javaScriptQuestions;