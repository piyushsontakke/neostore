import React, { Component } from 'react';
import './PopularProd.css';

let arr = [
{
    productImg:"http://180.149.241.208:3000/storage/thumbnail/_15b-lightgold-oak-birch-batula-vintage-light-gold-3-2-mahogany-original-imaeenhryfgb6ns4_250thumb.jpeg",
    productName:"Robert Recliner Sofa Set",
    price:"40,000"
},{
    productImg:"http://180.149.241.208:3000/storage/thumbnail/_Ursula_Lounge_chair_BL_00_250thumb.jpg",
    productName:"Ursula Lounge Chair",
    price:"13,999"
},{
    productImg:"http://180.149.241.208:3000/storage/thumbnail/_Bradbury_Desk_Mahogany_Finish_250thumb.jpg",
    productName:"Bradbury Desk",
    price:"16,999"
},{
    productImg:"http://180.149.241.208:3000/storage/thumbnail/_820170629075720img_250thumb.jpg",
    productName:"Robinson",
    price:"40,000"
},{
    productImg:"http://180.149.241.208:3000/storage/thumbnail/_FNSF51WCCO3_-_main_2_250thumb.jpg",
    productName:"Winchester Fabric Sofa",
    price:"59,999"
},{
    productImg:"http://180.149.241.208:3000/storage/thumbnail/_fonteyn_01_55_250thumb.jpg",
    productName:"Fonteyn Study Table",
    price:"6,000"
},];
class PopularProd extends Component {
    render() {
        return(
            <section className="popularProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="text-center">Popular Products</h3>
                        </div>
                    </div>
                    <div className="row">
                    {
                        arr.map(function (params) {
                            return(
                                <div className="col-md-4">
                                    <div className="thumbnail">
                                        <div className="img-thumb">
                                            <img className="img-inside img-responsive" src={params.productImg} />
                                        </div>
                                        <div className="caption">
                                            <h4 className="text-center">
                                                <a href="">{params.productName}</a>
                                            </h4>
                                            <h4 className="text-center">₹{params.price}</h4>
                                            <div className="rating text-center">
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star-half-o" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ); 
                        })
                    }
                    </div>
                </div>
            </section>
        );
    }
}

export default PopularProd