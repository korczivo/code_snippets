# Our main goal is find all dividers of number passed to function

def divisor(n):
    temp_arr = []
    for i in range(2, n):
        if n % i == 0:
            temp_arr.append(i)

    if len(temp_arr) == 0:
        return str(n) + " is prime"
    return temp_arr


print(divisor(253)) # [11, 13]
print(divisor(15)) # [3, 5]
print(divisor(24)) # [2, 3, 4, 6, 8, 12]
print(divisor(25)) # [5]
print(divisor(13)) # 13 is prime
print(divisor(3)) # 3 is prime
print(divisor(29)) # 29 is prime
