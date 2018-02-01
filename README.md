# evenOdd()

In this assignment, you will be creating a function **evenOdd**.  The input to **evenOdd** will be a number.  Your goal is to examine this input and determine whether it is even or odd.  You will then print the input to the console and whether the input is even or odd.

### Examples:

Input:

```
4
```

Output:
```
You entered 4.
Your number is even!
```
---

Input:

```
3
```

Output:
```
You entered 3.
Your number is odd!
```

### Helpful Tips:

In your logic worksheets, you learned about how to check if a number is divisble by another number.  This was done using the remainder operator `%`.  Using this operator allows you to write `n % d` which gives the remainder when n is divided by d.  Some examples are below.

```
4 % 2 \\ 0
3 % 2 \\ 1
10 % 2 \\ 0
57 % 2 \\ 1
10 % 3 \\ 1
17 % 5 \\ 2
18 % 5 \\ 3
```



# evenOddExtended()

In this assignment, you will be creating a function **evenOddExtended**.  The input to **evenOddExtended** will be a number.  Your goal is to examine this input and determine whether it is even or odd.  However, before you do that, you first need to check that the input is a positive number.  You will then print the input to the console and whether the input is even or odd.

### Examples:

Input:

```
4
```

Output:
```
You entered 4.
Your number is even!
```
---

Input:

```
3
```

Output:
```
You entered 3.
Your number is odd!
```
---

Input:

```
3.1
```

Output:
```
You entered 3.1.
Your input is not an integer.
```
---

Input:

```
-3
```

Output:
```
You entered 3.
Your number is not a positive number.
```

---

Input:

```
Hi
```

Output:
```
You entered Hi.
Your input is not an integer.
```

### Helpful Tips:

To check whether your input is an integer, you will use the Number.isInteger() function that you learned about in Codecademy.  

```
Number.isInteger(3) \\ true
Number.isInteger(-3) \\ true
parseInt(3.1) \\ false
parseInt("Hi") \\ false
```

# multiplesCheck()

In this assignment, you will be creating a function **multiplesCheck**.  The input to **multiplesCheck** will be a number.  Your goal is to examine this input and determine whether it is a multiple of 3, a multiple of 5, or neither.  You will then print the input to the console and whether the input is a multiple of 3, a multiple of 5, both, or neither.

### Examples:

Input:

```
3
```

Output:
```
You entered 3.
Your number is a multiple of 3 but not a multiple of 5.
```
---

Input:

```
5
```

Output:
```
You entered 5.
Your number is a multiple of 5 but not a multiple of 3.
```

---

Input:

```
7
```

Output:
```
You entered 7.
Your number is not a multiple of 3 or 5.
```

---

```
15
```

Output:
```
You entered 15.
Your number is a multiple of both 3 and 5.
```
