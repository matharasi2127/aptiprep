
window.cQuestions = [
  {
    question: "1. Which function is the entry point of a C program?",
    options: ["start()", "main()", "run()", "init()"],
    answer: "main()",
    explanation: "The main() function is where execution of a C program begins."
  },
  {
    question: "2. Which header file is required for printf()?",
    options: ["stdlib.h", "stdio.h", "string.h", "math.h"],
    answer: "stdio.h",
    explanation: "stdio.h declares standard input/output functions."
  },
  {
    question: "3. Which symbol ends a C statement?",
    options: [":", ";", ".", ","],
    answer: ";",
    explanation: "A semicolon terminates most C statements."
  },
  {
    question: "4. Which format specifier is used for an int?",
    options: ["%f", "%c", "%d", "%s"],
    answer: "%d",
    explanation: "%d is commonly used to read or print an int."
  },
  {
    question: "5. Which data type stores a single character?",
    options: ["int", "char", "float", "double"],
    answer: "char",
    explanation: "The char type stores a character value."
  },
  {
    question: "6. Which operator is used for multiplication?",
    options: ["x", "*", "%", "#"],
    answer: "*",
    explanation: "The asterisk operator performs multiplication."
  },
  {
    question: "7. Which function displays formatted output?",
    options: ["scanf()", "printf()", "gets()", "strlen()"],
    answer: "printf()",
    explanation: "printf() writes formatted output to standard output."
  },
  {
    question: "8. Which function reads formatted input?",
    options: ["printf()", "puts()", "scanf()", "strlen()"],
    answer: "scanf()",
    explanation: "scanf() reads formatted input from standard input."
  },
  {
    question: "9. Which keyword declares a constant variable in C?",
    options: ["fixed", "const", "constant", "final"],
    answer: "const",
    explanation: "The const qualifier prevents modification through that identifier."
  },
  {
    question: "10. Which loop executes its body at least once?",
    options: ["for", "while", "do-while", "nested for"],
    answer: "do-while",
    explanation: "A do-while loop checks its condition after executing the body."
  },
  {
    question: "11. Which operator finds the remainder?",
    options: ["/", "*", "%", "//"],
    answer: "%",
    explanation: "The modulo operator % gives the remainder for integer operands."
  },
  {
    question: "12. Array indexing in C starts from which index?",
    options: ["-1", "0", "1", "2"],
    answer: "0",
    explanation: "The first array element has index zero."
  },
  {
    question: "13. Which keyword returns a value from a function?",
    options: ["break", "continue", "return", "exit"],
    answer: "return",
    explanation: "return ends a function and can provide a value to its caller."
  },
  {
    question: "14. Which operator obtains the address of a variable?",
    options: ["*", "&", "%", "#"],
    answer: "&",
    explanation: "The address-of operator & obtains an object's address."
  },
  {
    question: "15. Which operator dereferences a pointer?",
    options: ["&", "*", "->", "."],
    answer: "*",
    explanation: "The unary * operator accesses the object pointed to by a valid pointer."
  },
  {
    question: "16. Which keyword declares a structure?",
    options: ["class", "struct", "record", "object"],
    answer: "struct",
    explanation: "struct defines a structure type in C."
  },
  {
    question: "17. Which keyword declares a union?",
    options: ["union", "struct", "enum", "typedef"],
    answer: "union",
    explanation: "union defines a type whose members share storage."
  },
  {
    question: "18. Which statement immediately exits a loop?",
    options: ["skip", "stop", "break", "continue"],
    answer: "break",
    explanation: "break terminates the nearest enclosing loop or switch."
  },
  {
    question: "19. Which statement skips to the next loop iteration?",
    options: ["break", "continue", "return", "goto"],
    answer: "continue",
    explanation: "continue skips the remaining body of the current iteration."
  },
  {
    question: "20. Which keyword is used for decision-making?",
    options: ["if", "loop", "repeat", "define"],
    answer: "if",
    explanation: "The if statement conditionally executes a statement."
  },
  {
    question: "21. Which preprocessor directive includes a header file?",
    options: ["#define", "#include", "#ifdef", "#pragma"],
    answer: "#include",
    explanation: "#include directs the preprocessor to include header content."
  },
  {
    question: "22. Which directive defines a macro?",
    options: ["#include", "#define", "#return", "#macro"],
    answer: "#define",
    explanation: "#define creates a macro definition."
  },
  {
    question: "23. Which function returns the length of a string?",
    options: ["strcpy()", "strcmp()", "strlen()", "strcat()"],
    answer: "strlen()",
    explanation: "strlen() returns the number of characters before the terminating null character."
  },
  {
    question: "24. Which function copies one string into another?",
    options: ["strcpy()", "strcmp()", "strlen()", "strchr()"],
    answer: "strcpy()",
    explanation: "strcpy() copies a source string including its terminating null character."
  },
  {
    question: "25. Which function compares two strings?",
    options: ["strcat()", "strcmp()", "strcpy()", "strlen()"],
    answer: "strcmp()",
    explanation: "strcmp() compares two null-terminated strings."
  },
  {
    question: "26. Which function joins two strings?",
    options: ["strlen()", "strcat()", "strcmp()", "strtok()"],
    answer: "strcat()",
    explanation: "strcat() appends one string to another, provided the destination has enough space."
  },
  {
    question: "27. What is a pointer in C?",
    options: ["A loop", "A variable storing an address", "A keyword", "A header file"],
    answer: "A variable storing an address",
    explanation: "A pointer stores an address of an object or function, or a null pointer value."
  },
  {
    question: "28. Which keyword creates an enumeration type?",
    options: ["enum", "union", "struct", "typedef"],
    answer: "enum",
    explanation: "enum defines an enumeration type with named integer constants."
  },
  {
    question: "29. Which storage class allows a local variable to retain its value between calls?",
    options: ["auto", "register", "static", "extern"],
    answer: "static",
    explanation: "A static local variable retains its stored value between function calls."
  },
  {
    question: "30. Which keyword declares a variable defined elsewhere?",
    options: ["static", "extern", "auto", "register"],
    answer: "extern",
    explanation: "extern declares an identifier with external linkage or refers to a declaration elsewhere."
  },
  {
    question: "31. What is the result of 10 / 3 when both operands are int?",
    options: ["3", "3.33", "4", "1"],
    answer: "3",
    explanation: "Integer division discards the fractional part, producing 3."
  },
  {
    question: "32. What is the result of 10 % 3?",
    options: ["0", "1", "2", "3"],
    answer: "1",
    explanation: "10 divided by 3 leaves a remainder of 1."
  },
  {
    question: "33. Which operator checks equality?",
    options: ["=", "==", "!=", "<="],
    answer: "==",
    explanation: "== compares two values for equality; = performs assignment."
  },
  {
    question: "34. Which operator means logical AND?",
    options: ["&", "&&", "||", "!"],
    answer: "&&",
    explanation: "&& performs logical AND with short-circuit evaluation."
  },
  {
    question: "35. Which operator means logical OR?",
    options: ["&&", "!", "||", "&"],
    answer: "||",
    explanation: "|| performs logical OR with short-circuit evaluation."
  },
  {
    question: "36. Which operator increments a value by one?",
    options: ["--", "++", "+=", "**"],
    answer: "++",
    explanation: "The increment operator increases its operand by one."
  },
  {
    question: "37. What is the first valid index of int a[5]?",
    options: ["-1", "0", "1", "5"],
    answer: "0",
    explanation: "An array with five elements has valid indices 0 through 4."
  },
  {
    question: "38. How many elements are declared by int a[5]?",
    options: ["4", "5", "6", "Depends on input"],
    answer: "5",
    explanation: "The declaration reserves space for five int elements."
  },
  {
    question: "39. Which function allocates dynamic memory?",
    options: ["printf()", "malloc()", "strlen()", "fopen()"],
    answer: "malloc()",
    explanation: "malloc() requests a block of dynamically allocated memory."
  },
  {
    question: "40. Which function releases dynamically allocated memory?",
    options: ["remove()", "free()", "delete", "clear()"],
    answer: "free()",
    explanation: "free() releases a block previously allocated by a compatible allocation function."
  },
  {
    question: "41. Which header declares malloc() and free()?",
    options: ["stdio.h", "stdlib.h", "string.h", "ctype.h"],
    answer: "stdlib.h",
    explanation: "The standard library declares malloc() and free() in stdlib.h."
  },
  {
    question: "42. Which function opens a file?",
    options: ["fopen()", "fclose()", "fprintf()", "fread()"],
    answer: "fopen()",
    explanation: "fopen() opens a file and returns a FILE pointer on success."
  },
  {
    question: "43. Which function closes an opened file?",
    options: ["fopen()", "fclose()", "fseek()", "fgetc()"],
    answer: "fclose()",
    explanation: "fclose() closes a stream and flushes buffered output."
  },
  {
    question: "44. Which file mode opens a file for reading text?",
    options: ["w", "a", "r", "x"],
    answer: "r",
    explanation: "The r mode opens an existing file for reading."
  },
  {
    question: "45. What does EOF represent?",
    options: ["End of file indicator", "A loop keyword", "A data type", "A pointer operator"],
    answer: "End of file indicator",
    explanation: "EOF is a negative int constant returned by certain input functions to indicate end-of-file or a read error."
  },
  {
    question: "46. Which function reads a character from a stream?",
    options: ["putchar()", "getchar()", "puts()", "printf()"],
    answer: "getchar()",
    explanation: "getchar() reads one character from standard input."
  },
  {
    question: "47. Which function writes one character to standard output?",
    options: ["getchar()", "putchar()", "scanf()", "fopen()"],
    answer: "putchar()",
    explanation: "putchar() writes one character to standard output."
  },
  {
    question: "48. Which function writes a string to standard output without adding a newline automatically?",
    options: ["puts()", "printf()", "fputs()", "scanf()"],
    answer: "printf()",
    explanation: "printf() does not automatically append a newline unless the format string includes one."
  },
  {
    question: "49. What is recursion?",
    options: ["A function calling itself", "A variable declaration", "A file operation", "A loop condition only"],
    answer: "A function calling itself",
    explanation: "Recursion occurs when a function calls itself directly or indirectly."
  },
  {
    question: "50. Which operator accesses a structure member through a structure variable?",
    options: ["->", ".", "&", "*"],
    answer: ".",
    explanation: "The dot operator accesses a member through a structure object; -> accesses through a pointer."
  }
];