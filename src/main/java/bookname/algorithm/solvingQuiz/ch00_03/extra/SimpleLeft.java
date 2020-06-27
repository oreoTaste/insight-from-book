package bookname.algorithm.solvingQuiz.ch00_03.extra;

public class SimpleLeft {
  public static void main(String[] args) {
    int[] arr = new int[] {1,3,5,6,9,10};
    printArray("before : ", arr);
    printArray("left(arr,2) : ", left(arr,2));
  }

  static int[] left(int[] arr, int movement) {
    // length : 배열의 길이
    int length = arr.length;

    // movement : 이동 횟수
    movement = movement % length;

    // 새로운 배열 준비
    int[] arrNew = new int[length];

    // movement의 왼쪽부분 넣기
    for(int i = 0; i < length - movement; i++) {
      arrNew[i] = arr[i + movement];
    }

    // movement의 오른쪽부분 넣기
    for(int i = length - movement; i < length; i++) {
      arrNew[i] = arr[i - (length - movement)];
    }

    return arrNew;
  }

  static void printArray(int[] arr) {
    for(int a : arr) {
      System.out.print(a + " ");
    }
    System.out.println("\n------------------------------");
  }

  static void printArray(String str, int[] arr) {
    System.out.print(str);
    printArray(arr);
  }

}
