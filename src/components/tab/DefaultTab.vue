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
                    <div class="forum-box">
                        <div class="forum-table single-topic">
                            <div class="table-title">
                                <div class="news-post">
                                    <div class="row">
                                        <div class="col-sm-5">
                                            <div class="post-gallery">
                                                <img alt="" src="@/assets/images/Event-1.jpg">
                                            </div>
                                        </div>
                                        <div class="col-sm-7">
                                            <div class="post-content">
                                                <h2>MARRAKECH POKER OPEN
                                                </h2>
                                                <h4>2022 Marrakech Poker Open</h4>
                                                <ul class="post-tags">
                                                    <li>LIVE COVERAGE :</li>
                                                    <li><i class="fa fa-clock-o"></i>September 08-11, 2022</li>
                                                    <li>-</li>
                                                    <li><i class="fa fa-map-marker"></i>Casino de Marrakech, Marrakech, Morocco</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="table-row">
                                <div class="forum-post comment-post">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label for="name">Name*</label>
                                            <input id="name" name="name" type="text">
                                        </div>
                                        <div class="col-md-4">
                                            <label for="mail">E-mail*</label>
                                            <input id="mail" name="mail" type="text">
                                        </div>
                                        <div class="col-md-4">
                                            <label for="website">Website</label>
                                            <input id="website" name="website" type="text">
                                        </div>
                                    </div>
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
.post-content {
    color: white;
}
</style>