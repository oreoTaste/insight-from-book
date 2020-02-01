package bookname.algorithm.solvingQuiz.ch00_04;

import java.util.Scanner;

// ch0.4 은행 대기번호 관리
// code0-10확장 : 일반적인 데이터를 다룰 수 있도록 큐를 수정
public class Code00_10_02 {
  final int QUEUE_CAPACITY = 10;
  String[] queue = new String[QUEUE_CAPACITY];
  int head = 0;
  int tail = -1;
  int queue_size;
  static Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) {
    Code00_10_02 obj = new Code00_10_02();
    String input;
    do {
      System.out.print("input number : ");
      input = scanner.nextLine();
      if(!input.equals("0")) {
        obj.enqueue(input);
        continue;
      }
      if(Integer.parseInt(input) == 0) {
        String dequeValue = obj.dequeue();
        if(dequeValue == null) continue;
        System.out.printf("[%s]\n",dequeValue);
        continue;
      }
    } while(check(input)) ;


  }

  private static boolean check(String input) {
    try {
      if(Integer.parseInt(input) < 0) {
        return false;
      }
      return true;
    } catch(NumberFormatException e) {
      System.out.println(e.getMessage());
      return true;
    }
  }

  void enqueue(String n) {
    if(queue_size == queue.length) {
      System.out.println("queue full!");
      return;
    }

    tail = (tail + 1) % QUEUE_CAPACITY;
    queue_size++;
    queue[tail] = n;
  }

  String dequeue() {
    if(queue_size == 0) {
      System.out.println("queue empty!");
      return null;
    }
    String r = queue[head];
    head = (head + 1) % QUEUE_CAPACITY;
    queue_size--;
    return r;
  }
}
