package bookname.algorithm.solvingQuiz.ch00_06;

// 연결리스트를 이용하여, 스택자료구조를 구현해보자
public class Code00_d {
  public static void main(String[] args) {

    LinkedList_d<String> list = new LinkedList_d<>();
    list.push("111");
    list.push("222");
    list.pop();
    list.pop();
    list.pop();
    list.pop();
  }
}

class LinkedList_d <E> {
  int size = 0;
  Node<E> first;
  Node<E> last;

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

  public E get(int index) {
    if(index < 0) {
      return null;
    }
    Node<E> cursor = first;
    for(int i = 0; i < index; i++) {
      cursor = cursor.next;
    }
    System.out.println(cursor.data);
    return cursor.data;
  }

  public void push(E obj) {
    add(obj);
  }

  public E pop() {
    E result;
    if((result = get(--size)) == null)
      System.out.println("값이 없습니다.");
    return result;
  }

  class Node <T> {
    E data;
    Node<T> next;
  }
}
