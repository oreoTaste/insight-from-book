package bookname.algorithm.solvingQuiz.ch01_08;

import java.util.Scanner;

public class Code01_e {
  static Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) {

    System.out.println("총 개수를 선정하세요");
    int number = Integer.parseInt(scanner.nextLine());

    CircleList<Integer> list = new CircleList<>(number);
    System.out.println("최종승자는 "+ list.ruleTheDice() + "입니다.");
  }
}

class CircleList <T> {
  Node<T> first;
  Node<T> last;
  int size = 0;

  CircleList(int defaultSize) {
    for(int i = 1; i <= defaultSize; i++) {
      add(i);
    }
    last.next = first;
  }

  @SuppressWarnings("unchecked")
  public void add(Integer i2) {
    Node<T> newNode = new Node<>();
    newNode.data = (T) i2;
    if(size == 0) {
      last = first = newNode;
    } else {
      Node<T> cursor = first;
      for(int i = 0; i < size-1; i++) {
        cursor = cursor.next;
      }
      cursor.next = last = newNode;
    }
    size++;
  }

  public T pop(int index) {
    T oldData;
    if(index == 0) {
      oldData = first.data;
      first = first.next;
    } else {
      Node<T> cursor = first;
      for(int i = 0; i < index - 1; i++) {
        System.out.println(i);
        cursor = cursor.next;
      }
      oldData = cursor.next.data;
      cursor.next = cursor.next.next;
    }
    size--;
    return oldData;
  }

  public T ruleTheDice() {
    while(true) {
      pop(1);
      first = first.next;
      if(size == 1) {
        return first.data;
      }
    }
  }

  class Node <E> {
    E data;
    Node<E> next;

    Node() {

    }

    Node(E data) {
      this.data = data;
    }
  }

}