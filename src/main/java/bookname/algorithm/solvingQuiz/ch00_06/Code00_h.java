package bookname.algorithm.solvingQuiz.ch00_06;

// 길이가 n인 정수 배열 a[]와 위치 p가 주어진다. 이때 0 <= i <= p <= j < n이면서,
// a[i] + a[i+1] + ... + a[j]를 최대로 하는 i, j를 구하는 프로그램을 작성하라.
// 즉, 어떤 위치를 포함하는 배열의 부분 중에서 합이 가장 큰 것을 고르는 프로그램이다.
public class Code00_h {
  public static void main(String[] args) {

    int[] a = {1,2,3,4,5,10,5,2,33,20};
    getMaxSum(a, 3);
  }

  public static int getMaxSum(int[] a, int p) {

    int len = a.length;
    int[][] arr = new int[p+1][len];
    for(int i = 0; i <= p; i++) {
      for(int j = p; j < len; j++) {
        for(int k = i; k < j; k++) {
          //          System.out.println(i + "_" + j + "_" + a[k]);
          arr[i][j] += a[k];
        }
      }
    }
    return compare(arr);
  }

  private static int compare(int[][] arr) {
    int maxNum = 0;
    int c = 0;
    int d = 0;

    for(int i = 0; i < arr.length; i++) {
      for(int j = 0; j < arr[i].length; j++) {
        if(maxNum < arr[i][j]) {
          maxNum = arr[i][j];
          c = i;
          d = j;
        }
      }
    }
    System.out.println("최고값은 " + c + ", " + d + "일때, " + maxNum + "입니다.");
    return maxNum;
  }

}
