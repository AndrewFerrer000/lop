<template>
    <div class=" table-responsive py-5">
        <table class="c-table table">
            <slot name="table-head"></slot>
            <slot name="table-body"></slot>
        </table>
    </div>
</template>

<style>
.table-responsive {
    border: unset;
}

.c-table {
    width: 100%;
}

.c-table tr {
    background-color: #f3f3f3;
    border: 1px solid #95a5a6;
}

.c-table tr th {
    padding: 10px 20px;
}

.c-table tr td {
    padding: 10px 20px;
}

.c-table tr td img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
}

.c-table tr {
    font-family: 'Lato', sans-serif;
    font-size: 14px;
}

.c-table tr th {
    text-transform: capitalize;
}
</style>