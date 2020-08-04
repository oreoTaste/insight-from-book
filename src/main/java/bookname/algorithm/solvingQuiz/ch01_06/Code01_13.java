package bookname.algorithm.solvingQuiz.ch01_06;

import java.util.Scanner;

// 수분할(n,m)
public class Code01_13 {
  static Scanner scanner = new Scanner(System.in);
  static int[][] memory;

  public static void main(String[] args) {
    System.out.print("input a number to be split(n) : ");
    int wholeNum = Integer.parseInt(scanner.nextLine());

    System.out.print("input a highest number to split(m) : ");
    int biggestNum = Integer.parseInt(scanner.nextLine());

    memory = new int[wholeNum + 1][biggestNum + 1];

    long startDate = System.currentTimeMillis();
    System.out.println("the answer : " + splitNumber(wholeNum, biggestNum));
    System.out.println("소요시간은 " + (System.currentTimeMillis() - startDate) + "밀리초입니다");
  }

  // 중복제거하기 전 split(100, 100)의 소요시간 : 약 780밀리초
  // 중복제거한 이후 split(100, 100)의 소요시간 : 약 2밀리초
  private static int splitNumber(int wholeNum, int biggestNum) {
    int count = 0;
    if(memory[wholeNum][biggestNum] != 0)
      return 1;

    if(wholeNum < biggestNum) {
      biggestNum = wholeNum;
    }

    if(biggestNum == 1 || biggestNum == 0) {
      //      System.out.println("-> splitNumber(" + wholeNum + ", " + biggestNum + ")");
      return memory[wholeNum][biggestNum] = 1;
    }

    for(int i = 1; i <= biggestNum; i++) {
      count = count + splitNumber(wholeNum - i, i);
    }

    return memory[wholeNum][biggestNum] = count;
  }


}
