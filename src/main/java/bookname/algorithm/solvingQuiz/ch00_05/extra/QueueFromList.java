package bookname.algorithm.solvingQuiz.ch00_05.extra;

public class QueueFromList {
  public static void main(String[] args) {
    MyQueue<String> queue = new MyQueue<>();
    queue.put("test1");
    queue.put("test2");
    queue.put("test3");
    queue.put("test4");
    queue.put("test5");

    queue.get();
    queue.get();
    queue.get();
    queue.get();
    queue.get();
    queue.get();
    queue.get();
    queue.get();
  }
}

class MyQueue <E> {
  MyLinkedList<E> list = new MyLinkedList<>();
  int size;

  E put(E value) {
    size++;
    list.add(value);
    return value;
  }

  E get() {
    // if array is empty,
    if(isEmpty()) {
      // console shows no values anymore
      System.out.println("!더이상 값이 없습니다");
      // and return null
      return null;
    }

    // else, print out the value
    size--;
    E val = list.remove(0);
    System.out.println(val);
    return val;
  }

  boolean isEmpty() {
    if(size == 0) {
      return true;
    }
    return false;
  }


}