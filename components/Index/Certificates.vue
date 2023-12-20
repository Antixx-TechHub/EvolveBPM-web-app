<template>
    <div class="works-area ptb-100 gray-bg">
        <div class="container-fluid">
            <div class="section-title">
                <h2>Certifications / Awards</h2>
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
    name: 'Certificates',
    components: {
        CertificatesCarousel,
        AwardsCarousel,
    }
}
</script>