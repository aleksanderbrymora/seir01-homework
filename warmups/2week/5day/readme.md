# Implement Ceasar/Shift cipher

The cipher takes in a message and using a given key 'shifts' every character by that ammount to the right so a becomes b with a key of 1.

## Examples

When given `key = 1`
'a' will become 'b', because we shift it by one character in the alphabet.
A string `please help this is boring` becomes `qmfbtf ifmq uijt jt cpsjoh`.

## Bonus

Make cipher ignore special characters like `.,/?!` so remember to account for that.
A string `please help, this is boring` becomes `qmfbtf ifmq, uijt jt cpsjoh`.

## Hint

_Don't read if you want some challenge_
Have a look at converting characters to ASCII numbers
