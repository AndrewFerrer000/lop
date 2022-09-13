<template>
    <div class="block-content">
        <!-- forum box -->
        <div class="forum-box">
            <div class="title-section">
                <h1><span>Live reporting</span></h1>
            </div>
        </div>

        <EventTabs></EventTabs>
        <!-- End forum box -->
    </div>
</template>

<script setup>
import EventTabs from '@/components/tab/EventTabs';
</script>

<style scoped>
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
</style>