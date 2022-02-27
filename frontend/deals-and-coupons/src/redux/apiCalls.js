import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8085/user/join';
const COUPON_API_BASE_URL = 'http:localhost:8083/coupon/findall';

class ApiService {

    addUser(user) {
        return axios.post(""+USER_API_BASE_URL, user);
    }

    fetchCoupons() {
        return axios.get(COUPON_API_BASE_URL);
    }

}

export default new ApiService();