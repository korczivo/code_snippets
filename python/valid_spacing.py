# Find valid spacing in strings, below excepted results ❔❔❔

# 'Hello world' = True
# ' Hello world' = False
# 'Hello world  ' = False
# 'Hello   world' = False
# 'Helloworld' = True
# " " = False
# "" = True

def valid_spacing(s):
    if len(s) == 0:
        return True
    arr = list(s)
    for i, j in enumerate(arr):
        if arr[i] == ' ' and arr[i - 1] == ' ':
            return False
        if arr[-1] == ' ' or arr[0] == ' ':
            return False

    return True

# Function done ✅
