#  http://paullab.co.kr/codefestival.html
#  1. 암호 해독하기
#  '  + -- + - + -  '
#  '  + --- + - +   '
#  '  + -- + - + -  '
#  '  + - + - + - + '
#   <<정답>>
#  const hint = ["  + -- + - + -  ", "  + --- + - +   ", "  + -- + - + -  ", "  + - + - + - + "];

hint = ["  + -- + - + -  ", "  + --- + - +   ",
        "  + -- + - + -  ", "  + - + - + - + "]

print(''.join([chr(int(i.replace(' ', '').replace(
    '+', '1').replace('-', '0'), 2)) for i in hint]))

# print([f'{i} x {j} = {i*j}' for i in range(2, 10) for j in range(1, 10)])
# print('0101010000'.replace('0', '*', 2))
# print('111'.zfill(10))

# val = [(i.replace(" ", '').replace('+', '1').replace('-', '0'))
#        for i in hint]

# print(''.join(list(map(lambda x: chr(int(x, 2)), val))))


# def f(x):
#     return chr(int(x, 2))


# print(''.join(list(map(f, val))))
