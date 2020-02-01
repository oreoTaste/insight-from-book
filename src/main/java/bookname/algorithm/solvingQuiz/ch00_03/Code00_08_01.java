package bookname.algorithm.solvingQuiz.ch00_03;

//ch0.3 배열 회전
//code0-8확장 : left_rotate()함수를 작성하라.
public class Code00_08_01 {
  public static void main(String[] args) {

    int[] arr = new int[] {1,2,3,4,5,6,7,8,9,10};
    for(int a : arr) {
      System.out.print(a + " ");
    }

    System.out.println("\n========================");
    left_rotate(arr, 0, 5);

    for(int a : arr) {
      System.out.print(a + " ");
    }


  }

  static void left_rotate(int[] arr, int startIndex, int endIndex) {
    int checkedStartIndex = startIndex < endIndex ? startIndex : endIndex;
    int checkedEndIndex = startIndex < endIndex ? endIndex : startIndex;

    int startValue = arr[checkedStartIndex];

    for(int i = checkedStartIndex + 1; i <= checkedEndIndex; i++) {
      arr[i-1] = arr[i];
    } arr[checkedEndIndex] = startValue;
  }

}
