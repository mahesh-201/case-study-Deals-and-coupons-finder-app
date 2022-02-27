import React from 'react';
import CouponsService from '../services/CouponsService';


class CouponComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        CouponsService.findCoupon().then((response) => {
            this.setState({ coupons: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Coupons List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td> couponId</td>
                            <td>category</td>
                            <td> count</td>
                            <td> offer</td>
                            <td> companyName</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.coupons.map(
                                coupon => 
                                <tr key = {coupon.couponId}>
                                     <td> {coupon.couponId}</td>   
                                     <td> {coupon.category}</td>   
                                     <td> {coupon.count}</td>   
                                     <td> {coupon.offer}</td>
                                     <td> {coupon.companyName}</td>   
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default CouponComponent;
