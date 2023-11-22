<template>
    <div class="value-trade-area">
        <div class="container-fluid">
            <div class="value-trade-slides">
                <carousel
                    :autoplay="true"
                    :loop="true"
                    :autoplayTimeout="7000"
                    :speed="1000"
                    :paginationEnabled="false"
                    :perPageCustom="[[0, 1], [576, 1], [768, 2], [1200, 2], [1400, 3], [1600, 4]]"
                >
                    <slide>
                        <div class="value-trade-card">
                            <img src="~/assets/images/cryptocurrency-home/value-trade/REN.png" alt="image">
                            <p>
                                <b>RenBridges (REN)</b> $0.00475688 
                                <span><i class='bx bx-up-arrow-alt'></i> +0.017%</span>
                            </p>
                        </div>
                    </slide>

                    <slide>
                        <div class="value-trade-card">
                            <img src="~/assets/images/cryptocurrency-home/value-trade/BTC.png" alt="image">
                            <p>
                                <b>Bitcoin (BTC)</b> $0.00475688 
                                <span><i class='bx bx-up-arrow-alt'></i> +0.017%</span>
                            </p>
                        </div>
                    </slide>

                    <slide>
                        <div class="value-trade-card">
                            <img src="~/assets/images/cryptocurrency-home/value-trade/layer.png" alt="image">
                            <p>
                                <b>Yearn (YFI)</b> $0.00475688 
                                <span class="color-two"><i class='bx bx-down-arrow-alt'></i> +0.017%</span>
                            </p>
                        </div>
                    </slide>

                    <slide>
                        <div class="value-trade-card">
                            <img src="~/assets/images/cryptocurrency-home/value-trade/USDT.png" alt="image">
                            <p>
                                <b>Tether (USDT)</b> $0.00475688 
                                <span class="color-two"><i class='bx bx-down-arrow-alt'></i> +0.017%</span>
                            </p>
                        </div>
                    </slide>

                    <slide>
                        <div class="value-trade-card">
                            <img src="~/assets/images/cryptocurrency-home/value-trade/ETH.png" alt="image">
                            <p>
                                <b>Ethereum (ETH)</b> $0.00475688 
                                <span><i class='bx bx-up-arrow-alt'></i> +0.017%</span>
                            </p>
                        </div>
                    </slide>

                    <slide>
                        <div class="value-trade-card">
                            <img src="~/assets/images/cryptocurrency-home/value-trade/SNX.png" alt="image">
                            <p>
                                <b>Synthetix (Snx)</b> $0.00475688 
                                <span><i class='bx bx-up-arrow-alt'></i> +0.017%</span>
                            </p>
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ValueTrade'
}
</script>