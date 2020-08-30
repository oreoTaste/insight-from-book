// 문제 설명
// 직사각형 4개의 점 중 3개의 좌표가 배열 v로 주어질 때, 나머지 한 점의 좌표를 구하기

package website.programmers;

class Rectangle01 {
    public static void main(String[] args) {
        // v1: 테스트용 값
        int[][] v1 = { { -2, -2 }, { 2, 2 }, { 2, -2 } };
        try {
            if (solution(v1) == null)
                throw new Exception("! 직사각형이 아닙니다.");
            // answer1: 정답 좌표
            int[] answer1 = solution(v1);
            System.out.println("정답 : 좌표값 (" + answer1[0] + ", " + answer1[1] + ") 입니다");
        } catch (Exception e) {
            System.out.println(e.getLocalizedMessage());
        }

        // v2: 테스트용 값
        int[][] v2 = { { -2, -2 }, { 0, 0 }, { 2, -2 } };
        try {
            if (solution(v2) == null)
                throw new Exception("! 직사각형이 아닙니다.");
            // answer2: 정답 좌표
            int[] answer2 = solution(v2);
            System.out.println("정답 : 좌표값 (" + answer2[0] + ", " + answer2[1] + ") 입니다");
        } catch (Exception e) {
            System.out.println(e.getLocalizedMessage());
        }

    }

    public static int[] solution(int[][] v) {
        int[] answer = {};
        double[][] dist = new double[3][3];

        // 꼭지점 간 거리를 계산
        for (int i = 0; i < 3; i++) {
            for (int j = i + 1; j < 3; j++) {
                dist[i][j] = Math.sqrt(Math.pow((double) Math.abs(v[i][0] - v[j][0]), 2)
                        + Math.pow((double) Math.abs(v[i][1] - v[j][1]), 2));
            }
        }

        double max = dist[0][1];
        int n = 0, m = 0;
        // 꼭지점 간 거리가 가장 긴 조합(=대각선)을 찾기
        for (int i = 0; i < 3; i++) {
            for (int j = i + 1; j < 3; j++) {
                if (max <= dist[i][j]) {
                    max = dist[i][j];
                    n = i;
                    m = j;
                }
            }
        }
        answer = new int[2];
        // 대각선의 중간지점은 겹친다는 사실을 이용
        answer[0] = v[n][0] + v[m][0] - v[0 + 1 + 2 - n - m][0];
        answer[1] = v[n][1] + v[m][1] - v[0 + 1 + 2 - n - m][1];

        // 직사각형인지 아닌지 체크
        if (Math.pow(answer[0] - v[0 + 1 + 2 - n - m][0], 2) + Math.pow(answer[1] - v[0 + 1 + 2 - n - m][1], 2) != Math
                .pow(v[n][0] - v[m][0], 2) + Math.pow(v[n][1] - v[m][1], 2)) {
            return null;
        }

        return answer;
    }
}