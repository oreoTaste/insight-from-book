package bookname.algorithm.solvingQuiz.ch01_08;

import java.util.Scanner;

public class Code01_c {
  static int[][] memory;
  static Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) {
    System.out.println("input n");
    System.out.print("->");
    int n = Integer.parseInt(scanner.nextLine());

    System.out.println("input m");
    System.out.print("->");
    int m = Integer.parseInt(scanner.nextLine());

    memory = new int[n+1][m+1];
    System.out.println(" > 총 경우의 수는 " + combiLength(n, m) + "가지입니다");
    System.out.println("---------------------------------------");

    int[] array = new int[100];
    combi(n, m, array, 0);
  }

  private static int combiLength(int n, int m) {
    if(memory[n][m] > 0) {
      return 1;
    }

    if(n == m || m == 1) {
      return memory[n][m] = 1;
    }

    int result = 0;
    for(int i = 1; i <= n-m+1; i++) {
      result += memory[n-i][m-1] = combiLength(n-i, m-1);
    }

    return result;
  }

  private static void combi(int n, int m, int[] arr, int index) {
    if(index == m) {
      if(n == 0) {
        // 배열 index길이만큼 출력하는 메서드 별도분리
        printArray(arr, index);
      }
      return;
    }

    for(int i = 1; i <= n; i++) {
      arr[index] = i;
      combi(n-i, m, arr, index+1);
    }
  }

  private static void printArray(int[] arr, int len) {
    for(int i = 0; i < len; i++) {
      System.out.printf("%d ", arr[i]);
    }
    System.out.println();
  }

}
