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

                            <li class="drop"><a class="home" href="#">News & info <i class="fa fa-chevron-down" aria-hidden="true"></i></a>

                                <ul class="dropdown">
                                    <li><a href="#">Live poker rooms</a></li>
                                    <li><a href="#">Online poker rooms</a></li>
                                    <li><a href="#">Poker tours</a></li>
                                    <li><a href="#">Podcasts</a></li>
                                    <li><a href="#">Videos</a></li>
                                    <li><a href="#">Promotions</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </li>

                            <li><router-link :to="{name: 'live-reporting'}">Live reporting</router-link></li>

                            <li><a class="travel" href="#">Event calendar</a></li>

                            <li><a class="tech" href="#">Rankings & Leaderboards</a></li>

                            <li><a class="fashion" href="#">Packages</a></li>

                            <li><a class="video" href="#">Store</a></li>

                            <li><a class="sport" href="#">Contact</a></li>

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

<style scoped>
header.second-style .logo-advertisement {
    background-color: #2D3436 !important;
}

header.second-style .nav-list-container {
    background: #2D3436 !important;
}

.navbar-nav>li>a::before {
    display: none;
}

header.second-style .navbar-nav>li>a:after {
    display: none;
}

header.second-style .navbar-nav > li > a.router-link-active,
header.second-style .navbar-nav > li > a.router-link-exact-active {
    background-color: #f44336 !important;
}

.navbar-nav > li > a {
    padding: 20px 12px;
}
</style>