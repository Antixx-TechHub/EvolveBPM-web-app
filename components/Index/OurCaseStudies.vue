<template>
    <div class="works-area ptb-100 gray-bg">
        <div class="container-fluid">
            <div class="section-title">
                <h2>Products</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna.</p>
            </div>

            <CaseStuduesCarousel />
        </div>
    </div>
</template>

<script>
import CaseStuduesCarousel from '../Index/CaseStuduesCarousel'
export default {
    name: 'Products',
    components: {
        CaseStuduesCarousel
    }
}
</script>