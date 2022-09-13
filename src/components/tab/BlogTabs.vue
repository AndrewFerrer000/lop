<template>
    <div class="sidebar">
        <div class="widget tab-posts-widget">
            <ul class="nav nav-tabs">
                <li class="active">
                    <a href="#live" data-toggle="tab">Live Events</a>
                </li>
                <li>
                    <a href="#chipcounts" data-toggle="tab">Chip Counts</a>
                </li>
                <li>
                    <a href="#gallery" data-toggle="tab">Gallery</a>
                </li>
                <li>
                    <a href="#videos" data-toggle="tab">Videos</a>
                </li>
                <li>
                    <a href="#payouts" data-toggle="tab">Payouts</a>
                </li>
                <li>
                    <a href="#whatsapp" data-toggle="tab">Whatsapp</a>
                </li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane active" id="live">
                    <div>
                        <div class="single-post-box news-post article-post">
                            <div class="title-post">
                                <h1><a class="text-primary" href="#">Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. </a></h1>
                                <ul class="post-tags">
                                    <li><i class="fa fa-clock-o"></i>27 may 2013 &nbsp;<i class="fa fa-user"></i>by <a href="#">John Doe</a></li>
                                    <li></li>
                                </ul>
                            </div>
                            <div class="share-post-box">
                                <ul class="share-box">
                                    <li><i class="fa fa-share-alt"></i><span>Share Post</span></li>
                                    <li><a class="facebook" href="#"><i class="fa fa-facebook"></i><span>Facebook</span></a></li>
                                    <li><a class="twitter" href="#"><i class="fa fa-twitter"></i><span>Twitter</span></a></li>
                                    <li><a class="facebook" href="#"><i class="fa fa-facebook"></i><span>Whatsapp</span></a></li>
                                </ul>
                            </div>
                            <div class="post-gallery">
                                <img src="@/assets/images/blog-image1.png" alt="">
                                <span class="image-caption">Cras eget sem nec dui volutpat ultrices.</span>
                            </div>

                            <div class="post-content">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. <a href="#">Vestibulum volutpat</a>, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
                                <p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.</p>
                                <p>Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. Integer adipiscing risus a sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, faucibus non, congue vel, arcu. Ut scelerisque hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida tristique. Nunc iaculis mi in ante. Vivamus imperdiet nibh feugiat est.</p>
                            </div>
                        </div>

                        <div class="level-notice forum-table single-topic">
                            <div class="table-title">
                                <h2>Level: 26 Blinds: 10,000/20,000 Ante: 2,000.</h2>
                            </div>
                        </div>

                        <div class="single-post-box news-post article-post">
                            <div class="title-post">
                                <h1><a href="#" class="text-primary">Taking a break</a></h1>
                                <ul class="post-tags">
                                    <li><i class="fa fa-clock-o"></i>27 may 2013 &nbsp;<i class="fa fa-user"></i>by <a href="#">John Doe</a></li>
                                    <li></li>
                                </ul>
                            </div>
                            <div class="share-post-box">
                                <ul class="share-box">
                                    <li><i class="fa fa-share-alt"></i><span>Share Post</span></li>
                                    <li><a class="facebook" href="#"><i class="fa fa-facebook"></i><span>Facebook</span></a></li>
                                    <li><a class="twitter" href="#"><i class="fa fa-twitter"></i><span>Twitter</span></a></li>
                                    <li><a class="facebook" href="#"><i class="fa fa-twitter"></i><span>Whatsapp</span></a></li>
                                </ul>
                            </div>
                            <div class="post-content">
                                <p>The remaining 102 players is taking a 5 minutes break.</p>
                            </div>
                            <CustomeTable>
                                <template v-slot:table-head>
                                    <tr class="text-primary">
                                        <th>player</th>
                                        <th class="text-center hide-on-mobile">flag</th>
                                        <th class="text-right">total chips</th>
                                        <th class="text-right">chip progress</th>
                                    </tr>
                                </template>
                                <template v-slot:table-body>
                                    <tr>
                                        <td>
                                            <img src="@/assets/images/person3.jpg" ><a class="text-primary" href="#">Andrew ”KittyXoXo” Gonder</a>
                                        </td>
                                        <td class="text-center hide-on-mobile">us-flag</td>
                                        <td class="text-right">4,814,321</td>
                                        <td class="text-right">2,040,123 <i class="text-green fa fa-caret-up" aria-hidden="true"></i></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="@/assets/images/person4.jpg" ><a class="text-primary" href="#">Andrew ”KittyXoXo” Gonder</a>
                                        </td>
                                        <td class="text-center hide-on-mobile">uk-flag</td>
                                        <td class="text-right">4,814,321</td>
                                        <td class="text-right">2,040,123 <i class="text-red fa fa-caret-down" aria-hidden="true"></i></td>
                                    </tr>
                                </template>
                            </CustomeTable>
                        </div>

                        <div class="level-notice forum-table single-topic">
                            <div class="table-title">
                                <h2>Day 1 started: $1,110 MAIN EVENT</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tab-pane" id="chipcounts">
                    <div class="single-post-box">
                        <CustomeTable>
                            <template v-slot:table-head>
                                <tr class="text-primary">
                                    <th class="text-center">rank</th>
                                    <th>player</th>
                                    <th class="text-center hide-on-mobile">country</th>
                                    <th class="text-right">total chips</th>
                                    <th class="text-right hide-on-mobile">chips progress</th>
                                </tr>
                            </template>
                            <template v-slot:table-body>
                                <tr>
                                    <td class="text-center">1</td>
                                    <td>Andrew ”KittyXoXo” Gonder</td>
                                    <td class="text-center hide-on-mobile"><i class="flag flag-poland"></i></td>
                                    <td class="text-right">4,814,321</td>
                                    <td class="text-right hide-on-mobile">2,040,123 <i class="text-green fa fa-caret-up" aria-hidden="true"></i></td>
                                </tr>
                                <tr>
                                    <td class="text-center">2</td>
                                    <td>Andrew ”KittyXoXo” Gonder</td>
                                    <td class="text-center hide-on-mobile">uk-flag</td>
                                    <td class="text-right">4,814,321</td>
                                    <td class="text-right hide-on-mobile">- 2,040,123 <i class="text-red fa fa-caret-down" aria-hidden="true"></i></td>
                                </tr>
                            </template>
                        </CustomeTable>
                    </div>
                </div>

                <div class="tab-pane" id="gallery">
                    <div class="single-post-box image-gallery">
                        <img v-for="index in indexes = 20" :key="index" class="galleryImage" src="@/assets/images/person1.jpg">
                    </div>
                </div>

                <div class="tab-pane" id="videos">
                    <div class="single-post-box  news-post article-post">
                        <div class="news-post article-post">
                            <div v-for="index in indexes = 15" :key="index" class="news-post video-post">
                                <img alt="" src="@/assets/upload/news-posts/video1.jpg">
                                <a href="https://www.youtube.com/watch?v=LL59es7iy8Q" class="video-link"><i class="fa fa-play-circle" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tab-pane" id="payouts">
                    <div class="single-post-box">
                        <CustomeTable>
                            <template v-slot:table-head>
                                <tr class="text-primary">
                                    <th class="text-center">place</th>
                                    <th>winner</th>
                                    <th class="text-right">prize</th>
                                </tr>
                            </template>
                            <template v-slot:table-body>
                                <tr>
                                    <td class="text-center">1</td>
                                    <td>Andrew ”KittyXoXo” Gonder</td>
                                    <td class="text-right">$64,590</td>
                                </tr>
                                <tr>
                                    <td class="text-center">2</td>
                                    <td>Andrew ”KittyXoXo” Gonder</td>
                                    <td class="text-right">$64,590</td>
                                </tr>
                                <tr v-for="index in indexs = 8" :key="index">
                                    <td class="text-center">{{index + 2}}</td>
                                    <td></td>
                                    <td class="text-right">$1,000</td>
                                </tr>
                            </template>
                        </CustomeTable>
                    </div>
                </div>

                <div class="tab-pane" id="whatsapp">
                    <p>WHATSAPP</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import CustomeTable from '@/components/CustomeTable.vue'
</script>

<style scoped>
ul.share-box {
    display: flex;
    gap: 5px;
    align-items: center;
    flex-wrap: wrap;
}

.sidebar .tab-posts-widget ul.nav-tabs {
    display: flex;
    align-items: center;
    overflow-x: auto;
}

.sidebar .tab-posts-widget ul.nav-tabs li {
    padding-left: 1px;
}

@media (max-width: 500px) {
    .sidebar .tab-posts-widget ul.nav-tabs li a{
        text-overflow:ellipsis;
        width: 100px;
    }
}

.single-post-box {
    margin-bottom: unset;
}

.sidebar .tab-posts-widget .tab-pane {
    padding-bottom: unset;
}

.tab-pane .active {
    padding-top: unset;
}

.sidebar {
    padding-bottom: unset;
}

.article-post {
    margin-bottom: unset;
}

.image-gallery {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    flex-wrap: wrap;
    column-gap: 10px;
    row-gap: 10px;
}

.image-gallery img {
    width: 100%;
}

@media (max-width: 768px) {
    .image-gallery {
        grid-template-columns: repeat(3, 1fr);
    }
}

.news-post .article-post {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    flex-wrap: wrap;
    column-gap: 10px;
}

@media (max-width: 768px) {
    .news-post .article-post {
        grid-template-columns: repeat(3, 1fr);
    }
}

.video-post img {
    width: 100%;
}

.video-post .video-link {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #f44336;
}

.post-gallery {
    padding: 0px 20px;
}

.single-post-box{
    margin: 20px 0px 20px 0px;
}
.level-notice {
    text-align: center;
}

.subevent{
    margin: 0px 15px 15px 15px;
    box-shadow: 0px 0px 1px black;
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
    color: #f44336;
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