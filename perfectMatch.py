global num1
global num2
global amount1
global amount2
global counter
counter = 0

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
else:
    print(num1, num2)
