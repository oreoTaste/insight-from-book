/*
source : http://flukeout.github.io/

regarding 'selector'
*/

1. plate
2. bento
3. #fancy
4. plate apple
5. plate#fancy *
6. apple.small
7. orange.small
8. bento orange.small
9. plate, bento
10. *
11. plate *
12. plate + apple
13. bento ~ pickle
14. plate > apple
15. plate orange:first-child or plate orange:first-of-type
16. plate *:only-child
17. *.small:last-child
18. plate:nth-child(3) or plate:nth-of-type(3)
19. bento:nth-last-child(3)
20. apple:nth-of-type(1)
21. plate:nth-of-type(2n)
22. plate:nth-of-type(2n+3)
23. plate apple:only-child
24. orange:last-of-type, apple:last-of-type
25. bento:empty
26. apple:not(.small)
27. *[for]
28. plate[for]
29. bento[for="Vitaly"]
30. *[for^="Sa"]
31. *[for$="ato"]
32. bento[for*="obb"]