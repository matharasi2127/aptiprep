
window.javaQuestions = [
  {
    question: "1. Who developed Java?",
    options: ["Dennis Ritchie", "James Gosling", "Bjarne Stroustrup", "Guido van Rossum"],
    answer: "James Gosling",
    explanation: "James Gosling led the development of Java at Sun Microsystems."
  },
  {
    question: "2. Which keyword is used to define a class in Java?",
    options: ["struct", "class", "define", "object"],
    answer: "class",
    explanation: "The class keyword declares a class in Java."
  },
  {
    question: "3. Which method is the standard entry point of a Java application?",
    options: ["start()", "run()", "main()", "init()"],
    answer: "main()",
    explanation: "The standard entry point is public static void main(String[] args)."
  },
  {
    question: "4. Which keyword is used to create an object in Java?",
    options: ["class", "this", "new", "create"],
    answer: "new",
    explanation: "The new keyword creates an object or array."
  },
  {
    question: "5. Which of these is not a primitive data type in Java?",
    options: ["int", "char", "boolean", "String"],
    answer: "String",
    explanation: "String is a class, not a primitive data type."
  },
  {
    question: "6. Which primitive type stores true or false?",
    options: ["int", "boolean", "char", "float"],
    answer: "boolean",
    explanation: "The boolean type represents either true or false."
  },
  {
    question: "7. Which keyword inherits a class in Java?",
    options: ["implements", "extends", "inherits", "super"],
    answer: "extends",
    explanation: "A class uses extends to inherit from another class."
  },
  {
    question: "8. Which keyword is used when a class implements an interface?",
    options: ["extends", "implements", "interface", "instanceof"],
    answer: "implements",
    explanation: "A class uses implements to provide implementations for an interface."
  },
  {
    question: "9. Which keyword refers to the current object?",
    options: ["super", "this", "self", "current"],
    answer: "this",
    explanation: "this refers to the current object in an instance context."
  },
  {
    question: "10. Which keyword refers to the immediate parent-class portion of an object?",
    options: ["this", "parent", "super", "base"],
    answer: "super",
    explanation: "super accesses superclass members and invokes superclass constructors."
  },
  {
    question: "11. Which method compares the contents of two strings?",
    options: ["==", "equals()", "compareType()", "same()"],
    answer: "equals()",
    explanation: "String equals() compares string contents; == compares references for objects."
  },
  {
    question: "12. Which keyword prevents a class from being subclassed?",
    options: ["static", "final", "private", "const"],
    answer: "final",
    explanation: "A class declared final cannot be extended."
  },
  {
    question: "13. Which keyword is used to handle an exception?",
    options: ["catch", "throws", "final", "transient"],
    answer: "catch",
    explanation: "A catch block handles a matching exception thrown from a try block."
  },
  {
    question: "14. Which block normally contains code that may throw an exception?",
    options: ["catch", "finally", "try", "throw"],
    answer: "try",
    explanation: "A try block encloses code whose exceptions can be handled by associated handlers."
  },
  {
    question: "15. Which keyword explicitly throws an exception?",
    options: ["throws", "throw", "catch", "error"],
    answer: "throw",
    explanation: "throw is used to throw an exception object."
  },
  {
    question: "16. Which keyword declares exceptions that a method may pass to its caller?",
    options: ["throw", "throws", "catch", "try"],
    answer: "throws",
    explanation: "The throws clause declares exception types a method may propagate."
  },
  {
    question: "17. Which collection type does not allow duplicate elements?",
    options: ["List", "Set", "ArrayList", "LinkedList"],
    answer: "Set",
    explanation: "A Set collection does not contain duplicate elements."
  },
  {
    question: "18. Which collection maintains an indexed sequence and permits duplicates?",
    options: ["Set", "List", "Map", "TreeSet"],
    answer: "List",
    explanation: "A List is ordered by position and can contain duplicate elements."
  },
  {
    question: "19. Which class is commonly used for a resizable array?",
    options: ["HashMap", "ArrayList", "HashSet", "TreeMap"],
    answer: "ArrayList",
    explanation: "ArrayList implements a resizable-array List."
  },
  {
    question: "20. Which interface stores key-value mappings?",
    options: ["List", "Queue", "Map", "Set"],
    answer: "Map",
    explanation: "Map associates keys with values, with each key unique within the map."
  },
  {
    question: "21. Which keyword declares a constant variable when used with a variable declaration?",
    options: ["static", "final", "constant", "fixed"],
    answer: "final",
    explanation: "A final variable can be assigned only once."
  },
  {
    question: "22. What is method overloading?",
    options: ["Same method name with different parameter lists", "Same method repeated in a loop", "A method inside another method", "Changing a variable type"],
    answer: "Same method name with different parameter lists",
    explanation: "Overloaded methods share a name but differ in their parameter lists."
  },
  {
    question: "23. What is method overriding?",
    options: ["Defining a subclass method that overrides an inherited instance method", "Creating two constructors", "Declaring a variable twice", "Calling a static method"],
    answer: "Defining a subclass method that overrides an inherited instance method",
    explanation: "Overriding lets a subclass provide a new implementation of an inherited method."
  },
  {
    question: "24. Which concept hides internal implementation details and exposes a controlled interface?",
    options: ["Abstraction", "Iteration", "Compilation", "Casting"],
    answer: "Abstraction",
    explanation: "Abstraction exposes essential behavior while hiding implementation details."
  },
  {
    question: "25. Which concept bundles data and methods and controls access to them?",
    options: ["Encapsulation", "Recursion", "Inheritance", "Iteration"],
    answer: "Encapsulation",
    explanation: "Encapsulation groups state and behavior while controlling access to internal data."
  },
  {
    question: "26. Can Java support multiple inheritance of classes?",
    options: ["Yes, every class can extend multiple classes", "No, a class can extend only one class", "Only with final classes", "Only with constructors"],
    answer: "No, a class can extend only one class",
    explanation: "Java classes have single class inheritance, although a class can implement multiple interfaces."
  },
  {
    question: "27. Which keyword declares an abstract class or method?",
    options: ["virtual", "abstract", "interface", "native"],
    answer: "abstract",
    explanation: "The abstract keyword declares an abstract class or method."
  },
  {
    question: "28. Can an abstract class be instantiated directly?",
    options: ["Yes, always", "No", "Only with a static method", "Only without a constructor"],
    answer: "No",
    explanation: "An abstract class cannot be instantiated directly, but a concrete subclass can be instantiated."
  },
  {
    question: "29. Which keyword declares a package-private class member by default when no access modifier is written?",
    options: ["public", "protected", "private", "No modifier"],
    answer: "No modifier",
    explanation: "Without an access modifier, a class member has package-private access."
  },
  {
    question: "30. Which keyword makes a member belong to the class rather than to each instance?",
    options: ["final", "static", "this", "super"],
    answer: "static",
    explanation: "A static member belongs to the class rather than to individual instances."
  },
  {
    question: "31. Which operator checks whether two primitive numeric values are equal?",
    options: ["=", "==", "equals()", "!="],
    answer: "==",
    explanation: "For primitive values, == tests equality; = assigns a value."
  },
  {
    question: "32. What is the result of 10 / 3 when both operands are int?",
    options: ["3", "3.33", "4", "1"],
    answer: "3",
    explanation: "Integer division discards the fractional part, so 10 / 3 equals 3."
  },
  {
    question: "33. What is the result of 10 % 3?",
    options: ["0", "1", "2", "3"],
    answer: "1",
    explanation: "The remainder after dividing 10 by 3 is 1."
  },
  {
    question: "34. Which loop checks its condition before each iteration?",
    options: ["do-while only", "while", "Neither for nor while", "All loops check only afterward"],
    answer: "while",
    explanation: "A while loop tests its condition before executing the body each time."
  },
  {
    question: "35. Which statement exits the nearest enclosing loop?",
    options: ["continue", "break", "skip", "next"],
    answer: "break",
    explanation: "break terminates the nearest enclosing loop or switch statement."
  },
  {
    question: "36. Which statement skips the rest of the current loop iteration?",
    options: ["break", "return", "continue", "throw"],
    answer: "continue",
    explanation: "continue moves control to the next iteration of the loop."
  },
  {
    question: "37. What is the first valid index of a Java array?",
    options: ["-1", "0", "1", "Depends on array length"],
    answer: "0",
    explanation: "Java arrays use zero-based indexing."
  },
  {
    question: "38. Which property gives the length of an array?",
    options: ["size()", "length()", "length", "count()"],
    answer: "length",
    explanation: "An array exposes its length through the length field."
  },
  {
    question: "39. Which method returns the number of characters in a String?",
    options: ["size()", "length()", "count()", "capacity()"],
    answer: "length()",
    explanation: "String.length() returns the number of UTF-16 code units in the string."
  },
  {
    question: "40. Which class represents an immutable sequence of characters?",
    options: ["String", "StringBuilder", "StringBuffer", "CharacterArray"],
    answer: "String",
    explanation: "String objects are immutable; their contents cannot be changed after creation."
  },
  {
    question: "41. Which class is commonly used to build mutable strings efficiently?",
    options: ["String", "StringBuilder", "Integer", "Scanner"],
    answer: "StringBuilder",
    explanation: "StringBuilder supports modifying a character sequence without creating a new String for each change."
  },
  {
    question: "42. Which class can read tokens from standard input conveniently?",
    options: ["Scanner", "String", "Math", "System"],
    answer: "Scanner",
    explanation: "java.util.Scanner can parse tokens and values from System.in."
  },
  {
    question: "43. Which package contains the Scanner class?",
    options: ["java.io", "java.util", "java.lang", "java.net"],
    answer: "java.util",
    explanation: "Scanner is part of the java.util package."
  },
  {
    question: "44. Which method starts a new thread's execution using the Thread API?",
    options: ["run()", "start()", "executeNow()", "begin()"],
    answer: "start()",
    explanation: "Calling start() schedules a new thread; the thread then executes run()."
  },
  {
    question: "45. Which method is the entry point of a thread's task when using the Thread class?",
    options: ["main()", "start()", "run()", "init()"],
    answer: "run()",
    explanation: "The run() method contains the task performed by a thread."
  },
  {
    question: "46. Which keyword is used to synchronize a method or block?",
    options: ["volatile", "synchronized", "static", "transient"],
    answer: "synchronized",
    explanation: "synchronized uses a monitor lock to coordinate access between threads."
  },
  {
    question: "47. Which class is the superclass of all Java classes?",
    options: ["Class", "Main", "Object", "System"],
    answer: "Object",
    explanation: "java.lang.Object is the root superclass of classes that do not extend another class."
  },
  {
    question: "48. Which method converts a string such as \"123\" to an int?",
    options: ["Integer.parseInt()", "String.toInt()", "Integer.toString()", "int.valueOfString()"],
    answer: "Integer.parseInt()",
    explanation: "Integer.parseInt(\"123\") parses the text and returns the int value 123."
  },
  {
    question: "49. Which keyword is used to define an interface?",
    options: ["implements", "interface", "abstract", "extends"],
    answer: "interface",
    explanation: "The interface keyword declares an interface type."
  },
  {
    question: "50. Which component converts Java bytecode into machine instructions at runtime in a typical JVM?",
    options: ["Javadoc", "JIT compiler", "Java editor", "Source formatter"],
    answer: "JIT compiler",
    explanation: "A Just-In-Time compiler can compile frequently executed bytecode into native machine code at runtime."
  }
];