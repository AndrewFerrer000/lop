<template>
    <table class="c-table">
        <slot name="table-head"></slot>
        <slot name="table-body"></slot>
    </table>
</template>

<style>
.c-table {
    width: 100%;
}

.c-table tr {
    background-color: #f3f3f3;
    border: 1px solid #95a5a6;
}

.c-table tr th,
.c-table tr td {
    padding: 20px 20px;
}
</style>