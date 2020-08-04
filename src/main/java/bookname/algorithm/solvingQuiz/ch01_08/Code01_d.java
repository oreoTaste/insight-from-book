package bookname.algorithm.solvingQuiz.ch01_08;

import java.util.Scanner;

public class Code01_d {
  static Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) {
    int[] array = new int[] {1,3,5,7,9,2,4,8,6};

    System.out.println(countReverseArrays(array) + "가지 역전의 경우의 수가 있습니다.");
  }

  // 버블정렬 O(n^2)의 시간 소요
  private static int countReverseArrays(int[] array) {
    int count = 0;

    for(int i = 0; i < array.length - 1; i++) {
      for(int j = i + 1; j < array.length; j++) {
        if(array[i] > array[j]) {
          count++;
        }
      }
    }
    return count;
  }

}
