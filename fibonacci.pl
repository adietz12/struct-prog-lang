fibonacci(1, 0).
fibonacci(2, 1).
fibonacci(N, P) :-
    N > 2,
    M is N - 1,
    fibonacci(M, G),
    L is N - 2,
    fibonacci(L, H),
    P is G + H.