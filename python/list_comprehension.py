>>> [x for x in range(10)]
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

>>> [(lambda x: x**2)(i) for i in range(10)]
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

>>> [x for x in range(10) if x > 5]
[6, 7, 8, 9]

>>> [x if x > 5 else 0 for x in range(10)]
[0, 0, 0, 0, 0, 0, 6, 7, 8, 9]

>>> [x + 1 if x < 5 else x + 2 if x > 5 else x + 5 for x in range(10)]
[1, 2, 3, 4, 5, 10, 8, 9, 10, 11]

>>> [(x, y) for x in range(3) for y in range(2)]
[(0, 0), (0, 1), (1, 0), (1, 1), (2, 0), (2, 1)]
