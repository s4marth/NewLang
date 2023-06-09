# NewLang

NewLang is a small programming language that anyone can use, it's my first selfmade first programming language.
This language is small, But it is also powerful
as it follows the example of LISP in leveraging the expressive power of
lambda functions.

## Features

* numbers
* strings
* variables
* functions
* lambda functions
* other data types (like arrays and dictionaries) can be supported via
adding runtime functions

## Code Example

The following code example contains all of the features of the language:

```
print("Hello, world")
print("3 + 5 =" add(3 5))

hello = (subject) => {
    print(concat("Hello, " subject))
    print(concat("Hello, " subject))
}

doIt = () => {
    print("Do it!")
}

doIt()

hello("Brother")

classmates = split("Jerry Jordan Johnny Jack Jeffery" " ")

each(classmates (peep) =>
    print(concat("Hello " peep))
)

fib = (n) =>
    if(eq(n 1)
        () => 1
        () =>
            if(eq(n 2)
                () => 1
                () =>
                    add(
                        fib(subtract(n 1))
                        fib(subtract(n 2))
                    )
            )
        )

print(fib(9))
```

## Steps I followed

* parser
    * define moo lexer
        * number literal
        * string literal
        * assignment operator
        * identifier
        * params
        * braces
        * fat arrow
        * whitespace
        * newline
    * make a parse.js that creates .ast files
    * variable assignment
    * function call
    * multiple lines
    * lambda function
    * comments
* generator
    * make a generate.js that creates .js files
    * variable assignment
    * function call
    * runtime functions
    * lambda function
    * comments
* code challenges

## To use this language 
Clone the repostitory to your local machine and try to make some programs in .newlang programming language.
to run this file you may use the command "node run.js example.newlang"
and here you go!!
