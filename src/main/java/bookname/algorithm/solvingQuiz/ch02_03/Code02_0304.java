package bookname.algorithm.solvingQuiz.ch02_03;

import java.util.Scanner;

public class Code02_0304 {
  static long[][] memory; // for countPath (메모이제이션)
  static long[][] path; // for countPath2 (동적프로그래밍)
  static Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) {
    System.out.println("배열의 행, 열의 개수를 입력하시오");
    int first = Integer.parseInt(scanner.next());
    int second = Integer.parseInt(scanner.next());
    System.out.println("-> 배열을 생성했습니다.");
    System.out.println("배열 원소값을 입력하시오");

    long[][] map = new long[first][second];
    memory = new long[first][second];
    path = new long[first][second];

    for(int i = 0; i < first; i++) {
      for(int j = 0; j < second; j++) {
        map[i][j] = Integer.parseInt(scanner.next());
      }
    }

    System.out.println("계산중");

    long currentTime = System.currentTimeMillis();
    System.out.print("최종 도착지까지 갈 수 있는 최단거리 최대 효용 : " + countPath0(map, first-1, second-1) + "\n");
    System.out.println(String.format("-> %d밀리초가 소요되었습니다.", System.currentTimeMillis()-currentTime));
    currentTime = System.currentTimeMillis();
    System.out.print("최종 도착지까지 갈 수 있는 최단거리 최대 효용 : " + countPath1(map, first-1, second-1) + "\n");
    System.out.println(String.format("-> %d밀리초가 소요되었습니다.", System.currentTimeMillis()-currentTime));
    currentTime = System.currentTimeMillis();
    System.out.print("최종 도착지까지 갈 수 있는 최단거리 최대 효용 : " + countPath2(map, first, second) + "\n");
    System.out.println(String.format("-> %d밀리초가 소요되었습니다.", System.currentTimeMillis()-currentTime));
  }

  // 메모이제이션 미적용
  private static long countPath0(long[][] map, int n, int m) {
    if(n == 0 && m == 0)
      return map[n][m];
    if(n == 0)
      return map[n][m-1] + map[n][m];
    if(m == 0)
      return map[n-1][m] + map[n][m];
    return countPath0(map, n-1, m) + map[n][m] > countPath0(map, n, m-1) +  map[n][m] ?
        countPath0(map, n-1, m) + map[n][m] : countPath0(map, n, m-1) +  map[n][m];
  }
  // 메모이제이션 적용
  private static long countPath1(long[][] map, int n, int m) {
    if(memory[n][m] > 0)
      return memory[n][m];
    if(n == 0 && m == 0)
      return memory[0][0] = map[n][m];
    if(n == 0)
      return memory[0][m] = map[n][m-1] + map[n][m];
    if(m == 0)
      return memory[n][0] = map[n-1][m] + map[n][m];
    return memory[n][m] = countPath1(map, n-1, m) + map[n][m] > countPath1(map, n, m-1) +  map[n][m] ?
        countPath1(map, n-1, m) + map[n][m] : countPath1(map, n, m-1) +  map[n][m];
  }

  // 동적 프로그래밍 적용
  private static long countPath2(long[][] map, int n, int m) {
    path[0][0] = map[0][0];

    for(int i = 1; i < n; i++)
      path[i][0] = path[i-1][0] + map[i][0];

    for(int i = 1; i < m; i++)
      path[0][i] = path[0][i-1] + map[0][i];

    for(int i = 1; i < n; i++) {
      for(int j = 1; j < m; j++) {
        path[i][j] = map[i][j] +
            (path[i-1][j] > path[i][j-1] ? path[i-1][j] : path[i][j-1]);
      }
    }
    return path[n-1][m-1];
  }
}
/*
샘플 데이터
10 10
3 1 1 2 1 1 4 1 1 1
3 3 5 1 1 1 1 1 1 1
3 1 1 1 1 1 3 1 1 1
1 1 1 3 1 1 1 1 1 1
3 1 5 1 1 1 3 1 1 1
1 5 1 1 1 3 1 4 3 1
3 1 1 1 2 1 3 1 1 1
1 1 5 1 2 1 1 1 1 3
1 1 2 1 3 1 3 1 4 2
3 1 1 1 1 1 3 1 1 1

 */
