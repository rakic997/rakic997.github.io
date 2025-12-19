import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import projectsData from '../projectsData.json'

import logoImage from '../assets/logo.png';

const Home = () => {
    const navigate = useNavigate();

    function scrollToProjects(event) {
        event.preventDefault();
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            window.scrollTo({
                top: projectsSection.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    function scrollToContact(event) {
        event.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            window.scrollTo({
                top: contactSection.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    const handleClick = (project) => {
        navigate(`/project/${project.id}`, { state: { project } });
    };

    return (
        <>
            <div className='page-content'>

                <header className='header'>
                    <div className='container'>


                        <img src={logoImage} />

                        <a href="tel:+38765640432" className='mobile'>
                            <span>Call me:</span> +387 (65) 640 432
                        </a>
                    </div>
                </header>

                <section className='home'>
                    <svg xmlns="http://www.w3.org/2000/svg" dataName="Layer 1" viewBox="0 0 1019.4842 436.68123">
                        <path d="M314.02808,475.27364a9.75072,9.75072,0,1,0-19.40734,1.28194l-28.01439,36.68607a13.58254,13.58254,0,0,0,1.83575,14.91417l2.19759,2.56354,10.083-2.01667,11.42794-10.08331L290.806,507.19164l14.1167-22.18324-.01825-.01592A9.74283,9.74283,0,0,0,314.02808,475.27364Z" transform="translate(-90.2579 -231.65939)" fill="#ffb9b9" />
                        <polygon points="30.041 422.968 25.468 405.984 88.8 380.265 95.549 405.331 30.041 422.968" fill="#ffb8b8" /><path d="M105.002,663.39128,90.2579,608.62916l.69264-.18651a22.07516,22.07516,0,0,1,27.054,15.57522l.00037.00135L127.01,657.46609Z" transform="translate(-90.2579 -231.65939)" fill="#2f2e41" />
                        <polygon points="117.278 420.254 103.054 409.91 136.185 350.121 157.179 365.388 117.278 420.254" fill="#ffb8b8" /><path d="M201.1368,668.34061,155.27068,634.9853l.42187-.58015a22.07517,22.07517,0,0,1,30.8348-4.87041l.00114.00082L214.54188,649.908Z" transform="translate(-90.2579 -231.65939)" fill="#2f2e41" />
                        <path d="M328.45025,568.36357l-35.795-34.77263a18.07626,18.07626,0,0,0-23.66833-1.3221L201.4006,607.3525l6.05018,9.41084L271.98356,573.069l43.69437,57.13867,41.67764-20.83841Z" transform="translate(-90.2579 -231.65939)" fill="#2f2e41" />
                        <path d="M312.98939,575.75807l-26.21673-2.01667-18.986-4.60272a9.75256,9.75256,0,1,0-1.85,12.65572l-.00277.01364,11.42793,4.70553,49.07181,16.80551,6.05-4.70553Z" transform="translate(-90.2579 -231.65939)" fill="#ffb9b9" />
                        <polygon points="285.92 416.699 271.131 426.11 253.653 426.11 172.315 395.86 53.332 417.371 49.971 391.826 158.871 344.099 254.326 375.693 285.92 416.699" fill="#2f2e41" />
                        <circle cx="254.32577" cy="227.13245" r="26.21658" fill="#ffb9b9" />
                        <path d="M412.41738,563.46316a150.631,150.631,0,0,1-7.3877,46.59159l-1.96286,6.03657-9.4111,43.0221-10.08328,2.68886-7.39442-9.41107-14.78884-10.7555L350.63366,624.158,341.41082,608.791l-2.87712-4.79967-10.08331-50.41649-38.31653-21.511-12.77217-2.01667,2.68889-7.39442,11.42774-15.46106L302.906,505.8472l3.36111-2.68888,2.68888,1.34443,14.82257,5.71013,48.05688-20.304,7.03142,1.14951L403.06674,511.225A150.49912,150.49912,0,0,1,412.41738,563.46316Z" transform="translate(-90.2579 -231.65939)" fill="#ccc" />
                        <polygon points="314.825 325.949 289.281 342.754 251.153 377.131 248.276 372.332 240.209 331.999 242.226 331.999 263.065 293.683 314.825 325.949" opacity="0.1" />
                        <polygon points="263.065 289.649 242.226 327.965 230.126 341.41 219.371 344.099 248.276 375.693 289.281 338.721 314.825 321.915 263.065 289.649" fill="#ccc" />
                        <path d="M324.19252,439.29866l-2.8405,1.09286a3.96532,3.96532,0,0,1-1.06033-5.50666q.02295-.03393.04661-.06735l-5.24917-.24564a39.63744,39.63744,0,0,1,59.17341-4.76951c.239-.8231,2.84419.7783,3.90783,2.40209.35739-1.33937,2.8001,5.13521,3.66407,9.71188.4-1.52384,1.93791.9362.59056,3.2967.8537-.12472,1.23931,2.05947.57843,3.27633.934-.43878.77654,2.16855-.23609,3.911,1.3327-.11841-.1137,27.33122-20.1137,25.33122-1.39236-6.39749-1-6-2.63957-14.22639-.76312-.81-1.59882-1.54779-2.43315-2.28425l-4.51259-3.9833c-5.2473-4.63182-10.02063-10.34844-17.01093-12.07955-4.80393-1.18968-7.84143-1.45827-5.22344-6.87151-2.36532.98706-4.57411,2.45493-6.96063,3.37169C323.90539,440.90187,324.23894,440.05545,324.19252,439.29866Z" transform="translate(-90.2579 -231.65939)" fill="#2f2e41" />
                        <circle cx="267.43406" cy="230.15744" r="4.70554" fill="#ffb9b9" />
                        <rect x="137.51364" y="351.37595" width="21.61009" height="21.61009" transform="translate(-313.1754 254.44578) rotate(-86.18992)" fill="#e6e6e6" />
                        <path d="M124.34354,362.13134l26.18282,1.74368-1.74369,26.18282-26.18282-1.74368Zm24.96862,2.80626-23.90605-1.59206-1.59206,23.906,23.90605,1.59206Z" transform="translate(-90.2579 -231.65939)" fill="#ccc" /><rect x="241.00867" y="288.77184" width="21.61009" height="21.61009" transform="translate(-147.57238 -172.07462) rotate(-12.12675)" fill="#e6e6e6" /><path d="M245.27842,276.50957l5.51255,25.65526-25.65526,5.51254-5.51254-25.65526Zm4.15743,24.7795-5.0332-23.42436-23.42437,5.03319,5.03319,23.42438Z" transform="translate(-90.2579 -231.65939)" fill="#ccc" />
                        <rect x="226.60299" y="392.67408" width="21.61008" height="21.61009" transform="translate(-301.94557 39.64172) rotate(-43.12712)" fill="#e6e6e6" />
                        <path d="M253.81456,385.99664,234.663,403.93538l-17.93873-19.15156,19.15156-17.93872Zm-19.09885,16.3261,17.48621-16.37883-16.37884-17.48618-17.48621,16.37884Z" transform="translate(-90.2579 -231.65939)" fill="#ccc" />
                        <path d="M1053.535,231.65939H414.15223a17.59849,17.59849,0,0,0-17.59851,17.59849v356.2522a17.59854,17.59854,0,0,0,17.59851,17.59857H1053.535a17.59856,17.59856,0,0,0,17.59851-17.59857V249.25788a17.59852,17.59852,0,0,0-17.59851-17.59849Z" transform="translate(-90.2579 -231.65939)" fill="#3f3d56" />
                        <rect x="329.89003" y="31.10145" width="627.39127" height="353.91303" fill="#fff" />
                        <circle cx="643.04942" cy="15.01449" r="6.43477" fill="#fff" />
                        <polygon points="777.858 385.015 329.89 385.015 329.89 31.102 777.858 385.015" fill="#f2f2f2" />
                        <circle cx="428.05798" cy="298.22423" r="60.3068" fill="#1625c7" />
                        <path d="M531.74082,575.21a75.01577,75.01577,0,1,1,75.01581-75.01575A75.01578,75.01578,0,0,1,531.74082,575.21Zm0-149.051A74.03519,74.03519,0,1,0,605.776,500.19428a74.03518,74.03518,0,0,0-74.03522-74.03521Z" transform="translate(-90.2579 -231.65939)" fill="#3f3d56" />
                        <rect x="753.43694" y="214.96957" width="58.60522" height="12.24586" fill="#3f3d56" />
                        <rect x="697.99083" y="148.62679" width="169.49743" height="5.24823" fill="#3f3d56" />
                        <rect x="697.99083" y="169.24617" width="169.49743" height="5.24823" fill="#3f3d56" />
                        <rect x="697.99083" y="189.86555" width="169.49743" height="5.24823" fill="#3f3d56" />
                        <rect x="888.40147" y="52.28163" width="24.49176" height="24.49173" fill="#1625c7" />
                        <path d="M1014.52225,319.8039h-29.74v-29.74h29.74Zm-28.4469-1.293h27.15381V291.357H986.07529Z" transform="translate(-90.2579 -231.65939)" fill="#ccc" />
                        <path d="M1088.74918,610.23908h-61.22937v-4.41156a.87466.87466,0,0,0-.87463-.87469h-20.993a.87468.87468,0,0,0-.87476.87463v4.41162H991.657v-4.41156a.87468.87468,0,0,0-.8747-.87469H969.7894a.87467.87467,0,0,0-.87469.87469h0v4.41156H955.79416v-4.41156a.87467.87467,0,0,0-.87469-.87469h-20.993a.87468.87468,0,0,0-.8747.87469h0v4.41156H919.93125v-4.41156a.87468.87468,0,0,0-.8747-.87469H898.06363a.87466.87466,0,0,0-.87469.87463v4.41162H884.0684v-4.41156a.87468.87468,0,0,0-.8747-.87469H862.20078a.87467.87467,0,0,0-.87469.87469h0v4.41156H848.20548v-4.41156a.87467.87467,0,0,0-.87469-.87469H826.33787a.87468.87468,0,0,0-.8747.87469h0v4.41156H812.34263v-4.41156a.87468.87468,0,0,0-.8747-.87469H647.02347a.87467.87467,0,0,0-.87469.87469h0v4.41156H633.02817v-4.41156a.87467.87467,0,0,0-.87469-.87469H611.16062a.87468.87468,0,0,0-.8747.87469h0v4.41156h-13.1206v-4.41156a.87466.87466,0,0,0-.87463-.87469h-20.993a.87467.87467,0,0,0-.87469.87469h0v4.41156H561.3024v-4.41156a.87467.87467,0,0,0-.87469-.87469H539.43479a.87468.87468,0,0,0-.8747.87469h0v4.41156H525.43955v-4.41156a.87467.87467,0,0,0-.87469-.87469H503.57194a.87468.87468,0,0,0-.8747.87469h0v4.41156h-13.1206v-4.41156a.87468.87468,0,0,0-.8747-.87469H467.709a.87468.87468,0,0,0-.87469.87463v4.41162H453.71375v-4.41156a.87467.87467,0,0,0-.87466-.87469H431.84617a.8747.8747,0,0,0-.8747.87469h0v4.41156H390.735A20.99292,20.99292,0,0,0,369.74213,631.232v9.4925A20.99291,20.99291,0,0,0,390.735,661.71736h698.01416a20.99293,20.99293,0,0,0,20.99292-20.99286V631.232A20.9929,20.9929,0,0,0,1088.74918,610.23908Z" transform="translate(-90.2579 -231.65939)" fill="#3f3d56" />
                    </svg>
                    <div className='container'>
                        <div className="home-text">
                            <h1 className="headline">Creative frontend developer</h1>
                            <p>Hey, I'm David, Creative Frontend Developer based in Bosnia and Herzegovina.</p>
                            <button onClick={scrollToProjects}>Projects</button>
                            <button onClick={scrollToContact}>Contact</button>
                        </div>
                    </div>

                    <div className="square square-1 float-y"></div>
                    <div className="circle circle-1 float-x"></div>

                    <div className="square square-2"></div>
                    <div className="circle circle-2 float-x"></div>
                    <div className="triangle triangle-2 float-y">
                        <div className="empty"></div>
                    </div>
                </section>

                <section className='about'>
                    <div className="square square-3"></div>
                    <div className="triangle triangle-2 float-y">
                        <div className="empty"></div>
                    </div>
                    <div class="dot-grid">
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div> <div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div> <div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div> <div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div> <div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div> <div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div> <div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div> <div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    </div>

                    <svg width="845.7243" height="704.03133" viewBox="0 0 845.7243 704.03133" className='about-shape-1' artist="Katerina Limpitsouni" source="https://undraw.co/">
                        <g id="f1503154-f50a-4680-8aa4-587be41cac87" dataName="Group 2">
                            <rect id="e1abf0e4-070b-4c82-8a12-ebedd4e3db02" x="0.26201" y="0.347" width="611.461" height="391.60699" fill="#e6e6e6" />
                            <rect id="ace8bea0-82e8-49b8-a50c-1e1cb532084f" x="19.746" y="49.464" width="576.492" height="319.32199" fill="#fff" />
                            <rect id="b540f353-e277-4512-bc56-a133cea2858b" width="611.461" height="25.977" fill="#1625c7" />
                            <circle id="b2b285b5-c1c3-4b12-9710-2898c7239781" cx="19.30501" cy="13.281" r="4.815" fill="#fff" />
                            <circle id="a5a428bb-42a2-4f57-9e6c-9979c01a2490" cx="37.58001" cy="13.281" r="4.815" fill="#fff" />
                            <circle id="a9929a25-14ce-4464-bac9-4165f1e3fae6" cx="55.85501" cy="13.281" r="4.815" fill="#fff" />
                            <path id="b4a2d72b-abc3-4d2f-a2b8-a2aff6897b26-1659" d="M297.74287,192.20533l-38.133,37.657,38.133,37.656,8.58-8.58-28.835-28.839,29.076-29.076Z" transform="translate(-177.13785 -97.98434)" fill="#1625c7" />
                            <path id="b5120d89-6cbe-4bfa-9a1b-cf9b07deff91-1660" d="M328.98787,192.20533l38.132,37.657-38.132,37.656-8.58-8.58,28.837-28.838-29.078-29.077Z" transform="translate(-177.13785 -97.98434)" fill="#1625c7" />
                            <path id="a31271bd-8e2f-469b-8cee-8b6db3f92f99-1661" d="M452.33185,201.65533c-3.119,0-5.647,1.794-5.647,4.006s2.528,4.006,5.647,4.006h266.214c3.119,0,5.647-1.794,5.647-4.006s-2.528-4.006-5.647-4.006Z" transform="translate(-177.13785 -97.98434)" fill="#e6e6e6" />
                            <path id="bf577952-0fd5-43e0-be6b-ea1966b51a93-1662" d="M715.89888,421.13433h-447.838c-4.578,0-8.288-2.643-8.293-5.9v-79.042c.005-3.257,3.715-5.9,8.293-5.9h447.838c4.578,0,8.288,2.643,8.293,5.9v79.041C724.18788,418.49035,720.47688,421.13034,715.89888,421.13433Zm-447.838-88.484c-2.747,0-4.973,1.586-4.976,3.54v79.041c0,1.954,2.229,3.538,4.976,3.54h447.838c2.747,0,4.973-1.586,4.976-3.54v-79.039c0-1.954-2.229-3.538-4.976-3.54Z" transform="translate(-177.13785 -97.98434)" fill="#e6e6e6" />
                            <circle id="f7f4957b-eaa8-456b-bf02-bacf7de3ef80" cx="137.04001" cy="277.695" r="20.036" fill="#e6e6e6" />
                            <path id="fb0f055d-da6e-47f2-bb6d-7ff26d7b746a-1663" d="M370.68788,359.65533a4.006,4.006,0,0,0-.01037,8.012H559.54884a4.006,4.006,0,0,0,0-8.012Z" transform="translate(-177.13785 -97.98434)" fill="#1625c7" />
                            <path id="bfcde504-8c45-4d21-843b-87b1f7e22ce0-1664" d="M370.68788,383.69235a4.006,4.006,0,0,0-.01037,8.012h81.27636a4.006,4.006,0,0,0,.01038-8.012H370.68788Z" transform="translate(-177.13785 -97.98434)" fill="#1625c7" />
                            <path id="a66699ea-75f1-4575-b6d5-52b0b1f8e30c-1665" d="M450.38788,225.65533a4.019,4.019,0,0,0,0,8.012h174.47a4.019,4.019,0,0,0,0-8.012Z" transform="translate(-177.13785 -97.98434)" fill="#e6e6e6" />
                            <path id="bbc4ca7b-25d4-4c7e-b3d4-0411f69bd48f-1666" d="M451.53583,249.65533c-2.679,0-4.851,1.794-4.851,4.006s2.172,4.006,4.851,4.006h228.7c2.679,0,4.851-1.794,4.851-4.006s-2.172-4.006-4.851-4.006Z" transform="translate(-177.13785 -97.98434)" fill="#e6e6e6" />
                        </g>
                    </svg>

                    <svg width="800.423" height="638.973" viewBox="0 0 800.423 638.973" role="img" artist="Katerina Limpitsouni" source="https://undraw.co/" className='about-shape-2'>
                        <g transform="translate(-607 -170.695)">
                            <g transform="translate(654.132 329.726)">

                            </g><g transform="translate(910.973 532.168)">
                                <path d="M489.264,501.018l-140.887,29.7A15.708,15.708,0,0,1,329.788,518.6L305.612,403.9a15.708,15.708,0,0,1,12.117-18.589l140.887-29.7a15.708,15.708,0,0,1,18.589,12.117l24.176,114.7A15.708,15.708,0,0,1,489.264,501.018ZM318.11,387.118a13.86,13.86,0,0,0-10.691,16.4l24.176,114.7A13.86,13.86,0,0,0,348,528.908l140.887-29.7a13.86,13.86,0,0,0,10.691-16.4L475.4,368.113A13.86,13.86,0,0,0,459,357.421Z" transform="translate(-305.275 -355.278)" fill="#3f3d56" />
                                <path d="M455.74,396.2l-71.1,14.987a2.521,2.521,0,0,1-2.981-1.72,2.428,2.428,0,0,1,1.845-3L455.88,391.21c2.826,1.593,1.933,4.555-.14,4.992Z" transform="translate(-311.153 -358.046)" fill="#e6e6e6" />
                                <path d="M458.588,409.715l-71.1,14.987a2.52,2.52,0,0,1-2.981-1.72,2.428,2.428,0,0,1,1.845-3l72.379-15.256c2.826,1.593,1.933,4.555-.14,4.992Z" transform="translate(-311.372 -359.087)" fill="#e6e6e6" />
                                <path d="M370.171,434.986l-21.7,4.574a2.734,2.734,0,0,1-3.236-2.109l-5.4-25.608a2.734,2.734,0,0,1,2.109-3.236l21.7-4.574a2.735,2.735,0,0,1,3.236,2.109l5.4,25.608a2.734,2.734,0,0,1-2.109,3.236Z" transform="translate(-307.933 -359.029)" fill="#e6e6e6" />
                                <path d="M461.074,437.43,352.556,460.3a2.521,2.521,0,0,1-2.981-1.72,2.428,2.428,0,0,1,1.845-3l109.794-23.143c2.826,1.593,1.933,4.555-.14,4.992Z" transform="translate(-308.681 -361.222)" fill="#e6e6e6" />
                                <path d="M463.923,450.947,355.405,473.821a2.521,2.521,0,0,1-2.981-1.72,2.428,2.428,0,0,1,1.845-3l109.794-23.143c2.826,1.593,1.933,4.555-.14,4.992Z" transform="translate(-308.901 -362.263)" fill="#e6e6e6" />
                                <path d="M466.77,464.455,358.253,487.329a2.52,2.52,0,0,1-2.981-1.72,2.428,2.428,0,0,1,1.845-3L466.91,459.463C469.737,461.056,468.843,464.018,466.77,464.455Z" transform="translate(-309.12 -363.304)" fill="#e6e6e6" />
                                <path d="M469.619,477.971,361.1,500.845a2.521,2.521,0,0,1-2.98-1.72,2.428,2.428,0,0,1,1.845-3l109.794-23.143c2.826,1.593,1.933,4.555-.14,4.992Z" transform="translate(-309.34 -364.345)" fill="#e6e6e6" />
                                <path d="M472.466,491.48,363.949,514.354a2.52,2.52,0,0,1-2.98-1.72,2.428,2.428,0,0,1,1.845-3l109.794-23.143c2.826,1.593,1.933,4.555-.14,4.992Z" transform="translate(-309.559 -365.386)" fill="#e6e6e6" />
                            </g>
                            <path d="M713.368,339.6H569.385a15.708,15.708,0,0,1-15.69-15.69V206.69A15.708,15.708,0,0,1,569.385,191H713.368a15.708,15.708,0,0,1,15.69,15.69V323.907a15.708,15.708,0,0,1-15.69,15.69ZM569.385,192.846a13.86,13.86,0,0,0-13.844,13.844V323.907a13.86,13.86,0,0,0,13.844,13.844H713.368a13.86,13.86,0,0,0,13.844-13.844V206.69a13.86,13.86,0,0,0-13.844-13.844Z" transform="translate(379.111 74.995)" fill="#3f3d56" />
                            <path d="M702.684,228.733H630.018a2.521,2.521,0,0,1-2.562-2.3,2.428,2.428,0,0,1,2.424-2.558h73.97c2.437,2.141.952,4.856-1.167,4.856Z" transform="translate(373.43 72.462)" fill="#ccc" />
                            <path d="M702.684,242.543H630.018a2.521,2.521,0,0,1-2.562-2.3,2.428,2.428,0,0,1,2.424-2.558h73.97c2.437,2.141.952,4.856-1.167,4.856Z" transform="translate(373.43 71.399)" fill="#ccc" />
                            <path d="M611.133,248.171H588.956a2.734,2.734,0,0,1-2.731-2.731V219.269a2.734,2.734,0,0,1,2.731-2.731h22.177a2.735,2.735,0,0,1,2.731,2.731V245.44a2.734,2.734,0,0,1-2.731,2.731Z" transform="translate(376.605 73.028)" fill="#3f3d56" />
                            <path d="M699.264,270.819h-110.9a2.521,2.521,0,0,1-2.562-2.3,2.428,2.428,0,0,1,2.425-2.558H700.431c2.437,2.141.952,4.856-1.167,4.856Z" transform="translate(376.639 69.22)" fill="#6c63ff" />
                            <path d="M699.264,284.633h-110.9a2.521,2.521,0,0,1-2.562-2.3,2.428,2.428,0,0,1,2.425-2.558H700.431C702.868,281.918,701.383,284.633,699.264,284.633Z" transform="translate(376.639 68.156)" fill="#6c63ff" />
                            <path d="M699.264,298.438h-110.9a2.52,2.52,0,0,1-2.562-2.3,2.428,2.428,0,0,1,2.424-2.558H700.431C702.868,295.723,701.383,298.438,699.264,298.438Z" transform="translate(376.639 67.093)" fill="#6c63ff" />
                            <path d="M699.264,312.251h-110.9a2.52,2.52,0,0,1-2.562-2.3,2.428,2.428,0,0,1,2.424-2.558H700.431c2.437,2.141.952,4.856-1.167,4.856Z" transform="translate(376.639 66.029)" fill="#6c63ff" />
                            <path d="M699.264,326.057h-110.9a2.521,2.521,0,0,1-2.562-2.3,2.428,2.428,0,0,1,2.425-2.558H700.431C702.868,323.342,701.383,326.057,699.264,326.057Z" transform="translate(376.639 64.965)" fill="#6c63ff" />
                            <path d="M685.531,178a4.62,4.62,0,0,1,4.615,4.615v14.767A4.62,4.62,0,0,1,685.531,202H604.31a4.62,4.62,0,0,1-4.615-4.615V182.615A4.62,4.62,0,0,1,604.31,178" transform="translate(375.568 75.997)" fill="#6c63ff" />
                            <g transform="translate(1195.289 402.641)">
                                <path d="M938.368,496.6H794.385a15.708,15.708,0,0,1-15.69-15.69V363.69A15.708,15.708,0,0,1,794.385,348H938.368a15.708,15.708,0,0,1,15.69,15.69V480.907A15.708,15.708,0,0,1,938.368,496.6ZM794.385,349.846a13.86,13.86,0,0,0-13.844,13.844V480.907a13.86,13.86,0,0,0,13.844,13.844H938.368a13.86,13.86,0,0,0,13.844-13.844V363.69a13.86,13.86,0,0,0-13.844-13.844Z" transform="translate(-778.695 -336.001)" fill="#3f3d56" />
                                <path d="M927.684,385.733H855.018a2.52,2.52,0,0,1-2.562-2.3,2.428,2.428,0,0,1,2.425-2.558h73.97c2.437,2.141.952,4.856-1.167,4.856Z" transform="translate(-784.377 -338.534)" fill="#3f3d56" />
                                <path d="M927.684,399.543H855.018a2.521,2.521,0,0,1-2.562-2.3,2.428,2.428,0,0,1,2.425-2.558h73.97c2.437,2.141.952,4.856-1.167,4.856Z" transform="translate(-784.377 -339.598)" fill="#3f3d56" />
                                <path d="M836.133,405.171H813.956a2.734,2.734,0,0,1-2.731-2.731V376.269a2.734,2.734,0,0,1,2.731-2.731h22.177a2.735,2.735,0,0,1,2.731,2.731V402.44a2.734,2.734,0,0,1-2.731,2.731Z" transform="translate(-781.201 -337.969)" fill="#6c63ff" />
                                <path d="M931.133,483.1H908.956a2.734,2.734,0,0,1-2.731-2.731v-15.1a2.734,2.734,0,0,1,2.731-2.731h22.177a2.735,2.735,0,0,1,2.731,2.731v15.1A2.734,2.734,0,0,1,931.133,483.1Z" transform="translate(-788.519 -344.825)" fill="#3f3d56" />
                                <path d="M924.264,427.819h-110.9a2.521,2.521,0,0,1-2.562-2.3,2.428,2.428,0,0,1,2.424-2.558H925.431c2.437,2.141.952,4.856-1.167,4.856Z" transform="translate(-781.168 -341.776)" fill="#ccc" />
                                <path d="M924.264,441.633h-110.9a2.52,2.52,0,0,1-2.562-2.3,2.428,2.428,0,0,1,2.424-2.558H925.431C927.868,438.918,926.383,441.633,924.264,441.633Z" transform="translate(-781.168 -342.84)" fill="#ccc" />
                                <path d="M924.264,455.438h-110.9a2.52,2.52,0,0,1-2.562-2.3,2.428,2.428,0,0,1,2.424-2.558H925.431C927.868,452.723,926.383,455.438,924.264,455.438Z" transform="translate(-781.168 -343.904)" fill="#ccc" />
                                <path d="M866.117,469.251H813.362a2.52,2.52,0,0,1-2.562-2.3,2.428,2.428,0,0,1,2.424-2.558h54.059c2.437,2.141.952,4.856-1.167,4.856Z" transform="translate(-781.168 -344.968)" fill="#ccc" />
                                <path d="M866.117,483.057H813.362a2.521,2.521,0,0,1-2.562-2.3,2.428,2.428,0,0,1,2.424-2.558h54.059C869.721,480.342,868.236,483.057,866.117,483.057Z" transform="translate(-781.168 -346.031)" fill="#ccc" />
                                <path d="M910.531,359H829.31a4.62,4.62,0,0,1-4.615-4.615V339.615A4.62,4.62,0,0,1,829.31,335h81.221a4.62,4.62,0,0,1,4.615,4.615v14.767A4.62,4.62,0,0,1,910.531,359Z" transform="translate(-782.238 -335)" fill="#6c63ff" />
                            </g><path d="M583.878,721.846H232.228a.923.923,0,1,1,0-1.846h351.65a.923.923,0,0,1,0,1.846Z" transform="translate(375.695 87.823)" fill="#e6e6e6" />
                            <g transform="translate(815.864 170.695)">
                                <circle cx="5.969" cy="5.969" r="5.969" transform="translate(0 0)" fill="#f2f2f2" />
                                <circle cx="5.969" cy="5.969" r="5.969" transform="translate(0 23.788)" fill="#f2f2f2" />
                                <circle cx="5.969" cy="5.969" r="5.969" transform="translate(0 47.576)" fill="#f2f2f2" />
                                <circle cx="5.969" cy="5.969" r="5.969" transform="translate(0 71.364)" fill="#f2f2f2" />
                                <circle cx="5.969" cy="5.969" r="5.969" transform="translate(24.92 0)" fill="#f2f2f2" />
                                <circle cx="5.969" cy="5.969" r="5.969" transform="translate(24.92 23.788)" fill="#f2f2f2" />
                                <circle cx="5.969" cy="5.969" r="5.969" transform="translate(24.92 47.576)" fill="#f2f2f2" />
                                <circle cx="5.969" cy="5.969" r="5.969" transform="translate(24.92 71.364)" fill="#f2f2f2" />
                                <circle cx="5.969" cy="5.969" r="5.969" transform="translate(49.84 0)" fill="#f2f2f2" />
                                <circle cx="5.969" cy="5.969" r="5.969" transform="translate(49.84 23.788)" fill="#f2f2f2" />
                                <circle cx="5.969" cy="5.969" r="5.969" transform="translate(49.84 47.576)" fill="#f2f2f2" />
                                <circle cx="5.969" cy="5.969" r="5.969" transform="translate(49.84 71.364)" fill="#f2f2f2" />
                                <circle cx="5.969" cy="5.969" r="5.969" transform="translate(74.76 0)" fill="#f2f2f2" />
                                <circle cx="5.969" cy="5.969" r="5.969" transform="translate(74.76 23.788)" fill="#f2f2f2" />
                                <circle cx="5.969" cy="5.969" r="5.969" transform="translate(74.76 47.576)" fill="#f2f2f2" />
                                <circle cx="5.969" cy="5.969" r="5.969" transform="translate(74.76 71.364)" fill="#f2f2f2" />
                                <circle cx="5.969" cy="5.969" r="5.969" transform="translate(99.68 0)" fill="#f2f2f2" /><circle cx="5.969" cy="5.969" r="5.969" transform="translate(99.68 23.788)" fill="#f2f2f2" /><circle cx="5.969" cy="5.969" r="5.969" transform="translate(99.68 47.576)" fill="#f2f2f2" /><circle cx="5.969" cy="5.969" r="5.969" transform="translate(99.68 71.364)" fill="#f2f2f2" /><circle cx="5.969" cy="5.969" r="5.969" transform="translate(124.6 0)" fill="#f2f2f2" /><circle cx="5.969" cy="5.969" r="5.969" transform="translate(124.6 23.788)" fill="#f2f2f2" /><circle cx="5.969" cy="5.969" r="5.969" transform="translate(124.6 47.576)" fill="#f2f2f2" /><circle cx="5.969" cy="5.969" r="5.969" transform="translate(124.6 71.364)" fill="#f2f2f2" /></g><g transform="translate(1320.726 583.542)"><circle cx="5.969" cy="5.969" r="5.969" fill="#f2f2f2" /><circle cx="5.969" cy="5.969" r="5.969" transform="translate(0 23.788)" fill="#f2f2f2" /><circle cx="5.969" cy="5.969" r="5.969" transform="translate(0 47.576)" fill="#f2f2f2" /><circle cx="5.969" cy="5.969" r="5.969" transform="translate(24.92)" fill="#f2f2f2" /><circle cx="5.969" cy="5.969" r="5.969" transform="translate(24.92 23.788)" fill="#f2f2f2" /><circle cx="5.969" cy="5.969" r="5.969" transform="translate(24.92 47.576)" fill="#f2f2f2" /><circle cx="5.969" cy="5.969" r="5.969" transform="translate(49.84)" fill="#f2f2f2" /><circle cx="5.969" cy="5.969" r="5.969" transform="translate(49.84 23.788)" fill="#f2f2f2" /><circle cx="5.969" cy="5.969" r="5.969" transform="translate(49.84 47.576)" fill="#f2f2f2" /><circle cx="5.969" cy="5.969" r="5.969" transform="translate(74.76)" fill="#f2f2f2" /><circle cx="5.969" cy="5.969" r="5.969" transform="translate(74.76 23.788)" fill="#f2f2f2" /><circle cx="5.969" cy="5.969" r="5.969" transform="translate(74.76 47.576)" fill="#f2f2f2" /></g></g></svg>

                    <div className="container">

                        <div className="about-text">
                            <h6>About me</h6>
                            <h2>Think out of the box</h2>
                            <p className='about-long'>I’m David, a self-taught frontend engineer based in Bosnia and Herzegovina,
                                with several years of experience building web and mobile products for real users.
                                I’ve worked on everything from simple websites to complex applications using React, Next.js,
                                TypeScript, React Native, and recently expanded further into mobile development.


                                <br /> <br />
                                I’m currently building Eunoia, a personal growth and wellbeing app that brings together my interests in technology, psychology, and philosophy.
                                It’s a product-first project where I handle both engineering and UX decisions.
                                I care deeply about how products feel to use — tools are just tools, but great experiences are what last.
                            </p>
                            <p className='about-short'>
                                My name is David. I am a self-taught frontend developer living in Bosnia and Herzegovina.
                                Imagine this: bringing ideas to life and turning lines of code into visual perfection - that’s me. <br />  <br />
                                I work with HTML, SCSS, JavaScript, TypeScript, React, Next.js, React Native, Node.js, MongoDB - but to me, they’re just that: tools. What really matters is the experience we
                                create with them.
                            </p>

                            <div className='fun-facts'>
                                <div className='fact'>
                                    <h6>
                                        <span>+6</span>
                                        <br />
                                        of experience
                                    </h6>
                                </div>
                                <div className='fact'>
                                    <h6>
                                        <span>+50</span>
                                        <br />
                                        completed projects
                                    </h6>
                                </div>
                                <div className='fact'>
                                    <h6>
                                        <span>+200</span>
                                        <br />
                                        pizza eaten
                                    </h6>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>

                <section id="projects" className='projects'>
                    <div className='container container-wide'>

                        <div className='project-title'>
                            <span>Projects</span>
                            <h2>Projects showcase</h2>
                            <p>There have been a lot of interesting and challenging projects throughout my career over the past five years, but allow me to highlight a few that I'm particularly proud of.</p>
                        </div>

                        <div className='projects-row'>

                            <svg class="table-svg" viewBox="0 0 1110.152 618" role="img" artist="Katerina Limpitsouni" source="https://undraw.co/">
                                <g id="Group_305" dataName="Group 305" transform="translate(-638.497 -268.251) scale(1.2)">
                                    <path id="Path_5246-254" dataName="Path 5246" d="M990.425,462.251h-682a9.01,9.01,0,0,1-9-9v-266a9.01,9.01,0,0,1,9-9h682a9.01,9.01,0,0,1,9,9v266a9.01,9.01,0,0,1-9,9Zm-682-282a7.008,7.008,0,0,0-7,7v266a7.008,7.008,0,0,0,7,7h682a7.008,7.008,0,0,0,7-7v-266a7.008,7.008,0,0,0-7-7Z" transform="translate(360 90)" fill="#3f3d56" />
                                    <path id="Path_5247-255" dataName="Path 5247" d="M626.861,350.476H577.053c-3.115-27.707,3.758-48.359,0-59.769h49.808a311.81,311.81,0,0,0,0,59.769Z" transform="translate(360 90)" fill="#ff6584" />
                                    <path id="Path_5249-256" dataName="Path 5249" d="M929.861,405.476H880.053c-3.115-27.707,3.758-48.359,0-59.769h49.808a311.82,311.82,0,0,0,0,59.769Z" transform="translate(360 90)" fill="#6c63ff" />
                                    <path id="Path_5251-257" dataName="Path 5251" d="M410.634,453.04H360.826c1.868-22.982,7.889-44.442,0-59.769h49.808Q424.7,423.155,410.634,453.04Z" transform="translate(360 90)" fill="#e6e6e6" />
                                    <path id="Path_5252-258" dataName="Path 5252" d="M850.634,312.04H800.826c1.868-22.982,7.889-44.442,0-59.769h49.808Q864.7,282.155,850.634,312.04Z" transform="translate(360 90)" fill="#6c63ff" />
                                    <path id="Path_5253-259" dataName="Path 5253" d="M703.634,390.04H653.826c1.868-22.982,7.889-44.442,0-59.769h49.808Q717.7,360.155,703.634,390.04Z" transform="translate(360 90)" fill="#e6e6e6" />
                                    <path id="Path_5254-260" dataName="Path 5254" d="M421.549,325.125h49.808c3.115-22.986-3.758-44.445,0-59.769H421.549Q407.482,295.241,421.549,325.125Z" transform="translate(360 90)" fill="#6c63ff" />
                                    <path id="Path_5255-261" dataName="Path 5255" d="M455.425,215.251h-93a2,2,0,0,1,0-4h93a2,2,0,0,1,0,4Z" transform="translate(360 90)" fill="#3f3d56" />
                                    <path id="Path_5256-262" dataName="Path 5256" d="M696.425,215.251h-93a2,2,0,0,1,0-4h93a2,2,0,0,1,0,4Z" transform="translate(360 90)" fill="#3f3d56" />
                                    <path id="Path_5257-263" dataName="Path 5257" d="M937.425,215.251h-93a2,2,0,0,1,0-4h93a2,2,0,0,1,0,4Z" transform="translate(360 90)" fill="#3f3d56" />
                                    <rect id="Rectangle_1038" dataName="Rectangle 1038" width="2" height="282" transform="translate(888.426 269.25)" fill="#3f3d56" />
                                    <rect id="Rectangle_1039" dataName="Rectangle 1039" width="2" height="282" transform="translate(1129.426 269.25)" fill="#3f3d56" />
                                    <path id="Path_5275-264" dataName="Path 5275" d="M897.549,498.125h49.808c3.115-22.986-3.758-44.445,0-59.769H897.549Q883.482,468.241,897.549,498.125Z" transform="translate(90.072 90)" fill="#3f3d56" />
                                </g>

                                {projectsData.map((p) => (
                                    <foreignObject
                                        key={p.id}
                                        x={p.x}
                                        y={p.y}
                                        width={p.width}
                                        height={p.height}
                                        onClick={() => handleClick(p)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <div
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            className={`sticky-note ${p.uniqueClass}`}
                                        >
                                            <h3>{p.title}</h3>
                                            <p>{p.description}</p>
                                        </div>
                                    </foreignObject>
                                ))}
                            </svg>

                            <div className='mobile-projects-list'>
                                {projectsData.map((p) => (

                                    <div
                                        key={p.id}
                                        onClick={() => handleClick(p)}
                                        className={`sticky-note ${p.uniqueClass}`}
                                    >
                                        <h3>{p.title}</h3>
                                        <p>{p.description}</p>
                                    </div>

                                ))}
                            </div>
                        </div>
                    </div>


                    <div className="square square-4 float-y"></div>
                    <div className="circle circle-4"></div>
                    <div className="triangle triangle-3 spin">
                        <div className="empty"></div>
                    </div>

                </section >

            </div >

            <section id="contact" className='contact'>
                <div className='contact-content'>
                    <h2>Let's work together.</h2>
                    <p>Let's work together to build something great.</p>
                    <div className='contact-info'>
                        <a href="mailto:d.rakicbusiness@gmail.com">Email</a>
                        <a href="https://www.linkedin.com/in/david-rakic" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home

