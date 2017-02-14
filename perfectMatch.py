global num1
global num2
global amount1
global amount2
global counter
counter = 0

# wanna know how many crazy adventures are to happen
# before you'll find your perfect match? Give it a shot!

# count incrementations, and at the end print this:
# x crazy adventures are still to happen. That's a lot to keep up with!
# (x crazy adventures on the way to the perfect match)


import random

amount1 = random.randrange(101)
amount2 = random.randrange(101)

num1 = amount1
num2 = amount2

def z():
    global num1
    num1 = num1 + amount1

def x():
    global num2
    num2 = num2 + amount2


while num1 != num2:
    print(num1, num2)
    if num1 < num2:
        z()
    elif num1 > num2:
        x()
    global counter
    counter = counter + 1
else:
    print(num1, num2)
    print(counter, 'crazy adventures on the way to the perfect match')
