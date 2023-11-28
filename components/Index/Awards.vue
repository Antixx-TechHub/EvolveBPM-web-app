<template>
    <div class="partner-area ptb-100 pt-0">
        <div class="container">
            <AwardsCarousel />
        </div>
    </div>
</template>

<script>
import PartnerCarousel from '../Carousels/PartnerCarousel'
export default {
    name: 'partner',
    components: {
        PartnerCarousel
    }
}
</script>