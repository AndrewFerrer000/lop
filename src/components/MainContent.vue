<template>
    <section class="block-wrapper">
        <div class="container">
            <div class="row">
                <!-- MAIN -->
                <div class="col-sm-8">
                    <router-view></router-view>
                </div>
                <!-- END OF MAIN -->

                <!-- SIDE BAR -->
                <div class="col-sm-4">
                    <SideContent />
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
import SideContent from '@/components/SideContent.vue'
</script>