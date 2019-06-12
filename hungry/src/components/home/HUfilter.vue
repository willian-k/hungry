<template>
    <div class="home-filter">
        <aside data-v-a5cc4024 class="filter" style="top: 0px;">
            <div data-v-a5cc4024 class="filter-header">
                <a data-v-a5cc4024 href="javascript:" class="filter-nav">
                    <span data-v-a5cc4024>综合排序</span>
                    <svg data-v-a5cc4024 viewBox="0 0 72 32" class="dropdown-icon">
                        <path data-v-a5cc4024 d="M36 32l36-32h-72z"></path>
                    </svg>
                </a>
                <a
                    data-v-a5cc4024
                    href="javascript:"
                    ubt-click="104723"
                    ubt-data-type="1"
                    ubt-data-is_svip="true"
                    class="filter-nav"
                >
                    <span data-v-a5cc4024>距离最近</span>
                </a>
                <a
                    data-v-a5cc4024
                    href="javascript:"
                    ubt-click="104723"
                    ubt-data-type="3"
                    class="filter-nav"
                >
                    <span data-v-a5cc4024>品质联盟</span>
                </a>
                <!---->
                <a data-v-a5cc4024 ubt-click="104725" href="javascript:" class="filter-nav-more">
                    <span data-v-a5cc4024>筛选</span>
                    <svg data-v-a5cc4024 class="filter-nav-more__icon">
                        <use data-v-a5cc4024 xlink:href="#more-filter"></use>
                    </svg>
                </a>
            </div>
            <section data-v-52820b2e data-v-a5cc4024 class="filter-extend filter-sort">
                <ul data-v-52820b2e>
                    <li data-v-52820b2e class>
                        <span data-v-52820b2e>综合排序</span>
                        <img
                            data-v-52820b2e
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII="
                            alt="综合排序"
                            class="selected"
                        >
                    </li>
                    <li data-v-52820b2e class>
                        <span data-v-52820b2e>好评优先</span>
                        <img
                            data-v-52820b2e
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII="
                            alt="好评优先"
                            class="selected"
                        >
                    </li>
                    <li data-v-52820b2e class>
                        <span data-v-52820b2e>销量最高</span>
                        <img
                            data-v-52820b2e
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII="
                            alt="销量最高"
                            class="selected"
                        >
                    </li>
                    <li data-v-52820b2e class>
                        <span data-v-52820b2e>起送价最低</span>
                        <img
                            data-v-52820b2e
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII="
                            alt="起送价最低"
                            class="selected"
                        >
                    </li>
                    <li data-v-52820b2e class>
                        <span data-v-52820b2e>配送最快</span>
                        <img
                            data-v-52820b2e
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII="
                            alt="配送最快"
                            class="selected"
                        >
                    </li>
                    <li data-v-52820b2e class>
                        <span data-v-52820b2e>配送费最低</span>
                        <img
                            data-v-52820b2e
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII="
                            alt="配送费最低"
                            class="selected"
                        >
                    </li>
                    <li data-v-52820b2e class>
                        <span data-v-52820b2e>人均从低到高</span>
                        <img
                            data-v-52820b2e
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII="
                            alt="人均从低到高"
                            class="selected"
                        >
                    </li>
                    <li data-v-52820b2e class>
                        <span data-v-52820b2e>人均从高到低</span>
                        <img
                            data-v-52820b2e
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII="
                            alt="人均从高到低"
                            class="selected"
                        >
                    </li>
                    <li data-v-52820b2e class>
                        <span data-v-52820b2e>通用排序</span>
                        <img
                            data-v-52820b2e
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII="
                            alt="通用排序"
                            class="selected"
                        >
                    </li>
                </ul>
            </section>
            <section data-v-a5cc4024 class="filter-extend">
                <!---->
                <div class="morefilter-3-5h6_0">
                    <dl>
                        <dt>商家服务 (可多选)</dt>
                        <dd>
                            <div class="morefilter-3GXUR_0">
                                <div class="morefilter-l3S4A_0">
                                    <img
                                        class="morefilter-2JyrM_0"
                                        src="https://fuss10.elemecdn.com/b/9b/45d2f6ff0dbeef3a78ef0e4e90abapng.png?imageMogr/format/webp/thumbnail/!24x24r/gravity/Center/crop/24x24/"
                                    >
                                    <span>蜂鸟专送</span>
                                </div>
                            </div>
                            <div class="morefilter-3GXUR_0">
                                <div class="morefilter-l3S4A_0">
                                    <img
                                        class="morefilter-2JyrM_0"
                                        src="https://fuss10.elemecdn.com/6/7c/417ba499b9ef8240b8014a453bf30png.png?imageMogr/format/webp/thumbnail/!24x24r/gravity/Center/crop/24x24/"
                                    >
                                    <span>品牌商家</span>
                                </div>
                            </div>
                            <div class="morefilter-3GXUR_0">
                                <div class="morefilter-l3S4A_0">
                                    <img
                                        class="morefilter-2JyrM_0"
                                        src="https://fuss10.elemecdn.com/c/93/ded991df780906f7471128a226104png.png?imageMogr/format/webp/thumbnail/!24x24r/gravity/Center/crop/24x24/"
                                    >
                                    <span>新店</span>
                                </div>
                            </div>
                            <div class="morefilter-3GXUR_0">
                                <div class="morefilter-l3S4A_0">
                                    <img
                                        class="morefilter-2JyrM_0"
                                        src="https://fuss10.elemecdn.com/2/cd/444d002a94325c5dff004fb3b9505png.png?imageMogr/format/webp/thumbnail/!24x24r/gravity/Center/crop/24x24/"
                                    >
                                    <span>食安保</span>
                                </div>
                            </div>
                            <div class="morefilter-3GXUR_0">
                                <div class="morefilter-l3S4A_0">
                                    <img
                                        class="morefilter-2JyrM_0"
                                        src="https://fuss10.elemecdn.com/3/d4/5668ffc03151826f95b75249bea31png.png?imageMogr/format/webp/thumbnail/!24x24r/gravity/Center/crop/24x24/"
                                    >
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
</template>

<script type="text/javascript">
export default {
    data() {
        return {};
    },
    components: {}
};
</script>

<style lang="scss" scoped>
</style>