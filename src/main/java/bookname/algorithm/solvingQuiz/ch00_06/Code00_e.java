package bookname.algorithm.solvingQuiz.ch00_06;

// 스택 두개를 이용하여 큐를 만드는 방법은 무엇일까?
// 큐에 원소를 넣고 (enqueue), 빼는 (dequeue) 동작은 가능한 효율적이어야 한다.
public class Code00_e {
  public static void main(String[] args) {
    LinkedList_e<String> list = new LinkedList_e<>();
    list.enqueue("111");
    list.enqueue("222");
    list.dequeue();
    list.dequeue();
    list.dequeue();
    list.enqueue("333");
    list.enqueue("444");
    list.dequeue();
  }

}

class LinkedList_e <E> {
  int linkedListSize = 0;
  int dequeueSize = 0;
  Node<E> first;
  Node<E> last;

  public void add(E obj) {
    Node<E> newNode = new Node<>();
    newNode.data = obj;

    if(linkedListSize == 0) {
      first = last = newNode;
    } else {
      last.next = newNode;
      last = newNode;
    }
    linkedListSize++;
  }

  public E get(int index) {
    if(index < 0) {
      return null;
    }
    Node<E> cursor = first;
    for(int i = 0; i < index; i++) {
      cursor = cursor.next;
    }
    return cursor.data;
  }

  public void push(E obj) {
    add(obj);
  }

  public E pop() {
    if(--linkedListSize < 0) {
      linkedListSize = 0;
      return null;
    }
    E result;
    if((result = get(linkedListSize)) == null)
      return null;
    return result;
  }

  public void enqueue(E obj) {
    push(obj);
  }

  public E dequeue() {
    int size = linkedListSize;
    LinkedList_e<E> reverseList = new LinkedList_e<>();
    int i = 0;
    while(i < linkedListSize) {
      E value = pop();
      reverseList.push(value);
    }

    for(int j = 0; j < dequeueSize; j++) {
      reverseList.pop();
    }
    linkedListSize = size;

    if(++dequeueSize > linkedListSize)
      dequeueSize = linkedListSize;

    E result = reverseList.pop();
    System.out.println(result);
    return result;
  }

  class Node <T> {
    E data;
    Node<T> next;
  }
}