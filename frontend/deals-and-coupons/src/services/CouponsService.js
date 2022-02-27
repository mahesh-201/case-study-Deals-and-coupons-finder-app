import axios from 'axios'

const COUPONS_REST_API_URL = 'http://localhost:8093/coupon/findall';

class CouponService {

    findCoupon(){
        return axios.get(COUPONS_REST_API_URL);
    }
}

export default new CouponService();