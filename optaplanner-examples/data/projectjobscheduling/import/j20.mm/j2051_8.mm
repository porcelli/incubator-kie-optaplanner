************************************************************************
file with basedata            : md371_.bas
initial value random generator: 25017264
************************************************************************
projects                      :  1
jobs (incl. supersource/sink ):  22
horizon                       :  166
RESOURCES
  - renewable                 :  2   R
  - nonrenewable              :  2   N
  - doubly constrained        :  0   D
************************************************************************
PROJECT INFORMATION:
pronr.  #jobs rel.date duedate tardcost  MPM-Time
    1     20      0       25       16       25
************************************************************************
PRECEDENCE RELATIONS:
jobnr.    #modes  #successors   successors
   1        1          3           2   3   4
   2        3          3           8   9  12
   3        3          3           5   8  14
   4        3          3           6   8   9
   5        3          2          11  15
   6        3          3           7  11  15
   7        3          3          10  13  20
   8        3          2          18  21
   9        3          2          15  17
  10        3          2          17  21
  11        3          2          17  18
  12        3          1          14
  13        3          2          14  16
  14        3          1          19
  15        3          2          20  21
  16        3          1          19
  17        3          1          19
  18        3          1          20
  19        3          1          22
  20        3          1          22
  21        3          1          22
  22        1          0        
************************************************************************
REQUESTS/DURATIONS:
jobnr. mode duration  R 1  R 2  N 1  N 2
------------------------------------------------------------------------
  1      1     0       0    0    0    0
  2      1     6       0    9    6    7
         2     9       6    0    5    6
         3    10       3    0    5    3
  3      1     5       0    5    9   10
         2     6       2    0    8    9
         3     7       0    5    6    9
  4      1     4       5    0    8    6
         2     6       5    0    5    6
         3     6       0    3    3    5
  5      1     3       0    9    8    9
         2     9       0    8    7    8
         3    10       3    0    5    8
  6      1     4       0    8   10   10
         2     5       0    3   10   10
         3     5       0    5   10    9
  7      1     3       0    5    7    7
         2     4       3    0    6    6
         3     8       0    2    6    6
  8      1     3       6    0    3    7
         2     6       4    0    2    5
         3     9       3    0    2    3
  9      1     1       6    0    6    7
         2     3       0    7    6    5
         3     9       5    0    5    4
 10      1     1       4    0    4   10
         2    10       4    0    2    9
         3    10       0    5    2    9
 11      1     2       6    0    8    4
         2     9       6    0    8    3
         3    10       5    0    8    3
 12      1     3       0    6    4    5
         2     4       0    5    4    4
         3     8       0    4    4    2
 13      1     7      10    0    6   10
         2     8       0    6    6   10
         3    10       0    4    6   10
 14      1     4       0    9    6    6
         2     6       0    8    4    5
         3     9       0    7    2    1
 15      1     3       5    0    5    6
         2     5       5    0    3    3
         3     8       3    0    3    1
 16      1     2       6    0    5    5
         2     2       0    9    5    5
         3     4       0    9    4    5
 17      1     1      10    0   10    4
         2     5       0    4    7    4
         3     8      10    0    5    3
 18      1     2       0    3    1    8
         2     6       0    3    1    6
         3     6       1    0    1    6
 19      1     3       0    6   10   10
         2     9       5    0    9    5
         3    10       0    4    8    5
 20      1     5       9    0    4    7
         2     7       0    5    4    5
         3    10       7    0    3    1
 21      1     1       8    0   10    6
         2     8       7    0    7    5
         3     9       0    6    5    4
 22      1     0       0    0    0    0
************************************************************************
RESOURCEAVAILABILITIES:
  R 1  R 2  N 1  N 2
   21   24  121  132
************************************************************************