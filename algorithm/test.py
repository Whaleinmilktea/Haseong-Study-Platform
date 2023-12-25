# 반복문으로 가장 긴 면을 찾기
# 다만, 가로길이와 세로길이가 다를 경우, 둘을 바꿔서 비교하기
def solution(size):
    row = []
    col = []
    max_w = 0
    max_h = 0

    for i in range(len(size)):
        if size[i][0] < size[i][1]:
            size[i][0], size[i][1] = size[i][1], size[i][0]
        row.append(size[i][0])
        col.append(size[i][1])

    max_w = max(row)
    max_h = max(col)

    return max_w * max_h