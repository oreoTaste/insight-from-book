package bookname.algorithm.solvingQuiz.ch01_01;

import java.util.Scanner;

public class Code01_05 {
  static Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) {
    LinkedList_05<Integer> list = new LinkedList_05<>();

    while(true) {
      System.out.print("input number : ");
      int input = Integer.valueOf(scanner.nextLine());
      if(input == 0) {
        printIfNull(list.pop());
      } else if(input < 0) {
        list.flush1();
        break;
      } else {
        list.add(input);
      }
    }


  }

  public static void printIfNull(Integer integer) {
    if(integer == null) {
      System.out.println("값이 없습니다.");
    } else {
      System.out.println(integer);
    }
  }


  public static void getInputValue(int num) {
  }

}

class LinkedList_05 <E> {
  Node<E> first;
  Node<E> last;
  int size = 0;
  int popSize = 0;

  public void add(E obj) {
    Node<E> newNode = new Node<>();
    newNode.data = obj;
    if(size == 0) {
      first = last = newNode;
    } else {
      last.next = newNode;
      last = newNode;
    }
    size++;
    popSize++;
  }

  // flush using for loop
  public void flush1() {
    for(int i = --popSize; i >= 0; i--) {
      System.out.print(get(i) + " ");
    }
  }

  // flush using recursive function
  public void flush2() {
    if(popSize > 0) {
      System.out.print(get(--popSize) + " ");
      flush2();
    }
  }

  public void push(E obj) {
    add(obj);
  }

  public E get(int index) {
    if(index < 0 || popSize > size) {
      return null;
    }

    Node<E> cursor = first;
    if(index == 0) {
      cursor = first;
    } else {
      for(int i = 0; i < index; i++) {
        cursor = cursor.next;
      }
    }
    return cursor.data;
  }

  public E pop() {
    return get(--popSize);
  }

  private class Node <T> {
    T data;
    Node<T> next;
  }
}
