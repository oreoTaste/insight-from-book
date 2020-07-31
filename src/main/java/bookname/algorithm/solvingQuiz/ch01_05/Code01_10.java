package bookname.algorithm.solvingQuiz.ch01_05;

import java.util.LinkedList;
import java.util.Scanner;

public class Code01_10 {
  static int count = 0;
  static int money = 100;
  static Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) {
    System.out.print("input total amount of money : ");
    money = Integer.parseInt(scanner.nextLine());

    System.out.print("input bills : ");
    Integer[] bills;
    LinkedList<Integer> list = new LinkedList<>();
    while(true) {
      int input = scanner.nextInt();
      if(input > 0)
        list.add(input);
      else {
        scanner.nextLine();
        break;
      }
    }
    // bills = new int[]{1,2,5,10,20,50};
    bills = list.toArray(Integer[]::new);

    long before = System.currentTimeMillis();
    calculate_decrease(bills);
    System.out.println(System.currentTimeMillis() - before + "밀리초 걸림");
    System.out.println(">> 횟수 : " + count);
    count = 0;

    before = System.currentTimeMillis();
    calculate_increase(bills);
    System.out.println(System.currentTimeMillis() - before + "밀리초 걸림");
    System.out.println(">> 횟수 : " + count);
  }

  private static void calculate_increase(Integer[] bills) {
    for(int i = 0; i <= money; i += bills[0]) {
      for(int j = 0; i+j <= money; j += bills[1]) {
        for(int k = 0; i+j+k <= money; k += bills[2]) {
          for(int l = 0; i+j+k+l <= money; l += bills[3]) {
            for(int m = 0; i+j+k+l+m <= money; m += bills[4]) {
              for(int n = 0; i+j+k+l+m+n <= money; n += bills[5]) {
                if(i+j+k+l+m+n == money) {
                  //                System.out.println(i + "_" + j + "_" + k + "_" + l + "_" + m + "_" + n);
                  count++;
                }
              }
            }
          }
        }
      }
    }
  }

  private static void calculate_decrease(Integer[] bills) {
    bills = arrayBigToSmall(bills);
    for(int i0 = money; i0 >= 0; i0 -= bills[0]) {
      for(int i1 = i0; i1 >= 0; i1 -= bills[1]) {
        for(int i2 = i1; i2 >= 0; i2 -= bills[2]) {
          for(int i3 = i2; i3 >= 0; i3 -= bills[3]) {
            for(int i4 = i3; i4 >= 0; i4 -= bills[4]) {
              if(i4 % bills[5] == 0) {
                //                System.out.println(i0 + "_" + i1 + "_" + i2 + "_" + i3 + "_" + i4);
                count++;
              }
            }
          }
        }
      }
    }
  }

  private static Integer[] arrayBigToSmall(Integer[] bills) {
    int len = bills.length;
    for(int i = 0; i < len; i++) {
      for(int j = i; j < len ; j++) {
        if(bills[i] < bills[j]) {
          int temp = bills[i];
          bills[i] = bills[j];
          bills[j] = temp;
        }
      }
    }
    return bills;
  }
}
