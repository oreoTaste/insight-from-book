package bookname.algorithm.solvingQuiz.ch00_01;

//ch0.1 최대와 최소
//code0-2 배열의 최대 값을 구하는 함수를 작성해보자
public class Code00_02 {
  public static void main(String[] args) {

    int[] arr = new int[] {1,3,5,7,9,8,6,4,2,0};
    System.out.println(max(arr, arr.length));

  }

  static int max(int[] arr, int arr_length) {
    int max = arr[0];
    for(int i = 1; i < arr_length ;i++) {
      if(max < arr[i]) {
        max = arr[i];
      }
    } return max;
  }
}
