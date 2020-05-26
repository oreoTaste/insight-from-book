package bookname.algorithm.solvingQuiz.ch00_05;

import java.util.Scanner;

// ch0.5 연결리스트 (LinkedList)
// code0-11 ~ 12확장 : 최대 수용할 수 있는 대기번호는?
// 결과 : 53111765번에서  java.lang.OutOfMemoryError발생
public class Code00_1112_02 {
  int size = 0;
  Node first = null;
  Node last = null;
  static Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) {
    Code00_1112_02 obj = new Code00_1112_02();
    String originalInput = null;
    int input = 0;
    do {
      System.out.print("input number : ");
      try {
        originalInput = scanner.nextLine();
        input = Integer.parseInt(originalInput);
      } catch(NumberFormatException e) {
        if(originalInput.equalsIgnoreCase("quit")) {
          break;
        }
        continue;
      }
      if(input > 0) {
        obj.insert_between(input,1);
        continue;
      }
      if(input == 0) {
        Object dequeValue = obj.delete_forward();
        if(dequeValue == null) {
          continue;
        }
        System.out.printf("[%s]\n",dequeValue);
      }
    } while(input >= 0);


  }

  void insert_forward(Object value) {
    Node newNode = new Node();
    newNode.value = value;

    if(size == 0) {
      last = first = newNode;
    } else {
      last.next = newNode;
      last = newNode;
    }
    size++;
  }

  void insert_backward(Object value) {
    Node newNode = new Node();
    newNode.value = value;

    newNode.next = first;
    first = newNode;
    size++;
  }

  // 수정요
  void insert_between(Object value, int index) {
    Node newNode = new Node();
    newNode.value = value;

    if(size == 0) {
      last = first = newNode;
    } else {
      Node cursor = first;
      for(int i = 0; i < index-1; i++) {
        cursor = cursor.next;
      }
      Node deletedNode = cursor.next;
      cursor.next = newNode;
      newNode.next = deletedNode;
    }
    size++;
  }


  Object delete_forward() {
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

  Object delete_backward() {
    if(size == 0) return null;
    Node deletedNode = first;
    Node second = first.next;
    first = second;
    size--;
    deletedNode.next = null;
    return deletedNode.value;
  }

  class Node {
    Object value;
    Node next;
  }
}
