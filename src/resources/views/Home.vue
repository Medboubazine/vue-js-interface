<template>
    <div>
        <HelloWorld :appname="config_constants.APP_NAME" />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "../components/HelloWorld.vue"

export default {
    name: "Home",
    data() {
        return {
            config_constants: this.$store.getters["main/getConfigConstants"],
        }
    },
    components: {
        HelloWorld,
    },
}
</script>
