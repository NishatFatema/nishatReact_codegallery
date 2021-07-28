import React from "react-bootstrap";
import { Carousel } from "react-bootstrap";


export const CarouselChild=({itemData})=> {
    console.log("testying==>",itemData)
    return (
        <div >
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={itemData.carouselImg}
                    alt="First slide"
                    height="600px"
                    />
                    <Carousel.Caption>
                        <h3>
                            {itemData.carouselCaption}
                        </h3>
                        <p>
                            {itemData.carouselDescription}
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={itemData.carouselImg2}
                    alt="Second slide"
                    height="600px"
                    />
                    <Carousel.Caption>
                        <h3>{itemData.carouselCaption}</h3>
                        <p>{itemData.carouselDescription}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={itemData.carouselImg3}
                    alt="Third slide"
                    height="600px"
                    />
                    <Carousel.Caption>
                        <h3>{itemData.carouselCaption}</h3>
                        <p>{itemData.carouselDescription}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>



        </div>
    );
};