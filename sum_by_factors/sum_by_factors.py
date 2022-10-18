def sum_for_list(lst):
    PrimeLst = []
    FinalList = []
    for n in lst:
        PrimeLst = list(set(PrimeLst).union(set(prime_factors(n))))
    PrimeLst.sort()
    for n in PrimeLst:
        sum = 0
        listN = [n]
        for m in lst:
            if m % n == 0:
                sum = sum + m
        listN.append(sum)
        FinalList.append(listN)
    return FinalList


def prime_factors(n):
    i = 2
    n = abs(n)
    factors = []
    while i * i <= n:
        if n % i:
            i += 1
        else:
            n //= i
            factors.append(i)
    if n > 1:
        factors.append(n)
    return factors


sum_for_list([15, 21, 24, 30, 45])
