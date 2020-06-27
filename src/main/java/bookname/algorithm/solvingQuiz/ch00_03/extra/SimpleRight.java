package bookname.algorithm.solvingQuiz.ch00_03.extra;

public class SimpleRight {
  public static void main(String[] args) {
    int[] arr = new int[] {1,4,5,7,9};
    printArray("before : ", arr);
    printArray("right(arr,1) : ", right(arr, 1));
  }

  static int[] right(int[] arr, int movement) {
    // length : 배열의 길이
    int length = arr.length;

    // movement : 이동횟수
    movement = movement % length;

    // 새로운 배열 준비
    int[] arrNew = new int[length];

    // movement 왼쪽부분 채우기
    for(int i = 0; i < movement; i++) {
      arrNew[i] = arr[i + length - movement];
    }

    // movement 오른쪽부분 채우기
    for(int i = movement; i < length; i++) {
      arrNew[i] = arr[i - movement];
    }

    return arrNew;
  }

  static void printArray(String str, int[] arr) {
    System.out.print(str);
    for(int a : arr) {
      System.out.print(a + " ");
    }
    System.out.println("\n------------------------------");
  }

}

