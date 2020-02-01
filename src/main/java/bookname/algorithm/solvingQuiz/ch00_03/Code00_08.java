package bookname.algorithm.solvingQuiz.ch00_03;

//ch0.3 배열 회전
//code0-8 right_rotate 함수 작성하기 : 배열의 일부를 오른쪽으로 1만큼 회전시키기
public class Code00_08 {
  public static void main(String[] args) {

    int[] arr = new int[] {1,2,3,4,5,6,7,8,9,10};
    for(int a : arr) {
      System.out.print(a + " ");
    }

    System.out.println("\n========================");
    right_rotate(arr, 5, 9);

    for(int a : arr) {
      System.out.print(a + " ");
    }


  }

  static void right_rotate(int[] arr, int startIndex, int endIndex) {
    int checkedStartIndex = startIndex < endIndex ? startIndex : endIndex;
    int checkedEndIndex = startIndex < endIndex ? endIndex : startIndex;

    int lastValue = arr[checkedEndIndex];

    for(int i = checkedEndIndex - 1; i >= checkedStartIndex; i--) {
      arr[i+1] = arr[i];
    } arr[checkedStartIndex] = lastValue;
  }

}
