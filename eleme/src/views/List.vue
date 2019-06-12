<style>
@import url(../css/list1.css);
@import url(../css/list2.css);
@import url(../css/list3.css);
</style>

<template>
  <div style="padding-top: 40px;">
    <div class="app-Y-gtm_0">
      <div>
        <div>
          <div class="categories-2_Yrt_0">
            <ul class="categories-2omWP_0">
              <li class="categories-22vDu_0 " v-for="(item,index) in shopListNav" v-text="item.name" :key="index" :class="{'categories-1l5jO_0':num==index}" @click="getList(index)"></li>
            </ul>
            <div class="categories-2ylKB_0">
              <svg class="categories-1cTOz_0">
                <use xlink:href="#drop-down"></use>
              </svg>
            </div>
          </div>
          <section data-v-e432bf1c="" class="filter-category">
            <div data-v-e432bf1c="" class="top">
              <h3 data-v-e432bf1c="" class="title">请选择分类</h3>
              <button data-v-e432bf1c="" type="button" class="close"></button>
            </div>
            <aside data-v-e432bf1c="" class="loading">加载中...</aside>
          </section>
        </div>
      </div>
      <!---->
      <div>
        <div>
          <aside data-v-a5cc4024="" class="filter" style="top: 0px;">
            <div data-v-a5cc4024="" class="filter-header">
              <a data-v-a5cc4024="" href="javascript:" class="filter-nav">
                <span data-v-a5cc4024="">综合排序</span>
                <svg data-v-a5cc4024="" viewBox="0 0 72 32" class="dropdown-icon">
                  <path data-v-a5cc4024="" d="M36 32l36-32h-72z"></path>
                </svg>
              </a>
              <a data-v-a5cc4024="" href="javascript:" ubt-click="104723" ubt-data-type="1" ubt-data-is_svip="true" class="filter-nav">
                <span data-v-a5cc4024="">距离最近</span>
              </a>
              <a data-v-a5cc4024="" href="javascript:" ubt-click="104723" ubt-data-type="3" class="filter-nav">
                <span data-v-a5cc4024="">品质联盟</span>
              </a>
              <!---->
              <a data-v-a5cc4024="" ubt-click="104725" href="javascript:" class="filter-nav-more">
                <span data-v-a5cc4024="">筛选</span>
                <svg data-v-a5cc4024="" class="filter-nav-more__icon">
                  <use data-v-a5cc4024="" xlink:href="#more-filter"></use>
                </svg>
              </a>
            </div>
            <section data-v-52820b2e="" data-v-a5cc4024="" class="filter-extend filter-sort">
              <ul data-v-52820b2e="">
                <li data-v-52820b2e="" class="">
                  <span data-v-52820b2e="">综合排序</span><img data-v-52820b2e="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII=" alt="综合排序" class="selected"></li>
                <li data-v-52820b2e="" class="">
                  <span data-v-52820b2e="">好评优先</span><img data-v-52820b2e="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII=" alt="好评优先" class="selected"></li>
                <li data-v-52820b2e="" class="">
                  <span data-v-52820b2e="">销量最高</span><img data-v-52820b2e="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII=" alt="销量最高" class="selected"></li>
                <li data-v-52820b2e="" class="">
                  <span data-v-52820b2e="">起送价最低</span><img data-v-52820b2e="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII=" alt="起送价最低" class="selected"></li>
                <li data-v-52820b2e="" class="">
                  <span data-v-52820b2e="">配送最快</span><img data-v-52820b2e="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII=" alt="配送最快" class="selected"></li>
                <li data-v-52820b2e="" class="">
                  <span data-v-52820b2e="">配送费最低</span><img data-v-52820b2e="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII=" alt="配送费最低" class="selected"></li>
                <li data-v-52820b2e="" class="">
                  <span data-v-52820b2e="">人均从低到高</span><img data-v-52820b2e="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII=" alt="人均从低到高" class="selected"></li>
                <li data-v-52820b2e="" class="">
                  <span data-v-52820b2e="">人均从高到低</span><img data-v-52820b2e="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII=" alt="人均从高到低" class="selected"></li>
                <li data-v-52820b2e="" class="">
                  <span data-v-52820b2e="">通用排序</span><img data-v-52820b2e="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII=" alt="通用排序" class="selected"></li>
              </ul>
            </section>
            <section data-v-a5cc4024="" class="filter-extend">
              <!---->
              <div class="morefilter-3-5h6_0">
                <dl>
                  <dt>商家服务 (可多选)</dt>
                  <dd>
                    <div class="morefilter-3GXUR_0">
                      <div class="morefilter-l3S4A_0"><img class="morefilter-2JyrM_0" src="https://fuss10.elemecdn.com/b/9b/45d2f6ff0dbeef3a78ef0e4e90abapng.png?imageMogr/format/webp/thumbnail/!24x24r/gravity/Center/crop/24x24/">
                        <span>蜂鸟专送</span>
                      </div>
                    </div>
                    <div class="morefilter-3GXUR_0">
                      <div class="morefilter-l3S4A_0"><img class="morefilter-2JyrM_0" src="https://fuss10.elemecdn.com/6/7c/417ba499b9ef8240b8014a453bf30png.png?imageMogr/format/webp/thumbnail/!24x24r/gravity/Center/crop/24x24/">
                        <span>品牌商家</span>
                      </div>
                    </div>
                    <div class="morefilter-3GXUR_0">
                      <div class="morefilter-l3S4A_0"><img class="morefilter-2JyrM_0" src="https://fuss10.elemecdn.com/c/93/ded991df780906f7471128a226104png.png?imageMogr/format/webp/thumbnail/!24x24r/gravity/Center/crop/24x24/">
                        <span>新店</span>
                      </div>
                    </div>
                    <div class="morefilter-3GXUR_0">
                      <div class="morefilter-l3S4A_0"><img class="morefilter-2JyrM_0" src="https://fuss10.elemecdn.com/2/cd/444d002a94325c5dff004fb3b9505png.png?imageMogr/format/webp/thumbnail/!24x24r/gravity/Center/crop/24x24/">
                        <span>食安保</span>
                      </div>
                    </div>
                    <div class="morefilter-3GXUR_0">
                      <div class="morefilter-l3S4A_0"><img class="morefilter-2JyrM_0" src="https://fuss10.elemecdn.com/3/d4/5668ffc03151826f95b75249bea31png.png?imageMogr/format/webp/thumbnail/!24x24r/gravity/Center/crop/24x24/">
                        <span>开发票</span>
                      </div>
                    </div>
                  </dd>
                </dl>
                <dl>
                  <dt>优惠活动 (单选)</dt>
                  <dd>
                    <div class="morefilter-3GXUR_0">
                      <div class="morefilter-l3S4A_0">
                        <!---->
                        <span>首单立减</span>
                      </div>
                    </div>
                    <div class="morefilter-3GXUR_0">
                      <div class="morefilter-l3S4A_0">
                        <!---->
                        <span>门店新客立减</span>
                      </div>
                    </div>
                    <div class="morefilter-3GXUR_0">
                      <div class="morefilter-l3S4A_0">
                        <!---->
                        <span>满减优惠</span>
                      </div>
                    </div>
                    <div class="morefilter-3GXUR_0">
                      <div class="morefilter-l3S4A_0">
                        <!---->
                        <span>下单返红包</span>
                      </div>
                    </div>
                    <div class="morefilter-3GXUR_0">
                      <div class="morefilter-l3S4A_0">
                        <!---->
                        <span>进店领红包</span>
                      </div>
                    </div>
                    <div class="morefilter-3GXUR_0">
                      <div class="morefilter-l3S4A_0">
                        <!---->
                        <span>配送费优惠</span>
                      </div>
                    </div>
                    <div class="morefilter-3GXUR_0">
                      <div class="morefilter-l3S4A_0">
                        <!---->
                        <span>赠品优惠</span>
                      </div>
                    </div>
                    <div class="morefilter-3GXUR_0">
                      <div class="morefilter-l3S4A_0">
                        <!---->
                        <span>特价商品</span>
                      </div>
                    </div>
                    <div class="morefilter-3GXUR_0">
                      <div class="morefilter-l3S4A_0">
                        <!---->
                        <span>品质联盟红包</span>
                      </div>
                    </div>
                  </dd>
                </dl>
                <dl>
                  <dt>人均消费</dt>
                  <dd>
                    <div class="morefilter-3GXUR_0">
                      <div class="morefilter-l3S4A_0">
                        <!---->
                        <span>¥20以下</span>
                      </div>
                    </div>
                    <div class="morefilter-3GXUR_0">
                      <div class="morefilter-l3S4A_0">
                        <!---->
                        <span>¥20 - ¥40</span>
                      </div>
                    </div>
                    <div class="morefilter-3GXUR_0">
                      <div class="morefilter-l3S4A_0">
                        <!---->
                        <span>¥40 - ¥60</span>
                      </div>
                    </div>
                    <div class="morefilter-3GXUR_0">
                      <div class="morefilter-l3S4A_0">
                        <!---->
                        <span>¥60 - ¥80</span>
                      </div>
                    </div>
                    <div class="morefilter-3GXUR_0">
                      <div class="morefilter-l3S4A_0">
                        <!---->
                        <span>¥80 - ¥100</span>
                      </div>
                    </div>
                    <div class="morefilter-3GXUR_0">
                      <div class="morefilter-l3S4A_0">
                        <!---->
                        <span>¥100以上</span>
                      </div>
                    </div>
                  </dd>
                </dl>
              </div>
              <div class="morefilter-2DLty_0">
                <span class="morefilter-39NFb_0">清空</span>
                <span class="morefilter-16ilq_0 morefilter-2Dfps_0">确定</span>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
    <!---->
    <ul class="app-2964B_0" style="margin-top:40px" ref="contentWrapper">

      <li v-for="(item,index) in shopList" :key="index" @click="toDetail(index)">
        <section class="index-container_10L_lQb shop-0">
          <div class="index-shopInfo_1RRTZ0d">
            <div class="logo-container_XoH2Vit_0">
              <div class="logo-main_21aInWJ_0"><img alt="家乐堡·炸鸡汉堡(麻涌店)" class="logo-logo_3S1eSkn_0" :src="getImg(item.restaurant.image_path)">
              </div>
            </div>
            <div class="index-main_N3FfcSz">
              <section class="index-line_2-iYR1A">
                <h3 class="index-shopname_39Y7e3U">
                  <i content="品牌" class="index-premium_39rl0v9">品牌</i>
                  <span v-text="item.restaurant.name"></span>
                </h3>
                <ul class="index-supportWrap_2lTcxr2">
                  <span class="index-omit_1q3Tw0_"></span>
                </ul>
              </section>
              <section class="index-line_2-iYR1A">
                <div class="index-rateWrap_39dWx_g">
                  <div class="Rating-wrapper_TYbDrku_0 index-stars_vPkk9Vv">
                    <div class="Rating-gray_1kpffd5_0"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+">
                    </div>
                    <div class="Rating-actived_GBtiHkB_0" style="width: 94%;"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeDI9IjEwMCUiIHkyPSI1MCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZERTAwIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGQjAwMCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+">
                    </div>
                  </div>
                  <span class="index-rate_WsK58g8" v-text="item.restaurant.rating"></span>
                  <span v-text="`月售${item.restaurant.recent_order_num}单`"></span>
                </div>
                <!---->
              </section>
              <section class="index-line_2-iYR1A">
                <div class="index-moneylimit_2fCq9W5">
                  <span v-text="`￥${item.restaurant.float_minimum_order_amount}起送`"></span>
                  <span v-text="`￥${item.restaurant.float_delivery_fee}配送费`"></span>
                  <!---->
                </div>
                <div class="index-timedistanceWrap_2Dp_kzY">
                  <span class="index-distanceWrap_1EPAlti" v-text="`${(item.restaurant.distance / 1000).toFixed(2)}km`"></span>
                  <span>40分钟</span>
                </div>
              </section>
            </div>
          </div>
          <div class="index-activityWrap_3mo1GyG">
            <!---->
            <section class="index-tagLine_1rJw_lq">
              <!---->
              <span class="mini-tag-tag_3Tm_6bw_0 index-tag_3oprLi5">炸鸡炸串
                <span class="index-tagGhost_1KCu_KY mini-tag-ghost_3DwLU8E_0" style="color: rgb(102, 102, 102); border-color: rgb(221, 221, 221);">炸鸡炸串</span>
              </span>
              <span class="mini-tag-tag_3Tm_6bw_0 index-tag_3oprLi5">支持自取
                <span class="index-tagGhost_1KCu_KY mini-tag-ghost_3DwLU8E_0" style="color: rgba(153, 0, 0, 0); border-color: rgba(76, 0, 0, 0);">支持自取</span>
              </span>
              <!---->
            </section>
            <span><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjI1TDI4MCAwIiBzdHJva2U9IiNDQ0MiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1kYXNoYXJyYXk9IjEiLz48L3N2Zz4=" class="index-dashedline_7B79b3W"></span>
            <section class="index-activities_25AUDsx">
              <div class="index-activityList_1wvwwUY">
                <div class="index-actRow_2f_uNNA" v-for="(it,index) in item.restaurant.activities" :key="index">
                  <span class="index-iconWrap_1xJuKaY">
                    <span class="index-icon_1fBCxBk" :style="{'background-color':'#'+it.icon_color}" v-text="it.icon_name">

                    </span>
                  </span>
                  <span class="index-desc_JLha7Vr" v-text="it.description"></span>
                </div>
                <div class="index-actRow_2f_uNNA" style="display: none;">
                  <span class="index-iconWrap_1xJuKaY">
                    <span class="index-icon_1fBCxBk" style="background-color: rgb(153, 153, 153);">
                      赔
                    </span>
                  </span>
                  <span class="index-desc_JLha7Vr">商家原因导致订单取消，赔付代金券</span>
                </div>
              </div>
              <div class="index-activityBtn_tMk-e1C">
                <span v-text="`${item.restaurant.activities.length}个活动`"></span> <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" class=""></div>
            </section>
          </div>
          <!---->
        </section>
      </li>
    </ul>
    <div class="LoadMore-wrapper_3WFhfHy">
      <!---->
      <!---->
      <!---->
    </div>
    <!---->
    <div class="app-3CD8U_0" style="display: none;"></div>
    <!---->
    <!---->
    <div class="BackTop-wrapper_3XDbcaq app-Csi_i_0" style="display: none;"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOCAxMSkiIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3QgeD0iMi4yMzkiIHdpZHRoPSI5OC41MjIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDkwIDUxLjUgNjIuNDE3KSIgeD0iNi43MTciIHk9IjU3Ljk1OCIgd2lkdGg9Ijg5LjU2NSIgaGVpZ2h0PSI4LjkxNyIgcng9IjQuNDU4Ii8+PHJlY3QgdHJhbnNmb3JtPSJzY2FsZSgtMSAxKSByb3RhdGUoNDUgMCAtMjUuNzU3KSIgeD0iLTYuNjcxIiB5PSI0MC4xNzEiIHdpZHRoPSI3MS42NTIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDQ1IDczLjkzOCA0NC42MykiIHg9IjM4LjExMiIgeT0iNDAuMTcxIiB3aWR0aD0iNzEuNjUyIiBoZWlnaHQ9IjguOTE3IiByeD0iNC40NTgiLz48L2c+PC9zdmc+" class="BackTop-icon_2Js4K94"></div>
    <!---->
  </div>

</template>

<script lang="js">
import Vue from "vue";
export default Vue.extend({
    data() {
    return {
      shopListNav: [],
            shopList: [],
      num : 0,
    };
  },
  created() {
     this.getListNav(() => {});
     this.getList(this.num);
    window.onscroll = e => {
      //   console.log(this.$refs.contentWrapper.offsetHeight - 50);
      //   console.log(window.scrollY);
      if (window.scrollY >= this.$refs.contentWrapper.offsetHeight - 737) {
        if (this.$store.state.loading === 0) {
          this.getList(this.num);
        }
      }
    };
  },
  methods: {
        //获取列表数据
    async getListNav(callback) {
      this.$store.state.loading += 1;
      const data = await this.$axios(
        "https://www.easy-mock.com/mock/5cf69ea7ecc71a7ce6a6ad8a/example/listtitle"
      );
      // console.log(data)
      this.$store.state.loading -= 1;
      this.shopListNav = [...this.shopListNav, ...data.data];
      // console.log(this.shopListNav)
    },
    async getList(index){
      if(this.num!=index){
        this.shopList=[]
      }
      this.num=index,
      console.log(index)
      this.$store.state.loading += 1;
      const list = await this.$axios(
        `https://www.easy-mock.com/mock/5cf69ea7ecc71a7ce6a6ad8a/example/listcontent${index}`
      );
      // console.log(list)
      this.$store.state.loading -= 1;
      this.shopList = [...this.shopList, ...list.data.items];
      console.log(this.shopList)
    },
   getImg(img){
    var houzhui = img.slice(-3);
    // console.log(houzhui)
    if(houzhui!='png'){
      houzhui='jpeg'
    }
    var newImg=`https://fuss10.elemecdn.com/${img.slice(0,1)}/${img.slice(1,3)}/${img.slice(3,32)}${houzhui}.${houzhui}?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/`
    return newImg
  },
      toDetail(index) {
      index = index + 1;
      if (index < 10) {
        index = "00" + index;
      } else if (index < 100) {
        index = "0" + index;
      }
      this.$router.push({ path:'detail/'+index });
    }
  },
})
</script>
