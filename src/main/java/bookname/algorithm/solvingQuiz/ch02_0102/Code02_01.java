package bookname.algorithm.solvingQuiz.ch02_0102;

import java.util.Scanner;

public class Code02_01 {
  static Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) {
    System.out.println("배열의 행, 열의 개수를 입력하시오");
    int first = Integer.parseInt(scanner.next());
    int second = Integer.parseInt(scanner.next());
    System.out.println("-> 배열을 생성했습니다.");
    System.out.println("배열 원소값을 입력하시오");

    int[][] map = new int[first][second];

    for(int i = 0; i < first; i++) {
      for(int j = 0; j < second; j++) {
        map[i][j] = Integer.parseInt(scanner.next());
      }
    }

    System.out.print("최종 도착지까지 갈 수 있는 최단거리 경우의 수는 ");
    System.out.println(countPath(map, first-1, second-1));
  }

  private static int countPath(int[][] map, int n, int m) {
    if(map[n][m] == 0)
      return 0;
    if(n == 0 && m == 0)
      return 1;
    if(n == 0)
      return countPath(map, n, m-1);
    if(m == 0)
      return countPath(map, n-1, m);
    return countPath(map, n-1, m) + countPath(map, n, m-1);
  }
}

/*
샘플 데이터
5 5
1 1 1 1 1
1 1 0 1 1
1 1 1 1 0
0 1 1 1 1
1 1 1 1 1
-> 답 : 29
 */
