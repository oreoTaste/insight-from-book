package bookname.algorithm.solvingQuiz.ch01_08;

import java.util.LinkedList;
import java.util.Scanner;

public class Code01_f {
  static Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) {
    LinkedList<Integer> list = new LinkedList<>();
    int index = 0;

    while(true) {
      System.out.println("input x, y");
      int input = Integer.parseInt(scanner.nextLine());

      if(input < 0) {
        break;
      } else {
        list.add(input);
        input = Integer.parseInt(scanner.nextLine());
        list.add(input);
        index += 2;
      }
    }

    Integer[] array = list.toArray(new Integer[0]);

    // 작성중


  }
}

