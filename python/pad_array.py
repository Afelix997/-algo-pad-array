def pad(array, min_size, value = None):
    while len(array) < min_size:
        array.append(value)
    return array

