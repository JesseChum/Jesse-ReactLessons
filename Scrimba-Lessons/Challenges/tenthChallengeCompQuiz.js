// 1. What is a React component?
//A function that returns a react element(s)

// 2. What's wrong with this code?
// ```
// function (M)yComponent() {
//     return (
//         <small>I'm tiny text!</small>
//     )
// }
// ```
//We need to use pascal case (first letter is capitalized)
// 3. What's wrong with this code?
// ```
// function Header() {
//     return (
//         <header>
//             <img src="./react-logo.png" width="40px" alt="React logo" />
//         </header>
//     )
// }

// root.render(<Header />)
// ```
//used to be this -> Header()
//header needs to be in angle brackets similar to html. Its the wrong
//type of calling