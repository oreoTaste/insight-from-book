package bookname.algorithm.solvingQuiz.ch00_02;

// ch0.2 두 변수의 값 바꾸기
// code0-7 배열의 두 원소 바꾸기
public class Code00_07 {

  public static void main(String[] args) {

    int[] arr = new int[] {1,2,3,4,5};
    for(int a : arr) {
      System.out.print(a + " ");
    }

    System.out.println("\n========================");
    swap_array(arr, 0, 0);

    for(int a : arr) {
      System.out.print(a + " ");
    }
  }

  static void swap_array(int[] arr, int i, int j) {
    int temp;
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

}
