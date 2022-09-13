<template>
    <div class="block-content">
        <div class="title-section">
            <h1>
                <span>
                    <a href="#" class="text-primary">2022 WSOP Online</a>
                    <div class="row">
                        <div class="col-sm-8">
                            <select class="form-control">
                                <option>Event #2: $500 NLH Monster Stack</option>
                                <option>Event #3: $3,200 NLH High Roller</option>
                                <option>Event #4: $1,000 PLO 6-Max</option>
                                <option>Event #5: $500 NLH Turbo Deepstack</option>
                                <option>Event #6: $800 NLH Ultra Deepstack</option>
                            </select>
                        </div>
                        <div class="col-sm-4">
                            <select class="form-control">
                                <option>Day 1</option>
                                <option>Day 2A</option>
                                <option>Day 2B</option>
                                <option>Day 3</option>
                                <option>Day 4</option>
                                <option>Day 5</option>
                            </select>
                        </div>
                    </div>
                </span>
            </h1>
        </div>
        <BlogTabs></BlogTabs>
    </div>
</template>

<script setup>
import BlogTabs from '@/components/tab/BlogTabs'
</script>

<style scoped>

.row { 
    margin-top: 20px;
}
</style>