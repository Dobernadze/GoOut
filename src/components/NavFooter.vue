<template>
 
 <MDBFooter :text="['center', 'lg-start', 'muted']">
 
    <section
      class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" 
      style="background-color: rgba(0, 128, 128, 1)"
    >
       <div class="me-5 d-none d-lg-block text-white" >
        <span>Мы в социальных сетях</span>
      </div>
      
      <div>
        <a href="" class="me-4 text-reset">
          <MDBIcon
            class="link-success"
            iconStyle="fab"
            icon="facebook-f"
          ></MDBIcon>
        </a>
        <a href="" class="me-4 text-reset">
          <MDBIcon
            class="link-success"
            iconStyle="fab"
            icon="twitter"
          ></MDBIcon>
        </a>
        <a href="" class="me-4 text-reset">
          <MDBIcon
            class="link-success"
            iconStyle="fab"
            icon="google"
          ></MDBIcon>
        </a>
        <a href="" class="me-4 text-reset">
          <MDBIcon
            class="link-success"
            iconStyle="fab"
            icon="instagram"
          ></MDBIcon>
        </a>
        <a href="" class="me-4 text-reset">
          <MDBIcon
            class="link-success"
            iconStyle="fab"
            icon="linkedin"
          ></MDBIcon>
        </a>
        <a href="" class="me-4 text-reset">
          <MDBIcon
            class="link-success"
            iconStyle="fab"
            icon="github"
          ></MDBIcon>
        </a>
      </div>
      
    </section>
   
    <section class="">
      <MDBContainer class="text-center text-md-start mt-5">
       
        <MDBRow class="mt-3">
                  
          <MDBCol md="2" lg="2" xl="2" class="mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4"> Sheber.kz </h6>
            <p>
              <a href="#!" class="text-reset">Условия использования</a>
            </p>
            <p>
              <a href="#!" class="text-reset">О проекте</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Помощь</a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" class="mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase text-success fw-bold mb-4">Контакты</h6>
            <p>
              <i class="fas fa-home link-success"></i> Astana, Kazakhstan, 010000
            </p>
            <p>
              <i class="fas fa-envelope link-success"></i>
              info@anio.com
            </p>
            <p>
              <MDBIcon icon="phone" class="link-success" />
              + 7 747 599 59 70
            </p>
          </MDBCol>
          
        </MDBRow>
        
      </MDBContainer>
    </section>

    <div class="text-center p-4 text-white" style="background-color: rgba(0, 128, 128, 1);">
      © 2022 Anio
      
    </div>
   
  </MDBFooter>
  
  </template>
 

<script>
import { MDBFooter, MDBIcon, MDBRow, MDBCol, MDBContainer } from 'mdb-vue-ui-kit';

export default {
    name: "NavFooter",
    components: {
      MDBFooter,
      MDBIcon,
      MDBRow,
      MDBCol,
      MDBContainer
     
    },
  };
</script>

<style scoped>

</style>