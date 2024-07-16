import React, { Component } from "react";

import Header from "parts/Header";
import Discuss from "parts/Discuss";
import Footer from "parts/Footer";

import Data from "json/landingPage.json";
import HeroService from "parts/HeroService";
import AllService from "parts/AllService";

export default class ProjectPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <Header {...this.props} />
                <HeroService {...this.props} />
                <AllService data={Data.service} />
                <Discuss {...this.props} />
                <Footer />
            </>
        );
    }
}