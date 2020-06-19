package bookname.algorithm.solvingQuiz.ch00_05;

import java.util.Scanner;

// ch0.5 연결리스트 (LinkedList)
// code0-11 ~ 12확장 : 최대 수용할 수 있는 대기번호는?
// 결과 : 53111765번에서  java.lang.OutOfMemoryError발생
public class Code00_1112_01 {
  int size = 0;
  Node first = null;
  Node last = null;
  static Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) {
    Code00_1112_01 obj = new Code00_1112_01();
    String originalInput = null;
    int input = 0;
    do {
      for(int i = 1; i < Integer.MAX_VALUE; i++) {
        System.out.print("input number : ");
        try {
          if(i < Integer.MAX_VALUE) {
            originalInput = String.valueOf(i);
            System.out.println(i);
          } else {
            originalInput = scanner.nextLine();
          }
          
          input = Integer.parseInt(originalInput);
        } catch(NumberFormatException e) {
          if(originalInput.equalsIgnoreCase("quit")) {
            break;
          }
          continue;
        }
        if(input > 0) {
          obj.insert_node(input);
          continue;
        }
        if(input == 0) {
          Object dequeValue = obj.delete_node();
          if(dequeValue == null) {
            continue;
          }
          System.out.printf("[%s]\n",dequeValue);
        }
      }
    } while(input >= 0);


  }

  void insert_node(Object value) {
    Node newNode = new Node();
    newNode.value = value;

    if(size == 0) {
      last = first = newNode;
    } else {
      last.next = newNode;
      last = newNode;
      /*
       * 코드수정 (속도향상)
      Node cursor = first;
      for(int i = 0; i < size-1; i++) {
        cursor = cursor.next;
      } cursor.next = newNode;
       */
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
