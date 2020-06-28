package bookname.algorithm.solvingQuiz.ch00_04.extra;

public class StackFromArray {
  public static void main(String[] args) {
    MyStack stack = new MyStack();
    stack.push("1");
    stack.push("2");
    stack.push("3");
    stack.push("4");
    stack.push("5");
    stack.push("6");
    stack.push("7");
    stack.push("8");
    stack.push("9");
    stack.push("10");
    stack.push("11");
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.push("100");
    stack.pop();
    stack.push("200");
    stack.peek();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
  }

  static class MyStack {
    final int defaultValue = 10;
    int size = 0;
    Object[] arr = new Object[defaultValue];

    // push values into stack
    Object push(Object value) {
      // if array reaches the end,
      if(size == arr.length) {
        // array will be replaced by longer one
        Object[] arrNew = new Object[arr.length + arr.length / 2];
        // the values stored will be copied to the replaced one.
        System.arraycopy(arr, 0, arrNew, 0, arr.length);
        arr = arrNew;
        arrNew = null;
      }
      // push values into stack
      arr[size] = value;
      // size will be incremented
      size++;
      return value;
    }

    // pop values into stack
    Object pop() {
      // if array is empty,
      if(isEmpty()) {
        // console shows no values anymore
        System.out.println("!더이상 값이 없습니다");
        // and return null
        return null;
      }
      // else, last value input will be printed out to console
      Object lastValue = arr[--size];
      System.out.println("> " + lastValue);
      // and the printed value will be replaced by null to make it garbage
      arr[size] = null;
      return lastValue;
    }

    // check peek value
    Object peek() {
      // if array is empty,
      if(isEmpty()) {
        // console shows no values anymore
        System.out.println("!더이상 값이 없습니다");
        // and return null
        return null;
      }
      // else, last value input will be printed out to console
      Object lastValue = arr[--size];
      System.out.println(">>> peek : " + lastValue);
      // but the last value will NOT be replaced by null
      size++;
      return lastValue;
    }

    // check if empty
    Boolean isEmpty() {
      // if size is 0 or less than 0
      // which means there's no values input
      // so that returns true
      if(size <= 0) {
        return true;
      } else {
        // else return false
        return false;
      }
    }
  }

}
