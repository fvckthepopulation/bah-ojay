import React, {Component} from "react";
import imageHome1 from '../assets/image-home-1.png';
import imageHome2 from '../assets/image-home-2.png';
import imageHome3 from '../assets/image-home-3.png';
import imageHome4 from '../assets/image-home-4.png';
import galeriFoto1 from '../assets/galeri-foto_1.png';
import galeriFoto2 from '../assets/galeri-foto_2.png';
import galeriFoto3 from '../assets/galeri-foto_3.png';
import galeriFoto4 from '../assets/galeri-foto_4.png';
import iconWA from '../assets/icons/icon-whatsapp.svg';
import iconLoc from '../assets/icons/icon-pin_location.svg';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    componentDidMount(){

    }

    render(){
        return(
            <div className="home-page font-1">
                <div className="background-wave">
                    <div className="hero">
                        <h1 className="hero-head">
                            Selamat Datang Di Ternak Bah Ojay
                        </h1>
                        <p className="hero-text">Luctus felis sit lectus tristique diam ornare bibendum. Arcu auctor suspendisse luctus amet bibendum pellentesque lorem. Malesuada lobortis tristique tortor,</p>
                        <img className="img-home-1" alt='' src={imageHome1}/>
                    </div>
                </div>
                <div className="box-w">
                    <div className="content-1 d-flex">
                        <div className="content-1-1 mr-a">
                            <h1 className="text-green">
                                Misi Yang Kami Kerjakan
                            </h1>
                            <div className="font-2 text-content-1">
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
                                </p>
                                <p>
                                Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                                </p>
                            </div>
                        </div>
                        <div className="content-1-2">
                            <div className="d-flex">
                                <img alt='' className="img-home-2" src={imageHome2}/>
                            </div>
                            <div className="d-flex">
                                <img alt='' className="img-home-2" src={imageHome3}/>
                                <img alt='' className="img-home-2" src={imageHome4}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-gal">
                    <div className="d-flex">
                        <h1 className="text-green mr-a">
                            Galeri Foto
                        </h1>
                        <p className="font-2 t-lihat-semua">Lihat semua</p>
                    </div>
                    <div className="show-galeri d-flex">
                        <img alt='' className="show-galeri-1" src={galeriFoto1}/>
                        <img alt='' className="show-galeri-1" src={galeriFoto2}/>
                        <img alt='' className="show-galeri-1" src={galeriFoto3}/>
                        <img alt='' className="show-galeri-1" src={galeriFoto4}/>
                    </div>
                </div>
                <div className="box-w">
                    <div className="d-flex">
                        <div className="mr-a">
                            <div className="b-icon-1">
                                <img className="icon-1" alt='' src={iconWA}/>
                            </div>
                            <p className="f-20">WhatsApp</p>
                            <p className="font-2 t-grey">08124567890</p>
                        </div>
                        <div className="mr-a">
                            <div className="b-icon-1">
                                <img className="icon-1" alt='' src={iconLoc}/>
                            </div>
                            <p className="f-20">Lokasi</p>
                            <p className="font-2 t-grey">Desa Mekarjaya, Kec. Ciomas, Jawa Barat</p>
                        </div>
                        <div className="form-email font-2">
                            <div className="form-input">
                                <label className="label-form">
                                    Email
                                </label>
                                <input className="input-email" placeholder="Example@email.com"/>
                            </div>
                            <div className="form-input">
                                <label className="label-form">
                                    Messages
                                </label>
                                <textarea className="input-textarea" placeholder="Your Message.."/>
                            </div>
                            <div className="form-input">
                                <button className="btn-send-email">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}