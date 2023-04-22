<script setup>
const genre_list = ref([
    'genre1',
    'genre2',
    'genre3',
    'genre4',
    'genre5',
    'genre6',
    'genre7',
])
const price_range = ref([0, 1000])
watch(
    price_range,
    (newValue, oldValue) => {
        if (newValue[0] > newValue[1])
            price_range[0].value = oldValue[1]
    },
    {
        deep: true,
    },
)
</script>

<template>
    <div class="sidebar">
        <div class="filter">
            <div class="filter-title">
                <h2 id="title">
                    Filter
                </h2>
            </div>
            <div class="filter-content">
                <div class="filter-item">
                    <h3>Price</h3>
                    <div class="filter-item-content">
                        <div class="filter-item-content-item">
                            <n-slider
                                v-model:value="price_range"
                                range
                                :step="1"
                                :min="0"
                                :max="1000"
                            />
                        </div>
                    </div>
                    <h4>Genre</h4>
                    <div class="filter-item-content">
                        <!-- <div v-for="genre in genre_list" :key="genre" class="filter-item-content-item">
                            <input
                                :id="genre"
                                type="checkbox"
                                :name="genre"
                                :value="genre"
                            >
                            <label :for="genre">{{ genre }}</label>
                        </div> -->
                        <div
                            v-for="genre in genre_list"
                            :key="genre"
                            class="checkbox-wrapper-30"
                        >
                            <span class="checkbox">
                                <input
                                    :id="genre"
                                    type="checkbox"
                                    :name="genre"
                                    :value="genre"
                                >
                                <svg>
                                    <use
                                        xlink:href="#checkbox-30"
                                        class="checkbox"
                                    />
                                </svg>
                            </span>
                            <label :for="genre">{{ genre }}</label>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                style="display: none"
                            >
                                <symbol id="checkbox-30" viewBox="0 0 22 22">
                                    <path
                                        fill="none"
                                        stroke="#3db4f2"
                                        d="M5.5,11.3L9,14.8L20.2,3.3l0,0c-0.5-1-1.5-1.8-2.7-1.8h-13c-1.7,0-3,1.3-3,3v13c0,1.7,1.3,3,3,3h13 c1.7,0,3-1.3,3-3v-13c0-0.4-0.1-0.8-0.3-1.2"
                                    />
                                </symbol>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.sidebar {
    width: 25%;
    height: 100%;
    background-color: #fff;
    margin: 20px 30px;
    border-radius: 12px;
}
.filter {
    height: 90%;
    margin: 10px;
}
.filter-title {
    width: 100%;
    height: 10%;
}
.filter-title h2 {
    margin: 0;
    padding: 0;
}
.price-input {
    display: flex;
    padding: 10px 0px;
    align-items: center;
}
.price-input span {
    padding: 0 10px;
}
.filter-content {
    width: 100%;
    height: 90%;
}
.filter-item {
    width: 100%;
    height: 100%;
}
.filter-item-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.filter-item-content-item {
    height: 10%;
}
.filter-item-content-item input:not([type='range']) {
    width: 10%;
    height: 100%;
}
.filter-item-content-item label {
    width: 90%;
    height: 100%;
}
.checkbox-wrapper-30 {
    display: flex;
    padding: 5px 10px;
}
.checkbox-wrapper-30 label {
    padding-left: 10px;
}
.checkbox-wrapper-30 .checkbox {
    --bg: #fff;
    --brdr: #d1d6ee;
    --brdr-actv: #3db4f2;
    --brdr-hovr: rgb(201,232,255);
    --dur: calc((var(--size, 2) / 2) * 0.6s);
    display: inline-block;
    width: calc(var(--size, 1) * 22px);
    position: relative;
}
.checkbox-wrapper-30 .checkbox:after {
    content: '';
    width: 100%;
    padding-top: 100%;
    display: block;
}
.checkbox-wrapper-30 .checkbox > * {
    position: absolute;
}
.checkbox-wrapper-30 .checkbox input {
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-tap-highlight-color: transparent;
    appearance: none;
    cursor: pointer;
    background-color: var(--bg);
    border-radius: calc(var(--size, 1) * 4px);
    border: calc(var(--newBrdr, var(--size, 1)) * 1px) solid;
    color: var(--newBrdrClr, var(--brdr));
    outline: none;
    margin: 0;
    padding: 0;
    transition: all calc(var(--dur) / 3) linear;
}
.checkbox-wrapper-30 .checkbox input:hover,
.checkbox-wrapper-30 .checkbox input:checked {
    --newBrdr: calc(var(--size, 1) * 2);
}
.checkbox-wrapper-30 .checkbox input:hover {
    --newBrdrClr: var(--brdr-hovr);
}
.checkbox-wrapper-30 .checkbox input:checked {
    --newBrdrClr: var(--brdr-actv);
    transition-delay: calc(var(--dur) / 1.3);
}
.checkbox-wrapper-30 .checkbox input:checked + svg {
    --dashArray: 16 93;
    --dashOffset: 109;
}
.checkbox-wrapper-30 .checkbox svg {
    fill: none;
    left: 0;
    pointer-events: none;
    stroke: var(--stroke, var(--border-active));
    stroke-dasharray: var(--dashArray, 93);
    stroke-dashoffset: var(--dashOffset, 94);
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2px;
    top: 0;
    transition: stroke-dasharray var(--dur), stroke-dashoffset var(--dur);
}
.checkbox-wrapper-30 .checkbox svg,
.checkbox-wrapper-30 .checkbox input {
    display: block;
    height: 100%;
    width: 100%;
}
</style>
