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
                        <a href="#upcoming" data-toggle="tab">Upcoming Events</a>
                    </li>
                    <li>
                        <a href="#past" data-toggle="tab">Past Events</a>
                    </li>
                </slot>
            </ul>
            <div class="tab-content">
                <div class="tab-pane active" id="live">
                    <div class="news-post article-post">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="post-gallery">
                                    <img id="mainEventImage" width="370px" height="auto"  alt="" src="@/assets/images/Event-1.jpg">
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <div class="post-content">
                                    <h2>WORLD SERIES OF POKER</h2>
                                    <h2>2022 WSOP Online</h2>
                                    <ul class="post-tags">
                                        <li class="live event-status"><i class="fa fa-circle live event-status"></i>LIVE COVERGAGE:</li>
                                        <li><i class="fa fa-clock-o"></i>September 10 - October 18, 2022</li>
                                        <li><i class="fa fa-link"></i><a href="https://www.wsop.com" target="_blank">WSOP.com</a></li>
                                        <li><i class="fa fa-map-marker"></i>Nevada and New Jersey</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-3 post-content">
                                <p>Event #1: $400 NLH Kick-Off</p>
                                <ul class="post-tags">
                                    <li><i class="fa fa-clock-o"></i>September 10 - October 18, 2022</li>
                                </ul>
                            </div>
                            <div class="col-md-5">
                                <p>LATEST UPDATES ABOUT EVENTS</p>
                            </div>
                            <div class="col-md-2">
                                <p>WINNER</p>
                            </div>
                            <div class="col-md-2">
                                <p>PRIZE AND WINNING HAND</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.row {
    padding: 0px 20px;
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
</style>