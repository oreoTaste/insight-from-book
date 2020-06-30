package bookname.algorithm.solvingQuiz.ch00_04.extra;

public class QueueFromArray {
  public static void main(String[] args) {
    MyQueue queue = new MyQueue();
    queue.put("1");
    queue.put("2");
    queue.put("3");
    queue.put("4");
    queue.put("5");
    queue.put("6");
    queue.put("7");
    queue.put("8");
    queue.put("9");
    queue.put("10");
    queue.put("11");
    queue.get();
    queue.get();
    queue.get();
    queue.get();
    queue.put("100");
    queue.get();
    queue.put("200");
    queue.get();
    queue.get();
    queue.get();
    queue.get();
    queue.get();
    queue.get();
    queue.get();
    queue.get();
    queue.get();
  }

  static class MyQueue {
    final int defaultValue = 10;
    int startIndex = 0;
    int endIndex = 0;
    Object[] arr = new Object[defaultValue];

    // put values into queue
    Object put(Object value) {
      // if array reaches the end,
      if(endIndex == arr.length) {
        // array will be replaced by longer one
        Object[] arrNew = new Object[arr.length + arr.length / 2];
        // the values stored will be copied to the replaced one.
        System.arraycopy(arr, 0, arrNew, 0, arr.length);
        arr = arrNew;
        arrNew = null;
      }
      // put values into queue
      arr[endIndex] = value;
      // endIndex will be incremented
      endIndex++;
      return value;
    }

    // get values from queue
    Object get() {
      // if array is empty,
      if(isEmpty()) {
        // console shows no values anymore
        System.out.println("!더이상 값이 없습니다");
        // and return null
        return null;
      }
      // else, first value input will be printed out to console
      Object firstValue = arr[startIndex];
      System.out.println("> " + firstValue);
      // and the printed value will be replaced by null to make it garbage
      arr[startIndex] = null;
      // startIndex will be incremented
      startIndex++;
      return firstValue;
    }

    Boolean isEmpty() {
      // if startIndex eq endIndex,
      // which means there's no values inside,
      // returns true
      // else false
      return startIndex == endIndex ? true : false;
    }
  }

}

