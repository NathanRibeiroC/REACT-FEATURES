Quiz!

1. What is a React component?
It is a function that returns JSX code 
and that can be loaded on react DOM


2. What's wrong with this code?
The function name is not following PascalCase
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

Instead of Header() should be <Header/>
ReactDOM.render(Header(), document.getElementById("root"))
```