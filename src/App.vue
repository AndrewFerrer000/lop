<template>
    <div id="container">
        <HeaderContent />
        <!-- <Highlight /> -->
        <MainContent />
        <FooterContent />
    </div>
</template>

<script setup>
import HeaderContent from '@/components/HeaderContent.vue'
// import Highlight from '@/components/Highlight.vue'
import MainContent from '@/components/MainContent.vue'
import FooterContent from '@/components/FooterContent.vue'
</script>

<style>
div.block-content {
    padding: 30px 0 0 0;
}

.bold {
    font-weight: bold;
}

.text-right {
    text-align: right;
}

.text-center {
    text-align: center;
}

.text-primary {
    color: #e74c3c !important;
}

.text-green {
    color: #2ecc71;   
}

.text-red {
    color: #c0392b;
}

.bg-primary {
    background-color: #2D3436 !important;
}

li {
    list-style: none;
}

.testimonial-img {
    background-position: center;
    background-size: cover;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    margin: 0 auto;
}

.highlight-img {
    width: 100px;
    height: 87px
}

.play-btn {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
}

.link-header {
    color: #e74c3c !important;
}

#logo {
    width: 165px;
    height: 80px;
}

.padding-0 {
    padding: 0 !important;
}

header.second-style .logo-advertisement {
    background-color: #2D3436 !important;
}

header.second-style .nav-list-container {
    background: #2D3436 !important;
}

.navbar-nav>li>a::before {
    display: none;
}

header.second-style .navbar-nav>li:first-child>a::after {
    display: block;
}

header.second-style .navbar-nav>li>a:after {
    display: none;
}

.grid-box .news-post,
.grid-box ul.list-posts {
    margin-bottom: 0px;
}

.list-line-posts {
    background-color: transparent;
}

.image-post-slider .bx-wrapper .bx-prev,
.image-post-slider .bx-wrapper .bx-next {
    display: none;
}

.bx-wrapper .bx-viewport {
    background-color: transparent;
}

.bx-wrapper .bx-pager.bx-default-pager a {
    width: 10px;
    height: 10px;
    border-color: #2D3436;
}

ul.list-posts>li img {
    margin: 0;
}

.bx-wrapper .bx-pager.bx-default-pager a:hover,
.bx-wrapper .bx-pager.bx-default-pager a.active {
    border-color: #e74c3c;
    background: #e74c3c;
}

.footer-links a {
    color: white;
}

footer .footer-widgets-part {
    padding-bottom: 0px;
}

ul.list-posts>li {
    padding: 0;
    margin: 0;
}

.instagram {
    background: #f09433;
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    background: -webkit-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f09433', endColorstr='#bc1888', GradientType=1);
}

.twitter {
    background-color: #3498db;
}

.facebook {
    background-color: #2980b9;
}

button.social-btn {
    border: none;
    width: 100px;
    height: 30px;
    color: white;
    font-size: 15px;
}

.standard-post2 .post-title {
    background-color: white;
}

@media (max-width: 768px) {

    .tagline,
    .hide-on-mobile {
        display: none;
    }

    .highlight {
        transform: scale(0.9);
    }

    .hide-on-tablet {
        display: none;
    }
}

@media (max-width: 992px) {
    .hide-on-tablet {
        display: none;
    }

    .unset-padding-bottom {
        padding-bottom: unset;
    }
}

@media (min-width: 992px) {
    .hide-on-desktop {
        display: none;
    }

    .unset-padding-right {
        padding-right: unset;
    }
}

.min-h {
    min-height: 117px;
}

/* .unset-margin-right {
    margin-right: 0px;
} */
</style>
