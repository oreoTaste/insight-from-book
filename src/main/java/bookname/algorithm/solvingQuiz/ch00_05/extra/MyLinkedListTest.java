package bookname.algorithm.solvingQuiz.ch00_05.extra;

public class MyLinkedListTest {

  public static void main(String[] args) {
    MyLinkedList<Object> list = new MyLinkedList<>();
    list.add("test1");
    list.add("test2");
    list.add("test3");

    printIfValid("값 : ", list.get(0));
    printIfValid("값 : ", list.get(1));
    printIfValid("값 : ", list.get(2));
    printIfValid("값 : ", list.get(3));
  }

  // show values on console in case the values are valid.
  static void printIfValid(Object object) {
    if(object == null) {
      // if value is null, show there is not valid values
      System.out.println("No valid values");
    } else {
      // if value is valid, show the value
      System.out.println(object);
    }
  }

  // overload the previous method 'printIfValid' with String value
  // which the user wants to print.
  static void printIfValid(String str, Object object) {
    if(object != null)
      System.out.print(str);
    printIfValid(object);
  }
}



class MyLinkedList <E>{
  Node<E> first;
  Node<E> last;
  int size;

  // add values into LinkedList
  void add(E value) {
    // make a new node & put value in it
    Node<E> newNode = new Node<>();
    newNode.value = value;

    // if size is 0, first and the last value is the new node
    if(size == 0) {
      first = last = newNode;
    } else {
      // else, the last node(currently)'s next node should become new node and
      // the last node (updated) should become the new node.
      last.next = newNode;
      last = newNode;
    }
    // after the node is added, size should be updated (added)
    size++;
  }

  // get values by index
  E get(int index) {
    // if index is lower than 0 or
    // index is same as the size itself(or bigger than that)
    // index doesn't point out adequate node
    if(index < 0 || index >= size) {
      return null;
    }

    // else, cursor starts from the 'first' node
    Node<E> cursor = first;
    // cursor should travel by the number of index
    for(int i = 0; i < index; i++) {
      cursor = cursor.next;
    }
    // after cursor reach the index, return the cursor's value
    return cursor.value;
  }

  // Node is composed of 'value' and the empty next node.
  class Node <T>{
    T value;
    Node<T> next;
  }
}