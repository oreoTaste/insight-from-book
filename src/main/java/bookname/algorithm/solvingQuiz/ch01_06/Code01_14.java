package bookname.algorithm.solvingQuiz.ch01_06;

import java.util.Scanner;

// 수분할(n,m)
public class Code01_14 {
  static Scanner scanner = new Scanner(System.in);
  static int[] memory;

  public static void main(String[] args) {
    System.out.print("input a number to be split(n) : ");
    int wholeNum = Integer.parseInt(scanner.nextLine());
    memory = new int[wholeNum+1];

    long startDate = System.currentTimeMillis();
    printThousands("순번없이 ", completeSplit(wholeNum), "가지의 경우의 수가 있습니다.");
    printThousands("->", (int)(System.currentTimeMillis() - startDate), "밀리초 소요됨");

    startDate = System.currentTimeMillis();
    printThousands("순번없이 ", completeSplit2(wholeNum), "가지의 경우의 수가 있습니다.");
    printThousands("->", (int)(System.currentTimeMillis() - startDate), "밀리초 소요됨");

    startDate = System.currentTimeMillis();
    printThousands("순번없이 ", completeSplit3(wholeNum), "가지의 경우의 수가 있습니다.");
    printThousands("->", (int)(System.currentTimeMillis() - startDate), "밀리초 소요됨");

  }

  private static String printThousands(int input, String str) {
    System.out.println(String.format("%,d%s", input, str));
    return String.format("%,d", input);
  }

  private static String printThousands(String str1, int input, String str2) {
    System.out.print(str1);
    return printThousands(input, str2);
  }

  private static int completeSplit(int wholeNum) {
    return (int) Math.pow(2, wholeNum - 1);
  }

  private static int completeSplit2(int wholeNum) {
    int count = 0;

    if(wholeNum == 1 || wholeNum == 0) {
      return 1;
    }
    for(int i = wholeNum-1; i >= 0; i--) {
      count += completeSplit2(i);
    }
    return count;
  }

  private static int completeSplit3(int wholeNum) {
    int count = 0;

    if(wholeNum == 1 || wholeNum == 0 || memory[wholeNum] > 0) {
      return memory[wholeNum] = 1;
    }
    for(int i = wholeNum-1; i >= 0; i--) {
      count += completeSplit2(i);
    }
    return memory[wholeNum] = count;
  }


}
