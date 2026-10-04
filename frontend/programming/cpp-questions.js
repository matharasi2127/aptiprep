
window.cppQuestions = [
  {
    question: "1. Who developed C++?",
    options: ["Dennis Ritchie", "Bjarne Stroustrup", "James Gosling", "Guido van Rossum"],
    answer: "Bjarne Stroustrup",
    explanation: "Bjarne Stroustrup developed C++ as an extension of C."
  },
  {
    question: "2. Which header file is commonly used for cout and cin?",
    options: ["<stdio.h>", "<string.h>", "<iostream>", "<math.h>"],
    answer: "<iostream>",
    explanation: "The iostream header provides standard input and output stream objects."
  },
  {
    question: "3. Which object is used to display output in C++?",
    options: ["cin", "cout", "get", "input"],
    answer: "cout",
    explanation: "cout is the standard output stream object."
  },
  {
    question: "4. Which object is used to receive keyboard input?",
    options: ["cout", "print", "cin", "write"],
    answer: "cin",
    explanation: "cin is the standard input stream object."
  },
  {
    question: "5. Which operator is used with cout?",
    options: [">>", "<<", "==", "&&"],
    answer: "<<",
    explanation: "The insertion operator << sends data to an output stream."
  },
  {
    question: "6. Which operator is used with cin?",
    options: ["<<", ">>", "!=", "++"],
    answer: ">>",
    explanation: "The extraction operator >> reads data from an input stream."
  },
  {
    question: "7. Which keyword defines a class?",
    options: ["object", "structonly", "class", "define"],
    answer: "class",
    explanation: "The class keyword declares a class type in C++."
  },
  {
    question: "8. What is an object in C++?",
    options: ["An instance of a class", "A header file", "A loop", "A preprocessor directive"],
    answer: "An instance of a class",
    explanation: "An object is an instance of a class with its own state and behavior."
  },
  {
    question: "9. Which access specifier allows access from anywhere permitted by the program?",
    options: ["private", "public", "protected", "hidden"],
    answer: "public",
    explanation: "Public class members can be accessed from outside the class, subject to normal access rules."
  },
  {
    question: "10. Which access specifier restricts direct access to class members from outside the class?",
    options: ["public", "open", "private", "global"],
    answer: "private",
    explanation: "Private members cannot be accessed directly from ordinary outside code."
  },
  {
    question: "11. What is a constructor?",
    options: ["A special member function used to initialize objects", "A loop statement", "A header file", "A destructor only"],
    answer: "A special member function used to initialize objects",
    explanation: "A constructor is called when an object is initialized."
  },
  {
    question: "12. What is the name of a class's destructor?",
    options: ["!ClassName", "~ClassName", "delete ClassName", "free ClassName"],
    answer: "~ClassName",
    explanation: "A destructor has the class name preceded by a tilde."
  },
  {
    question: "13. Which concept allows functions to share a name but use different parameter lists?",
    options: ["Inheritance", "Function overloading", "Encapsulation", "Recursion"],
    answer: "Function overloading",
    explanation: "Overloaded functions have the same name but different parameter lists."
  },
  {
    question: "14. Which concept lets a derived class acquire members from a base class?",
    options: ["Inheritance", "Compilation", "Tokenization", "Casting"],
    answer: "Inheritance",
    explanation: "Inheritance creates a derived class based on an existing base class."
  },
  {
    question: "15. Which concept combines data and related functions in one unit?",
    options: ["Encapsulation", "Iteration", "Linking", "Preprocessing"],
    answer: "Encapsulation",
    explanation: "Encapsulation groups data and methods and controls access to internal state."
  },
  {
    question: "16. Which concept allows one interface to have different implementations?",
    options: ["Polymorphism", "Assignment", "Declaration", "Iteration"],
    answer: "Polymorphism",
    explanation: "Polymorphism allows a common interface to represent different behaviors."
  },
  {
    question: "17. Which keyword refers to the current object?",
    options: ["self", "this", "current", "super"],
    answer: "this",
    explanation: "The this pointer refers to the current object in a non-static member function."
  },
  {
    question: "18. Which keyword declares a constant member function?",
    options: ["static", "const", "fixed", "final"],
    answer: "const",
    explanation: "A const-qualified member function cannot modify ordinary non-mutable data members."
  },
  {
    question: "19. Which keyword creates a symbolic constant or compile-time constant expression when applicable?",
    options: ["constexpr", "mutable", "friend", "virtual"],
    answer: "constexpr",
    explanation: "constexpr enables variables or functions to participate in constant expressions when requirements are met."
  },
  {
    question: "20. Which keyword is used to declare a virtual function?",
    options: ["virtual", "override", "friend", "static"],
    answer: "virtual",
    explanation: "Virtual functions support runtime polymorphism through base-class interfaces."
  },
  {
    question: "21. Which keyword indicates that a derived function overrides a virtual function?",
    options: ["overload", "override", "virtualize", "extends"],
    answer: "override",
    explanation: "override asks the compiler to verify that the function overrides a base-class virtual function."
  },
  {
    question: "22. Which keyword prevents a virtual function from being overridden further?",
    options: ["static", "final", "const", "private"],
    answer: "final",
    explanation: "A virtual function marked final cannot be overridden in a further derived class."
  },
  {
    question: "23. Which keyword declares a pure virtual function?",
    options: ["virtual void f();", "virtual void f() = 0;", "pure void f();", "abstract void f();"],
    answer: "virtual void f() = 0;",
    explanation: "The = 0 syntax declares a pure virtual function."
  },
  {
    question: "24. What is an abstract class?",
    options: ["A class that cannot be instantiated directly", "A class with no functions", "A class with only public data", "A class that has no name"],
    answer: "A class that cannot be instantiated directly",
    explanation: "A class with at least one pure virtual function is abstract and cannot be instantiated directly."
  },
  {
    question: "25. Which keyword is used to allocate an object dynamically in C++?",
    options: ["malloc", "new", "create", "alloc"],
    answer: "new",
    explanation: "new dynamically allocates storage and initializes an object."
  },
  {
    question: "26. Which operator releases a single dynamically allocated object created with new?",
    options: ["free", "remove", "delete", "clear"],
    answer: "delete",
    explanation: "delete destroys a dynamically allocated object and releases its storage."
  },
  {
    question: "27. Which operator releases an array allocated using new[]?",
    options: ["delete", "delete[]", "free[]", "remove[]"],
    answer: "delete[]",
    explanation: "delete[] destroys the elements of a dynamically allocated array and releases its storage."
  },
  {
    question: "28. Which standard library type represents a sequence of characters?",
    options: ["std::string", "std::integer", "std::character", "std::text"],
    answer: "std::string",
    explanation: "std::string is the standard library type used for strings of characters."
  },
  {
    question: "29. Which operator checks whether two values are equal?",
    options: ["=", "==", "!=", "=>"],
    answer: "==",
    explanation: "The equality operator == compares two values."
  },
  {
    question: "30. Which operator returns the remainder of integer division?",
    options: ["/", "*", "%", "+"],
    answer: "%",
    explanation: "The % operator calculates the remainder for integer operands."
  },
  {
    question: "31. What is the result of 7 / 2 when both operands are int?",
    options: ["3", "3.5", "4", "1"],
    answer: "3",
    explanation: "Integer division truncates the fractional part, so 7 / 2 produces 3."
  },
  {
    question: "32. What is the result of 7 % 2?",
    options: ["0", "1", "2", "3"],
    answer: "1",
    explanation: "Dividing 7 by 2 leaves a remainder of 1."
  },
  {
    question: "33. Which loop is guaranteed to execute its body at least once?",
    options: ["for", "while", "do-while", "range-for"],
    answer: "do-while",
    explanation: "A do-while loop evaluates its condition after executing the body."
  },
  {
    question: "34. Which statement exits the nearest enclosing loop?",
    options: ["continue", "break", "skip", "next"],
    answer: "break",
    explanation: "break terminates the nearest enclosing loop or switch statement."
  },
  {
    question: "35. Which statement skips the remainder of the current loop iteration?",
    options: ["break", "return", "continue", "exit"],
    answer: "continue",
    explanation: "continue proceeds to the next iteration of the nearest enclosing loop."
  },
  {
    question: "36. Which is the first valid index of an array in C++?",
    options: ["-1", "0", "1", "Depends on array size"],
    answer: "0",
    explanation: "Built-in arrays use zero-based indexing."
  },
  {
    question: "37. Which container stores elements in a dynamic sequence in the C++ standard library?",
    options: ["std::vector", "std::file", "std::loop", "std::char"],
    answer: "std::vector",
    explanation: "std::vector is a dynamic sequence container that can grow or shrink."
  },
  {
    question: "38. Which header provides std::vector?",
    options: ["<vector>", "<arraylist>", "<iostream>", "<string>"],
    answer: "<vector>",
    explanation: "The vector container is declared in the standard <vector> header."
  },
  {
    question: "39. Which header provides std::map?",
    options: ["<map>", "<dictionary>", "<pair>", "<setonly>"],
    answer: "<map>",
    explanation: "The standard associative container std::map is declared in <map>."
  },
  {
    question: "40. Which standard container stores unique sorted keys?",
    options: ["std::vector", "std::set", "std::list", "std::queue"],
    answer: "std::set",
    explanation: "std::set stores unique keys in sorted order by default."
  },
  {
    question: "41. Which keyword creates a type alias?",
    options: ["typedef", "aliasing", "rename", "usingclass"],
    answer: "typedef",
    explanation: "typedef introduces an alternative name for a type."
  },
  {
    question: "42. Which declaration can also create a type alias in modern C++?",
    options: ["using Number = int;", "alias Number int;", "type Number = int;", "define Number int;"],
    answer: "using Number = int;",
    explanation: "A using declaration in this form creates a type alias."
  },
  {
    question: "43. Which operator accesses a member through an object?",
    options: [".", "->", "&", "%"],
    answer: ".",
    explanation: "The dot operator accesses a member through an object or object reference."
  },
  {
    question: "44. Which operator accesses a member through a pointer to an object?",
    options: [".", "->", "::", "&&"],
    answer: "->",
    explanation: "The arrow operator accesses a member through a pointer to an object."
  },
  {
    question: "45. Which operator is used for scope resolution?",
    options: [".", "->", "::", ":"],
    answer: "::",
    explanation: "The scope resolution operator identifies a name within a particular scope."
  },
  {
    question: "46. Which keyword declares a friend function or class?",
    options: ["friend", "virtual", "extern", "operator"],
    answer: "friend",
    explanation: "A friend declaration grants the specified function or class access to private and protected members."
  },
  {
    question: "47. What is a template used for?",
    options: ["Writing generic functions and classes", "Opening files only", "Stopping loops", "Declaring comments"],
    answer: "Writing generic functions and classes",
    explanation: "Templates allow functions and classes to work with different types."
  },
  {
    question: "48. Which keyword begins a template declaration?",
    options: ["generic", "template", "typenameclass", "type"],
    answer: "template",
    explanation: "The template keyword introduces a template declaration."
  },
  {
    question: "49. Which exception-handling keyword catches an exception?",
    options: ["try", "throw", "catch", "finally"],
    answer: "catch",
    explanation: "A catch handler handles a matching exception thrown from a try block."
  },
  {
    question: "50. Which keyword throws an exception in C++?",
    options: ["catch", "try", "throw", "error"],
    answer: "throw",
    explanation: "The throw expression signals an exception that can be handled by a matching catch handler."
  }
];