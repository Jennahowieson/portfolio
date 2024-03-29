import React from "react";
import anime from 'animejs';
import { useEffect } from "react";



const Home = () => {

    const gridanime = (() => {
        anime({
            targets: '#icon',
            scale: [
                { value: .001, easing: 'easeOutSine' },
                { value: 1, easing: 'easeInOutQuad' }
            ],
            delay: anime.stagger(150, { grid: [3, 5], from: 'center' })
        })
    })

    useEffect(() => {
        gridanime()
    })

    return (
        <div class="flex-vertical">
            <section class='intro-box'>
                <p>Hey, I'm Jenna. I'm a full-stack software developer based in Scotland.</p>
                <p>I love all elements of programming but have found a particular passion for front-end development.</p>
                <p>Please take a look around my portfolio, check out my latest projects and reach out if you'd like to connect.</p>
            </section>
            <section id='skills-box'>
                <h3>Languages, Frameworks & Software I Use (and love)</h3>
                <h4>Check out the projects I've build with these in the <a href="/projects">Projects Tab</a></h4>
                <ul>
                    <li id="icon"><i class="devicon-python-plain-wordmark"></i></li>
                    <li id="icon"> <i class="devicon-javascript-plain "> </i></li>
                    <li id="icon"><i class="devicon-react-plain-wordmark "></i></li>
                    <li id="icon"><i class="devicon-html5-plain-wordmark "></i></li>
                    <li id="icon"><i class="devicon-css3-plain-wordmark "></i></li>
                    <li id="icon"><i class="devicon-postgresql-plain-wordmark "></i></li>
                    <li id="icon"><i class="devicon-mongodb-plain-wordmark "></i></li>
                    <li id="icon"><i class="devicon-flask-plain-wordmark "></i></li>
                    <li id="icon"><i class="devicon-java-plain-wordmark "></i></li>
                    <li id="icon"><i class="devicon-wordpress-plain-wordmark "></i></li>
                    <li id="icon"><i class="devicon-canva-original "></i></li>
                    <li id="icon"><i class="devicon-github-original-wordmark "></i></li>
                    <li id="icon"><i class="devicon-trello-plain-wordmark"></i></li>
                    <li id="icon"><i class="devicon-vscode-plain-wordmark"></i></li>


                </ul>
            </section>
        </div>
    )
};

export default Home;