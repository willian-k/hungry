<style>
 @import '../css/login.css';
</style>

<template>
  <div id="account-login" data-com="pagecommon" data-page-id="100040" data-iswebview="false">
    <header class="navbar">
            <div class="nav-wrap-left">
                <a class="react back" href="javascript:history.back()"><i class="text-icon icon-back"></i></a>
            </div>
                     <span class="nav-header h1">美团网</span>
        <div class="nav-wrap-right">
                <a class="react nav-dropdown-btn" data-com="dropdown" data-target="nav-dropdown">
                    <span class="nav-btn">
                        <i class="text-icon">≋</i>导航
                    </span>
                </a>
        </div>
        <div id="nav-dropdown" class="nav-dropdown">
            <ul>
                <li><a class="react" gaevent="imt/hd/index" href="//i.meituan.com/"><i class="text-icon">⟰</i>
                    <space></space>首页</a></li>
                <li><a class="react" gaevent="imt/hd/account" rel="nofollow" href="//i.meituan.com/account/"><i class="text-icon">⍥</i>
                    <space></space>我的</a></li>
                    <li><a class="react headSearch" gaevent="imt/hd/search" href="//i.meituan.com/s/"><i class="text-icon">⌕</i>
                        <space></space>搜索</a></li>
            </ul>
        </div>
    </header>

<div id="tips"></div>
<div id="login">
        <dl class="list">
            <dd class="nav">
                <ul class="taba taban samfix noslide" data-com="tab">
                        <li class="active" tab-target="normal-login-form" gaevent="imt/login/tab/normal"><a class="react">美团账号登录</a>
                        </li><li tab-target="quick-login-form" gaevent="imt/login/quickBuy/"><a class="react">手机验证登录</a>
                </li><div class="slide" style="left: 20px; width: 355px;"></div></ul>
            </dd>
        </dl>
    <form id="normal-login-form" action="//i.meituan.com/account/login2" autocomplete="off" method="post" style="display:block">
        <dl class="list list-in"><dd class="visibale"><dl>
            <dd class="dd-padding kv-line-r">
                <img class="login-icon" src="https://ms0.meituan.net/touch/img/account/login/icon_login_user@2x.png">
                    <input id="username" class="input-weak J-login-name J-input J-account" type="text" placeholder="账户名/手机号/Email" name="email" value="" required="">
                <div class="to-del J-to-del" style="display: none"></div>
            </dd>
            <ul class="tel-select J-select-user J-select" style="display: none">
            </ul>
            <dd class="dd-padding kv-line-r">
                <img class="login-icon" src="https://ms0.meituan.net/touch/img/account/login/icon_login_password@2x.png">
                <input id="password" class="input-weak J-input" type="password" placeholder="请输入您的密码" name="password" required="">
                <div class="to-del J-to-del" style="display: none"></div>
            </dd>
        </dl></dd></dl>

        <div class="btn-wrapper">
<button type="submit" gaevent="imt/login/normal" class="btn btn-larger btn-block disabled mj_login login-btn">登录</button>
        </div>
        <input type="hidden" name="touchEvents">
        <input type="hidden" name="extraFingerPrint">
        <div class="forget">
            <a class="link" href="https://passport.meituan.com/useraccount/retrievepassword">忘记密码</a>
        </div>
        <input type="hidden" name="requestCode">
        <input type="hidden" name="responseCode">
    </form>
    <form id="quick-login-form" action="https://i.meituan.com/account/mobilelogin2" autocomplete="off" method="post" style="display:none">
        <dl class="list list-in"><dd class="visibale"><dl>
            <dd class="kv-line-r dd-padding" data-com="smsBtn_quick" data-requrl="/account/custom/mobilelogincode2">
                <img class="login-icon icon-align" src="https://ms0.meituan.net/touch/img/account/login/icon_signin_phone@2x.png">
                <input type="tel" name="mobile" id="login-mobile" class="input-weak kv-k J-input J-tel J-login-name" placeholder="请输入手机号" maxlength="11">
                <div class="to-del J-to-del-mobile J-to-del" style="display: none"></div>
                <button id="smsCode" type="button" class="btn btn-weak kv-v btn-captacha" gaevent="imt/buy/quickBuy/send" disabled="disabled">获取验证码</button>
            </dd>
            <ul class="tel-select J-select" style="display: none">
            </ul>
            <dd class="kv-line-r dd-padding">
                <img class="login-icon" src="https://ms0.meituan.net/touch/img/account/login/icon_phone_check_code@2x.png">
                <input class="input-weak kv-k J_input_sms J-input" name="code" type="tel" pattern="[0-9]+" placeholder="请输入短信验证码" disabled="true">
                <div class="to-del J-to-del-code J-to-del" style="display: none"></div>
            </dd>
            <dd class="dd-padding regist-tip">
                <div class="txt">未注册过的手机将自动注册为美团账户</div>
            </dd>
        </dl></dd></dl>
        <div class="btn-wrapper">
<button type="submit" gaevent="imt/login/quick" class="btn btn-larger btn-block mj_login login-btn" disabled="disabled">登录</button>
        </div>
        <input type="hidden" name="touchEvents">
        <input type="hidden" name="extraFingerPrint">
        <div class="unreceived-tip J-not-received">
            <p>仍未收到验证码？拨打<a href="tel:10109777" class="dial">查询热线</a>快速获取吧（9：00-23：00提供服务）</p>
        </div>
        <input type="hidden" name="action">
        <input type="hidden" name="request_code">
        <input type="hidden" name="response_code">
    </form>
</div>
<ul class="subline">
    <li><a href="//i.meituan.com/account/signup">立即注册</a>
    </li><li class="pull-right"><a href="https://passport.meituan.com/useraccount/retrievepassword">找回密码</a>
</li></ul>

<div id="meituan_check"><br><br><br></div>


</div>
</template>
