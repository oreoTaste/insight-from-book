package bookname.algorithm.solvingQuiz.ch00_05.extra;

public class MyLinkedListTest {

  public static void main(String[] args) {
    MyLinkedList<Object> list = new MyLinkedList<>();
    list.add("test1");
    list.add("test2");
    list.add("test3");

    printIfValid("<1> 값 : ", list.get(0));
    printIfValid("<1> 값 : ", list.get(1));
    printIfValid("<1> 값 : ", list.get(2));
    printIfValid("<1> 값 : ", list.get(3));

    list.set(0, "zero");
    list.remove(2);
    list.add(1, "one");

    printIfValid("<<2>> 값 : ", list.get(0));
    printIfValid("<<2>> 값 : ", list.get(1));
    printIfValid("<<2>> 값 : ", list.get(2));
    printIfValid("<<2>> 값 : ", list.get(3));

    printIfValid("<<<3>>> indexOf(zero) : ", list.indexOf("zero"));
    printIfValid("<<<3>>> indexOf(one) : ", list.indexOf("one"));
    printIfValid("<<<3>>> indexOf(test2) : ", list.indexOf("test2"));
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

  // add values into LinkedList at the position of index
  E add(int index, E value) {
    // if index is lower than 0 or
    // index is same as the size itself(or bigger than that)
    // index doesn't point out adequate node
    if(index < 0 || index >= size) {
      return null;
    }

    // make a new node & put value in it
    Node<E> newNode = new Node<>();
    newNode.value = value;

    // if index is 0, the new node should become the first node.
    if(index == 0) {
      newNode.next = first;
      first = newNode;
    } else {
      // else, cursor starts from the 'first' node
      Node<E> cursor = first;
      // cursor should travel by the number-1 of index
      for(int i = 0; i < index - 1 ; i++) {
        cursor = cursor.next;
      }
      // the cursor's next (the original node) should be placed next to the new node
      newNode.next = cursor.next;
      // keep in mind that the new node should be placed next to the cursor (the original node's position)
      cursor.next = newNode;
    }

    // after all added, size should be incremented.
    size++;
    return value;
  }

  // remove values located at the position of index
  E remove(int index) {
    // if index is lower than 0 or
    // index is same as the size itself(or bigger than that)
    // index doesn't point out adequate node
    if(index < 0 || index >= size) {
      return null;
    }

    // make a deleted node
    Node<E> deletedNode = new Node<>();
    if(index == 0) {
      // if index is 0, the deleted node is the first node
      deletedNode = first;
      // make sure the first node should be replaced by the second node
      first = first.next;
    } else {
      // if index isn't 0
      Node<E> cursor = first;
      // cursor should travel by the number-1 of index
      for(int i = 0; i < index - 1 ; i++) {
        cursor = cursor.next;
      }

      // the deleted node is the cursor's next one.
      deletedNode = cursor.next;
      // make sure the cursor's next & next one should direct cursor.next
      cursor.next = cursor.next.next;
    }
    // the deleted node's next should be replaced to null value (to make it garbage)
    deletedNode.next = null;
    //after all removed, size should be decremented
    size--;
    return deletedNode.value;
  }

  // set valued on the node located at the position of index
  E set(int index, E value) {
    // if index is lower than 0 or
    // index is same as the size itself(or bigger than that)
    // index doesn't point out adequate node
    if(index < 0 || index >= size) {
      return null;
    }

    // let's make a variabled named previousValue to stored the previous value
    E previousValue;

    // cursor should travel by the number of index
    Node<E> cursor = first;
    for(int i = 0; i < index ; i++) {
      cursor = cursor.next;
    }

    // after cursor reach the index, store the cursor's value to previousValue
    previousValue = cursor.value;
    // and replace the cursor's value with the new value
    cursor.value = value;
    // return the previousValue;
    return previousValue;
  }

  // get index from the LinkedList using value
  int indexOf(E value) {
    Node<E> cursor = first;
    // if the first node's value is the value input, return index(0)
    if(cursor.value == value) {
      return 0;
    }
    // else, travel the cursor to reach the end of the list
    for(int i = 0; i < size;) {
      cursor = cursor.next;
      i++;
      // if cursor's value found the same as the input value,
      // return the index
      if(cursor.value == value) {
        return i;
      }
    }
    return -1;
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