# Evaluate Strings

[Edabit resource link](https://edabit.com/challenge/n2bFd2enCnHJkTwsK)

## Problem Statement

Create a function that evaluates an equation.

## Examples

```
eq("1+2") ➞ 3

eq("6/(9-7)") ➞ 3

eq("3+2-4") ➞ 1
```

## Notes

Don't print, return a value.
Return the value, not the equation.
The method used to solve this challenge should not be used in practice. However, it's important to be aware of how this functionality works and why it should not be used. Check the Resources for more information.

[Here is a useful Stack Overflow method used to tackle this problem](https://stackoverflow.com/a/13077966/15592981)

```
var math_it_up = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y }
}​​​​​​​;

math_it_up['+'](1, 2) == 3;
```

Click the link for the discussion on how to [split a string into sets of 2](https://stackoverflow.com/a/53896618/15592981)