'use strict';

// const html = `
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>

// <body>
// <form method="POST">
// <label id="message">My Frits</label>
// <input id="message" type="text" name="message">

// <button>Send Message</button>
// </form>

// </body>

// </html>
// `;

const htmlImport = function (input) {
  const html = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
<form method="POST">
<label id="name">Name</label>
<input id="name" type="text" name="name">
<label id="message">My Frit</label>
<input id="message" required="required" type="text" name="message" >

<button>Send Message</button>
</form>
${input}

</body>

</html>
`;

  return html;
};

module.exports = htmlImport;
