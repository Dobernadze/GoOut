<template>
 
 <MDBFooter :text="['center', 'lg-start', 'muted']">
 
    <section
      class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" 
      style="background-color: rgba(165, 176, 202, 1)"
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
            <h6 class="text-uppercase fw-bold mb-4"> GoOut </h6>
            <p>
              <a href="#!" class="text-reset">license agreement</a>
            </p>
            <p>
              <a href="#!" class="text-reset">About Us</a>
            </p>
            <p>
              <a href="#!" class="text-reset">help</a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" class="mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase text-success fw-bold mb-4">Contacts</h6>
            <p>
              <i class="fas fa-home link-success"></i>  information
            </p>
            <p>
              <i class="fas fa-envelope link-success"></i>
              information
            </p>
            <p>
              <MDBIcon icon="phone" class="link-success" />
              number
            </p>
          </MDBCol>
          
        </MDBRow>
        
      </MDBContainer>
    </section>

    <div class="text-center p-4 text-white" style="background-color: rgba(104, 123, 166, 1);">
      
      
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