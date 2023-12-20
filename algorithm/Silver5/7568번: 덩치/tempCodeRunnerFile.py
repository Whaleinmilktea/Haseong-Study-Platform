
for i in range(len(p)):
  for j in range(len(p)):
    if i == j:
      continue
    else:
      if p[i][0] < p[j][0] and p[i][1] < p[j][1]:
        k[i] += 1

print(" ".join(p))