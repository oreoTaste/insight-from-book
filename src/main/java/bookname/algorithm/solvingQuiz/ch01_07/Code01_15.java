package bookname.algorithm.solvingQuiz.ch01_07;

import java.util.Scanner;

// 그레이 코드 출력하기
public class Code01_15 {
  static Scanner scanner = new Scanner(System.in);
  static int printIndex;

  public static void main(String[] args) {
    int[] code = new int[20];
    System.out.print("몇번째 숫자를 알고 싶습니까? ");
    printIndex = Integer.parseInt(scanner.nextLine());

    int input;
    for(int i = 0; ; i++) {
      if(printIndex < Math.pow(2, i)) {
        input = i;
        break;
      }
    }
    printGray(code, input, 0, 0);
  }

  private static void printGray(int code[], int n, int index, int reverse) {

    if(printIndex == 1) {
      printCode(code, n);
      printIndex = 0;
      return;
    }

    if(index == n) {
      //      printCode(code, n);
      printIndex--;
      return;
    }

    code[index] = reverse;
    printGray(code, n, index + 1, 0);
    code[index] = 1 - reverse;
    printGray(code, n, index + 1, 1);
  }

  private static void printCode(int[] code, int input) {
    System.out.print("-> ");
    for(int i = 0; i < input; i++) {
      System.out.print(code[i]);
    }
    System.out.println();
  }

}
