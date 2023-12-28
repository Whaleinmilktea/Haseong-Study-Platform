def solution(arr1, arr2):
  result = []
  for i in range(len(arr1)):
    temp = []
    for j in range(len(arr1[i])):
      temp.append(arr1[i][j] + arr2[i][j])
    result.append(temp)
    temp = []
  return result


print(solution([[1, 2], [2, 3]], [[3, 4], [5, 6]]))
