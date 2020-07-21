package bookname.algorithm.solvingQuiz.ch01_01;

import java.util.Scanner;

public class Code01_0304 {
  static Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) {
    LinkedList_0304<Integer> list = new LinkedList_0304<>();

    while(true) {
      System.out.print("input number : ");
      int input = Integer.valueOf(scanner.nextLine());
      if(input == 0) {
        printIfNull(list.dequeue());
      } else if(input < 0) {
        list.flush2();
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

class LinkedList_0304 <E> {
  Node<E> first;
  Node<E> last;
  int size = 0;
  int dequeueSize = 0;

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
  }

  // flush using for loop
  public void flush1() {
    for(int i = dequeueSize; i < size; i++) {
      System.out.print(get(i) + " ");
    }
  }

  // flush using recursive function
  public void flush2() {
    if(dequeueSize < size) {
      System.out.print(get(dequeueSize++) + " ");
      flush2();
    }
  }

  public void enqueue(E obj) {
    add(obj);
  }

  public E get(int index) {
    if(index < 0 || dequeueSize > size) {
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

  public E dequeue() {
    return get(dequeueSize++);
  }

  private class Node <T> {
    T data;
    Node<T> next;
  }
}