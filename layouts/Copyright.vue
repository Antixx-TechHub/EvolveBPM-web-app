<template>
    <div class="copyright-wrap-area">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-sm-6 col-md-6">
                    <p>&copy; {{currentYear}}. All rights reserved. <a href="https://www.evolvebpm.com/" target="_blank">Evolve BPM</a></p>
                </div>

                <div class="col-lg-6 col-sm-6 col-md-6">
                    <ul class="list">
                        <li><NuxtLink to="/">Privacy</NuxtLink></li>
                        <li><NuxtLink to="/">GDPR</NuxtLink></li>
                        <li><NuxtLink to="/">CASL</NuxtLink></li>
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