<template>
    <div class="sidebar">
        <div class="widget tab-posts-widget">
            <ul class="nav nav-tabs" id="myTab">
                <slot name="tab-links">
                    <!-- DEFAULT TAB LINKS-->
                    <li class="active">
                        <a href="#live" data-toggle="tab">Live Events</a>
                    </li>
                    <li>
                        <a href="#past" data-toggle="tab">Past Events</a>
                    </li>
                    <li>
                        <a href="#upcoming" data-toggle="tab">Upcoming Events</a>
                    </li>
                </slot>
            </ul>
            <div class="tab-content">
                <div class="tab-pane active" id="live">
                    <!-- LIVE EVENT DESIGN -->
                    <div class="news-post article-post">
                        <div class="row post-header">
                            <div class="col-sm-4">
                                <div class="post-gallery">
                                    <img id="mainEventImage" width="370px" height="auto"  alt="" src="@/assets/images/upcoming-event1.png">
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <div class="post-content">
                                    <h2>WORLD SERIES OF POKER</h2>
                                    <h2>2022 WSOP Online</h2>
                                    <ul class="post-tags">
                                        <li class="finished event-status"><i class="fa fa-circle finished event-status"></i>LIVE COVERGAGE:</li>
                                        <li><i class="fa fa-clock-o"></i>September 10 - October 18, 2022</li>
                                        <li><i class="fa fa-link"></i><a href="https://www.wsop.com" target="_blank">WSOP.com</a></li>
                                        <li><i class="fa fa-map-marker"></i>Nevada and New Jersey</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- LIVE SUBEVENT -->
                        <div class="row subevent live-now">
                            <div class="col-md-2 post-content">
                                <p class="finished event-status">LIVE NOW</p>
                                <p><router-link :to="{name: 'blog-reports'}">Event #1: $400 NLH Kick-Off</router-link></p>
                                <ul class="post-tags">
                                    <li><i class="fa fa-clock-o"></i>September 10 - October 18, 2022</li>
                                </ul>
                                
                            </div>
                            <div class="col-md-4 post-content">
                                <p><a href="#">LATEST UPDATES</a></p>
                                <p><i class="fa fa-angle-right" aria-hidden="true"></i> Ori "try2trick" Hasson Wins WSOP Gold in WSOP.com (NV/NJ) Online Bracelet In Event #1: $400 NLH Kick-Off</p>
                                <p><i class="fa fa-angle-right" aria-hidden="true"></i> Gary "SaquonNYG26" Belyalovsky Eliminated In 2nd Place ($36,230)</p>
                            </div>
                            <div class="col-md-3 post-content">
                                <div class="news-post image-post2">
                                    <div class="post-gallery">
                                        <p>WINNER <i class="fa fa-trophy" aria-hidden="true"></i></p>
                                        <p><a href="#">Ori "try2trick" Hasson</a></p>
                                        <img src="upload/news-posts/slide2a.jpg" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 post-content">
                                <p>PRIZE MONEY <i class="fa fa-money" aria-hidden="true"></i></p>
                                <p>$58,491</p>
                                <p>WINNING HAND</p>
                                <p>(10S)(10D)</p>
                            </div>
                        </div>

                        <!-- SOON SUBEVENTS-->
                        <div id="soonSubevent">
                            <div class="row subevent">
                                <div class="col-md-8 post-content">
                                    <p>Event #1: $400 NLH Kick-Off</p>
                                </div>
                                <div class="col-md-4 post-content">
                                    <p><i class="fa fa-clock-o"></i> September 13, 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="past">
                    <!-- FINISHED EVENT DESIGN-->
                    <div class="news-post article-post">
                        <div class="row post-header">
                            <div class="col-sm-4">
                                <div class="post-gallery">
                                    <img id="mainEventImage" width="370px" height="auto"  alt="" src="@/assets/images/upcoming-event2.png">
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <div class="post-content">
                                    <h2>MARRAKECH POKER OPEN</h2>
                                    <h2>2022 Marrakech Poker Open</h2>
                                    <ul class="post-tags">
                                        <li class="finished event-status"><i class="fa fa-check finished event-status"></i>FINISHED:</li>
                                        <li><i class="fa fa-clock-o"></i>September 08-11, 2022</li>
                                        <li><i class="fa fa-map-marker"></i>Casino de Marrakech, Marrakech, Morocco</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- LIVE SUBEVENT -->
                        <div class="row subevent">
                            <div class="col-md-2 post-content">
                                <p><a href="#">$5,300 MPP MAIN EVENT</a></p>
                                <ul class="post-tags">
                                    <li><i class="fa fa-clock-o"></i>September 10 - October 18, 2022</li>
                                </ul>
                                
                            </div>
                            <div class="col-md-4 post-content">
                                <p><a href="#">LAST UPDATE</a></p>
                                <!-- <img src="@/assets/images/Event-2.jpg" alt=""> -->
                                <p><i class="fa fa-angle-right" aria-hidden="true"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, iste.</p>
                            </div>
                            <div class="col-md-3 post-content">
                                <div class="news-post image-post2">
                                    <div class="post-gallery">
                                        <p>WINNER <i class="fa fa-trophy" aria-hidden="true"></i></p>
                                        <h4><a href="#">Ori "try2trick" Hasson</a></h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 post-content">
                                <p>PRIZE MONEY <i class="fa fa-money" aria-hidden="true"></i></p>
                                <p>$58,491</p>
                                <p>WINNING HAND</p>
                                <p>(10S)(10D)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="upcoming">
                    <!-- LIVE EVENT DESIGN -->
                    <div class="news-post article-post">
                        <div class="row post-header">
                            <div class="col-sm-4">
                                <div class="post-gallery">
                                    <img id="mainEventImage" width="370px" height="auto"  alt="" src="@/assets/images/upcoming-event4.png">
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <div class="post-content">
                                    <h2>RUNGOOD POKER SERIES (RGPS)</h2>
                                    <h2>2022 RGPS Bay Area</h2>
                                    <ul class="post-tags">
                                        <li><i class="fa fa-clock-o"></i>September 16-18, 2022</li>
                                        <li><i class="fa fa-map-marker"></i>Graton Casino, Bay Area California</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- SOON SUBEVENTS-->
                        <div id="soonSubevent">
                            <div class="row subevent">
                                <div class="col-md-8 post-content">
                                    <p>Event #1: $400 NLH Kick-Off</p>
                                </div>
                                <div class="col-md-4 post-content">
                                    <p><i class="fa fa-clock-o"></i> September 13, 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="news-post article-post">
                        <div class="row post-header">
                            <div class="col-sm-4">
                                <div class="post-gallery">
                                    <img id="mainEventImage" width="370px" height="auto"  alt="" src="@/assets/images/upcoming-event3.png">
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <div class="post-content">
                                    <h2>WINAMAX</h2>
                                    <h2>2022 Winamax Poker Open Bratislava</h2>
                                    <ul class="post-tags">
                                        <li><i class="fa fa-clock-o"></i>September 26 - October 02, 2022</li>
                                        <li><i class="fa fa-map-marker"></i>Crowne Plaza Bratislava</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- SOON SUBEVENTS-->
                        <div id="soonSubevent">
                            <div class="row subevent">
                                <div class="col-md-8 post-content">
                                    <p>Event #1: $400 NLH Kick-Off</p>
                                </div>
                                <div class="col-md-4 post-content">
                                    <p><i class="fa fa-clock-o"></i> September 13, 2022</p>
                                </div>
                            </div>
                        </div>
                        <div id="soonSubevent">
                            <div class="row subevent">
                                <div class="col-md-8 post-content">
                                    <p>Event #1: $400 NLH Kick-Off</p>
                                </div>
                                <div class="col-md-4 post-content">
                                    <p><i class="fa fa-clock-o"></i> September 13, 2022</p>
                                </div>
                            </div>
                        </div>
                        <div id="soonSubevent">
                            <div class="row subevent">
                                <div class="col-md-8 post-content">
                                    <p>Event #1: $400 NLH Kick-Off</p>
                                </div>
                                <div class="col-md-4 post-content">
                                    <p><i class="fa fa-clock-o"></i> September 13, 2022</p>
                                </div>
                            </div>
                        </div>
                        <div id="soonSubevent">
                            <div class="row subevent">
                                <div class="col-md-8 post-content">
                                    <p>Event #1: $400 NLH Kick-Off</p>
                                </div>
                                <div class="col-md-4 post-content">
                                    <p><i class="fa fa-clock-o"></i> September 13, 2022</p>
                                </div>
                            </div>
                        </div>
                        <div id="soonSubevent">
                            <div class="row subevent">
                                <div class="col-md-8 post-content">
                                    <p>Event #1: $400 NLH Kick-Off</p>
                                </div>
                                <div class="col-md-4 post-content">
                                    <p><i class="fa fa-clock-o"></i> September 13, 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.subevent{
    margin: 0px 15px 15px 15px;
    border: 1px solid #d8d8d8;
}

.subevent.live-now {
    border: 1px solid #2ecc71 !important;
}

.post-header {
    background: #2D3436;
    padding-top: 15px;
    margin: 0px 15px 15px 15px;
}

.post-header h2 {
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.post-content {
    color: white;
}

.event-status {
    font-weight: 800;
    font-style: normal;
}

.live {
    color: #e74c3c;
}   

.finished {
    color: #2ecc71;
}

.post-tags {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.sidebar {
    padding-top: unset;
}
</style>