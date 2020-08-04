package bookname.algorithm.solvingQuiz.ch01_07;

import java.util.Scanner;

// 그레이 코드 출력하기 (작성중)
public class Code01_15 {
  static Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) {
    int[] code = new int[20];
    System.out.print("몇번째 숫자를 알고 싶습니까? ");
    int input = Integer.parseInt(scanner.nextLine());

    printGray(code, input, 0);
  }

  private static void printGray(int[] code, int input, int index) {
    if(index == input) {
      printCode(code, input);
      return;
    }

    code[index] = 0;
    printGray(code, input, index+1);
    code[index] = 1;
    printGrayReverse(code, input, index+1);
  }

  private static void printGrayReverse(int[] code, int input, int i) {
    // 작성중
  }

  private static void printCode(int[] code, int input) {
    // 작성중
  }

}
