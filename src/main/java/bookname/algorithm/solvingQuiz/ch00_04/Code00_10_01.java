package bookname.algorithm.solvingQuiz.ch00_04;

import java.util.Scanner;

// ch0.4 은행 대기번호 관리 (Stack)
// code0-10확장 : 배열을 이용하여 스택작성
public class Code00_10_01 {
  final int STACK_CAPACITY = 10;
  int[] stack = new int[STACK_CAPACITY];
  int size = -1;
  int stack_size;
  static Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) {
    Code00_10_01 obj = new Code00_10_01();
    int input;
    do {
      System.out.print("input number : ");
      input = Integer.parseInt(scanner.nextLine());
      if(input > 0) {
        obj.push(input);
        continue;
      }
      if(input == 0) {
        int dequeValue = obj.pop();
        if(dequeValue == 0) continue;
        System.out.printf("[%d]\n",dequeValue);
        continue;
      }


    } while(input >= 0);


  }

  void push(int n) {
    if(stack_size == stack.length) {
      System.out.println("stack full!");
      return;
    }

    size = (size + 1) % STACK_CAPACITY;
    stack_size++;
    stack[size] = n;
  }

  int pop() {
    if(stack_size == 0) {
      System.out.println("stack empty!");
      return 0;
    }
    int r = stack[size];
    size--;
    stack_size--;
    return r;
  }
}
