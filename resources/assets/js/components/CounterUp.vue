<template>
    <ICountUp :delay="delay" :endVal="value" :options="options" />
</template>

<script>
import ICountUp from 'vue-countup-v2';

export default {
    name: 'CounterUp',
    components: {
        ICountUp
    },
    props: {
        delay: {
            default: 500,
        },
        value: {
            required: true
        },
        options: {
            default: function () {
                return {
                    useEasing: true,
                    useGrouping: true,
                    separator: ',',
                    decimal: '.',
                    prefix: '',
                    suffix: ''
                }
            }
        }
    }
}
</script>