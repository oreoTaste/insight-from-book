package bookname.algorithm.solvingQuiz.ch01_05;

import java.util.Scanner;

public class Code01_11 {
  static Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) {
    int numOfBills, money;
    int[] bills = new int[50];

    System.out.print("input number of bills : ");
    numOfBills = Integer.parseInt(scanner.nextLine());

    System.out.print("input bills : ");
    for(int i = 0; i < numOfBills; i++) {
      bills[i] = scanner.nextInt();
    }

    System.out.print("input money : ");
    money = scanner.nextInt();

    System.out.println(pay(money, bills, numOfBills));
  }

  private static int pay(int money, int[] bills, int numOfBills) {
    int count = 0;
    if(numOfBills == 1) {
      if(money % bills[0] == 0)
        return 1;
      else
        return 0;
    }
    int t = money / bills[numOfBills-1];
    for(int i = 0; i <= t; i++) {
      count += pay(money - bills[numOfBills-1]*i, bills, numOfBills-1);
    }
    return count;
  }
}
