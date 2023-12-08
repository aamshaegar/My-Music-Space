
/* 
  i component in react possono essere scritti usando le function o le classi js,
  in questo momento, le funzioni sono più utilizzate perchè sono concise e facili da usare
*/


// PascalCasing, prime lettere maiuscole, è lo standard per React
function Message() {

  /* 
    JSX: JavaScript, non stiamo scrivendo html dentro js, vai su babeljs.io/repl per vedere come viene
    tradotto in codice js. questo return, dietro nasconde una funzione che crea e ritorna l'html

  */

  const name = 'Lore';
  if(name){
    return <h1>Hello {name}!</h1>;
  }
  return <h1>Hello World!</h1>;
}

// per usare il component in App.tsx
export default Message;