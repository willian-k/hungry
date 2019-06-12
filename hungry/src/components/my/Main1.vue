<template>
    <section>
        <router-link :to="c" class="profile-3g0uv">
            <div class="index-18Ili" style="width: 60.096px; height: 60.096px;">
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg=="
                >
            </div>
            <div class="profile-xfCcC">
                <p class="profile-1_mtk" v-text="a"></p>
                <p class="profile-1UP72">
                    <svg fill="#fff">
                        <!-- <use xlink:href="#mobile"></use> -->
                        <svg viewBox="0 0 655 1024" id="mobile" width="100%" height="100%">
                            <path
                                d="M0 122.501v778.998C0 968.946 55.189 1024 123.268 1024h408.824c68.52 0 123.268-54.846 123.268-122.501V122.501C655.36 55.054 600.171 0 532.092 0H123.268C54.748 0 0 54.846 0 122.501zM327.68 942.08c-22.622 0-40.96-18.338-40.96-40.96s18.338-40.96 40.96-40.96 40.96 18.338 40.96 40.96-18.338 40.96-40.96 40.96zM81.92 163.84h491.52V819.2H81.92V163.84z"
                            ></path>
                        </svg>
                    </svg>
                    <span v-text="b"></span>
                </p>
            </div>
            <span class="profile-2XuMq">
                <svg fill="#fff">
                    <!-- <use xlink:href="#arrow-right"></use> -->
                    <svg
                        viewBox="0 0 1024 1024"
                        id="arrow-right"
                        class="icon"
                        width="100%"
                        height="100%"
                    >
                        <path
                            d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"
                            class="selected"
                        ></path>
                    </svg>
                </svg>
            </span>
        </router-link>
    </section>
</template>
<script>
export default {
    data() {
        return {
            a: "登录/注册",
            b: "登录后享受更多特权",
            c: "/login"
        };
    },
    created() {
        if (localStorage.getItem("username")) {
            this.a = localStorage.getItem("username");
            this.b = localStorage.getItem("username");
            this.c = "/info";
        } else {
            this.a = "登录/注册";
            this.b = "登录后享受更多特权";
            this.c = "/login";
        }
    }
};
</script>


