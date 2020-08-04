package bookname.algorithm.solvingQuiz.ch01_08;

import java.util.Scanner;

public class Code01_a {
  static Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) {
    System.out.println("input exponent(n)");
    System.out.print("->");
    int exponent = Integer.parseInt(scanner.nextLine());

    System.out.println("input power(k)");
    System.out.print("->");
    int power = Integer.parseInt(scanner.nextLine());

    System.out.println("\n*주의 : 결과값은 " + Long.MAX_VALUE + "를 넘어갈 수 없습니다.");
    System.out.println(calc(exponent, power));
    System.out.println(calc2(exponent, power));
  }

  // for loop
  private static long calc(long exponent, long power) {
    long result = 0;
    for(int i = 1; i <= exponent; i++) {
      result += Math.pow(i, power);
    }
    return result;
  }


  // recursive function
  private static long calc2(long exponent, long power) {
    if(exponent == 0) {
      return 0;
    }
    if(exponent == 1) {
      return 1;
    }
    return (long) (calc2(exponent-1,power) + Math.pow(exponent, power));
  }

}
