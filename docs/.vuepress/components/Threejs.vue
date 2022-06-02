<template>
    <div id="threejs"></div>
</template>

<script>
export default {
    data() {
        return {};
    },
    mounted() {
        this.$nextTick(() => {
            this.initThree(500, 500);
        });
    },
};
</script>

<style lang="scss" scoped>
#threejs {
    height: 500px;
    width: 500px;
}
</style>
