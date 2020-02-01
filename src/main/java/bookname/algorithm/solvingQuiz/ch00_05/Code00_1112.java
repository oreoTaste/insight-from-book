package bookname.algorithm.solvingQuiz.ch00_05;

import java.util.Scanner;

// ch0.5 연결리스트 (LinkedList)
// code0-11 연결리스트로 큐 작성하기
public class Code00_1112 {
  int size = 0;
  Node first = null;
  static Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) {
    Code00_1112 obj = new Code00_1112();
    String originalInput = null;
    int input = 0;
    do {
      System.out.print("input number : ");
      try {
        originalInput = scanner.nextLine();
        input = Integer.parseInt(originalInput);
      } catch(NumberFormatException e) {
        if(originalInput.equalsIgnoreCase("quit"))
          break;
        continue;
      }
      if(input > 0) {
        obj.insert_node(input);
        continue;
      }
      if(input == 0) {
        Object dequeValue = obj.delete_node();
        if(dequeValue == null) continue;
        System.out.printf("[%s]\n",dequeValue);
      }
    } while(input >= 0);


  }

  void insert_node(Object value) {
    Node newNode = new Node();
    newNode.value = value;

    if(size == 0) {
      first = newNode;
    } else {
      Node cursor = first;
      for(int i = 0; i < size-1; i++) {
        cursor = cursor.next;
      } cursor.next = newNode;
    }
    size++;
  }

  Object delete_node() {
    Node cursor = first;
    for(int i = 0; i < size-1; i++) {
      cursor = cursor.next;
    }
    Node curNode = cursor;
    cursor.next = null;
    if(size == 0) return null;
    size--;
    return curNode.value;
  }

  class Node {
    Object value;
    Node next;
  }
}
