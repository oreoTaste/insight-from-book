package bookname.algorithm.solvingQuiz.ch01_08;

import java.util.Scanner;

public class Code01_b {
  static Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) {
    System.out.println("input k value(floor number of pascal's triangle)");
    System.out.print("->");
    int floor = Integer.parseInt(scanner.nextLine());

    int array[][] = calc(floor);
    printPascal(array);
  }

  private static int[][] calc(int floor) {
    int[][] array = new int[floor][floor];
    array[0][0] = 1;

    for(int i = 1; i < floor; i++) {
      for(int j = 0; j < floor; j++) {
        if(j == 0) {
          array[i][j] = 1;
        } else {
          array[i][j] = array[i-1][j-1] + array[i-1][j];
        }
      }
    }

    return array;
  }


  private static void printPascal(int[][] array) {
    for(int i = 0; i < array.length; i++) {
      for(int j = 0; j < i + 1; j++) {
        System.out.print(array[i][j] + " ");
      }
      System.out.println();
    }
  }

}
