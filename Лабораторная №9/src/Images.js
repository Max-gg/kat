import React, { Component } from "react";
import "./App.css";
import "./Images.css"
import Popup from "./Popup"


class Images extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageUrl: "",
            imageUrlArray: [
                "https://images.adsttc.com/media/images/54fe/72b4/e58e/ce91/ea00/00f0/slideshow/666_16_Learning_Hub_Evening_view_of_the_Learning_Hub_from_Nanyang_Drive_CREDIT_Hufton_and_Crow.jpg",
                "https://images.adsttc.com/media/images/5900/f23d/e58e/ce9e/d700/025d/large_jpg/305_CP_1610_0837_IB_H_2515.jpg",
                "https://i2.cdn.turner.com/cnnnext/dam/assets/160830103238-mahanakhon-tallest-building-2.jpg",
                "https://cdn.archilovers.com/projects/6501d858-3514-4ee6-99b5-423aefe13a63.jpg",
                "https://i.pinimg.com/originals/da/d2/df/dad2df8da4194437bedfdb5a01836386.jpg",
                "https://n1s1.hsmedia.ru/6c/33/e3/6c33e3620cfaabe09ddb96c093de0e5d/665x495_0xac120003_8107438761562624070.jpg",
                "https://cdn.cnn.com/cnnnext/dam/assets/170907163740-raffles-city-beijing.jpg"
                
            ],
            showModal: false,
            popImageUrl: ""
        }
    }
    imageSubmitter = (e) => {
        e.preventDefault();
        let imageUrlsArray = this.state.imageUrlArray;
        imageUrlsArray.push(this.state.imageUrl)
        this.setState({
            imageUrlsArray: imageUrlsArray
        })
    }

    handleLinkChange = (e) => {
        e.preventDefault();
        this.setState({
            imageUrl: e.target.value
        })
    }

    imageDeletter(url, e) {
        let imageUrlsArray = this.state.imageUrlArray;
        let indexSplice = imageUrlsArray.indexOf(url)
        imageUrlsArray.splice(indexSplice, 1)
        this.setState({
            imageUrlsArray: imageUrlsArray
        })
    }

    handlePopup = (url) => {
        this.setState({
            showModal: !this.state.showModal,
            popImageUrl: url
        })
    }


    ttt = (smth1, smth2) => {
        this.imageDeletter(smth1, smth2)
        this.handlePopup()
    }


    render() {
        let imageUrlArray = this.state.imageUrlArray;
        const images = imageUrlArray.map((url, index) => {
            return ( <
                img className = "singleImage"
                src = { url }
                key = { index }
                onClick = {
                    () => this.handlePopup(url)
                }
                />
            )
        })
        return ( < div className = "Images" >
            <
            form onSubmit = { this.imageSubmitter } >
            <
            input type = "text"
            placeholder = "Input url images"
            onChange = { this.handleLinkChange }
            /> <button type = "Submit"
            class = "SubmitButton" > Submit image </button></form> { images } {
                this.state.showModal ? ( <
                    Popup popImageUrl = { this.state.popImageUrl }
                    closePopup = { this.handlePopup }
                    deleteImage = { this.ttt.bind(this, this.state.popImageUrl) }
                    />
                ) : null
            } <
            /div>
        );
    }
}

export default Images;