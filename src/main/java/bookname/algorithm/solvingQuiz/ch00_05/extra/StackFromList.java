package bookname.algorithm.solvingQuiz.ch00_05.extra;

public class StackFromList {
  public static void main(String[] args) {
    MyStack<String> stack = new MyStack<>();
    stack.push("test1");
    stack.push("test2");
    stack.push("test3");
    stack.push("test4");
    stack.push("test5");

    stack.peek();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();

  }
}

class MyStack <T> {
  MyLinkedList<T> list = new MyLinkedList<>();
  int size;

  T push(T value) {
    list.add(value);
    size++;
    return value;
  }

  T pop() {
    // if array is empty,
    if(isEmpty()) {
      // console shows no values anymore
      System.out.println("!더이상 값이 없습니다");
      // and return null
      return null;
    }
    // else, first value input will be printed out to console
    T value = list.remove(--size);
    System.out.println(value);
    return value;
  }

  T peek() {
    // if array is empty,
    if(isEmpty()) {
      // console shows no values anymore
      System.out.println("!더이상 값이 없습니다");
      // and return null
      return null;
    }
    // else, first value input will be printed out to console
    T value = list.get(--size);
    ++size;
    System.out.println(value);
    return value;
  }

  boolean isEmpty() {
    if(size == 0) {
      return true;
    }
    return false;
  }
}