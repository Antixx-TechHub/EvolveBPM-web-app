<template>
    <div class="copyright-wrap-area">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-sm-6 col-md-6">
                    <p>&copy; {{currentYear}} Bionix. All rights reserved <a href="https://envytheme.com/" target="_blank">EnvyTheme</a></p>
                </div>

                <div class="col-lg-6 col-sm-6 col-md-6">
                    <ul class="list">
                        <li><NuxtLink to="/contact">Terms & Conditions</NuxtLink></li>
                        <li><NuxtLink to="/contact">Privacy Policy</NuxtLink></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Copyright',
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    }
}
</script>