<template>
    <header class="clearfix second-style">
        <!-- Bootstrap navbar -->
        <nav class="navbar navbar-default navbar-static-top" role="navigation">
            <!-- Logo & advertisement -->
            <div class="logo-advertisement">
                <div class="container">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="row">
                        <div class="col-sm-4">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <router-link class="navbar-brand" :to="{name: 'home'}"><img id="logo" src="@/assets/images/lop_logo_small.png"
                                    alt=""></router-link>
                        </div>
                        <div class="col-sm-4 hide-on-tablet navbar-brand" style="text-align: center;">
                            <h4 style=" color: white ;font-style: italic;">
                                “BRINGING THE ACTION TO
                                YOUR DOORSTEP”
                            </h4>
                        </div>
                        <div class="col-sm-4 navbar-brand">
                            <h5 style="color: white; text-align: right;"><i class="fa fa-search" aria-hidden="true"></i>
                                | ENG <i class="fa fa-chevron-down" aria-hidden="true"></i></h5>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Logo & advertisement -->

            <!-- navbar list container -->
            <div class="nav-list-container">
                <div class="container">
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-left">

                            <li class="drop"><a class="home" href="index.html">News & info</a>

                                <ul class="dropdown">
                                    <li><a href="index.html">Live poker rooms</a></li>
                                    <li><a href="home2.html">Online poker rooms</a></li>
                                    <li><a href="home3.html">Poker tours</a></li>
                                    <li><a href="home4.html">Podcasts</a></li>
                                    <li><a href="home5.html">Videos</a></li>
                                    <li><a href="home6.html">Promotions</a></li>
                                    <li><a href="home6.html">Contact</a></li>
                                </ul>
                            </li>

                            <li><router-link :to="{name: 'live-reporting'}">Live reporting</router-link></li>

                            <li><a class="travel" href="news-category3.html">Event calendar</a></li>

                            <li><a class="tech" href="news-category2.html">Rankings & Leaderboards</a></li>

                            <li><a class="fashion" href="news-category6.html">Packages</a></li>

                            <li><a class="video" href="video.html">Store</a></li>

                            <li><a class="sport" href="news-category5.html">Contact</a></li>

                        </ul>
                    </div>
                    <!-- /.navbar-collapse -->
                </div>
            </div>
            <!-- End navbar list container -->

        </nav>
        <!-- End Bootstrap navbar -->
    </header>
</template>