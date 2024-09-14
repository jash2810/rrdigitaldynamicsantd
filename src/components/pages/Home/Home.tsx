import { Card, Image } from 'antd';
import * as React from 'react';
import { Component } from 'react';
import './Home.css'

const Home = () => {

    const ImageLayover = () => {
        return(
            <React.Fragment>
                <Card className="overlay-card">
                    <div className="image-container" style={{padding: '0'}}>
                        <Image
                            width="100%"
                            height="300px"
                            src="https://images.unsplash.com/photo-1725610588095-f117c0e2a921?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
                            alt="example"
                            className="image"
                        />
                        <div className="overlay">
                        <div className="overlay-content">
                            <h2>Gallery Item</h2>
                            <p>Hover over this image to see the overlay effect.</p>
                        </div>
                        </div>
                    </div>
                </Card>
            </React.Fragment>
        )
    }
    return(
        <React.Fragment>
            {/* image layover here */}
            {/* <ImageLayover/> */}
        </React.Fragment>
    )
}

export default Home;