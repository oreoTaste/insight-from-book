package bookname.algorithm.solvingQuiz.ch00_06;

// int 형 배열의 모든 원소의 값이 k이면 1, 아니면 0을 반환하는 all_is()함수를 작성하라
// 배열과 배열의 길이, 그리고 정수 k를 인자로 받는다.
public class Code00_b {
  public static void main(String[] args) {
    int[] arr1 = {1,2,3,4,5,6,7,8,9,10};
    System.out.println(all_is(arr1, getLen(arr1), 1)); // false : 0
    System.out.println(all_is(arr1, getLen(arr1), 55));// true : 1
  }

  public static int getLen(int[] arr) {
    return arr.length;
  }

  public static int all_is(int[] arr, int len, int k) {
    int sumValue = 0;
    for(int i = 0; i < len; i++) {
      sumValue += arr[i];
    }
    if(sumValue == k)
      return 1;
    else
      return 0;
  }
}
