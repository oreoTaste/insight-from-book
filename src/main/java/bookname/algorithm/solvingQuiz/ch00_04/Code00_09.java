package bookname.algorithm.solvingQuiz.ch00_04;

import java.util.Scanner;

// ch0.4 은행 대기번호 관리 (Queue)
// code0-9 배열로 큐 작성하기
// -> 배열의 앞부분이 비어있지만 사용할 수 없다는 단점!
public class Code00_09 {
  final int QUEUE_CAPACITY = 10;
  int[] queue = new int[QUEUE_CAPACITY];
  int head = 0;
  int tail = -1;
  int queue_size;
  static Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) {
    Code00_09 obj = new Code00_09();
    int input;
    do {
      System.out.print("input number : ");
      input = Integer.parseInt(scanner.nextLine());
      if(input > 0) {
        obj.enqueue(input);
        continue;
      }
      if(input == 0) {
        int dequeValue = obj.dequeue();
        if(dequeValue == 0) continue;
        System.out.printf("[%d]\n",dequeValue);
        continue;
      }


    } while(input >= 0);


  }

  void enqueue(int n) {
    if(queue_size == queue.length) {
      System.out.println("queue full!");
      return;
    }
    queue_size++;
    queue[++tail] = n;
  }

  int dequeue() {
    if(queue_size == 0) {
      System.out.println("queue empty!");
      return 0;
    }
    queue_size--;
    return queue[head++];
  }
}
