
window.pythonQuestions = [
  {
    question: "1. Who created Python?",
    options: ["James Gosling", "Guido van Rossum", "Dennis Ritchie", "Bjarne Stroustrup"],
    answer: "Guido van Rossum",
    explanation: "Guido van Rossum created Python and released its first version in 1991."
  },
  {
    question: "2. Which symbol is used for a single-line comment in Python?",
    options: ["//", "#", "/*", "<!--"],
    answer: "#",
    explanation: "The hash symbol starts a single-line comment in Python."
  },
  {
    question: "3. Which function displays output in Python?",
    options: ["display()", "echo()", "print()", "write()"],
    answer: "print()",
    explanation: "The print() function displays objects as text output."
  },
  {
    question: "4. Which function reads user input as a string?",
    options: ["read()", "input()", "scanf()", "get()"],
    answer: "input()",
    explanation: "input() reads a line from standard input and returns a string."
  },
  {
    question: "5. Which symbol is used for exponentiation in Python?",
    options: ["^", "**", "//", "%%"],
    answer: "**",
    explanation: "The ** operator raises a number to a power. For example, 2 ** 3 is 8."
  },
  {
    question: "6. What is the output of print(2 ** 3)?",
    options: ["5", "6", "8", "9"],
    answer: "8",
    explanation: "2 raised to the power of 3 equals 2 × 2 × 2 = 8."
  },
  {
    question: "7. Which data type stores True or False?",
    options: ["int", "str", "bool", "list"],
    answer: "bool",
    explanation: "The bool type has two values: True and False."
  },
  {
    question: "8. Which data type stores text?",
    options: ["str", "int", "float", "bool"],
    answer: "str",
    explanation: "The str type represents a sequence of Unicode characters."
  },
  {
    question: "9. Which data type stores whole numbers?",
    options: ["float", "int", "str", "tuple"],
    answer: "int",
    explanation: "The int type represents integers, such as 10, -5, and 0."
  },
  {
    question: "10. Which data type stores decimal numbers?",
    options: ["int", "bool", "float", "set"],
    answer: "float",
    explanation: "The float type represents floating-point numbers, such as 3.14."
  },
  {
    question: "11. Which brackets are used to create a list?",
    options: ["()", "{}", "[]", "<>"],
    answer: "[]",
    explanation: "Square brackets create a list, for example [1, 2, 3]."
  },
  {
    question: "12. Which collection is immutable?",
    options: ["List", "Tuple", "Dictionary", "Set"],
    answer: "Tuple",
    explanation: "A tuple cannot be modified after it is created."
  },
  {
    question: "13. Which collection stores key-value pairs?",
    options: ["List", "Tuple", "Dictionary", "Set"],
    answer: "Dictionary",
    explanation: "A dictionary maps keys to corresponding values."
  },
  {
    question: "14. Which collection stores unique elements?",
    options: ["List", "Tuple", "Set", "String"],
    answer: "Set",
    explanation: "A set stores distinct elements and removes duplicate values."
  },
  {
    question: "15. Which keyword defines a function?",
    options: ["function", "define", "def", "fun"],
    answer: "def",
    explanation: "The def keyword begins a function definition."
  },
  {
    question: "16. Which keyword returns a value from a function?",
    options: ["send", "return", "yieldonly", "break"],
    answer: "return",
    explanation: "return ends a function call and sends a value back to the caller."
  },
  {
    question: "17. Which keyword is used to make a decision?",
    options: ["if", "for", "def", "import"],
    answer: "if",
    explanation: "The if statement executes a block when its condition is true."
  },
  {
    question: "18. Which keyword checks another condition after an if?",
    options: ["elseif", "elif", "else if", "case"],
    answer: "elif",
    explanation: "elif means else if and checks another condition when previous conditions are false."
  },
  {
    question: "19. Which loop iterates over items in a sequence?",
    options: ["for", "switch", "repeat", "do"],
    answer: "for",
    explanation: "A for loop iterates over items from an iterable object."
  },
  {
    question: "20. Which loop continues while a condition is true?",
    options: ["if", "while", "def", "class"],
    answer: "while",
    explanation: "A while loop repeats its body while its condition evaluates to true."
  },
  {
    question: "21. What does range(5) produce when iterated?",
    options: ["1, 2, 3, 4, 5", "0, 1, 2, 3, 4", "0, 1, 2, 3, 4, 5", "5 only"],
    answer: "0, 1, 2, 3, 4",
    explanation: "range(5) produces integers starting at 0 and stopping before 5."
  },
  {
    question: "22. What is the output of print(10 // 3)?",
    options: ["3", "3.33", "1", "4"],
    answer: "3",
    explanation: "Floor division rounds the quotient down; 10 // 3 equals 3."
  },
  {
    question: "23. What is the output of print(10 % 3)?",
    options: ["0", "1", "2", "3"],
    answer: "1",
    explanation: "The remainder when 10 is divided by 3 is 1."
  },
  {
    question: "24. Which operator checks equality?",
    options: ["=", "==", "!=", ":="],
    answer: "==",
    explanation: "The == operator compares two values for equality."
  },
  {
    question: "25. Which operator means logical AND?",
    options: ["&&", "&", "and", "AND()"],
    answer: "and",
    explanation: "The and keyword returns a truthy or falsy operand based on both operands."
  },
  {
    question: "26. Which operator means logical OR?",
    options: ["||", "or", "|", "OR()"],
    answer: "or",
    explanation: "The or keyword evaluates operands and returns a truthy or falsy operand."
  },
  {
    question: "27. Which keyword immediately exits a loop?",
    options: ["skip", "continue", "break", "stop"],
    answer: "break",
    explanation: "break terminates the nearest enclosing loop."
  },
  {
    question: "28. Which keyword skips to the next loop iteration?",
    options: ["pass", "continue", "break", "next"],
    answer: "continue",
    explanation: "continue skips the remaining statements in the current iteration."
  },
  {
    question: "29. Which keyword acts as a placeholder statement?",
    options: ["empty", "skip", "pass", "null"],
    answer: "pass",
    explanation: "pass does nothing and can be used where Python syntax requires a statement."
  },
  {
    question: "30. Which function returns the number of items in a list?",
    options: ["size()", "countall()", "len()", "length()"],
    answer: "len()",
    explanation: "len() returns the number of items in a list."
  },
  {
    question: "31. Which list method adds one item to the end?",
    options: ["insert()", "append()", "extendone()", "addend()"],
    answer: "append()",
    explanation: "append(item) adds one item to the end of a list."
  },
  {
    question: "32. Which list method removes and returns an item by index?",
    options: ["delete()", "remove()", "pop()", "clear()"],
    answer: "pop()",
    explanation: "pop(index) removes and returns the item at the given index; without an index, it removes the last item."
  },
  {
    question: "33. Which list method removes the first matching value?",
    options: ["pop()", "remove()", "discard()", "delete()"],
    answer: "remove()",
    explanation: "remove(value) deletes the first matching value from a list."
  },
  {
    question: "34. What is the first index of a Python list?",
    options: ["-1", "0", "1", "Depends on list length"],
    answer: "0",
    explanation: "Python sequences use zero-based indexing."
  },
  {
    question: "35. What does a[-1] access in a non-empty list?",
    options: ["The first item", "The second item", "The last item", "An item beyond the list"],
    answer: "The last item",
    explanation: "Negative index -1 refers to the last item in a sequence."
  },
  {
    question: "36. Which string method converts text to uppercase?",
    options: ["capitalize()", "upper()", "uppercase()", "up()"],
    answer: "upper()",
    explanation: "upper() returns a new string with lowercase letters converted to uppercase."
  },
  {
    question: "37. Which string method removes leading and trailing whitespace by default?",
    options: ["trim()", "strip()", "clean()", "removeSpace()"],
    answer: "strip()",
    explanation: "strip() returns a copy with leading and trailing whitespace removed."
  },
  {
    question: "38. Which string method splits text into a list?",
    options: ["join()", "split()", "divide()", "separate()"],
    answer: "split()",
    explanation: "split() divides a string into a list of substrings."
  },
  {
    question: "39. Which string method joins strings using a separator?",
    options: ["split()", "join()", "merge()", "append()"],
    answer: "join()",
    explanation: "A separator string's join() method combines an iterable of strings."
  },
  {
    question: "40. Which keyword imports a module?",
    options: ["include", "using", "import", "require"],
    answer: "import",
    explanation: "The import statement makes module names available to a Python program."
  },
  {
    question: "41. Which module provides common mathematical functions?",
    options: ["random", "math", "statisticsOnly", "numbers"],
    answer: "math",
    explanation: "The math module provides functions such as sqrt(), ceil(), and floor()."
  },
  {
    question: "42. Which module can generate pseudo-random values?",
    options: ["math", "random", "timeonly", "string"],
    answer: "random",
    explanation: "The random module provides tools for generating pseudo-random values."
  },
  {
    question: "43. Which keyword is used to handle exceptions?",
    options: ["try", "check", "test", "error"],
    answer: "try",
    explanation: "A try block encloses code that may raise an exception."
  },
  {
    question: "44. Which block handles a matching exception?",
    options: ["finally", "except", "ensure", "catch"],
    answer: "except",
    explanation: "An except block handles a matching exception raised in the associated try block."
  },
  {
    question: "45. Which block is commonly used for cleanup code that should run whether an exception occurs or not?",
    options: ["except", "else", "finally", "retry"],
    answer: "finally",
    explanation: "A finally block normally runs whether or not an exception occurs, making it useful for cleanup."
  },
  {
    question: "46. Which function converts a numeric string such as '25' to an integer?",
    options: ["str()", "int()", "floatstr()", "number()"],
    answer: "int()",
    explanation: "int('25') converts the valid decimal integer string to the integer 25."
  },
  {
    question: "47. Which function converts a value to a string?",
    options: ["text()", "string()", "str()", "char()"],
    answer: "str()",
    explanation: "str() returns a string representation of an object."
  },
  {
    question: "48. Which keyword defines a class in Python?",
    options: ["object", "class", "struct", "define"],
    answer: "class",
    explanation: "The class keyword begins a class definition."
  },
  {
    question: "49. Which method is commonly used to initialize a new instance?",
    options: ["start()", "__init__()", "__main__()", "constructor()"],
    answer: "__init__()",
    explanation: "__init__() initializes an instance after it has been created; it is not the method that actually creates the instance."
  },
  {
    question: "50. What does PEP 8 describe?",
    options: ["Python coding style guidelines", "A database engine", "A Python data type", "A web browser"],
    answer: "Python coding style guidelines",
    explanation: "PEP 8 provides style conventions that help make Python code readable and consistent."
  }
];