package bookname.algorithm.solvingQuiz.ch01_03;

import java.util.Scanner;

public class Code01_07 {
  static Scanner scanner = new Scanner(System.in);
  static int cursorForEnter = 0;
  static int[][] memory;

  public static void main(String[] args) {
    System.out.print("input n, r : ");
    int n = Integer.parseInt(scanner.next());
    int r = Integer.parseInt(scanner.next());
    memory = new int[n+1][n+1];

    long startDate = System.currentTimeMillis();
    System.out.println("\n<[recursive function을 이용한 계산]>");
    System.out.println("\n= " + choose1(n, r));
    System.out.println("-> " + (System.currentTimeMillis() - startDate) + "밀리초 소요");

    startDate = System.currentTimeMillis();
    System.out.println("\n<[recursive function을 이용한 계산 (중복계산 없애기)]>");
    System.out.println("\n= " + choose2(n, r));
    System.out.println("-> " + (System.currentTimeMillis() - startDate) + "밀리초 소요");
    // java로 구현시에는 중복계산을 없애고 2차배열을 사용했을때, 오히려 속도가 느려졌다.
    // 계산자체가 간단한데 비해, 2차배열을 참조하는데 생각보다 시간이 많이 걸릴거라고 추정만 한다...(정확히는 이유를 모르겠음)
    // n과 r 의 값이 매우 근접할때는 중복계산을 없앤 경우가 빨랐다. (중복계산하는 값이 더 많아서 그런듯하다)
  }

  // nCr 구하기 : nCr = nPr / r! = n! / (n-r)! r! = (n-1) C (r-1) + (n-1) C r
  // 1. using recursive function
  private static int choose1(int n, int r) {
    // nCn = 0이며, nC0 = 0이다

    if(r == 0 || r == n) {
      //      if(cursorForEnter++ % 10 == 0)
      //        System.out.println();
      //      System.out.printf("%dC%d, ", n, r);
      return 1;
    }
    // n-1 C r-1 + n-1 C r
    return choose1(n-1, r-1) + choose1(n-1, r);
  }

  // 2. using recursive function(중복계산 없애기)
  private static int choose2(int n, int r) {
    // nCn = 0이며, nC0 = 0이다
    if(memory[n][r] != 0)
      return 1;

    if(r == 0 || r == n) {
      //      if(cursorForEnter++ % 10 == 0)
      //        System.out.println();
      //      System.out.printf("%dC%d, ", n, r);
      return memory[n][n] = 1;
    }
    // n-1 C r-1 + n-1 C r
    return choose2(n-1, r-1) + choose2(n-1, r);
  }
}

