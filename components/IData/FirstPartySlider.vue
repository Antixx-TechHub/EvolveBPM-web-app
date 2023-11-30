<template>
    <div class="works-area  gray-bg">
        <div class="container-fluid">
            <div class="section-title">
           </div>

            <div class="partner-area ">
                <div class="container-fluid">
                    <CertificatesCarousel />
                </div>
                <div class="container-fluid pt-40">
                    <AwardsCarousel />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CertificatesCarousel from '../Carousels/CertificatesCarousel'
import AwardsCarousel from '../Carousels/AwardsCarousel'
export default {
    name: 'partner',
    components: {
        CertificatesCarousel,
        AwardsCarousel,
    }
}
</script>