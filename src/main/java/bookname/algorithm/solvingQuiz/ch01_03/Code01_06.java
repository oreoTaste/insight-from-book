package bookname.algorithm.solvingQuiz.ch01_03;

import java.util.Scanner;

public class Code01_06 {
  static Scanner scanner = new Scanner(System.in);
  static int cursorForEnter = 0;

  public static void main(String[] args) {
    System.out.print("input n, r : ");
    int n = Integer.parseInt(scanner.next());
    int r = Integer.parseInt(scanner.next());

    long startDate = System.currentTimeMillis();
    System.out.println("\n<[for loop를 이용한 계산]>");
    choose1(n, r);
    System.out.println("-> " + (System.currentTimeMillis() - startDate) + "밀리초 소요");
    startDate = System.currentTimeMillis();
    System.out.println("\n<[recursive function을 이용한 계산]>");
    System.out.println("\n= " + choose2(n, r));
    System.out.println("-> " + (System.currentTimeMillis() - startDate) + "밀리초 소요");

  }

  // nCr 구하기 : nCr = nPr / r! = n! / (n-r)! r! = (n-1) C (r-1) + (n-1) C r
  // 1. using for loop
  private static void choose1(long n, long r) {

    //    System.out.printf("= (%d P %d)/%d!\n", n, r, r);
    long top = 1;
    long bottom = 1;

    // nPr
    for(long i = n - r + 1; i <= n; i++) {
      top *= i;
    }

    // r!
    for(long i = r; i > 0; i--) {
      bottom *= i;
    }

    System.out.println("= " + top + "/" + bottom + "\n= " + top/bottom);
  }

  // 2. using recursive function
  private static long choose2(long n, long r) {
    // nCn = 0이며, nC0 = 0이다
    if(r == 0 || r == n) {
      //      if(cursorForEnter++ % 100 == 0)
      //        System.out.println();
      //      System.out.printf("%dC%d, ", n, r);
      return 1;
    }
    // n-1 C r-1 + n-1 C r
    return choose2(n-1, r-1) + choose2(n-1, r);
  }


}

