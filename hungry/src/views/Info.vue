<template>
    <div>
        <div class="Load-wrapper_3h35P-W Load-fixed_1L8WA4k" style="display: none;">
            <div class="Load-loading-main_1LVs9py">
                <div class="Load-loading-icon_2LvpNhI"></div>
            </div>
        </div>
        <div>
            <ul class="main-22cQX">
                <li class="main-3Idiu main-2OSrE">
                    <b>头像</b>
                    <span class="main-nwHdE"><input type="file" accept="image/jpeg,image/jpg,image/png" class="main-1mfZE">
                        <div class="index-18Ili" style="width: 66.912px; height: 66.912px;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg=="></div>
                        <svg class="main-1kNSK">
                            <!-- <use xlink:href="#arrow"></use> -->
                            <svg viewBox="0 0 547 987" id="arrow" width="100%" height="100%">
                                <path fill="#999" fill-rule="evenodd" d="M0 931.973l51.2 54.613 494.933-494.933L51.2.133 0 51.333l440.32 440.32L0 931.973z"></path>
                            </svg>
                        </svg>
                    </span>
                </li>
                <li class="main-3Idiu">
                    <b>用户名</b>
                    <span class="main-2cJz_" v-text="a">
                    </span>
                </li>
            </ul>
            <h2 class="main-1OkSR">账号绑定</h2>
            <ul class="main-22cQX">
                <li class="main-3Idiu">
                    <span>
                        <i class="main-2X7GQ">
                            <svg class="main-oBMZZ">
                                <!-- <use xlink:href="#mobile"></use> -->
                                <svg viewBox="0 0 11 16" id="mobile" width="100%" height="100%">
                                    <path fill="#0097FF" fill-rule="evenodd" d="M1 0h9a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zm.5 1a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5h-8zm4 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                                </svg>
                            </svg>
                        </i>
                        <b>手机</b>
                    </span>
                    <span>
                        <span class="main-2cJz_" v-text="b"></span>
                        <svg class="main-1kNSK">
                            <use xlink:href="#arrow"></use>
                        </svg>
                    </span>
                </li>
            </ul>
            <h2 class="main-1OkSR">安全设置</h2>
            <ul class="main-22cQX">
                <li class="main-3Idiu">
                    <span>登录密码</span>
                    <span class="main-2cJz_">
                        <span class="main-3ED6M">未设置</span>
                        <svg class="main-1kNSK">
                            <use xlink:href="#arrow"></use>
                        </svg>
                    </span>
                </li>
            </ul>
            <button type="button" class="main-aGw6s" @click="test()">退出登录</button>
        </div>
    </div>
</template>
<script>
import "../components/info/html.css";
import "../components/info/html1.css";
export default {
  data() {
    return {
      a: "XXXXX",
      b: localStorage.getItem("username"),
      name:'my'
    }
  },
  methods:{
      test(){
          localStorage.removeItem('username');
          this.$router.push({
          name:this.name
        })
      }
  }
};
</script>
