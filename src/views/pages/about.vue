<template>
  <section class="page-weapper">
    <div class="container">
      <header class="row row-style">
        <div class="row justify-content-md-center">
          <div class="col-sm-4 column-style">
            <div class="card card-style">
              <div class="card-body"><br>
                <h5 class="card-title">{{ $t('about.title1') }}</h5><br>
                <div class="card-text" v-html="$t('about.text1')"/>
              </div>
            </div>
          </div>
          <div class="col-sm-4 column-style">
            <div class="card card-style">
              <div class="card-body"><br>
                <h5 class="card-title">{{ $t('about.title2') }}</h5><br>
                <div class="card-text" v-html="$t('about.text2')"/>
              </div>
            </div>
          </div>
          <div class="col-sm-4 column-style">
            <div class="card card-style">
              <div class="card-body"><br>
                <h5 class="card-title">{{ $t('about.title3') }}</h5><br>
                <div class="card-text" v-html="$t('about.text3')"/>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
    <div class="container2">

      <div class="row justify-content-md-center">
        <div class="col-sm-4 column-style">
          <h5 class="title2">{{ $t('about.title7') }}</h5><br>
        </div>
        <div class="col-sm-4 column-style">
        </div>
      </div>
      <div class="row justify-content-md-center">
        <div class="col-sm-3 column-style text-right">
          <h5 class="title2">{{ $t('about.name1') }}</h5>
          {{ $t('about.desc1') }}
        </div>
        <div class="col-sm-1 column-style text-right">
          <img class="picture" src="@/views/assets/images/perfil/1.png">
        </div>
        <div class="col-sm-1 column-style">
          <img class="picture" src="@/views/assets/images/perfil/2.png">
        </div>
        <div class="col-sm-3 column-style">
          <h5 class="title2">{{ $t('about.name2') }}</h5>

          {{ $t('about.desc2') }}
        </div>
      </div>
      <div class="row justify-content-md-center row-style">
        <div class="col-sm-3 column-style text-right">
          <h5 class="title2">{{ $t('about.name3') }}</h5>
          {{ $t('about.desc3') }}
        </div>
        <div class="col-sm-1 column-style text-right">
          <img class="picture" src="@/views/assets/images/perfil/3.png">
        </div>
        <div class="col-sm-1 column-style">
          <img class="picture" src="@/views/assets/images/perfil/4.png">
        </div>
        <div class="col-sm-3 column-style">
          <h5 class="title2">Ana Maria Alves Barbour</h5>
          {{ $t('about.desc4') }}
        </div>
      </div>
      <div class="row justify-content-md-center row-style">
        <div class="col-sm-3 column-style text-right">
          <h5 class="title2">Cíntia Rodrigues de Almeida</h5>
          {{ $t('about.desc5') }}
        </div>
        <div class="col-sm-1 column-style text-right">
          <img class="picture" src="@/views/assets/images/perfil/5.png">
        </div>
        <div class="col-sm-1 column-style">
          <img class="picture" src="@/views/assets/images/perfil/6.png">
        </div>
        <div class="col-sm-3 column-style">
          <h5 class="title2">Carlos Alberto Noronha</h5>
          {{ $t('about.desc6') }}
        </div>
      </div>
      <div class="row justify-content-md-center row-style">
        <div class="col-sm-3 column-style text-right">
          <h5 class="title2">Cristiane Regina Myiasaka</h5>
          {{ $t('about.desc7') }}
        </div>
        <div class="col-sm-1 column-style text-right">
          <img class="picture" src="@/views/assets/images/perfil/7.png">
        </div>
        <div class="col-sm-1 column-style">
          <img class="picture" src="@/views/assets/images/perfil/8.png">
        </div>
        <div class="col-sm-3 column-style">
          <h5 class="title2">Daniela Leal Musa</h5>
          {{ $t('about.desc8') }}
        </div>
      </div>
      <div class="row justify-content-md-center row-style">
        <div class="col-sm-3 column-style text-right">
          <h5 class="title2">Ester Dantas Reis Nune</h5>
          {{ $t('about.desc9') }}
        </div>
        <div class="col-sm-1 column-style text-right">
          <img class="picture" src="@/views/assets/images/perfil/9.png">
        </div>
        <div class="col-sm-1 column-style">
          <img class="picture" src="@/views/assets/images/perfil/10.png">
        </div>
        <div class="col-sm-3 column-style">
          <h5 class="title2">Denis Taveira de Lima</h5>
          {{ $t('about.desc10') }}
        </div>
      </div>
      <div class="row justify-content-md-center row-style">
        <div class="col-sm-3 column-style text-right">
          <h5 class="title2">Fernando Atique</h5>
          {{ $t('about.desc11') }}
        </div>
        <div class="col-sm-1 column-style text-right">
          <img class="picture" src="@/views/assets/images/perfil/11.png">
        </div>
        <div class="col-sm-1 column-style">
          <img class="picture" src="@/views/assets/images/perfil/12.png">
        </div>
        <div class="col-sm-3 column-style">
          <h5 class="title2">Eduardo de Souza Goiabeira</h5>
          {{ $t('about.desc12') }}
        </div>
      </div>
      <div class="row justify-content-md-center row-style">
        <div class="col-sm-3 column-style text-right">
          <h5 class="title2">Jeffrey Lesser</h5>
          {{ $t('about.desc13') }}
        </div>
        <div class="col-sm-1 column-style text-right">
          <img class="picture" src="@/views/assets/images/perfil/13.png">
        </div>
        <div class="col-sm-1 column-style">
          <img class="picture" src="@/views/assets/images/perfil/14.png">
        </div>
        <div class="col-sm-3 column-style">
          <h5 class="title2">Gabriel Sansigolo</h5>
          {{ $t('about.desc14') }}
        </div>
      </div>
      <div class="row justify-content-md-center row-style">
        <div class="col-sm-3 column-style text-right">
          <h5 class="title2">Luanna M. do Nascimentor</h5>
          {{ $t('about.desc15') }}
        </div>
        <div class="col-sm-1 column-style text-right">
          <img class="picture" src="@/views/assets/images/perfil/15.png">
        </div>
        <div class="col-sm-1 column-style">
          <img class="picture" src="@/views/assets/images/perfil/16.png">
        </div>
        <div class="col-sm-3 column-style">
          <h5 class="title2">Gilberto Ribeiro de Queiroz</h5>
          {{ $t('about.desc16') }}
        </div>
      </div>
      <div class="row justify-content-md-center row-style">
        <div class="col-sm-3 column-style text-right">
          <h5 class="title2">Monaliza Caetano</h5>
          {{ $t('about.desc17') }}
        </div>
        <div class="col-sm-1 column-style text-right">
          <img class="picture" src="@/views/assets/images/perfil/17.png">
        </div>
        <div class="col-sm-1 column-style">
          <img class="picture" src="@/views/assets/images/perfil/18.png">
        </div>
        <div class="col-sm-3 column-style">
          <h5 class="title2">Nandamudi Vijaykumar</h5>
          {{ $t('about.desc18') }}
        </div>
      </div>
      <div class="row justify-content-md-center row-style">
        <div class="col-sm-3 column-style text-right">
          <h5 class="title2">Orlando Guarnier Farias</h5>
          {{ $t('about.desc19') }}
        </div>
        <div class="col-sm-1 column-style text-right">
          <img class="picture" src="@/views/assets/images/perfil/19.png">
        </div>
        <div class="col-sm-1 column-style">
          <img class="picture" src="@/views/assets/images/perfil/20.png">
        </div>
        <div class="col-sm-3 column-style">
          <h5 class="title2">Rodrigo Monteiro Mariano</h5>
          {{ $t('about.desc20') }}
        </div>
      </div>
      <div class="row justify-content-md-center row-style">
        <div class="col-sm-3 column-style text-right">
          <h5 class="title2">Priscila Machado Meireles</h5>
          {{ $t('about.desc21') }}
        </div>
        <div class="col-sm-1 column-style text-right">
          <img class="picture" src="@/views/assets/images/perfil/21.png">
        </div>
        <div class="col-sm-1 column-style">
          <img class="picture" src="@/views/assets/images/perfil/21_1.png">
        </div>
        <div class="col-sm-3 column-style">
          <h5 class="title2">Thomas Rogers</h5>
          {{ $t('about.desc22') }}
        </div>
      </div>
      <div class="row justify-content-md-center row-style">
        <div class="col-sm-3 column-style text-right">
          <h5 class="title2">Vitória Martins Fontes da Silva</h5>
          {{ $t('about.desc23') }}
        </div>
        <div class="col-sm-1 column-style text-right">
          <img class="picture" src="@/views/assets/images/perfil/23.png">
        </div>
        <div class="col-sm-1 column-style">
          <img class="picture" src="@/views/assets/images/perfil/24.png">
        </div>
        <div class="col-sm-3 column-style">
          <h5 class="title2">Wania Mazzarello</h5>
          {{ $t('about.desc24') }}
        </div>
      </div>
    </div>
    <div class="container">
    <div class="row justify-content-md-center">
        <div class="col-sm-15 column-style">
      {{ $t('home.title4') }}
          <br><br>
          <p>FERREIRA, K. R.; FERLA, L. ; QUEIROZ, G. R. ; VIJAYKUMAR, N. L. ; NORONHA, C. A. ; MARIANO, R. M. ; TAVEIRA, D. ; SANSIGOLO, G. ; GUARNIERI, O. ; ROGERS, T. ; PAGE, M. ; ATIQUE, F. ; MUSA, D. ; SANTOS, J. Y. ; MORAIS, D. S. ; MIYASAKA, C. R. ; ALMEIDA, C. R. ; NASCIMENTO, L. G. M. ; DINIZ, J. A. ; SANTOS, M. C. . A Platform for Collaborative Historical Research based on Volunteered Geographical Information. Journal of Information and Data Management - JIDM, (accepted for publication in 2019).
            <a href="http://mtc-m16c.sid.inpe.br/col/sid.inpe.br/mtc-m16c/2017/12.01.20.22/doc/4ferreira_etal.pdf">link</a></p>
        </div>
      </div>
      <div class="row justify-content-md-center">
        <div class="col-sm-15 column-style">
          <br>
          <p>FERREIRA, K. R.; FERLA, L.; QUEIROZ, G. R. de; VIJAYKUMAR, N. L.;NORONHA, C. A.; MARIANO, R. M.; WASSEF, Y.; TAVEIRA, D.; DARDI,I. B.; SANSIGOLO, G.; et al.. Pauliceia 2.0: A Computational Platform for Collaborative Historical Research. In: XVIII Brazilian Symposium on Geoinformatics (GeoInfo 2017), 2017, Salvador. XVIII Brazilian Symposium on Geoinformatics Proceedings, 2017. v. 1. p. 1.
            <a href="http://mtc-m16c.sid.inpe.br/col/sid.inpe.br/mtc-m16c/2017/12.01.20.22/doc/4ferreira_etal.pdf">link</a></p>
        </div>
      </div>
      <br><br>
      <header class="row">
        <div class="row justify-content-md-center">
          <div class="col-sm ">
            {{ $t('about.title4') }}
            <img class="picture" style="left: 30px" src="@/views/assets/images/logos/inpe_transparente.png">
          </div>
          <div class="col-sm ">
            <br>
            <img class="picture2" src="@/views/assets/images/logos/unifesp_verde_fundo_transparente.png">
          </div>
          <div class="col-sm ">
            <br>
            <img class="picture2" src="@/views/assets/images/logos/logo_himaco_fundo_transparente.png">
          </div>
          <div class="col-sm ">
            <br>
            <img class="picture2" src="@/views/assets/images/logos/labhum_2018-crop-u6539.jpg">
          </div>

          <div class="col-sm ">
            {{ $t('about.title5') }}
            <img class="picture2" style="left: 30px" src="@/views/assets/images/logos/logofapesp_transparente.png">
          </div>
          <div class="col-sm ">
            <br>
            <img class="picture" style="left: 30px" src="@/views/assets/images/logos/eu_vt_280.png">
          </div>
          <div class="col-sm ">
            {{ $t('about.title6') }}
            <img class="picture2" style="left: 30px" src="@/views/assets/images/logos/fapesp_fundo_transparente.png">
          </div>
        </div>
      </header>
    </div>

  </section>
</template>

<script>

</script>

<style lang="sass" scoped>
  .page-weapper

    .container
      position: relative
      padding-top: 50px
      padding-bottom: 50px

      .card-style
        border-radius: 20px
        background-color: #ffb364
        min-height: 400px

        .card-text
          font-size: 16px

    .container2
      background-color: #c6c6c6
      padding-bottom: 50px

      .row-style
        padding-top: 50px

      .title2
        position: relative
        padding-top: 20px


    .picture
      position: relative
      top: 20px

    .picture2
      position: relative
      top: 0px
      padding-top: 20px
      width: 400px




</style>
