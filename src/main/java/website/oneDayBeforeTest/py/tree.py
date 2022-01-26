# def sum_normal(x):
#     a = 0
#     for i in range(1, x+1):
#         a += i
#     return a


# def sum_sigma(x):
#     return (x * (x+1) / 2)


# def sum_recur(x):
#     if x <= 1:
#         return 1
#     return sum_recur(x-1) + x


# def factorial_normal(x):
#     """
#     n! = 1*2*3*...*n
#     """
#     a = 1
#     for i in range(1, x+1):
#         a *= i
#     return a


# def factorial_recur(x):
#     if x <= 1:
#         return 1
#     return factorial_recur(x-1) * x


# print(sum_normal(5))
# print(sum_sigma(5))
# print(sum_recur(5))
# print(factorial_normal(5))
# print(factorial_recur(5))

# while True:
#     answer = input(">")
#     if answer == "exit":
#         break
#     elif answer == "hi":
#         print("hello")
#     else:
#         continue

# 2진수:binary
# 4진수
# 8진수:oct
# 16진수:hex

# print(bin(2)[2:])
# print(oct(8)[2:])
# print(hex(16)[2:])


# def qua(x):
#     if x < 4:
#         return str(x)
#     else:
#         return qua(x // 4) + str(x % 4)


# print(qua(150))

# def reverse_recur(string):
#     if string == '':
#         return ''
#     return reverse_recur(string[1:]) + string[0]


# def reverse_normal(string):
#     x = ""
#     for i in string:
#         x = i + x
#     return x


# def sum_digit(string):
#     a = 0
#     for i in string:
#         a += int(i)
#     return a


# def sum_digit_recur(string):
#     if string == '':
#         return 0
#     return int(string[0]) + sum_digit_recur(string[1:])


# print(reverse_recur("123456789"))
# print(reverse_normal("123456789"))
# print(sum_digit("123456789"))
# print(sum_digit_recur("123456789"))

# def fibo(num):
#     a, b = 1, 1
#     if num <= 2:
#         return 1
#     for i in range(2, num):
#         a, b = b, a + b
#     return b


# def fibo_recur(num):
#     if num == 1 or num == 2:
#         return 1
#     return fibo_recur(num - 1) + fibo_recur(num - 2)


# print(fibo(10))
# print(fibo_recur(12))


# def sum_list_normal(list):
#     a = 0
#     for i in list:
#         a += i
#     return a


# def sum_list_recur(list):
#     if len(list) == 1:
#         return list[0]
#     return list[0] + sum_list_recur(list[1:])


# print(sum_list_normal([10, 20, 30, 120]))
# print(sum_list_recur([10, 20, 30, 120]))

# def square_quick(a, b):
#     return a**b


# def square_normal(a, b):
#     if b == 1:
#         return a
#     if a == 1 or b == 0:
#         return 1
#     x = 1
#     while b > 0:
#         x *= a
#         b -= 1
#     return x


# def square_recur(a, b):
#     if b == 1:
#         return a
#     if a == 1 or b == 0:
#         return 1
#     return a * square_recur(a, b-1)


# print(square_quick(2, 10))
# print(square_normal(2, 10))
# print(square_recur(2, 10))

# def gcd(a, b):
#     if a % b == 0:
#         return b
#     return gcd(b, a % b)


# def lcm(a, b):
#     return a * b // gcd(a, b)


# print(gcd(10, 40))
# print(lcm(10, 40))

import re


def comma_normal(x):
    x = str(x).replace(",", '').replace(' ', '')
    if len(x) <= 3:
        return x
    return comma_normal(x[0:-3]) + "," + x[-3:]


def comma_quick(x):
    return format(x, ',')


def comma_regex(x):
    return re.sub('(?<=\d)(?=(\d{3})+(?!\d))(\.)?', ',', str(x))


print(comma_normal("1000    , ,,,,000000,00000000"))
print(comma_quick(100000000000000000))
print(comma_regex("100000.0000000"))
