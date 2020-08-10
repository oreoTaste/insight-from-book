package bookname.algorithm.solvingQuiz.ch02_04;

import java.util.Scanner;

public class Code02_06 {
  static int[][] memory;
  static int[][] dynamic;
  static Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) {
    System.out.println("더한값과 더할 배열의 개수를 입력하시오");
    int sum = Integer.parseInt(scanner.next());
    int count = Integer.parseInt(scanner.next());
    scanner.nextLine();

    System.out.println("배열을 순서대로 입력하시오");
    int[] array = new int[count];
    memory = new int[count + 1][sum + 1];
    dynamic = new int[count + 1][sum + 1];
    for(int i = 0; i < count; i++) {
      array[i] = Integer.parseInt(scanner.next());
    }
    scanner.nextLine();

    long currentTime;
    System.out.println("계산중...");
    currentTime = System.currentTimeMillis();
    check(calculate0(array, count - 1, sum));
    System.out.println("-> 소요시간 : " + (System.currentTimeMillis() - currentTime));
    currentTime = System.currentTimeMillis();
    check(calculate1(array, count - 1, sum));
    System.out.println("-> 소요시간 : " + (System.currentTimeMillis() - currentTime));
    currentTime = System.currentTimeMillis();
    check(calculate2(array, count, sum));
    System.out.println("-> 소요시간 : " + (System.currentTimeMillis() - currentTime));
  }

  private static void check(int result) {
    switch(result) {
      case 1:
        System.out.println("성공");
        break;
      case 0:
        System.out.println("실패");
        break;
      default:
        System.out.println("오류");
    }
  }

  private static int calculate0(int[] array, int index, int sum) {
    if(array[0] == sum)
      return 1;
    if(index == 0)
      return 0;
    if(calculate0(array, index - 1, sum) == 1 ||
        calculate0(array, index - 1, sum - array[index - 1]) == 1)
      return 1;
    else
      return 0;
  }

  // 메모이제이션 적용 (중복계산 삭제)
  private static int calculate1(int[] array, int index, int sum) {
    if(memory[index][sum] > 0)
      return memory[index][sum];
    if(array[0] == sum)
      return memory[index][sum] = 1;
    if(index == 0)
      return memory[index][sum] = 0;
    if(calculate0(array, index - 1, sum) == 1 ||
        calculate0(array, index - 1, sum - array[index - 1]) == 1)
      return memory[index][sum] = 1;
    else
      return memory[index][sum] = 0;
  }

  // 동적프로그래밍
  private static int calculate2(int[] array, int index, int sum) {

    for(int i = 0; i <= index; i++) {
      dynamic[i][0] = 1;
    }

    for(int i = 1; i <= sum; i++) {
      dynamic[0][i] = 0;
    }

    for(int i = 1; i <= index; i++) {
      for(int j = 1; j <= sum; j++) {

        dynamic[i][j] = 0;
        if(j - array[i - 1] >= 0 && dynamic[i-1][j-array[i-1]] == 1 ) {
          dynamic[i][j] = 1;
        }
        if(dynamic[i-1][j] == 1) {
          dynamic[i][j] = 1;
        }

      }
    }
    return dynamic[index][sum];
  }


  /*
400 200

1 2 3 4 5 6 7 8 9 10
11 12 13 14 15 16 17 18 19 20
21 22 23 24 25 26 27 28 29 30
31 32 33 34 35 36 37 38 39 40
41 42 43 44 45 46 47 48 49 50
11 12 13 14 15 16 17 18 19 10
11 12 13 14 15 16 17 18 19 20
21 22 23 24 25 26 27 28 29 30
31 32 33 34 35 36 37 38 39 40
41 42 43 44 45 46 47 48 49 50
11 12 13 14 15 16 17 18 19 10
11 12 13 14 15 16 17 18 19 20
21 22 23 24 25 26 27 28 29 30
31 32 33 34 35 36 37 38 39 40
41 42 43 44 45 46 47 48 49 50
11 12 13 14 15 16 17 18 19 10
11 12 13 14 15 16 17 18 19 20
21 22 23 24 25 26 27 28 29 30
31 32 33 34 35 36 37 38 39 40
41 42 43 44 45 46 47 48 49 50

31 30
1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1
   */
}
