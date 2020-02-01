package bookname.algorithm.solvingQuiz.ch00_01;

//ch0.1 최대와 최소
//code0-4 재귀함수의 경우 속도가 느려질 수 있다.
public class Code00_04 {
  public static void main(String[] args) {

    final int arr_length = 15000;
    int[] arr = new int[arr_length];
    for(int i = arr_length-1 ; i > 0; i--) {
      arr[i] = arr_length - i;
    } arr[0] = arr_length;

    System.out.println(max(arr, arr_length));
  }

  static int max(int[] arr, int arr_length) {
    if(arr_length == 1) {
      return arr[0];
    } else {
      return max(
          arr[arr_length -1],
          max(arr, arr_length-1)
          );
    }
  }

  static int max (int x, int y) {
    if(x > y) return x;
    return y;
  }
}
