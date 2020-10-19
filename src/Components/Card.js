import React from "react";
import "../styles/Card.css";
import imageSample from "../logoSample2.png";

export default function ContactUs() {
    return (
        <div class="ContainerCard">
            <div class="Card">
                <div class="ImgCard">
                    <img src={imageSample}></img>
                </div>
                <div class="ContentCard">
                    <p>
                    Lorem ipsum dolor sit amet, Vestibulum malesuada eget metus non vestibulum. Etiam ac scelerisque neque, rutrum ullamcorper ligula. Mauris dictum mauris nec metus imperdiet, id facilisis lectus porttitor. 
                    </p>
                </div>
            </div>
        </div>
    );
}