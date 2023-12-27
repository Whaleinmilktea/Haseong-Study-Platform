# 치킨 10개 -> 쿠폰 1개 : coupon = chicken // 10
# 치킨 10개 -> 쿠폰 1개 :


def solution(chicken):
    coupon = chicken // 10
    while coupon >= 10:
        coupon = (coupon // 10)
