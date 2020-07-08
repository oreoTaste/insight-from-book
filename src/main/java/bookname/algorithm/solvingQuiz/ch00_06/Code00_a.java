package bookname.algorithm.solvingQuiz.ch00_06;

// int형 배열의 원소를 모두 출력하는 print_arr()함수를 작성하라.
// 배열과 배열의 길이를 인자로 받는다.
public class Code00_a {
  public static void main(String[] args) {
    int[] arr1 = {1,2,3,4,5,6,7,8,9,10};
    print_arr(arr1, getLen(arr1));
  }

  public static int getLen(int[] arr) {
    return arr.length;
  }

  public static void print_arr(int[] arr, int len) {
    for(int i = 0; i < len; i++) {
      System.out.print(arr[i] + " ");
    }
  }
}
